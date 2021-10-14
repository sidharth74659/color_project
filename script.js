// @ts-nocheck
/*
    * Validation for rgba and hsla colors and more
 */
const theme = document.querySelector('.switch-theme')
const color__input = document.querySelector('.search__input');
const search__bar = document.querySelector('.search--bar')


theme.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
})


color__input.addEventListener('input', validateColor)

function validateColor() {
    tiny__color = tinycolor(color__input.value);

    // color__preview.value = tiny__color.toHexString();
    // btn__add.disabled = true;

    if (color__input.value.length >= 3) {
        if (tiny__color.isValid()) {
            if (color__input.value.match(/^[0-9]+$/)) {
                console.log(color__input.value);
            }
            if (color__input.value.includes('hsl')) {
                console.log(color__input.value);
                console.log(tiny__color.toHslString());
            }
            if (color__input.value.includes('rgba')) {
                console.log(color__input.value);
                console.log(tiny__color.toRgbString());
            }
            if (color__input.value.includes('rgb')) {
                console.log(color__input.value);
                console.log(tiny__color.toRgbString());
            }

            search__bar.classList.remove('error');
            search__bar.classList.add('success');
            search__bar.querySelector('small').innerText = "Valid Color";
        }
        else {
            search__bar.classList.remove('success');
            search__bar.classList.add('error');
            search__bar.querySelector('small').innerText = "Invalid Color";
        }
    } else {
        search__bar.classList.remove('success');
        search__bar.classList.remove('error');
    }
}
