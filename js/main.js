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
            alterMenButton();
        } else {
            vpIsDesktop ? mainMenu.slideDown('fast', 'linear') : mainMenu.slideUp('fast', 'linear');
            mainMenuVisible = !mainMenuVisible;
        }
    }

    function alterMenButton() {
        const hbeTop = $('#hbeTop');
        const hbeMid = $('#hbeMid');
        const hbeBottom = $('#hbeBottom');

        if(!mainMenuVisible) {
            hbeTop.css({
                'top': '50%',
                'transform': 'translate(-50%, -50%) rotate(-45deg)'
            });

            hbeMid.css({
                'transform': 'translate(-50%, -50%) rotate(45deg)'
            });

            hbeBottom.css('opacity', '0');

        } else {
            hbeTop.css({
                'top': '15%',
                'transform': 'translate(-50%, 0) rotate(0deg)'
            });

            hbeMid.css({
                'transform': 'translate(-50%, -50%) rotate(0deg)'
            });

            hbeBottom.css('opacity', '1');

        }
    }
    
    function showPosition(e = undefined) {
        if(navigator.geolocation) {
            const geoOptions = {
                enableHighAccuracy: true
            } 
            navigator.geolocation.getCurrentPosition(pos => {
                
                alert(`
                    Breitengrad: ${pos.coords.latitude}
                    Längengrad: ${pos.coords.longitude}
                    Höhe: ${pos.coords.altitude}
                    Exaktheit: ${pos.coords.accuracy}
                    Exaktheit Höhe: ${pos.coords.altitudeAccuracy}
                    Richtung: ${pos.coords.heading}
                    Geschwindigkeit: ${pos.coords.speed}
                    Zeitstempel: ${pos.timestamp}
                `);
                position = pos;
                
                var map = L.map('mapTarget', {scrollWheelZoom:false}).setView([position.coords.latitude, position.coords.longitude], 19);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 11,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);

                var markerCurrentPos = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                var markerDestination = L.marker([51.38820041500327, 7.0026361190617825]).addTo(map);

                L.Routing.control({
                    waypoints: [
                      L.latLng(position.coords.latitude, position.coords.longitude),
                      L.latLng(51.38820041500327, 7.0026361190617825)
                    ]
                  }).addTo(map);
                
            }, err => {
                alert(`Sorry! Standortbestimmung nicht möglich! \n ${err.message}`);
            }, geoOptions);
        }
    }

});