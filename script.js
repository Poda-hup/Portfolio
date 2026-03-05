let menu = document .querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclik = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}
const typed = new Typed('.multiple-text', {
    strings: ['Web Designer','Frontend Developer','UI UX Design','Data Analysis'],
    typeSpeed: 80,
    backSpedd:80,
    backDelay:1200,
    loop:true,
  });