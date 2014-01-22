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
                xtype: 'mappage'
            },
            {
                title: 'Info',
                iconCls: 'organize',
                xtype: 'aboutpage'
            }
        ]
    }
});
