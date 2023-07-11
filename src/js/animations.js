const divMenu = document.getElementById('menuMobile')
const btnAnimar = document.getElementById('btn-menu')

divMenu.addEventListener('click', animeButton)

function animeButton() {
    divMenu.classList.toggle('abrir')

    btnAnimar.classList.toggle('ativo')

    var visible = document.getElementsByClassName('ativo');

    if (!visible) {
        document.getElementById('produto').style.visibility = 'visible';
        document.getElementById('sobre').style.visibility = 'visible';
    }
    else {
        document.getElementById('produto').style.visibility = 'hidden';
        document.getElementById('sobre').style.visibility = 'hidden';
    }
}