const express=require('express');
const router=express.Router();
const User=require('../model/users');
const auth=require('../middleWear/auth')



router.post('/',auth,async(req,res)=>{
    const querySubject='SELECT subject_id FROM subjects WHERE subject=($1)';
    const subject=[req.body.subject]
    let result1=await User.query(querySubject,subject);
    if(result1.rows.length==0)
    return res.send('enter course name').status(400)
    const queryUser='SELECT user_id FROM users WHERE email=($1)';
    const name=[req.body.email];
    let result2=await User.query(queryUser,name);
    if(result2.rows.length==0)
    return res.send('invalid user').status(400)
    const query=`DELETE FROM courses WHERE user_id=($1) AND subject_id=($2)`;
    const arr=[result2.rows[0].user_id,result1.rows[0].subject_id]
    let result5=await User.query(query,arr);
    return res.send('done')
    




})

module.exports=router;