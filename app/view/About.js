Ext.define('omb.view.About', {
    extend: 'Ext.NavigationView',
    xtype: 'aboutpage',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        cls: 'about-page',
        id: 'aboutPageId',

        items: [{
            title: 'Information',
            items: [
                {
                    xtype: 'button',
                    text: 'Retail Banking',
                    ui: 'action',
                    handler: function () {
                        Ext.getCmp('aboutPageId').push({
                            title: 'Retail Banking',
                            styleHtmlContent: true,
                            scrollable: true,
                            html: [
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
                        });
                    }
                },
                {
                    xtype: 'button',
                    text: 'Corporate Banking',
                    ui: 'action',
                    handler: function () {
                        Ext.getCmp('aboutPageId').push({
                            title: 'Corporate Banking',
                            styleHtmlContent: true,
                            scrollable: true,
                            html: [
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
                        });
                    }
                },
                {
                    xtype: 'button',
                    text: 'FAQ',
                    ui: 'action',
                    handler: function () {
                        Ext.getCmp('aboutPageId').push({
                            title: 'FAQ',
                            styleHtmlContent: true,
                            scrollable: true,
                            html : [
                                '<h1>Question 1?</h1>',
                                'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                                '<h1>Question 2?</h1>',
                                'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                                '<h1>Question 3?</h1>',
                                'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                                '<h1>Question 4?</h1>',
                                'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                                '<h1>Question 5?</h1>',
                                'Bank Asia offers a wide variety of deposit products to meet your financial needs.',
                                '<h1>Question 6?</h1>',
                                'Bank Asia offers a wide variety of deposit products to meet your financial needs.'
                            ].join("")
                        });
                    }
                }
            ]
        }]


    }
});