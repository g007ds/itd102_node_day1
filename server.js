require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

app.get('/',function(req, res){
    res.send('Default route');
});


app.listen(PORT, function(){
    console.log('server is runing no port '+ PORT);

});