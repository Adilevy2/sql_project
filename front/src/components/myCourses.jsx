import axios from "axios";
import { useState, useEffect, useContext } from 'react'; 
import jwtDecode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import AreYouSure from "./areYouSure";
import { AllContext } from '../context/context';


const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const {areYouSure,setAreYouSure,setCourseName}=useContext(AllContext)
    const navigator = useNavigate()
    let decode={};
 try{
     decode=jwtDecode(localStorage.getItem('token'))
    }
    catch{
        navigator('/')
    }   
    useEffect(() => {
        async function getData(){
            const data=await axios.get('http://localhost:5010/api/courses');
            setCourses(data.data)
          }
          getData();
      }, []);
   const handleSure=(val)=>{
    setAreYouSure(true) ;
    setCourseName(val)
   }
    return ( 
        <div>
            {areYouSure==true &&
            <AreYouSure/>
            }
            <div className="grid grid-cols-12 w-3/12 mt-10 ml-8">
                <div className="col-span-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20">
             <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>
                </div>
                <div className="col-span-10">
                  <h1 className="text-3xl font-bold ml-8 mt-8">Hi {decode.name}!</h1>
                </div>
            </div>
                  <h1 className="text-2xl font-bold ml-8 mt-8">here are your courses:</h1>

                 <div className="mt-10 ml-8">
                     {courses.map(ev=>ev.user_id==decode.user_id?<div key={ev.name} className="grid grid-cols-12 w-6/12 mt-10 ml-8 font-bold"><div className="col-span-6"><h1 className="text-xl mt-4">{ev.name.slice(0, -1)} course <br/>(course number {ev.name.replace(/\D/g,'')})</h1> </div>
                    <div className="col-span-6 mt-2"> <button onClick={()=>handleSure(ev.name.replace(/[0-9]/g, ''))}  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600">delete course</button></div>
                     </div>:'')}
                     {courses.filter(ev=>ev.user_id==decode.user_id).length==0?<h1 className="text-3xl font-bold mt-20 text-red-600">you havnt signed up to any courses yet :(</h1>:''} 
                 </div>
                  
        </div>
     );
}
 
export default MyCourses;