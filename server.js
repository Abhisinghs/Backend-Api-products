require('dotenv').config()//to use the dotenv file 
const app =require('./routes/user.route')
const mongoose = require('mongoose')

//define PORT 
const PORT = process.env.PORT || 3000

//define hostname 
const hostname='localhost'


// connect to MongoDb by mongoose 
const connectToDb= async()=>{
    mongoose.connect(process.env.mongoUrl)
    .then((con)=>{
        console.log(`databases connected successfully with ${con.connection.host}`);
        app.listen(PORT,()=>{
            console.log(`server is running at ${hostname} : ${PORT}`);
        })
    }).catch((err)=>{
        console.log('Error : ',{message:`${err.message}`});
    })
}

//call the connectToDb to connect with database
connectToDb();