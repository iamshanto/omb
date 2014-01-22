Ext.define('omb.view.Map', {
    extend: 'Ext.Map',
    useCurrentLocation: true,
    xtype: 'mappage',
    requires: [
        'Ext.TitleBar'
    ],

    directionsService: '',
    oldDirections: '',
    currentDirections: '',
    directionsDisplay: '',

    config: {
        cls: 'about-page',
        id: 'mapPageId',

        mapOptions: {
            center: new google.maps.LatLng (23.722183,90.41173),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 13
        }
    },

    initialize: function() {

        var gMap = this.getMap();

        // drop map marker
        var iconBase = 'http://baomb.emicroportal.com/resources/images/logo-small.gif';
        new google.maps.Marker({
            map: gMap,
            //animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng (23.732948,90.417652),
            icon: iconBase
        });

        new google.maps.Marker({
            map: gMap,
            //animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng (23.724776,90.430956),
            icon: iconBase
        });

        new google.maps.Marker({
            map: gMap,
            //animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng (23.751411,90.445719),
            icon: iconBase
        });

        new google.maps.Marker({
            map: gMap,
            //animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng (23.738133,90.397139),
            icon: iconBase
        });

        this.directionsService = new google.maps.DirectionsService();
        this.oldDirections = [];
        this.currentDirections = null;

        this.directionsDisplay = new google.maps.DirectionsRenderer({
            'map': gMap,
            'preserveViewport': false,
            'draggable': false
        });

        this.calRoute();

    },
    calRoute: function(){

        var directionsDisplay = this.directionsDisplay;
        var start = '23.722183,90.41173';
        var end = '23.732948,90.417652';
        var request = {
            origin:start,
            destination:end,
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };

        this.directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });

        var gMap = this.getMap();
        setTimeout(function(){
            gMap.setZoom(13);
        }, 2000);
    }
});