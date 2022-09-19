const express=require('express');
const connection=require('../connection');
const router=express.Router();
const bcrypt = require("bcrypt");

router.post('/signup',(req,res)=>{
    let user=req.body;
    query='select email,password,role,accountstatus from user where email=?'
    connection.query(query,[user.email],(err,results)=>{
        if(!err){
            if(results.length<=0){
                let string=require('crypto').randomBytes(64).toString('hex');
                user.password=setPassword(user.password);
                query="insert into user(name,email,password,contactnumber,verificationcode,accountstatus,role) values(?,?,?,?,'false','user')"
            }else{
                return res.status(400).json({message:'Email is alredy exite'});
            }
        }else{
            return res.status(500).json(err);
        }
    })
})

UserSchema.methods.setPassword = function(password) { 
     
       this.salt = crypto.randomBytes(16).toString('hex'); 
     
      
       this.hash = crypto.pbkdf2Sync(password, this.salt,  
       1000, 64, `sha512`).toString(`hex`); 
   };

module.exports=router;