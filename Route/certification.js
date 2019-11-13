const express = require("express")
const router = express.Router();
const controller = require("../Controller/certification")
router.post("/make",(req,res)=>{
    console.log("/make 접속")
    controller.make(req,res);
})

router.post("/check",(req,res)=>{
    console.log("/check 접속")
    controller.check(req,res);
})

router.post("/save",(req,res)=>{
    console.log("/save 접속")
    controller.check(req,res);
})


module.exports = router;
