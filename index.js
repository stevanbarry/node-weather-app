
let apiKey = '84a00f74c4a2a4f207bd0d26b0ec3fbe';
let city = 'london';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


const request = require('request');

request(url, function (err, response, body) {
    if(err){
        console.log('error:',error);
    }   else {
        console.log('body:', body);
    }
});