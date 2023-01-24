const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config() ;
const mongoose = require('mongoose') ;
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users') ;
const hotelsRoute = require("./routes/hotels") ;
const roomsRoute = require('./routes/rooms') ;
const cookieParser = require("cookie-parser") ;




const connect = async ()=>{
      try{
       mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO) ;
    console.log("connected to db") ;
        }
    catch(error){
    throw error
    }
   }
       app.use(cors());
     app.use(cookieParser()) ;
     app.use(express.json());
   
   //middleware 
 app.use("/api/auth",authRoute) ;
 app.use("/api/users",usersRoute) ;
 app.use("/api/hotels",hotelsRoute) ;
 app.use("/api/rooms",roomsRoute) ;
   
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500 ;
  const errorMessage = err.message||"something is wrong" ;

   return  res.status(errorStatus).json({
    success: false ,
    status: errorStatus ,
    message : errorMessage , 
    stack : err.stack 
   }) ;
})

app.listen(8800, async () => {
    await connect() ;
  console.log("connected to backend");
});
