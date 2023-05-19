'use strict';

$(() => {
    console.log('Ready for action ....');
    
    // Selektion der Navigationselemente
    const mainMenu = $('#pageNav');
    const hButton = $('#hButton');
    const pageLinks = $('.pageLink');
    
    // Deklaration und Initialisierung erforderlicher Statusvariablen
    let vpIsDesktop = false;
    let mainMenuVisible = false;
    let hbuttonIsX = false;
    let position;
    
    // Initiale Funktionsaufrufe
    setIsDesktop();
    showPosition();

    // Registrierung erforderlicher Event-Listener
    $(window).on('resize', setIsDesktop);
    hButton.on('click', toggleMenu);
    pageLinks.each((index, link) => {
        $(link).on('click', toggleMenu);
    });

    /*
        Funktion setIsDesktop():
        Manipulation der Statusvariablen vpIsDesktop und Aufruf d. Funktion toggle Menu().
    */
    function setIsDesktop() {
        $(window).innerWidth() >= 640 ? vpIsDesktop = true : vpIsDesktop = false;
        toggleMenu();
    }

    /*
        Funktion toggleMenu(e):
        - Steuerung / Animation der Sichtbarkeit der Seitennavigation
        - Manipulation der Statusvariablen mainMenuVisible, sowie hbuttonIsX
        - Aufruf d. Funktion alterMenButton()
    */
    function toggleMenu(e) {
        if(e && !vpIsDesktop) {
            mainMenu.slideToggle('fast', 'linear');
            mainMenuVisible = !mainMenuVisible;
            hbuttonIsX = !hbuttonIsX;
            alterMenButton();
        } else {
            vpIsDesktop ? mainMenu.slideDown('fast', 'linear') : mainMenu.slideUp('fast', 'linear');
            mainMenuVisible = !mainMenuVisible;
            hbuttonIsX = false;
            alterMenButton();
        }
    }

    /*
        Funktion alterMenButton():
        Manipulation der Positionen, Rotationen und Sichtbarkeit der hButton-Kindelemente
    */
    function alterMenButton() {
        const hbeTop = $('#hbeTop');
        const hbeMid = $('#hbeMid');
        const hbeBottom = $('#hbeBottom');

        if(hbuttonIsX) {
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

    /*
        Funktion showPosition(e = undefined):
        - Ermittlung der aktuellen, geographischen Position
        - Ausgabe der ermittelten Daten als alert()
        - Ausgabe der aktuellen Position, des "Ziels" und einer Routenberechnung auf einer Karte (OSM)
    */
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
                
                var map = L.map('mapTarget', {scrollWheelZoom:false}).setView([position.coords.latitude, position.coords.longitude], 11);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
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