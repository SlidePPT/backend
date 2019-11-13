const low = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const shortid = require('shortid')

db.defaults({ code:[] }).write() 

exports.make = (req,res) => {

    console.log("make");

    let ppt = {ppt : req.body.ppt}
    ppt.ppt._id = shortid.generate()

   

    db.get('code').push(ppt.ppt).write();

   res.status(200).json(
    ppt
   )
}

exports.check = (req,res) => {
    console.log("check")
}

exports.save = (req,res) => {
    console.log("save")
}
