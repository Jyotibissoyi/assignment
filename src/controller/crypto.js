const cryptoModel = require("../model/cryptoModel")
const axios = require('axios')




const getcrypto = async function (req, res) {
  try {

    let options = {
      method: 'get',
      url: 'https://api.coincap.io/v2/assets'
    }
    let result = await axios(options);
    let cryptoData = result.data
    let coinData = cryptoData.data

 const find= await cryptoModel.findOneAndDelete(coinData);
 if(find){
  //var clearDbData = await cryptoModel.deleteMany();
  var createData = await cryptoModel.create(coinData);
 }



 const sortCoin = coinData.sort((a, b) =>  a.changePercent24Hr - b.changePercent24Hr )
//  return res.status(200).send({ status: true, data: sortCoin });
  //   const clearDbData = await cryptoModel.deleteMany();
    
    
  //   const createData = await cryptoModel.create(coinData);
    
  //   const sortCoin = coinData.sort((a, b) =>{ 
  //     return a.changePercent24Hr - b.changePercent24Hr
  //   } ); 

    return res.status(200).send({ status: true, data: sortCoin });

   }
   catch (err) {
   return res.status(500).send({ status: false, message: err.message }) }
   }







module.exports = { getcrypto }