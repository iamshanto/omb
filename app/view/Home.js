var data = {
    text: 'Groceries',
    items: [{
        text: 'Drinks',
        items: [{
            text: 'Water',
            items: [{
                text: 'Sparkling',
                leaf: true,
                items: [
                    {
                        xtypes: 'panel',
                        html: "Some Info"
                    }
                ]
            }, {
                text: 'Still',
                leaf: true
            }]
        }, {
            text: 'Coffee',
            leaf: true
        }, {
            text: 'Espresso',
            leaf: true
        }, {
            text: 'Redbull',
            leaf: true
        }, {
            text: 'Coke',
            leaf: true
        }, {
            text: 'Diet Coke',
            leaf: true
        }]
    }, {
        text: 'Fruit',
        items: [{
            text: 'Bananas',
            leaf: true
        }, {
            text: 'Lemon',
            leaf: true
        }]
    }, {
        text: 'Snacks',
        items: [{
            text: 'Nuts',
            leaf: true
        }, {
            text: 'Pretzels',
            leaf: true
        }, {
            text: 'Wasabi Peas',
            leaf: true
        }]
    }]
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
        'Ext.field.Password'
    ],
    config: {
        layout: {
            type: 'card',
            animation: {
                type: 'pop'
            }
        },
        cls: 'home-page',
        id: 'homepage',
        items: [
            {
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Bank Asia'
                    },
                    {
                        xtype: 'panel',
                        html: 'asd'
                    },

                    {
                        xtype: 'image',
                        src: 'resources/images/bank_asia_logo.gif',
                        height: 70,
                        width: 290
                    },
                    {
                        html: [
                            "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                            "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                            "and refresh to change what's rendered here."
                        ].join("")
                    },
                    {
                        xtype: 'button',
                        text: 'Login',
                        align: 'center',
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
                                            var value = Ext.getCmp('username').getValue();
                                            if (Ext.getCmp('username').getValue() != 'admin') {
                                                Ext.Msg.alert('Error', 'Invalid login', Ext.emptyFn);
                                            } else {
                                                Ext.getCmp('homepage').animateActiveItem(2, { type: 'slide'});
                                            }
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
                title: 'Groceries',
                displayField: 'text',
                store: store,
                id: 'accountTaskList',
                detailCard:{
                    xtype:'panel',
                    styleHtmlContent: true,
                    scrollable: true,
                    html: 'Hey buddy'
                },
                leafitemtap: function(me, list, index, target, record, e, eOpts){
                    console.log(list);
                    console.log(index);
                    console.log(target);
                    console.log(record);
                },
                itemtap: function( me, list, index, target, record, e, eOpts ){
                    console.log(list);
                    console.log(index);
                    console.log(target);
                    console.log(record);
                }
            }
        ]
    }
});
