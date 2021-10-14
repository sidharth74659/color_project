const theme = document.querySelector('.switch-theme')

theme.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
})