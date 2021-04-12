const testJJ = {};

testJJ.url = 'https://api.controlport.co.uk/api/1/order';
testJJ.fullAPI = '626ba2f371ad95f267de7a02c8cc6601'
testJJ.halfAPI = '626ba2f371ad95f2'
testJJ.timestamp = Math.round((new Date()).getTime() / 1000);

console.log(testJJ.timestamp);

testJJ.testAPI = () => {

    $.ajax({
        url: `${testJJ.url}`,
        method: 'POST',
        dataType: 'json',
        body: {
            'api_key': '1e021228719cf85949beaee6e2c4700c',
            // 'half_api_key': `${testJJ.halfAPI}`,
            // 'message_timestamp': 1618186394,
            // 'security_hash': '75abfe199348058913650c2603d4f5e1'
            'test': 'false',
            'order': {
                'client_ref': '1234-5678',
                'ShippingContact': {
                    "name": "Recipient Name",
                    "email": "recipient@order.com",
                    "phone": "6478811702",
                    "address": "1 Road Street",
                    "city": "Niceville",
                    "country": "United Kingdom",
                    "postcode": "P05 TC0"
                },
                'BillingContact': {
                    "name": "Recipient Name",
                    "email": "recipient@order.com",
                    "phone": "6478811702",
                    "address": "1 Road Street",
                    "city": "Niceville",
                    "country": "United Kingdom",
                    "postcode": "P05 TC0"
                },
                'items': [
                    {
                        "client_ref": "ABC-123",
                        "quantity": "2",
                        "price": "4.00"
                    }
                ]
            }
        }
    }).then((response) => {
        if (response.success == true ) {
            console.log('true');
        }

        if (response.success == false) {
            console.log('false');
        }

        console.log(response);
        console.log(response.status);
    });
}

testJJ.init = () => {
    testJJ.testAPI();
}


$(function () {
    testJJ.init();
});