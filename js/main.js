'use strict';

$(() => {
    console.log('Ready for action ....');
    
    const mainMenu = $('#pageNav');
    const hButton = $('#hButton');
    const pageLinks = $('.pageLink');
    
    let vpIsDesktop = false;
    let mainMenuVisible = false;
    
    setIsDesktop();

    $(window).on('resize', setIsDesktop);
    hButton.on('click', toggleMenu);
    pageLinks.each((index, value) => {
        $(value).on('click', toggleMenu);
    });


    function setIsDesktop() {
        $(window).innerWidth() >= 820 ? vpIsDesktop = true : vpIsDesktop = false;
        toggleMenu();
    }

    function toggleMenu(e) {
        if(e && !vpIsDesktop) {
            mainMenu.slideToggle('fast', 'linear');
            mainMenuVisible = !mainMenuVisible;
        } else {
            vpIsDesktop ? mainMenu.slideDown('fast', 'linear') : mainMenu.slideUp('fast', 'linear');
            mainMenuVisible = !mainMenuVisible;
        }
    }
});