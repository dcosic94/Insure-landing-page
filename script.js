'use strict'

const hamburger = document.querySelector('.open');
const navigation = document.querySelector('.main-navigation');

const open = () => {
    navigation.classList.toggle('visible');
};

hamburger.addEventListener("click", open);

