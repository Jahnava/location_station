var express = require('express');
var server = express();
var port = process.env.PORT || 8080;
var axios = require('axios');
var apiKey = require('./secrets').geocodeAPIKey;

//typicode localhost:8080/posts/1 connects to the brower
server.get('/posts/:postId', function(request,response){
var posts =request.params.posts;
var postId =request.params.postId;

var url=`http://jsonplaceholder.typicode.com/posts/${postId}`;

axios.get(url)
     .then(function(results){
response.send(results.data);
})
        .catch(function(err){
response.send(err);
});
});


//geolocation   localhost:8080/location/gainesville returns the response for gainesville in browser
server.get('/location/:address', function(request, response){
  var address = request.params.address;
var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
    console.log(url);
    axios.get(url)
        .then(function(results){
response.send(results.data);
})
        .catch(function(err){
 response.send(err);
     });
     });

     server.listen(port,function(){
       console.log('Now listening on prt...', port);

});
