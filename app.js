const express = require("express");
const app = express();
const morgan = require('morgan') 
const config = require("./config");
const cors =require("cors");
const helmet =require("helmet");

const router = require("./Route/index")

app.listen(process.env.PORT || config.port,()=>{
    console.log("서버 온");
})


app.use(morgan(config.environment)); //로그
app.use(cors()) //cors 설정
app.use(helmet()) //보안 설정
app.use(express.json()) //json

app.use(router); // 라우터 연결
