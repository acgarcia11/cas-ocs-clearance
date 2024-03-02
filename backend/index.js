const express = require('express');
const mongoose = require('mongoose');

//connect to database
mongoose.connect(
    "mongodb://localhost:27017/clearance",
);

// initialize the server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use((req, res)=> { 
    console.log(req.headers);  
    res.statusCode=200;  
    res.setHeader('Content-Type', 'text/html');  
    res.end('<html><body><h1>test</h1></body></html>'); 
});

// start server
app.listen(3001, (err) => {
    if (err) { console.log(err); }
    else { console.log("Server listening at port 3001"); }
  });
