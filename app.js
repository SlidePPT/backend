const express = require("express");
const app = express();
const morgan = require('morgan') 
const config = require("./config");
const helmet = require("helmet");
const certification = require("./Route/certification")
var cors = require('cors');


app.use(cors());
app.use(morgan('dev')); //로그
app.use(helmet()) //보안 설정
app.use(express.json()) //json


app.use("/certification",certification); // 라우터 연결



app.listen(process.env.PORT || 4000,()=>{
    console.log("서버 온");
})
