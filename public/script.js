// @ts-nocheck
const theme = document.querySelector('.theme input[type="checkbox"]')
const color__list = document.querySelector('.color__list');
const color__input = document.querySelector('.color__input');
const btn__add = document.querySelector('.btn--add');

color__input.addEventListener('input', (e) => {
    if (e.target.value.length >= 3) {
        if (CSS.supports('color', e.target.value)) {
            color__input.classList.remove('error')
            color__input.classList.add('success')
            btn__add.disabled = false;
        } else {
            color__input.classList.remove('success')
            color__input.classList.add('error')
            btn__add.disabled = true;
        }
    } else {
        color__input.classList.remove('success')
        color__input.classList.remove('error')
        btn__add.disabled = true;
    }
})
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
document.querySelector('.btn--add').addEventListener("click", addColor);	//avoid duplicate colors

async function addColor(event) {
    event.preventDefault();

    let newColor = color__input.value.toLowerCase();

    console.log(CSS.supports('color', newColor))

    // newColor = (`#${newColor}`.includes('##')) ? tinycolor(newColor).toHexString() : newColor.toString();

    // await fetch('/db/create', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ newColor: newColor })
    // })

    //update the color onto Display
    // populateList();

    // form.reset();
}
