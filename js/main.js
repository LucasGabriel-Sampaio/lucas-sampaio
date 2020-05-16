var navBtn = document.querySelector('.nav-btn')
var nav = document.querySelector('.nav-wrapper')
var link = document.querySelector('.nav-link')

navBtn.addEventListener('click', clicar)
link.addEventListener('click', fechar)
nav.addEventListener('click', fechar)

function clicar() {
    if (navBtn != document.querySelector('.open')) {
        navBtn.classList.add('open')
        nav.classList.add('active')
    } else {
        navBtn.classList.remove('open')
        nav.classList.remove('active')
    }
}

function fechar() {
    navBtn.classList.remove('open')
    nav.classList.remove('active')
}
