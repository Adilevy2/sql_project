
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import SignUp from './signUp';
import Login from './logIn';
import { AllContext } from './../context/context';
import ChangePassword from './changePassword';
import './App.css';
export default function Header() {

    const {modalOnSignUp,setModalOnSignUp,modalOnLogin,setModalOnLogin,modalOnPassword}=useContext(AllContext);
    const handeleLogOut=()=>{
        localStorage.removeItem('token')
        window.location.reload(false);    

    }

  return (
      <div className="relative bg-white">
  {modalOnSignUp && 
   <SignUp/>
   }
   {modalOnLogin && 
   <Login/>
   }
   {modalOnPassword && 
   <ChangePassword/>
   }
   
   <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
         <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to='/'>
            <div  className='shake-vertical flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
             <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
            <h1 className='ml-2 text-lg font-medium'>MyCourses.com</h1>
            </div>
            </Link>
         </div>
         <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
          
              
               <Link to='/courses'>
               <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600">
               choose a course
               </button>
               </Link>
            {!localStorage.token&& <div>
               <button onClick={()=>setModalOnLogin(true)} className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600">
               Log in
               </button>
               <button onClick={()=>setModalOnSignUp(true)} className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
               Sign up
               </button>
            </div>}
            {localStorage.token && <div>
                <Link onClick={()=>handeleLogOut()} to='/'>
              <button  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600">
              Log out
              </button>
                </Link>
              <Link to='myCourses'>
              <button  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600">
              My Courses
              </button>
              </Link>
              </div>}
            
            
         </div>
      </div>
   </div>
</div>
  )
}