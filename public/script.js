// @ts-nocheck
// TODO : seperate column for converting pasted color-names in different formats
// // TODO: for color-names: validateColor(colorName);


console.log("js - loaded");

const form = document.querySelector("#form");
const input = document.querySelector(".input");
const copied = document.querySelector(".copied");
const options = document.querySelector(".options");
const submitBtn = document.querySelector(".submit-btn");
const color_list = document.querySelector(".color-list");


// Step 01 :  loads existing Colors from localStorage or loads none on StartUp
populateList();

// step 01/01: if there's a change in options, load the colors accordinly
options.addEventListener('change', () => {
	// document.querySelectorAll('.color-item input').forEach((el, index) => {
	// 	let [clr] = formatColor(el.value, index)
	// 	el.value = clr
	// })
	populateList()
});

// Step 02 : enable 'add' button if the entered input is a valid color, disable otherwise
input.addEventListener("input", () => submitBtn.disabled = tinycolor(input.value).isValid() ? false : true)

// Step 03 (on-clicking 'add'):  add item on Display and to localStorage
form.addEventListener("submit", addColor);	//avoid duplicate colors

// Step 04 (on-hover and 'click'):  copy colorCode of that item
color_list.addEventListener("click", copyColor)	// Event Delegation


async function addColor(event) {
	event.preventDefault();

	let newColor = input.value.toLowerCase();

	newColor = (`#${newColor}`.includes('##')) ? tinycolor(newColor).toHexString() : newColor.toString();
	
	await fetch('/db/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ newColor: newColor })
	})

	//update the color onto Display
	populateList();

	form.reset();
}


async function populateList() {

	let { unsortedColors: data } = await fetch('/db/read').then(res => res.json()) || [];

	color_list.innerHTML = data.map((color, i) => {

		const [clr, triadClrs] = formatColor(color, i);	// TODO : try invertColor(color) sometime

		return `
  			<li class="color-item" style="background-image: linear-gradient(#cca2a2, #cca2a2), linear-gradient(to right, ${triadClrs[0]}, ${triadClrs[1]}, ${triadClrs[2]});">
				<label style="background-color:${clr};">
					<input type="text" data-index=${i} id ="color${i}" class="color__text" readonly value="${clr}">
				</label>
			</li>
       `;
	}).join("");

}

function formatColor(color, i) {

	const colorFormat = document.querySelector('input[name="colorFormat"]:checked').value;

	const clr = (colorFormat === "default") ? color : tinycolor(color).toString(colorFormat);

	const triadClrs = tinycolor(color).triad().map((t) => t.toHexString());

	return [clr, triadClrs]
}


function invertColor(color) {
	return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6);
}

function copyColor(e) {

	// check if the user clicked one of the children 
	if (!e.target.closest("label")) return;

	const id = e.target.children[0].dataset.index;
	console.log(e.target)

	//Why: e.target.nextSibling Doesn't work ?
	const copyEl = document.querySelector(`#color${id}`);
	copyEl.select();
	document.execCommand("copy");

	// notify-user with a pop-up
	copied.classList.toggle("is-copied");
	setTimeout(() => copied.classList.remove("is-copied"), 2000);

	color_list.classList.add('copy');
	setTimeout(() => color_list.classList.remove('copy'), 250);
}