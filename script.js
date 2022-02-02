'use strict'

const hamburger = document.querySelector('.open');
const navigation = document.querySelector('.main-navigation');

const open = () => {
    navigation.classList.toggle('visible');
};

document.addEventListener("click", open);

