var data = {
    text: 'Services',
    items: [
        {
            text: 'Your Bank Account',
            items: [
                {
                    text: 'Account No. 1234567890',
                    leaf: true,
                    id: 'bank-account-detail-0'
                },
                {
                    text: 'Account No. 1234567891',
                    leaf: true,
                    id: 'bank-account-detail-1'
                },
                {
                    text: 'Account No. 1234567892',
                    leaf: true,
                    id: 'bank-account-detail-2'
                }
            ]
        },
        {
            text: 'Fund Transfer',
            id: 'fund-transfer',
            items: [
                {
                    text: 'Your own Bank Asia account',

                    items: [
                        {
                            text: 'Account: 1234567891',
                            leaf: true,
                            id: 'fund-transfer-form-0'
                        },
                        {
                            text: 'Account: 1234567892',
                            leaf: true,
                            id: 'fund-transfer-form-1'
                        },
                        {
                            text: 'Account: 1234567893',
                            leaf: true,
                            id: 'fund-transfer-form-2'
                        }
                    ]
                },
                {
                    text: 'Other Bank Asia Account',
                    items: [
                        {
                            text: 'Account: 2234567891',
                            leaf: true,
                            id: 'fund-transfer-form-3'
                        },
                        {
                            text: 'Account: 2234567892',
                            leaf: true,
                            id: 'fund-transfer-form-4'
                        },
                        {
                            text: 'Account: 2234567893',
                            leaf: true,
                            id: 'fund-transfer-form-5'
                        }
                    ]
                },
                {
                    text: 'Other Bank Account',
                    items: [
                        {
                            text: 'Other Bank Account: 2234567891',
                            leaf: true,
                            id: 'fund-transfer-form-6'
                        },
                        {
                            text: 'Other Bank Account: 2234567892',
                            leaf: true,
                            id: 'fund-transfer-form-7'
                        },
                        {
                            text: 'Other Bank Account: 2234567893',
                            leaf: true,
                            id: 'fund-transfer-form-8'
                        }
                    ]
                },
                {
                    text: 'To Credit Card',
                    items: [
                        {
                            text: 'Visa - 4444424444444440',
                            leaf: true,
                            id: 'fund-transfer-card-form-0'
                        },
                        {
                            text: 'MasterCard - 4061724061724061',
                            leaf: true,
                            id: 'fund-transfer-card-form-1'
                        },
                        {
                            text: 'Discover - 6011016011016011',
                            leaf: true,
                            id: 'fund-transfer-card-form-2'
                        }
                    ]
                }
            ]
        },
        {
            text: 'Bill Pay',
            id: 'bill-pay',
            items: [
                {
                    text: 'Mobile',
                    items: [
                        {
                            text: 'My Robi prepaid - 0181X XXX XXX',
                            leaf: true,
                            id: 'bill-pay-form-0'
                        },
                        {
                            text: 'My GP Post paid - 0171X XXX XXX',
                            leaf: true,
                            id: 'bill-pay-form-1'
                        }
                    ]
                },
                {
                    text: 'Internet',
                    items: [
                        {
                            text: 'Quebee - 0123456',
                            leaf: true,
                            id: 'bill-pay-form-2'
                        },
                        {
                            text: 'Zoom Ultra',
                            leaf: true,
                            id: 'bill-pay-form-3'
                        }
                    ]
                },
                {
                    text: 'Electricity',
                    items: [
                        {
                            text: 'Home',
                            leaf: true,
                            id: 'bill-pay-form-4'
                        },
                        {
                            text: 'Office',
                            leaf: true,
                            id: 'bill-pay-form-5'
                        }
                    ]
                }
            ]
        }
    ]
};

Ext.define('ListItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'text',
            type: 'string'
        }]
    }
});

var store = Ext.create('Ext.data.TreeStore', {
    model: 'ListItem',
    defaultRootProperty: 'items',
    root: data
});

