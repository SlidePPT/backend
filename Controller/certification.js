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

exports.save = (req,res) => {
    console.log("save")
    db.get('code')
    .find({_id:req.body.ppt._id})
    .assign({template:req.body.ppt.template,number:req.body.ppt.number})
    .write()
    console.log("성공적 저장")
}

exports.check = (req,res) => {
    console.log("check")
    let data = db.get('code')
                .find({_id:req.body.code}) 
                .value()
    res.status(201).json(data)
}
