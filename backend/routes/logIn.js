const express=require('express');
const router=express.Router();
const User=require('../model/users');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')



//login
router.post('/',async(req,res)=>{
    let queryPassword=`SELECT password FROM users WHERE email=($1) `
     let queryEmail=`SELECT * FROM users WHERE email=($1) `
     const email=[req.body.email]
     let result=await User.query(queryEmail,email)
     const body=result.rows;
     if(result.rows.length==0)
     return res.send('wrong password or email').status(400)
     result=await User.query(queryPassword,email)
    let check= await bcrypt.compare(req.body.password,result.rows[0].password)
   if(!check)
    return res.send('wrong password').status(400)
    const token=jwt.sign(body[0],'tokenWord')
    return res.send(token).status(200)

})



module.exports=router;