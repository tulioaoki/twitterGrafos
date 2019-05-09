// twitterAPI grafos
// created by: arthur12320
// created at: 8/5/19
// last modified at: 8/5/19

//obs:
// using this node package: 
// github: https://github.com/BoyCook/TwitterJSClient
// npm: 

//Callback functions
var error = function (err, response, body) {
    //console.log('ERROR [%s]', err);
};
var success = function (data) {
    //console.log('Data [%s]', data);
};


var Twitter = require('twitter-node-client').Twitter;


const { consumerKey,consumerSecret,accessToken,accessTokenSecret,callBackUrl } = require('./yourData');

var config = {
    consumerKey,
    consumerSecret,
    accessToken,
    accessTokenSecret,
    callBackUrl
}

var twitter = new Twitter(config);

let params = { screen_name: 'ArthurArago1', count: '100'}

//twitter.getUserTimeline({ screen_name: 'ArthurArago1', count: '10'},error,success);
twitter.getFollowersList(params, error, (res)=>{
    console.log('----------');
    console.log('--------------')
    data = JSON.parse(res);
    users = data.users;
    users.forEach(element => {
        console.log(element.name+":"+element.screen_name)
    });
});