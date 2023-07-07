const divMenu = document.getElementById('menuMobile')
const btnAnimar = document.getElementById('btn-menu')

divMenu.addEventListener('click', animeButton)

function animeButton() {
    divMenu.classList.toggle('abrir')

    btnAnimar.classList.toggle('ativo')
}