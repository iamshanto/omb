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
                title: 'Welcome',
                iconCls: 'settings',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'ATM',
                iconCls: 'maps',

                mapMarkers : [], // store all markers
                xtype: 'map',
                mapOptions: {
                    center: new google.maps.LatLng (38.909027,-77.037165),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 17
                },
                initialize: function() {
                    var gMap = this.getMap();

                    // add traffic layer
                    /*var trafficLayer = new google.maps.TrafficLayer();
                    trafficLayer.setMap(gMap);*/

                    // add panoramio layer
                    /*var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
                    panoramioLayer.setMap(gMap);*/

                    // drop map marker
                    var marker = new google.maps.Marker({
                        map: gMap,
                        animation: google.maps.Animation.DROP,
                        position: new google.maps.LatLng (38.909027,-77.037165)
                    });
                },
                clearMarkers: function() {
                    for (var i=0; i<this.mapMarkers.length; i++) {
                        this.mapMarkers[i].setMap(null);
                    }
                    this.mapMarkers = new Array();
                }
            },
            {
                title: 'About',
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
