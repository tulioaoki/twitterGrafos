// twitterAPI grafos
// created by: arthur12320
// created at: 8/5/19
// last modified at: 8/5/19

//obs:
// using this node package: 
// github: https://github.com/BoyCook/TwitterJSClient
// npm: 





const Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');

const {
    consumerKey,
    consumerSecret,
    accessToken,
    accessTokenSecret,
    callBackUrl
} = require('./yourData');

var config = {
    consumerKey,
    consumerSecret,
    accessToken,
    accessTokenSecret,
    callBackUrl
}




var twitter = new Twitter(config);



//code logic starts here -->

getTweetsByLoc('','-8.054635,-34.887299,1km',printData)

// getFollowing('ArthurArago1','10',(res) => {
//     console.log(res)
// })
    
    
function printData(data){
    console.log(data);
}


function getTweetsByLoc(q,geo,next){
    let params = {
        q: q,
        geocode: geo
    }


    twitter.getCustomApiCall('/search/tweets.json',params,error,(res)=>{
        let response = JSON.parse(res) 
        next(response);
    })

    
}

function getFollowing (screenName,count,next) {
    let params = {
        screen_name: screenName,
        count
    }
    twitter.getCustomApiCall('/friends/list.json',params, error, (res)=>{
        let response = JSON.parse(res);
        friends = userFromRes(response.users)

        next(friends);                
    });
}


//get array of user and return  a simplifed array of user {name,realname,followers,following}
function userFromRes (users){ 
    let cleanedUsers = users.map(user => {
        return{
            'name':user.name,
            'screen_name':user.screen_name,
            'followers':user.followers_count,
            'following':user.friends_count
        }
        
    })
    return cleanedUsers;
}


function error (err, response, body) {
    console.log('err:',err);
};