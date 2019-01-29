const express = require("express");
const apirouter = require("./router/app_router.js");
const bodyParser = require("body-parser");
const http = express();
http.listen(3000,()=>{
    console.log("server run")
})
http.use(bodyParser.urlencoded({extended:false}));
http.use("/api",apirouter);


http.all("*",(req,res)=>{
    res.hasHeader("access-control-alown-origin","*")
    res.sendFile(__dirname+req.url);
})