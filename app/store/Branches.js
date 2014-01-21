Ext.define('omb.store.Branches', {
    extend: 'Ext.data.Store',

    config: {
        model: 'omb.model.Branch',
        grouper: {
            groupFn: function(record) {
                return record.get('City')[0];
            }
        },
        data:[
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 1', Name: 'Aglabazar Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 9', Name: 'Ashulia Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 4', Name: 'Ashulia SME/Agriculture Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 4', Name: 'Baligaon SME/Agriculture Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 4', Name: 'Bashundhara Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 4', Name: 'Bhairab Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 4', Name: 'Corporate Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 4', Name: 'Dakshinkhan Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 4', Name: 'Dhanmondi Branch'},
            {'City': 'Dhaka', 'Area': 'Lalbag', Address: 'Address 4', Name: 'Dhonia Branch'},

            {'City': 'Chittagong', 'Area': 'Lalbag', Address: 'Address 6', Name: 'Agrabad Branch'},
            {'City': 'Chittagong', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Anderkilla Branch'},
            {'City': 'Chittagong', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Bahadderhat Branch'},
            {'City': 'Chittagong', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Bhatiary Branch'},
            {'City': 'Chittagong', 'Area': 'Lalbag', Address: 'Address 7', Name: 'CDA Avenue Branch'},
            {'City': 'Chittagong', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Chatkhil Branch'},
            {'City': 'Chittagong', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Comilla Branch'},
            {'City': 'Chittagong', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Cox\'s Bazar Branch'},

            {'City': 'Rajshahi', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Bogra Branch'},
            {'City': 'Rajshahi', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Ishwardi Branch'},
            {'City': 'Rajshahi', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Mohadevpur Branch'},
            {'City': 'Rajshahi', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Rajshahi Branch'},

            {'City': 'Sylhet', 'Area': 'Lalbag', Address: 'Address 8', Name: 'Beani Bazar Branch'},
            {'City': 'Sylhet', 'Area': 'Lalbag', Address: 'Address 8', Name: 'Jagannathpur Branch'},
            {'City': 'Sylhet', 'Area': 'Lalbag', Address: 'Address 8', Name: 'Laldighirpar Branch'},
            {'City': 'Sylhet', 'Area': 'Lalbag', Address: 'Address 8', Name: 'Moulavi Bazar Branch'},
            {'City': 'Sylhet', 'Area': 'Lalbag', Address: 'Address 8', Name: 'Sylhet Main Branch'},
            {'City': 'Sylhet', 'Area': 'Lalbag', Address: 'Address 8', Name: 'Sylhet Uposhohor Branch'},

            {'City': 'Khulna', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Jessore Branch'},
            {'City': 'Khulna', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Khulna Branch'},

            {'City': 'Barisal', 'Area': 'Lalbag', Address: 'Address 7', Name: 'Barisal Branch'},

        ]
    }
});