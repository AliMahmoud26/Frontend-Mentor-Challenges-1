const burgerIcon = document.querySelector('.mobile-logo');
const listItems = document.querySelector('ul');
const closeIcon = document.querySelector('.close-icon .close');


burgerIcon.addEventListener('click', () => {
    listItems.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
    listItems.classList.remove('show');
})