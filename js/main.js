'use strict';

$(() => {
    console.log('Ready for action ....');
    
    const mainMenu = $('#pageNav');
    const hButton = $('#hButton');
    const pageLinks = $('.pageLink');
    
    let vpIsDesktop = false;
    let mainMenuVisible = false;
    let position;
    
    setIsDesktop();
    showPosition();

    $(window).on('resize', setIsDesktop);
    
    hButton.on('click', toggleMenu);
    
    pageLinks.each((index, value) => {
        $(value).on('click', toggleMenu);
    });

    $('#showOnMap').on('click', showPosition)
    $('#closeMapDialog').on('click', () => {
        document.querySelector('#mapContainer').close();
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
    
    function showPosition(e = undefined) {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                if(e) {
                    
                    document.querySelector('#mapContainer').showModal();
                } else {
                    // alert(`
                    //     Breitengrad: ${pos.coords.latitude}
                    //     Längengrad: ${pos.coords.longitude}
                    //     Höhe: ${pos.coords.altitude}
                    //     Exaktheit: ${pos.coords.accuracy}
                    //     Exaktheit Höhe: ${pos.coords.altitudeAccuracy}
                    //     Richtung: ${pos.coords.heading}
                    //     Geschwindigkeit: ${pos.coords.speed}
                    //     Zeitstempel: ${pos.timestamp}
                    // `);
                    position = pos;
                }
            }, err => {
                alert(`Sorry! Standortbestimmung nicht möglich! \n ${err.message}`);
            });
        }
    }

});