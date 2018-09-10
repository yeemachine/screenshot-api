// init project
const http = require('http');
const express = require('express')
const phantom = require('phantom');
const webshot = require('webshot');
const cors = require('cors')
const fs = require('fs');
const app = express()
const urlExists = require('url-exists');


app.use(cors())


app.get("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get("/webshot", (req,res) => {
  
  var reqURL = req.query.url; 
  var reqWidth = req.query.width; 
  var reqGoogle = "https://www.google.com/search?q="+reqURL
  
  urlExists('http://'+reqURL, function(err, exists) {
    console.log(exists); // true 
    if (exists === true){ 
    createShot(reqURL,reqWidth);
    }else{
    console.log(reqGoogle)
    createShot(reqGoogle,reqWidth);    
    }
  });
  
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
    
     var renderStream = webshot(url, options);
    
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
  
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
