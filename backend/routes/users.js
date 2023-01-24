const express=require('express');
const router=express.Router();
const User=require('../model/users');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.get('/',async(req,res)=>{
    const query='SELECT * FROM users'
    try{
        const result=await User.query(query);
        res.send(result.rows).status(200)
    }
    catch(error){
        res.sendStatus(error)
    }
});

// signup
router.post('/',async(req,res)=>{
    try{
    const query=`INSERT INTO users (name,password,email) VALUES ($1,$2,$3)`;
    const queryValid=`SELECT * FROM users WHERE email=($1)`;
    const salt=await bcrypt.genSalt(10);
    const pas= await bcrypt.hash(req.body.password,salt)
    const arr=[req.body.name,pas,req.body.email]
    let result=await User.query(queryValid,[req.body.email])
    if(result.rows.length>0)
    return res.send('user exist').status(400)
         result=await User.query(query,arr);
         const result2= await User.query(queryValid,[req.body.email])
         const token=jwt.sign(result2.rows[0],'tokenWord')
        return res.send(token).status(201)
    }
    catch(error){
        return  res.sendStatus(error)
    }
    
});



module.exports=router;