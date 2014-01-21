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
                items:[
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Retail Banking'
                    },
                    {

                    }
                ],
                styleHtmlContent: true,
                scrollable: true,
                style:'margin-bottom:20px',
                html : [
                    '<h1>Deposit Accounts</h1>',
                    'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                    '<h1>Consumer Finance</h1>',
                    'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                    '<h1>Credit Card</h1>',
                    'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                    '<h1>Agricultural /Rural Finance</h1>',
                    'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                    '<h1>e-Banking</h1>',
                    'Bank Asia offers a wide variety of deposit products to meet your financial needs.'
                ].join("")
            },
            {
                items:[
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Corporate Banking'
                    },
                    {

                    }
                ],
                html : '<h1>Consumer Finance</h1>Bank Asia offers a wide variety of deposit products to meet your financial needs.'/*,
                style: 'background-color: #759E60; padding:10px;'*/
            }
        ]
    }
});