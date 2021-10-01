// @ts-nocheck
// TODO : seperate column for converting pasted color-names in different formats
// TODO: for color-names: validateColor(colorName);


console.log("js - loaded");

const form = document.querySelector("#form");
const input = document.querySelector(".input");
const copied = document.querySelector(".copied");
const options = document.querySelector(".options");
const submitBtn = document.querySelector(".submit-btn");
const color_list = document.querySelector(".color-list");

const colorArray = JSON.parse(localStorage.getItem("colorArray")) || [];


// Step 01 :  loads existing Colors from localStorage or loads none on StartUp
populateList();

// step 01/01: if there's a change in options, load the colors accordinly
options.addEventListener('change', populateList);

// Step 02 : enable 'add' button if the entered input is a valid color, disable otherwise
input.addEventListener("input", () => submitBtn.disabled = tinycolor(input.value).isValid() ? false : true)

// Step 03 (on-clicking 'add'):  add item on Display and to localStorage
form.addEventListener("submit", addColor);	//avoid duplicate colors

// Step 04 (on-hover and 'click'):  copy colorCode of that item
color_list.addEventListener("click", copyColor)	// Event Delegation


function addColor(event) {
	event.preventDefault();

	// let rgbFormat = el.style.backgroundColor;
	// let rgbFormat =tinycolor(input.value).toRgbString();

	let newColor = input.value.toLowerCase();

	newColor = (!`#${newColor}`.includes('##')) ? tinycolor(newColor).toHexString() : newColor;

	// check if the current array contains new color
	if (!colorArray.includes(newColor)) {

		// if no,add the color
		colorArray.push(newColor);

		// update localStorage with latest color
		localStorage.setItem("colorArray", JSON.stringify(colorArray));

		//update the color onto Display
		populateList();
	}

	form.reset();
}


function populateList() {

	color_list.innerHTML = colorArray.map((color, i) => {
		const [clr, triadClr] = formatColor(color);	// TODO : try invertColor(color) sometime
console.log(clr);
		return `
  			<li class="color-item" style="background-image: linear-gradient(#cca2a2, #cca2a2), linear-gradient(to right, ${triadClr[0]}, ${triadClr[1]}, ${triadClr[2]});">
				<label for="${i}"  style="background-color:${clr};">
					<input type="text" data-index=${i} id ="color${i}" class="color__text" readonly value="${clr}">
				</label>
			</li>
       `;
	}).join("");
}

function formatColor(color) {
	const colorFormat = document.querySelector('input[name="colorFormat"]:checked').value
	let clr = (colorFormat === "default") ? color : tinycolor(color).toString(colorFormat);
	
	const triadClr = tinycolor(color).triad().map((t) => t.toHexString());

	return [clr, triadClr]
}


function invertColor(color) {
	return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6);
}

function copyColor(e) {

	// check if the user clicked one of the children 
	if (!e.target.closest("label")) return;

	const id = e.target.children[0].dataset.index;

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







/*

// * Found in stackoverflow https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript#answer-56768137:~:text=function%3A-,function%20getUniqueListBy(arr%2C%20key)%20%7B,%7D

function getUniqueListBy(arr, key) {
	return [...new Map(arr.map((item) => [item[key], item])).values()];
}

// ? Links :  https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

// ? Links :  https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

// ? Links :  https://stackoverflow.com/questions/32673760/how-can-i-know-if-a-given-string-is-hex-rgb-rgba-or-hsl-color-using-javascript/32685393

// ? Links :  https://regex101.com/r/yF0uY1/8

// ? Links :   https://regex101.com/r/yF0uY1/9

// ? Links :  https://www.w3.org/wiki/CSS/Properties/color/keywords

// ? Links : regex check for colors found at https://regexr.com/39cgj

let str = '';
let arr = [];
document.querySelectorAll('tbody tr td').forEach(i => {
if(!i.classList.value) { str += " " + (i.textContent.replace('\n', '').trim());
arr.push(i.textContent.replace('\n', '').trim())}
});
console.log(str)
console.log(arr)

*/