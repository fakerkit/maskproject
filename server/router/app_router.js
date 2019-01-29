const express = require("express");
const router = express.Router();
const DB = require("../module/db.js");
const db = new DB("hxt");
const jwt = require("../module/jwt.js");
const upload = require("../module/upload.js");
const fs = require("fs");
//获取限时购物的接口
router.get("/limiShop",(req,res)=>{
    db.find("timeShop",{},(err,data)=>{
        res.send(data);
    })
})
//获取热销购物的接口
router.get("/hotShop",(req,res)=>{
    db.find("hotShop",{},(err,data)=>{
        res.send(data);
    })
})
//获取热销购物商品详情的接口
router.get("/hotlistShop/:id",(req,res)=>{
    let id = req.params.id;
    db.find("hotShop",{id},(err,data)=>{
        res.send(data);
    })
})
//获取新品上市购物的接口
router.get("/newShop",(req,res)=>{
    db.find("newShop",{},(err,data)=>{
        res.send(data);
    })
})
//获取母婴购物的接口
// router.get("/motherShop",(req,res)=>{
//     db.find("motherShop",{},(err,data)=>{
//         res.send(data);
//     })
// })
    // db.insertMany("hotShop",[
    //         {
    //             picture:"http://localhost:3000/img/A1.jpg",
    //             name:"【包邮包税】MA...",
    //             newprice:"£20.41",
    //             agoprice:"£30.00",
    //         },{
    //             picture:"http://localhost:3000/img/A2.jpg",
    //             name:"【包邮包税】4罐...",
    //             newprice:"£96.00",
    //             agoprice:"£101.00",
    //         },{
    //             picture:"http://localhost:3000/img/A3.jpg",
    //             name:"【包邮包税】6罐...",
    //             newprice:"£144.00",
    //             agoprice:"£149.00",
    //         },{
    //             picture:"http://localhost:3000/img/A4.jpg",
    //             name:"【包邮包税】6罐...",
    //             newprice:"144.00",
    //             agoprice:"£160.00",
    //         },{
    //             picture:"http://localhost:3000/img/A5.jpg",
    //             name:"【包邮包税】4罐...",
    //             newprice:"£96.00",
    //             agoprice:"£110.00",
    //         },{
    //             picture:"http://localhost:3000/img/A6.jpg",
    //             name:"【包邮包税】MA...",
    //             newprice:"£24.43",
    //             agoprice:"£33.99",
    //         }
    //     ],(err,data)=>{

    // })

module.exports = router;