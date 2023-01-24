const express=require('express');
const router=express.Router();
const User=require('../model/users');
const auth=require('../middleWear/auth')



router.post('/',auth,async(req,res)=>{
  try{

    const email=[req.body.email];
    const querySubject='SELECT subject_id FROM subjects WHERE subject=($1)';
    const queryUser='SELECT user_id FROM users WHERE email=($1)';
    const queryUserExist='SELECT * FROM courses WHERE name LIKE ($1) AND user_id=($2)';
    const query=`INSERT INTO courses (name,subject_id,user_id,student_number) VALUES ($1,$2,$3,$4)`;
    const mainQuery=`SELECT name,student_number,user_id FROM courses WHERE name LIKE ($1) ORDER BY name,student_number`;
    let resultSubjectId=await User.query(querySubject,[req.body.subject]);
    let resultUserId=await User.query(queryUser,email);
    const subject2=[req.body.subject+`%`]
    let resultUserExist=await User.query(queryUserExist,[req.body.subject+`%`,resultUserId.rows[0].user_id]);
    let result=await User.query(mainQuery,subject2);
 //check if hes allready in the course
 if(resultUserExist.rows.length>0){
      return res.send('you have allready registered to this course').status(400)
   }
   //check if hes the first in the subject
   if(!result.rows[0]){
    const insert=await User.query(query,[req.body.subject+'1',resultSubjectId.rows[0].subject_id,resultUserId.rows[0].user_id,1])
    return res.send(result.rows).status(200)
  }
  for(i=0;i<result.rows.length;i++){
    // check if the first student is deleted
    if( result.rows[0].student_number!==1){
      const insert=await User.query(query,[req.body.subject+Math.ceil((i+2)/22),resultSubjectId.rows[0].subject_id,resultUserId.rows[0].user_id,1])
      return res.send(result.rows).status(200)
    }
    
    if(i>1 && result.rows[i-1].student_number==22 && result.rows[i].student_number!==1){
      const insert=await User.query(query,[req.body.subject+Math.ceil((i+2)/22),resultSubjectId.rows[0].subject_id,resultUserId.rows[0].user_id,1])
      return res.send(result.rows).status(200)
    }
    if(i>1 && result.rows[i].student_number==1 && result.rows[i-1].student_number!==22){
      const insert=await User.query(query,[result.rows[i-1].name,resultSubjectId.rows[0].subject_id,resultUserId.rows[0].user_id,result.rows[i-1].student_number+1])
      return res.send(result.rows).status(200)
    }
    if(i>0 && result.rows[i-1].student_number!==22 && (result.rows[i].student_number)-(result.rows[i-1].student_number)!==1 && (result.rows[i-1].name)==(result.rows[i].name)){
      const insert=await User.query(query,[req.body.subject+Math.ceil(i/22),resultSubjectId.rows[0].subject_id,resultUserId.rows[0].user_id,result.rows[i-1].student_number+1])
      return res.send(result.rows).status(200)
    }
    if(result.rows.length%22==0 && i==result.rows.length-1 && result.rows[result.rows.length-1].student_number==22){
      const insert=await User.query(query,[req.body.subject+Math.ceil((i+3)/22),resultSubjectId.rows[0].subject_id,resultUserId.rows[0].user_id,1])
      return res.send('numberChange'+i).status(200)
    }
    else if(result.rows.length>0 && (result.rows[i]==result.rows[result.rows.length-1])){
      const insert=await User.query(query,[result.rows[i].name,resultSubjectId.rows[0].subject_id,resultUserId.rows[0].user_id,result.rows[result.rows.length-1].student_number+1])
      return res.send('number'+i).status(200)
    }
  } 
  
  }
  catch(error){
    res.sendStatus(error)
}

  


})

module.exports=router;