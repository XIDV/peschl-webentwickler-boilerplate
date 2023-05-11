'use strict';

document.addEventListener('DOMContentLoaded', dcle => {
    console.log('Ready for action ....');
    
    
    const mainMenu = document.querySelector('.pageNav');
    const hButton = document.querySelector('#hButton');

    
    setMenuVisibility();

    window.addEventListener('resize', setMenuVisibility);
    document.querySelector('#hButton').addEventListener('click', toggleMenuVisibility);

    function setMenuVisibility() {
        window.innerWidth >= 820 ? mainMenu.dataset.show = 'true' : mainMenu.dataset.show = 'false';
        window.innerWidth >= 820 ? hButton.style.display = 'none' : hButton.style.display = 'block';
        setClass();
    }
    
    function toggleMenuVisibility() {
        mainMenu.dataset.show === 'true' ? mainMenu.dataset.show = 'false' : mainMenu.dataset.show = 'true';
        setClass();
    }

    function setClass() {
        if(mainMenu.dataset.show === 'true') {
            mainMenu.classList.remove('hide');
        } else if(mainMenu.dataset.show === 'false') {
            mainMenu.classList.add('hide');
        }
    }

});
