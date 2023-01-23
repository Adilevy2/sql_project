import { createContext,useState } from "react";

export const AllContext=createContext();
const AppContext = (props) => {
const {children}=props;    
const [modalOnSignUp,setModalOnSignUp] = useState(false);
const [modalOnLogin,setModalOnLogin] = useState(false);
const [modalOnPassword,setModalPassword] = useState(false);
const [needToLogin,setNeedToLogin] = useState(false);
const [allready,setAllready] = useState(false);
const [areYouSure,setAreYouSure] = useState(false);
const [courseName,setCourseName] = useState('');
const [validateRegister,setValidateRegister] = useState(false);
    return ( 
        <AllContext.Provider value={{courseName,setCourseName
                                    ,areYouSure,setAreYouSure
                                    ,allready,setAllready
                                    ,needToLogin,setNeedToLogin
                                    ,modalOnSignUp,setModalOnSignUp
                                    ,modalOnLogin,setModalOnLogin
                                    ,modalOnPassword,setModalPassword,
                                    validateRegister,setValidateRegister}}>
            {children}
        </AllContext.Provider>
     );
}
 
export default AppContext;