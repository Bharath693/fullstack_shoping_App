const mongooose = require('mongoose');
const env = require('../config/envConfig');

const connect = async () =>{
    try {
      await mongooose.connect(env.URL,{useNewUrlParser: true,useUnifiedTopology: true})
      console.log("database connected!")
    }catch(error) {
      console.log(error.message);
      process.exit;
    }
    // mongooose.connect(env.URL)
}

module.exports = connect;