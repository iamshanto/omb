Ext.define('omb.view.About', {
    extend: 'Ext.Carousel',
    xtype: 'aboutpage',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        cls: 'about-page',
        id: 'aboutPageId',
        items: [
            {
                html : 'Item 1',
                style: 'background-color: #5E99CC; padding:10px;'
            },
            {
                html : 'Item 2',
                style: 'background-color: #759E60; padding:10px;'
            },
            {
                html : 'Item 3',
                style: 'background-color: #759E60; padding:10px;'
            }
        ]
    }
});