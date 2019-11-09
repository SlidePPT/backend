const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{
    req.status(200).json({a:"안녕"})
})

module.exports = router;