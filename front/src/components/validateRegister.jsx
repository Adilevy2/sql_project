import { AllContext } from '../context/context';
import React, { useContext } from "react";
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const ValidateRegister = () => {
     const {setValidateRegister,setAllready,courseName} = useContext(AllContext);
     let decode={};
     const handleRegister= async()=>{
            try{
                const token=localStorage.getItem('token');
                decode=jwtDecode(token)
                const result =await axios.post('http://localhost:5010/api/addCourses',{email:decode.email,subject:courseName},{headers: {'x-auth-token': `${token}`}})
                if(result.data=='you have allready registered to this course'){
                    setAllready(true)
                    setValidateRegister(false)
                }
                setValidateRegister(false)
            }
            catch(error){
                alert(error)
            }
        }
    
    return ( 
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-12 sm:w-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>

            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title"></h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Are you sure that you want to register to this course?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={()=>setValidateRegister(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
          <button onClick={()=>handleRegister()} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Yes, Im sure</button>
        </div>
      </div>
    </div>
  </div>
</div>

     );
}
 
export default ValidateRegister ;