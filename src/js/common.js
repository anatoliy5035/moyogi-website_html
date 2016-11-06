$(document).ready(function() {


});


var Map =

{
    init: function() {
        if ( $( "#map" ).length ) {
            Map.initMap();
        }
    },

    initMap: function  () {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: {lat: -34.397, lng: 150.644},
            scrollwheel: false
        });

    },

}

Map.init();
