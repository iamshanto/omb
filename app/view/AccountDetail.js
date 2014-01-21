Ext.define('omb.view.AccountDetail', {
    extend: 'Ext.Panel',
    xtype: 'AccountDetail',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        cls: 'about-page',
        //id: 'OwnAccountTransferFormId',
        scrollable: true,
        items: [
            {
                html : [
                    '<table>',
                    '<tr><th>Date</th><th>Description</th><th>Deposit</th><th>Withdraw</th></tr>',
                    '<tr><td>1 Jan 2014</td><td>INW CLG DHAKA REGULAR-1</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>CASH</td><td>5000</td><td></td></tr>',
                    '<tr><td>1 Jan 2014</td><td>MF DEC-2013</td><td></td><td>500</td></tr>',
                    '<tr><td>2 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>3 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>5 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><td>1 Jan 2014</td><td>ATM Withdraw</td><td></td><td>2000</td></tr>',
                    '<tr><th class="text-alignright" colspan="4">150000</th></tr>',
                    '</table>'
                ].join("")
            }
        ]
    }
});