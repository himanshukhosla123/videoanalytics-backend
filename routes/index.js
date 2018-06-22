var express = require('express');
var connectToDb=require("./../utils/dbconnection");
var router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello");
})

var HOST="";

/* GET users listing. */
router.get("/videoslist",(req,res)=>{
    HOST=req.protocol+"://"+req.get("host")+"/";
    let videos=[`${HOST}a.mp4`,`${HOST}a.mp4`,`${HOST}a.mp4`,`${HOST}a.mp4`];  
   res.status(200).json({"videos":videos});
});
router.get("/imageslist",(req,res)=>{
    HOST=req.protocol+"://"+req.get("host")+"/";
    let images=[`${HOST}1.jpg`,`${HOST}1.jpg`,`${HOST}1.jpg`,`${HOST}1.jpg`];  
   res.status(200).json({"images":images});
});

router.post("/addimage",(req,res)=>{
    // add image on a user in db
});

router.post("/videoupload",(req,res)=>{
    //  add uploaded video details on db
});

router.post("/faceslist",(req,res)=>{
    //get a video's faces    
});

module.exports = router;
