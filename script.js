// @ts-nocheck
/*
    * Validation for rgba and hsla colors and more

    ! Validation check : 
        * #1324 || abaa : results in hex8 format => op : rgba(17, 51, 34, 0.27)
        * hsl(256, 36%, 25%)[object HTMLLabelElement] => valid color 😠
        * #baddhsl(256, 36%, 25%)ad  => valid color 😠
 */

const theme = document.querySelector('.switch-theme')
const color__input = document.querySelectorAll('.search__input');
const color__preview = document.querySelector('.preview')
const colors = document.querySelectorAll('.color__item');

let search__bar;
let formattedColor;

colors.forEach(color => color.addEventListener("click", function () { navigator.clipboard.writeText(this.querySelector('input').value) }))

theme.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
})

color__input.forEach(category => category.addEventListener('input', validateColor))
// color__input.addEventListener('focus', validateColor);
// color__input.addEventListener('focusout', () => console.log("blue"));


function validateColor(e) {
    input__color = e.target.value;
    search__bar = e.target.closest('.search');

    formattedColor = input__color;
    tiny__color = tinycolor(input__color);
    // btn__add.disabled = true;    //disable the search_button as long as the search__input is not a valid color

    if (input__color.length >= 3) {
        if (tiny__color.isValid()) {
            // console.log('\n');
            // console.log(tiny__color);

            // console.log(tiny__color.getFormat());
            // console.log(tiny__color.toString());


            let format = tiny__color.getFormat();
            if (format.includes('hex8') && format.length == 4) {
                console.log("hex string: " + tiny__color.toHexString());
                formattedColor = input__color
            }

            console.log(input__color);
            if (input__color.match(/^[0-9]+$/)) {
            }
            if (input__color.includes('hsl')) {
                console.log(tiny__color.toHslString());
            }
            if (input__color.includes('rgba')) {
                console.log(tiny__color.toRgbString());
            }
            if (input__color.includes('rgb')) {
                console.log(tiny__color.toRgbString());
            }

            console.log(formattedColor);


            search__bar.classList.remove('error');
            search__bar.classList.add('success');
            search__bar.querySelector('small span').innerText = "Valid Color   " + formattedColor;

        }
        else {
            search__bar.classList.remove('success');
            search__bar.classList.add('error');
            search__bar.querySelector('small span').innerText = "Invalid Color";
        }
    } else {
        search__bar.classList.remove('success');
        search__bar.classList.remove('error');
    }

    color__preview.style.color = formattedColor;

}
