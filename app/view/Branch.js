Ext.define('omb.view.Branch', {
    extend: 'Ext.List',
    xtype: 'branch',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        items:[
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Our Branches'
            }
        ],
        styleHtmlContent:true,
        itemTpl: '<strong>{Name}</strong><br>{Address}, {City}',
        store: 'Branches',
        grouped: true,
        indexBar: true
    }
});