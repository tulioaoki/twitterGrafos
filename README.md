to use it, create a file in the root of the project 
called: yourData.js

inside that file put:

```javascript
module.exports = {  
    "consumerKey": "XXX",  
    "consumerSecret": "XXX",   
    "accessToken": "XXX",  
    "accessTokenSecret": "XXX",  
    "callBackUrl": "XXX"  
}
```

remember to run:

```console
foo@bar:~$ npm i 
```


functions:

```javascript
    getFollowing(screenName,count,next)
```

function to get the following list of a user

| Parameter     | Description   |  
| ------------- | ------------- |  
| screenName | screen name of the twitter user |  
| count | number of things to return|  
|next|callback function|  



```javascript
    getTweetsByLoc(q,lat,long,rad)
```

function to get the following list of a user

| Parameter     | Description   |  
| ------------- | ------------- |  
| q | querry of the search |  
| lat | latitude |  
|long |longitude|  
| rad | radius (ex.: 1km) |

