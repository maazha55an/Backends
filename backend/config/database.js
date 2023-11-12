const mongoose = require("mongoose");

const connectDatabase =()=>{

    // useCreateIndex is not need & also {useNewUrlParser:true, useUnifiedTopology:true}
    mongoose.connect(process.env.DB_URI)
    .then(
        (data)=>{
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        })
}


module.exports = connectDatabase