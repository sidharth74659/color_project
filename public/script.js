const theme = document.querySelector('.theme input[type="checkbox"]')
const color__list = document.querySelector('.color__list');

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