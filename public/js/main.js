const closeBtn = document.querySelector('.closeBtn');
const toggleMenu = document.querySelector('.toggleMenu');
const menu = document.querySelector('.menu');

// info HTML
const previous_icon = document.getElementById('previous_icon');
const next_icon = document.getElementById('next_icon');
const infocard = document.querySelector ('.infocard');



toggleMenu.addEventListener('click',() => {
    menu.classList.add('show')
});

closeBtn.addEventListener('click',() => {
    menu.classList.remove('show')
});

// To move info container towards right

next_icon.addEventListener('click', () => {
    console.log('clicked')
    infocard.scrollLeft += 240;
});

previous_icon.addEventListener('click', () => {
    console.log('clicked')
    infocard.scrollLeft -= 240;
});