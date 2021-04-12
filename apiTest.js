const testJJ = {};

testJJ.url = 'https://api.controlport.co.uk/api/1/order';
testJJ.fullAPI = '626ba2f371ad95f267de7a02c8cc6601'
testJJ.halfAPI = '626ba2f371ad95f2'
testJJ.timestamp = Math.round((new Date()).getTime() / 1000);

console.log(testJJ.timestamp);

var md5 = require('md5');
console.log(md5(testJJ.timestamp + testJJ.fullAPI));

testJJ.testAPI = () => {

    $.ajax({
        url: `${testJJ.url}`,
        method: 'POST',
        dataType: 'json',
        data: {
            half_api_key: `${testJJ.halfAPI}`,
            message_timestamp: 1618186394,
            security_hash: '75abfe199348058913650c2603d4f5e1'
        }
    }).then((response) => {
        if (response.success = true ) {
            console.log('true');
        }

        if (response.success = false) {
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