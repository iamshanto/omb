Ext.define('omb.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepage',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
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
                                        label: 'Name'
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
                                            Ext.getCmp('homepage').setActiveItem(2);
                                        }

                                    }

                                ]
                            }
                        ]
                    },

                    {
                        xtype: 'button',
                        text: 'Login',
                        align: 'center',
                        handler: function(){
                            Ext.getCmp('homepage').animateActiveItem(2, { type: 'slide'});
                        }
                    }
                ]
            },
            {
                xtype:'panel',
                html: "OK"
            }
        ]
    }
});
