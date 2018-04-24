/**
 *
 * name: context
 * @version : 0.0.1
 * @description: Management behavior of all client content.
 *
 */


(function context() {
    'use strict';


    let PRIVATE = {};

    PRIVATE.createMapMyposition = function() {
        if(!navigator.onLine) {
            console.warn('[!!] INTERNET IS NOT AVAILABLE');
            return;
        }

        if(!navigator.geolocation) {
            console.warn('[!!] YOUR BROWSER DOES NOT SUPPORT GEOLOCATION');
            return;
        }

        let googleMapContent = document.getElementById('googleMapsContent');
        let map = new google.maps.Map(googleMapContent, {
            center: {lat: -34.397, lng: 150.644}, // Sydney
            zoom: 6
        });
        let infoWindow = new google.maps.InfoWindow; // jshint ignore: line
        let timeStart = new Date();

        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('[*] CURRENT POSITION: ', position);
            console.log('[*] TIME TO GET POSITION: ', (new Date() - timeStart) / 1000); // calc how many time to get position

            if(
                !position.coords.latitude ||
                !position.coords.longitude
            ) {
                return;
            }

            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function(error) {
            console.log('[!!] WAS NOT POSSIBLE TO GET YOUR LOCATION');
            console.error(error);
        });
    };


    PRIVATE.createMapMyposition();
})();
