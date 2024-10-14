const header = document.querySelector('header')


window.addEventListener('scroll', () =>{
    header.classList.toggle('sticky', this.window.scrollY > 80)
})

// OPEN MENU

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// SOLUCION 

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('open');
}