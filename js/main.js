var i = document.querySelector('.nav-icon')
var nav = document.querySelector('.nav-list')

i.addEventListener('click', clicar)

function clicar() {
    if (i != document.querySelector('.open')) {
        i.classList.add('open')
        nav.style.display = 'flex'
    } else {
        i.classList.remove('open')
        nav.style.display = 'none'
    }
}

// window.addEventListener('click', (e) => {
//     if(e.target != document.querySelector('.nav-list')) {
//         nav.style.display = 'none'
//     }
// })