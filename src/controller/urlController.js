const shortid = require('shortid');
const urlModel = require('../model/urlModel');


const shortUrl = async (req, res)=>{

try{
    const longUrl = req.body.longUrl

const urlCode = shortid.generate()

const shortUrl = "http://localhost:3000" + "/"+ urlCode;

const url ={
    longUrl: longUrl,
    shortUrl: shortUrl,
    urlCode: urlCode
}
const createurl = await urlModel.create(url)
return res.status(200).send({status:true, data: url})
}
catch(error){
   return res.status(500).send({msg:error.message})
}
}


const activeShorturl = async (req,res)=>{

    try{
        const paramData=req.params.urlCode;

        const urlData= await urlModel.findOne({paramData});

        const longUrl =urlData.longUrl

        return res.redirect(longUrl)
    }
    catch (error){
        return res.status(500).send({msg: error.message})
    }
}






module.exports.shortUrl= shortUrl
module.exports.activeShorturl=activeShorturl