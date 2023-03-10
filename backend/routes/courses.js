const express=require('express');
const router=express.Router();
const User=require('../model/users');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const auth=require('../middleWear/auth')

router.get('/',async(req,res)=>{
    try{
    const query='SELECT * FROM courses'
        const result=await User.query(query);
        res.send(result.rows).status(200)
    }
    catch(error){
        return res.sendStatus(error)
    }
});




module.exports=router;