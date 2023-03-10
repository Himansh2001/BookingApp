const jwt = require("jsonwebtoken")
const createError =  require("../utils/error")

const verifyToken= (req,res,next)=>{
    const token =req.cookies.access_token ;
    if(!token)return next(createError(401,"you are not authenticated"))

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)return next(createError(401, "Token not valid"));
        req.user = user ;
        next() ;
     })
}

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id==req.params.id||req.user.isAdmin){
           
            next() ;
        }
        else{ 
           return next(createError(403, "you are not authorised"));
        }
    })
}

const verifyAdmin = (req,res,next)=>{
  verifyToken(req,res,()=>{
    if(req.user.isAdmin){
        next() ;
    }
    else next(createError(403,"you are not authorised")) ;
  });
}

module.exports = {verifyToken,verifyUser,verifyAdmin} ;