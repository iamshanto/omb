Ext.define('omb.controller.Home', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            leftItem: 'accountTaskList'
        },
        control: {
            'leftItem item': {
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
        }
    }
});
