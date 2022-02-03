const closeBtn = document.querySelector('.closeBtn');
const toggleMenu = document.querySelector('.toggleMenu');
const menu = document.querySelector('.menu');


toggleMenu.addEventListener('click',() => {
    menu.classList.add('show')
});

closeBtn.addEventListener('click',() => {
    menu.classList.remove('show')
});