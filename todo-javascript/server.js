var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.sendfile('./index.html');
});

app.listen('8081',function(){
    console.log('app is running on 8081');
});