Ext.define('omb.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepage',
    requires: [
        'Ext.TitleBar',
        'Ext.Map',
        'Ext.Img',
        'Ext.dataview.NestedList',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Select',
        'Ext.field.Number'
    ],
    config: {
        layout: {
            type: 'card',
            animation: {
                type: 'pop'
            }
        },
        id: 'homepage',
        items: [
            {
                cls: 'home-page',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Bank Asia'
                    },
                    {
                        xtype: 'panel',
                        html: '<br><br>'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/bank_asia_logo.gif',
                        height: 70,
                        width: 290,
                        style: 'margin:auto'
                    },
                    {
                        html: [
                            "<br>",
                            "Welcome to Bank Asia <br>online banking service.",
                            "<br><br>"
                        ].join("")
                    },
                    {
                        xtype: 'button',
                        text: 'Login',
                        style: 'margin:auto',
                        width: '50%',
                        ui: 'action',
                        handler: function(){
                            Ext.getCmp('homepage').setActiveItem(1);
                        }
                    }
                ]
            },
            {
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Bank Asia'
                    },
                    {
                        items: [
                            {
                                xtype: 'fieldset',
                                title: 'Your Account Info',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name: 'name',
                                        label: 'Name',
                                        id: 'username'
                                    },
                                    {
                                        xtype: 'passwordfield',
                                        name: 'password',
                                        label: 'Password'
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Login',
                                        label: 'Login',
                                        ui: 'action',
                                        handler: function(){
                                            if (Ext.getCmp('username').getValue() != 'admin') {
                                                Ext.Msg.alert('Error', 'Invalid login', Ext.emptyFn);
                                            } else {
                                                Ext.getCmp('homepage').setActiveItem(2);
                                            }
                                            //Ext.getCmp('homepage').animateActiveItem(2, { type: 'slide'});
                                        }

                                    }

                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'nestedlist',
                title: 'Services',
                displayField: 'text',
                store: store,
                id: 'accountTaskList',
                detailCard:{
                    xtype:'panel',
                    styleHtmlContent: true,
                    scrollable: true,
                    html: 'Hey buddy'
                },
                listeners: {
                    //This handler is require only if you want to update the detail card, etc.
                    itemtap: function(nestedList, list, index, element, wall) {

                        console.log(index);
                        console.log(list);
                        console.log(wall);
                    },
                    leafitemtap: function(me, list, index, target, record, e, eOpts){

                        switch (record.internalId) {
                            case 'bank-account-detail-0':
                            case 'bank-account-detail-1':
                            case 'bank-account-detail-2':
                                detailView = Ext.create('omb.view.AccountDetail');
                                break;

                            case 'fund-transfer-form-0':
                            case 'fund-transfer-form-1':
                            case 'fund-transfer-form-2':
                            case 'fund-transfer-form-3':
                            case 'fund-transfer-form-4':
                            case 'fund-transfer-form-5':
                            case 'fund-transfer-form-6':
                            case 'fund-transfer-form-7':
                            case 'fund-transfer-form-8':
                            case 'fund-transfer-card-form-0':
                            case 'fund-transfer-card-form-1':
                            case 'fund-transfer-card-form-2':
                                detailView = Ext.create('omb.view.FundTransfer');
                                break;

                            case 'bill-pay-form-0':
                            case 'bill-pay-form-1':
                            case 'bill-pay-form-2':
                            case 'bill-pay-form-3':
                            case 'bill-pay-form-4':
                            case 'bill-pay-form-5':
                                detailView = Ext.create('omb.view.BillPay');
                                break;
                        }

                        if (typeof(detailView) != 'undefined'){
                            this.setDetailCard(detailView);
                        }

                        /*this.getDetailCard().setHtml(detailView.getHtml());

                        var recordData = record.getData();*/
                        /*detailView.setData(recordData);
                        Ext.Viewport.add(detailView);*/
                    }
                }
            }
        ]
    }
});
