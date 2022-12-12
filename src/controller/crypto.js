const cryptoModel = require("../model/cryptoModel")
const axios = require('axios')




const getcrypto = async function (req, res) {
  try {

    let options = {
      method: 'get',
      url: 'https://api.coincap.io/v2/assets',
      headers:{
        Authorization: "Bearer 9a516181-2c32-4e1a-a5d8-b846f37e6d77"
      }
    }
    let result = await axios(options);
    let cryptoData = result.data
    let coinData = cryptoData.data

    const clearDbData = await cryptoModel.deleteMany();
    
    
    const createData = await cryptoModel.create(coinData);
    
    const sortCoin = coinData.sort((a, b) =>{ 
      return a.changePercent24Hr - b.changePercent24Hr
    } ); 
    

    
    return res.status(200).send({ status: true, data: sortCoin });

   }
   catch (err) {
   return res.status(500).send({ status: false, message: err.message }) }
   }







module.exports = { getcrypto }

