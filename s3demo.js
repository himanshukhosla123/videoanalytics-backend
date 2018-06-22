var express=require("express");
var app=express(),
logger=require("morgan"),
bodyParser=require("body-parser"),
errorhandler=require("errorhandler")
mongoose=require("mongoose"),
path=require("path");
var cors = require('cors');
var AWS=require("aws-sdk");

// cors module
app.use(cors())
 

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

// let s3bucket = new AWS.S3({
//       accessKeyId: "AKIAJ7K6CEREAGROMYJQ",
//       secretAccessKey:"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",
//       Bucket: "suspect-tech-facesearch"
// });

let s3bucket = new AWS.S3({
    accessKeyId: "AKIAIQ5CPIODG2HHHPHQ",
    secretAccessKey:"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",
    Bucket: "suspect-demo-bucket"
});


// console.log(s3bucket);

app.get("/fileslist",(req,res)=>{
    // res.send("hello welcome");
    // listbuckets(req,res);
    // createBucket(req,res);
    upload(req,res);
        // listObjects(req,res);
 });


 app.get("/",(req,res)=>{
    res.send("hello welcome");
 });

app.listen(3005);

function listbuckets(req,res){
    s3bucket.listBuckets(function(err, data) {
        if (err) {
           console.log("Error", err);
        } else {
           res.json(data);
        }
     });
}

function upload(req,res){
    var params = { Bucket: 'suspect-demo-bucket', Key: 'a/b/b.txt', Body:'body does not matter' };

s3bucket.putObject(params, function (err, data) {
if (err) {
    console.log("Error creating the folder: ", err);
    } else {
    console.log("Successfully created a folder on S3");
    }
});
}

function listObjects(req,res) {
    s3bucket.listObjects({
        Bucket: 'suspect-demo-bucket',
        MaxKeys: 20,
        Delimiter: '/'
        // Prefix:"/"
    }, (err, data) => {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });
  }

function  createBucket(req,res){
    s3bucket.createBucket({
        Bucket:"suspect-hk-dem00"
    }, function(err, data) {
        if (err) {
           console.log("Error", err);
        } else {
           res.json(data);
        }
     });
  }