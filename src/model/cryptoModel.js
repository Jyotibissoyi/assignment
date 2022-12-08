const mongoose = require("mongoose")

const cryptoSchema = new mongoose.Schema({
    "symbol":{
        type:String,
        require: true
      
    },
    "name":{
        type:String,
        require: true
    },
    "marketCapUsd":{
        type:String,
        require: true
    },
    "priceUsd":{
        type:String,
        require: true
    } 


}, { timestamps: true })

module.exports = mongoose.model("cryptoData", cryptoSchema)


