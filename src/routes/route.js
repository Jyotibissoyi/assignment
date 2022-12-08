const express = require('express')
const router= express.Router()
const cryptoController=require("../controller/crypto")

 



router.get("/get100cryptos",cryptoController.getcrypto)





module.exports=router