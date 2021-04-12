const testJJ = {};

testJJ.url = 'https://api.controlport.co.uk/api/1/order';

testJJ.testAPI = () => {
    $.ajax({
        url: `${testJJ.url}`,
        method: 'POST',
        dataType: 'json',
        data: {
            api_key: '626ba2f371ad95f267de7a02c8cc6601'
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