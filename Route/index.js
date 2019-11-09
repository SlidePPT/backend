const express = require("express")
const router = express.Router();
const Certification = require("./certification")

router.use("./certification",Certification)

module.exports = router;