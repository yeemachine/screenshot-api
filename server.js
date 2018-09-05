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
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  


  
  
  function createShot() {
    console.log(width)
     var options = {
       windowSize:{
         width:width
       },
       shotSize: {
        width: 'window', 
        height: 'all'
        },
       quality: 10,
    };
    var renderStream = webshot(req.query.url, options);

    webshot(req.query.url, `public/screenshots/${imagename}.png`, options, function(err){
        // res.json({"image":`https://screenshot-api.glitch.me/screenshots/${imagename}.png`});
    });
    
     // Sending a Base64 version 
 var chunks = [];
  renderStream.on('data', function(chunk) {
      chunks.push(chunk);
      console.log('chunk:', chunk.length);
      });
  renderStream.on('end', function() {
         var result = Buffer.concat(chunks);
         // console.log('final result:', result.length);
         var base64 = 'data:image/jpg;base64,'+result.toString('base64');
         // console.log(result.toString('base64'));   
          res.json({"image":base64});
      });
    
    
  }
  
  var width = req.query.width;
  var imagename = req.query.imagename
  const path = 'public/screenshots/'+imagename+'.png'
  
  createShot();
  // if (fs.existsSync(path)) {
  //   fs.stat(path, function(err, stats){
  //     let modified = stats.mtime
  //     let seconds = (new Date().getTime() - modified) / 1000;
  //     let minutes = seconds/60
  //     let hours = minutes/60
  //     let days = hours/24
  //     console.log(`File modified ${minutes} minutes ago`);
  //     if (days < 1){
  //       res.json({"image":`https://screenshot-api.glitch.me/screenshots/${imagename}.png`,"created":modified});
  //     }else{
  //       createShot()
  //     }  
  //   });
  // }else{
  // createShot()
  // }


  
});




// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
