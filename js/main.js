'use strict';

document.addEventListener('DOMContentLoaded', dcle => {
    console.log('Ready for action ....');

    document.querySelector('#hButton').addEventListener('click', e => {
        const menu = document.querySelector('nav');
        if(menu.dataset.visible === 'false') {
            // menu.classList.remove('hidden');
            menu.style.height = '100%';
            menu.dataset.visible = 'true'
        } else {
            // menu.classList.add('hidden');
            menu.style.height = '0';
            menu.dataset.visible = 'false';
        }
    });

});