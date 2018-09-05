// server.js
// where your node app starts

// init project
const http = require('http');
const express = require('express')
const phantom = require('phantom');
const webshot = require('webshot');
const cors = require('cors')
const fs = require('fs');
const app = express()



// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`. hi

// http://expressjs.com/en/starter/static-files.html

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(cors())
app.use(express.static('public'))


// http://expressjs.com/en/starter/basic-routing.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get("/webshot", (req,res) => {

  
  function createShot(url, width) {
    url = typeof url !== 'undefined' ? url : 'google.com';
    width = typeof width !== 'undefined' ? width : 1000;
    
     var options = {
       windowSize:{
         width:width
       },
       shotSize: {
        width: 'window', 
        height: 'all'
        },
       quality: 100,
    };
    
     var renderStream = webshot(req.query.url, options);
    
  // Sending a Base64 version 
     var chunks = [];
      renderStream.on('data', function(chunk) {
        chunks.push(chunk);
        console.log('chunk:', chunk.length);
      });
      renderStream.on('end', function() {
         var result = Buffer.concat(chunks);
         var base64 = 'data:image/jpg;base64,'+result.toString('base64');
          res.json({"image":base64});
      });  
  }
  
  createShot(req.query.url,req.query.width);
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
