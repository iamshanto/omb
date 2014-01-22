Ext.define('omb.view.BillPay', {
    extend: 'Ext.form.Panel',
    xtype: 'BillPay',
    requires: [
        'Ext.TitleBar'
    ],
    config: {

        cls: 'about-page',
        title: 'Fund Transfer',
        instructions: '*Fund require beneficial account.',
        scrollable: true,

        items:[
            {
                xtype: 'fieldset',
                title: 'Bill Pay',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'To Account',
                        options: [
                            {text: 'To Account 1',  value: 'first'},
                            {text: 'To Account 2', value: 'second'},
                            {text: 'To Account 3',  value: 'third'}
                        ]
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Amount'
                    },
                    {
                        xtype: 'button',
                        text: 'Transfer',
                        ui: 'action',
                        handler: function(){
                            Ext.Msg.confirm("Confirmation", "Are you sure?", function(response){
                                if (response == 'yes') {
                                    Ext.Msg.alert("Confirmation", "Transfer complete", function(){
                                        var node = store.getById('bill-pay');
                                        Ext.getCmp('accountTaskList').goToNode(node);
                                    });
                                }
                            });
                        }
                    }
                ]
            }
        ]
    }
});