const express=require('express');
const users=require('./routes/users')
const logIn=require('./routes/logIn')
const changePassword=require('./routes/changePassword')
const addCourses=require('./routes/addCourses')
const deleteCourses=require('./routes/deleteCourses')
const courses=require('./routes/courses')
const subjects=require('./routes/subjects')
const app=express();
const cors=require('cors');



app.use(express.json())
app.use(cors())
app.use('/api/users',users)
app.use('/api/logIn',logIn)
app.use('/api/subjects',subjects)
app.use('/api/courses',courses)
app.use('/api/changePassword',changePassword)
app.use('/api/addCourses',addCourses)
app.use('/api/deleteCourses',deleteCourses)

app.listen(5010,()=>console.log(`running on port 5010`))