/*
 var availableIconCls = [
 'action', 'add', 'arrow_down', 'arrow_left',
 'arrow_right', 'arrow_up', 'compose', 'delete',
 'organize', 'refresh', 'reply', 'search',
 'settings', 'star', 'trash', 'maps', 'locate',
 'home'
 ];
*/

Ext.define('omb.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                /*styleHtmlContent: true,
                scrollable: true,*/
                xtype: 'homepage'
            },
            {
                title: 'Branches',
                iconCls: 'settings',

                xtype: 'branch'
            },
            {
                title: 'ATM',
                iconCls: 'maps',

                mapMarkers : [], // store all markers
                xtype: 'map',


                directionsService: '',
                oldDirections: '',
                currentDirections: '',

                mapOptions: {
                    center: new google.maps.LatLng (23.722183,90.41173),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 13
                },
                initialize: function() {
                    var gMap = this.getMap();

                    /*new google.maps.Marker({
                        map: gMap,
                        animation: google.maps.Animation.DROP,
                        position: new google.maps.LatLng (23.722183,90.41173),
                        icon: 'http://baomb.emicroportal.com/resources/images/marker-1.png'
                    });*/

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

                    directionsDisplay = new google.maps.DirectionsRenderer({
                        'map': gMap,
                        'preserveViewport': false,
                        'draggable': false
                    });

                    this.calRoute();

                },
                calRoute: function(){
                    var start = '23.722183,90.41173';
                    var end = '23.732948,90.417652';
                    var request = {
                        origin:start,
                        destination:end,
                        travelMode: google.maps.DirectionsTravelMode.WALKING
                    };
                    this.directionsService.route(request, function(response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            this.directionsDisplay.setDirections(response);
                        }
                    });
                }
                /*,
                clearMarkers: function() {
                    for (var i=0; i<this.mapMarkers.length; i++) {
                        this.mapMarkers[i].setMap(null);
                    }
                    this.mapMarkers = new Array();
                }*/
            },
            {
                title: 'Info',
                iconCls: 'organize',
                xtype: 'aboutpage'
            }/*,
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }*/
        ]
    }
});
