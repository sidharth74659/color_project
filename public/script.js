// @ts-nocheck

// Helpful links :
// https://stackoverflow.com/questions/6060417/find-out-what-html-elements-are-forcing-the-page-block-section-to-be-wide-tall

const theme = document.querySelector('.theme input[type="checkbox"]')
const color__list = document.querySelector('.color__list');
const color__input = document.querySelector('.color__input');
const btn__add = document.querySelector('.btn--add');
const add__color__section = document.querySelector('.add__color');
const color__preview = document.querySelector('#color__preview');
const color__code = document.querySelector("#color__code")

let tiny__color;
let color__code__choice;

color__code__choice = color__code.value;

color__code.addEventListener('change', (e) => {
    color__code__choice = color__code.value;
    color__input.value = color__input.value ? choiceBasedColor(color__input.value) : ""

})

color__preview.addEventListener('input', (e) => {
    color__input.value = choiceBasedColor(color__preview.value)
    btn__add.disabled = false;
})

color__input.addEventListener('input', validateColor)

btn__add.addEventListener("click", addColor);	//avoid duplicate colors

theme.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-theme')
})

color__list.addEventListener("click", copyColor)


function copyColor(e) {

    // check if the user clicked one of the children 
    if (!e.target.closest("label")) return;

    const id = e.target.children[0].dataset.index;

    //Why: e.target.nextSibling Doesn't work ?
    const copyEl = document.querySelector(`#color${id}`);
    copyEl.select();
    document.execCommand("copy");

    // notify-user with a pop-up
    // copied.classList.toggle("is-copied");
    // setTimeout(() => copied.classList.remove("is-copied"), 2000);

    // color_list.classList.add('copy');
    // setTimeout(() => color_list.classList.remove('copy'), 250);
}

async function addColor(event) {
    event.preventDefault();

    // let nc = tinycolor(color__input.value);
    // console.log(nc.toString());
    
    let newColor = tinycolor('#' + color__input.value);

    // newColor = (newColor.getFormat() === 'hex') ? '#' + color__input.value : newColor.toString()
    // console.log(CSS.supports('color', newColor))
    // newColor = (`#${newColor}`.includes('##')) ? tinycolor(newColor).toHexString() : newColor.toString();
    
    console.log(color__input.value);

    // await fetch('/db/create', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ newColor: newColor })
    // })

    //update the color onto Display
    // populateList();
    color__input.value = '';
    btn__add.disabled = true;

    // form.reset();
}


function choiceBasedColor(color) {
    tiny__color = tinycolor(color);

    switch (color__code__choice) {
        case 'default':
            return color;
        case 'Rgb':
            return tiny__color.toRgbString();
        case 'Hsl':
            return tiny__color.toHslString();
        case 'Hex':
            return tiny__color.toHexString();
    }
}


function validateColor() {
    tiny__color = tinycolor(color__input.value);
    color__preview.value = tiny__color.toHexString();
    btn__add.disabled = true;

    if (color__input.value.length >= 3 && tiny__color.isValid()) {
        btn__add.disabled = false;
    }
    // else {
    //     color__preview.value = '#111111'

    // }
}







