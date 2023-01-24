const express=require('express');
const router=express.Router();
const User=require('../model/users');
const bcrypt=require('bcrypt');


//change password
router.post('/',async(req,res)=>{
  try{

    const querySign='UPDATE users SET password = ($1) WHERE email=($2);'
    let queryEmail=`SELECT * from users WHERE email=($1) `
    const email=[req.body.email]
    const result=await User.query(queryEmail,email)
     if(result.rows.length==0)
     return res.send('wrong email').status(400)
     if(req.body.newpassword!==req.body.newpassword2)
     return res.send('passwords dont match').status(400)
      const salt=await bcrypt.genSalt(10);
      const pas=await bcrypt.hash(req.body.newpassword,salt)
    const resultChange=await User.query(querySign,[pas,req.body.email])
    return res.send('changed').status(200)
  }   
  catch(error){
    return res.sendStatus(error)
}


})



module.exports=router;