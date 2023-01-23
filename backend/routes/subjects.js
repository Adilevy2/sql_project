const express=require('express');
const router=express.Router();
const User=require('../model/users');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.get('/',async(req,res)=>{
    const query='SELECT * FROM subjects'
    try{
        const result=await User.query(query);
        res.send(result.rows).status(200)
    }
    catch(error){
        res.sendStatus(error)
    }
});




module.exports=router;