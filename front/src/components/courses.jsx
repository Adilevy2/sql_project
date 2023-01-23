import './App.css';
import { AllContext } from '../context/context';
import React, { useContext ,useState,useEffect} from "react";
import NeedToLogin from './needToLogin';
import axios from 'axios';
import AllReady from './allreadySignedUp';
import ValidateRegister from './validateRegister';

const Courses = () => {

    const {needToLogin,setNeedToLogin,allready,validateRegister,setValidateRegister,setCourseName} = useContext(AllContext);
    let decode={};
    const [courses, setCourses] = useState(['','','','','','','','','']);
    const handleRegister= async(val)=>{
        if(!localStorage.token)
        setNeedToLogin(true)
        else{
            setCourseName(val)
            setValidateRegister(true)
        }
    }
     
    useEffect(() => {
        async function getData(){
            const data=await axios.get('http://localhost:5010/api/subjects');
            setCourses(data.data)
          }
          getData();
      }, []);
    return ( 
        <div className='grid bg-slate-100 place-items-center'>
            <h1 className='tracking-in-expand text-center text-4xl font-bold mt-8'>Our Courses</h1>
            {needToLogin&& 
             <NeedToLogin/>}
            {allready&& 
             <AllReady/>}
            {validateRegister&& 
             <ValidateRegister/>}
                 <div className='w-10/12 h-96 bg-gray-600 rounded-lg showhim mt-14'>
                    <div className='show1'>
                     <img className=' h-96 w-full' src="https://miro.medium.com/max/1400/1*5eV1xmJs2-sJ4DdejfdnQA.png"></img>
                    </div>
                    <div className='show2 grid grid-cols-4 h-full'>
                        <div className='slide-in-bottom '>
                            <h1 className='text-3xl font-bold'>level:<span className='text-3xl font-bold text-red-400'>{courses[0].level}</span> <span className='ml-96'>rating:<span className='text-3xl font-bold text-green-500'>{courses[0].rating}</span> </span></h1>
                    <p className='text-white font-bold text-xl ml-8 leading-10'>JavaScript is the world's most popular programming language.<br/>
                    JavaScript is the programming language of the Web.<br/>
                    JavaScript is easy to learn.<br/>
                    This course will teach you JavaScript from basic to advanced.</p> 
                   <button onClick={()=>handleRegister('javaScript')} className="mt-12 ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600">register</button>
                        <img style={{marginLeft:'130vh'}} className=' w-1/12 ' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'></img>
                        </div>
                    </div>
                </div>


                 <div className='w-10/12 h-96 bg-gray-600 rounded-lg showhim mt-14'>
                    <div className='show1'>
                     <img className=' h-96 w-full' src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/7f8f028196ca.jpeg"></img>
                    </div>
                    <div className='show2 grid grid-cols-4 h-full'>
                        <div className='slide-in-bottom '>
                    <h1 className='text-3xl font-bold'>level:<span className='text-3xl font-bold text-red-400'>{courses[3].level}</span> <span className='ml-96'>rating:<span className='text-3xl font-bold text-green-600'>{courses[3].rating}</span> </span></h1>
                    <p className='text-white font-bold text-xl mt-10 ml-8 leading-10'>C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.<br/>
                            C# is used to develop web apps, desktop apps, mobile apps, games and much more.</p> 
                   <button onClick={()=>handleRegister('C#')} className="mt-12 ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600">register</button>
                        <img style={{marginLeft:'130vh'}} className=' w-1/12 ' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEWbT5b///+aSZNqFXeBMISWQ5GXRZHQss69j7l9J4GoeqnYvdWbSpSZS5RfAG1jAHGVO437+PuUOYyDMoV7IH78+fx6GH348vekcKaaX51sF3h4FHyOSJBnCnRmAHOgWJvs3+ulY6Hz6vLgy97Fp8bBl77o1+bYwtiVV5jp2+iqbaa4hbTHocSze66udKqfVprIrcq8m7+haqKLQo2zibTBosLRt9J0AHiUUpePW5jBp8aUZJ16M4WBRIyhd6iJUpOxkbezlrmlhKwVv5D2AAAOKklEQVR4nO1da3uiOhdV2kStApGB0qlHvOtYtdpOx/PO6fWc//+jXhCVHYQQbhHnYX2Yh2dmRJbZK/uSkF2plChRokSJEiVKlChRokSJEiWyhYwRIRohCMvnfpRcgPFgOeqb1ao5mvSwdO7HyRwSnvSrHub1P4yjjBaQn4P+Av05tiqjwbx6ivngT+GI19sAfg6aPXTuh8sAMlq2QwhWq+3lxctRJo9QgO3paDSaQsbDBblkU7UFOPLImNsH4qJXM72/nl6wHPG6BgarrhEsucBEWwKO2zU+96MmgowmHgtjjJAEQWTA3lxe4DDSApxViOQH6U3BCD9emBxtAYLH7z9oJ/wcW9Ueh5cqR1yBJrjQcBBBG4hMwLxaq1yKHGVSB2NTk1AIv52pVkA0YE4uwlRl9AAE2AwQIG2qhLbn4psq5QHnwQL0y3EBhnw0KHYgJ1E+oE7CBOiTI1oanl/ZyMWVo0wWwI/XWiwB0iDrGfXLFNNUaQ8xXUcI0GeqBCZYxZQj6oFhGIZ7iFCOGpyBZ4XLqyQoJbOO+A3UA5LGHkWjWHmVLUDw+zeZHpAFsgYTcYHyKtoDTgccHiIMWIO3KkqZgxJgP74A/RxBRlKIModMQJHCnCQSIA0Eg9r2kpxXjjJaAQFuUSwPEQqyhnnV6oymagsQesA0AqSBtVUh8ipcaabygCwgaPzV7VnyKlmrgylhidMLkAaVV7UnmuhhlBFVpJCyEaCPY+98crQFCFxzhgKkcb68yidAzhwpCei8qiYor5JJvgKkQeCvKSSvogXYzMgDsqBBOfYf85YjVaTITYA0aDnOcpUjxlSVMEcB0kB46X1vdYzyCuRkBAU4JvkKkAZpQTnms3xMC3DUy1+ANDRYI5nnUObAsFbUX2UaovHBJ8eM8yqJTDy/VM0iR0oCSo5GlnkVLcDmmfg5IBhWHTOTI4YOaZTcQ2DkgDh/4MRGrtEJWyamiupeHpNUgJhoWuVhUZ9MljYm9ccB1kgyZ4Nh2dmYZEAR1cD9kngIZFNZ1ab+DRnD2dhZ1k/A0g5WvdvUUlMEBGcJQlBEKovmsBqGee1BSkCStDw5jlNSRJPjb76KLUBM0GIUvpnGhTl71OL/cqDMUU+VcMiDg5MYxZ5BsbaGm0oY6E9I7PgB4UOA3O6lmVHR4TbbuAOICSyjRsGoxVvIcaAd9DNKYafyYH+TWVyC2iAGP/c3jFotPgE5/PwPyQfxMM2YMb8crZuhTELRXsadc/BeBM3kg0j2cn6Mp0GtHjW9BKMfL5xvoYf9b6MlJShX3DvMY9koao3CSURgHGMYW/hbZ/9N66RmKq/cGyziDCG10h0b8wHnMNr8rq8bz+6n6klj8H0o317HIKjVGM/PgzqPwbQkdO3gmyujcVKXiDfu78pvpBhNWU/PhXHk17VaLr/r6477dZvEDN3x2HLrH/XCAzR+jCJEsTNQF7prZdukk+me4ZJXhmiQRoKAIusnBfxsIb7sPpDYXewZTjgZHibv9AjXRUv6eQ3QuMmEYZ2PIRoYrKeOhWnwV9oC/HZ9Noa4l42JugjUImWgZ2CYxSTj4TQSPuUnlqEW9FZMGkxoigcPeDaGWoJQOwIr+LWtIH4iGaJ65gSr5voYowYZqFiGuJfdNOphSg4GGsJPIEPN/+pdNlgSKUyAghmSCes5U6CHww1UJENcSZbwRmNOmPyEMdS4SzLt6Wg2G03nvLGB8b3BJCiIIXrkelqzuUCa5ry5phGtteIpNG5vIwgKYkg4UkKz9qBRKwKIaKuIYsfof7cR/AQxxNEZhbFsBdRfsDZghAnDu8gBFMVQixzCoBfXXI5kEOZmnnQOfmIY4kHUAC4YVQmsjYM+M2voPPzEMCQRAekwonhGHk9czfR7h4+fGIYy2xf2I1+cQQP6DuYNn4GKYojY4UyfY8kYUUHtOAY/IQwJMy0ctnhK2OjhSHH0M9pDiGWIeyyCxoCvwkMW+xG/i8dPBEO2kdZ5C627/Nl4iWWgghgy45kRf61cM6s1ndNDCGbIyHyNCjfBFn74HmygjVsb+6F1Ln3/K3eGTHe/5F4MsHPARrCB6htzODR/OaPb+DF0oItlCDe2+NHmHUJGkeJa38UTtR3D77vb0oOYO0PCSA9qfEPILFLsGW48hoZghhqjCvzAtZrrL9NT9G5v/969VbL52xZg58eOoX2pC2RIwgn2uRY6WUUKfTybudup+jMHrr04V38JY8iaaDiMlCVAG53QAt6PhiiGaBXO8DHKSNkCLApDRkQTZaQsARaHIQl3FkM2Q3YVtEAMw/ddTFkMIwR4ePqv8fjXjuX819iG+7Kec+ktA5+RIWMpPlKAx8fX9YO30HX9du8tdF2gt0jCsMVjoEec2+OTwDLSDrNghq0W0huXxDB8pgkewxZudK+u7i+HISPwDmJoTzBXLvRrrqmm0ei4OuzYl7qrQ+eyEAxPg7ZW69v91REcptp4vrt73oVqM/vq7nm3OchwLr3P5s4wfG3b8DG0BXjfvQKINtVOaFgvzh9iRtTWognia4ofD8cieHxW5A0/ZBuon97eVFm2WgSGkhTOsEk8fug+kKA9jKziWiEYauHLnOZBiC2snxgol6neTk3T3FW62uYO7n1t/LgWxpBVxXA3/NgCDKe39xxh0DudQ9TWsS//51wa9iVwifkzZGx5dqqltIcIA8NznNvjS2gRzrA6wOEC5JXj2RmypprqTGswBOjnGGys+tZot409Q/uybQqul0qEteXyXeUleGX9bn4L5PjzLxtuPvjNufyL/mcBDFkrwHOFm6EyrLbrf8demBGxusbcS/PES1H5x/nvw2ee7ReCGUot5safVz47VV/3/59nC41ohoS548t845lrrPfjSr4x5t2FIYwhq2TqGJ4VTdF6g3ZgLjoxTFXIbhP2BvbhW5Shqu8+Q5+HLCWeiyFrgW03Jp/s6Ub5OF1kbf7kNVUx+9rYDKvVFyXcUi13FvXDeOKcVYUwjNoUVa1O39Vgjpb6GZYh8W3cEzSGzA0nLmbvihUwfp+s/ZejHxxyFLS/lOdVi9mrqoCR7KqKdRf1Mu02OJATz5DzVYT27L+GcsDb14jjQ8ZLIfYI2zngLx6GOwx3G7353114iRhFEQydMraV7UtdHuzYvcEsHufP0K2iWb9zYugEffes4nHeDI9VNCWs3VE67HOT+/BhzJlhCx2T+FzsdHoM+ELVmCtDqoqWh522QWISVsnJkaG/iqa+ZM6QTi6D5Zgbw4AytrLJmOCXP2IPKh7nxdBd6PRTTH7eRxBmASnJqefIh2FLCixjd7tZvgk8Oo1jg0w1D4bhZezufXYT6jSsNuDzHBkxBGcqnCx05kNxxMia9RwYeudiBAoQUGxk87bsjF35AHLM6FyMJmEKkBrF9Ie32FlTSMJ8hCdHfZOSobtfpk/YAoQUM3AaLxx15IPnuHVnt+Qn8HhnDDlbfbjWWZSbdC+um698hXJ3w8pPMx1DeV+zXyBbgFzfe+VUB9OIcRpZfTzCNtXGnfupxOdEVfaLZ3MteKdBMCwrsH7GhacoCULcN273sq8kPpKO7IfjPdD/hkJ5T+Y25m/8q1UODusdZuLz2g5HYVX78b7ZHsav+IfVDG/iDKCNY20h8TFRthAPlcJ/YlK8Uu+f4h1DYH51+RdUXSiHIt8gxeGXx7Mvf8Wl2FW7Mcax/WXF5XelHApgac6+rMjHV9E3ajwt2lDVD75gfP6ixuZnWYcRTHd+acVbeJlHLLEEclQ+t1GTTv/XpxKb35Xy++iT0p1Ba1P0lkA38X9p21it96fQk3aN0de7FXN+caB2vDp7BkclexSNm/im6pBU1bf/Nr6ItT3d/vtu/0t8eleq9VXNkCA0VNukXhlLZWyWitJ9+3z9+Pjv4+P1881SlETsnFvdeYafyXneTtcO2BboPb4cjw/XtVx0E3HbQXmHLUSyah8gY3iobBI5ZgXVgs11s2xzgcHB5dX2XRI5ZsIP1izHGfeco1us/U4mx1ToKs9QLdn3DZTRCn5BzCA5PZQ3IMCcWgZJsEuCneiIlKPaBe/ntOu5tUSiegUNn5NN9wlgWTewQznOs3UXJcdRCs8RA13lN4hvc2+/Rndk2cZPCWJD0WGjYREt9Ojd3QnSnlhQu09AgKLay9PtmxMGclyw1A/Y6VtcT3KZUN2tcpOj8kn18BHc4xF6jnzkqFqiBUiDPl/+y8o6kFO7IEdqL4X3IXWQpxy7yh3s9L0+U2tnGT3CPqEZBnJUjpRHG7kYHCcwr4pdEAyG2gU50jCfVoD8oAI54yUDOarWF+iumnWOlARU486kZY4jbAHCPqcF6K1e8bcft+WYnGOXzpHOKUAaMgFte6ub+6RyVO/BAqu5EBSi8QHD/kftZHJUrRfQFW+Dzy9ACjItx/hljq7yCmsIAltUc8OWI+x0Gc9zFFaANCSqqX2cvEq9B0UKIb2pk4JqRzb84CxzWOoLzJEqwnKkJJCpMsecJ686KVIUdwBdyAg27RpHybGrNmD8nntj8UwgoY3nHSM8h3oFXmUwlwUWIA3UA3JkeI6ucgMFuC60AGnYcoRljkagHLvKOxDgtPgCpCFTXbSfAuRIC3B1MQbqQUJjT45D//Kx2n0CYl3m1vI+XyDYjHT+6r281lUpAW7PVaRID1uOwFSH/+qqqiqqav38B/z1/NIESEOmArnq0DuI9PA3xcqRkgCvGa/sG+Oi5UhJQOdVFHJYyD0PZLIK2uLWv2wB0pDQ0s9xWOQcKQlwZQx3uPUnuS7kngUyllbbqTOxGtPtw5/HbwcZIaJpGkF/kP5KlChRokSJEiVKlChRokSJouD/bqrEKO2smV4AAAAASUVORK5CYII='></img>
                        </div>
                    </div>
                </div>


                 <div className='w-10/12 h-96 bg-gray-600 rounded-lg showhim mt-14'>
                    <div className='show1'>
                     <img className=' h-96 w-full' src="https://cdn.hackr.io/uploads/posts/large/1607606304WC62rziUJw.png"></img>
                    </div>
                    <div className='show2 grid grid-cols-4 h-full'>
                        <div className='slide-in-bottom '>
                        <h1 className='text-3xl font-bold'>level:<span className='text-3xl font-bold text-red-400'>{courses[4].level}</span> <span className='ml-96'>rating:<span className='text-3xl font-bold text-green-400'>{courses[4].rating}</span> </span></h1>
                    <p className='text-white font-bold text-xl mt-12 ml-8 leading-10'>Java is a popular programming language.<br/>
                        Java is used to develop mobile apps, web apps, desktop apps, games and much more.</p> 
                   <button onClick={()=>handleRegister('java')} className="mt-12 ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600">register</button>
                        <img style={{marginLeft:'130vh'}} className=' w-3/12 ' src='https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png'></img>
                        </div>
                    </div>
                </div>


                 <div className='w-10/12 h-96 bg-gray-600 rounded-lg showhim mt-14'>
                    <div className='show1'>
                     <img className=' h-96 w-full' src="https://www.freecodecamp.org/news/content/images/2022/02/Banner-10.png"></img>
                    </div>
                    <div className='show2 grid grid-cols-4 h-full'>
                        <div className='slide-in-bottom '>
                        <h1 className='text-3xl font-bold'>level:<span className='text-3xl font-bold text-red-400'>{courses[1].level}</span> <span className='ml-96'>rating:<span className='text-3xl font-bold text-green-600'>{courses[1].rating}</span> </span></h1>
                    <p className='text-white font-bold text-xl ml-8 mt-10 leading-10'>Python is a popular programming language.<br/>
                        Python can be used on a server to create web applications.</p> 
                   <button onClick={()=>handleRegister('python')} className="mt-10 ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600">register</button>
                        <img style={{marginLeft:'130vh'}} className=' w-1/12 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'></img>
                        </div>
                    </div>
                </div>


                 <div className='w-10/12 h-96 bg-gray-600 rounded-lg showhim mt-14'>
                    <div className='show1'>
                     <img className=' h-96 w-full' src="https://miro.medium.com/max/1400/0*tn-WMY-zDAQX8x0t.png"></img>
                    </div>
                    <div className='show2 grid grid-cols-4 h-full'>
                        <div className='slide-in-bottom '>
                        <h1 className='text-3xl font-bold'>level:<span className='text-3xl font-bold text-red-600'>{courses[5].level}</span> <span className='ml-96'>rating:<span className='text-3xl font-bold text-green-600'>{courses[5].rating}</span> </span></h1>
                    <p className='text-white font-bold text-xl mt-6 ml-6 leading-10'>Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.</p> 
                   <button onClick={()=>handleRegister('docker')} className="mt-10 ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600">register</button>
                        <img style={{marginLeft:'130vh'}} className=' w-2/12' src='https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013.png'></img>
                        </div>
                    </div>
                </div>


                 <div className='w-10/12 h-96 bg-gray-600 rounded-lg showhim mt-14'>
                    <div className='show1'>
                     <img className=' h-96 w-full' src="https://user-images.githubusercontent.com/40702606/118755471-cf58b300-b860-11eb-979a-16d263b320a8.png"></img>
                    </div>
                    <div className='show2 grid grid-cols-4 h-full'>
                        <div className='slide-in-bottom '>
                        <h1 className='text-3xl font-bold'>level:<span className='text-3xl font-bold text-red-600'>{courses[6].level}</span> <span className='ml-96'>rating:<span className='text-3xl font-bold text-green-600'>{courses[6].rating}</span> </span></h1>
                    <p className='text-white font-bold text-xl mt-6 ml-6 leading-10'>MongoDB is a document database with the scalability and flexibility that you want<br/>
                     with the querying and indexing that you need</p> 
                   <button onClick={()=>handleRegister('mongodb')} className="mt-6 ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600">register</button>
                        <img style={{marginLeft:'130vh'}} className=' w-2/12' src='https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png'></img>
                        </div>
                    </div>
                </div>


                 <div className='w-10/12 h-96 bg-gray-600 rounded-lg showhim mt-14'>
                    <div className='show1'>
                     <img className=' h-96 w-full' src="https://scp.ac.cy/wp-content/uploads/2021/09/large-1.png"></img>
                    </div>
                    <div className='show2 grid grid-cols-4 h-full'>
                        <div className='slide-in-bottom '>
                        <h1 className='text-3xl font-bold'>level:<span className='text-3xl font-bold text-red-600'>{courses[7].level}</span> <span className='ml-96'>rating:<span className='text-3xl font-bold text-green-600'>{courses[7].rating}</span> </span></h1>
                    <p className='text-white font-bold text-xl mt-24 ml-6 leading-10'>SQL is a standard language for accessing and manipulating databases.</p> 
                   <button onClick={()=>handleRegister('sql')} className="mt-6 ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600">register</button>
                        <img style={{marginLeft:'130vh'}} className=' w-2/12' src='https://ojt.com/wp-content/uploads/2021/08/sql.png'></img>
                        </div>
                    </div>
                </div>


                 <div className='w-10/12 h-96 bg-gray-600 rounded-lg showhim mt-14'>
                    <div className='show1'>
                     <img className=' h-96 w-full' src="https://cdn.hackr.io/uploads/posts/large/1605614362YhJpBcpdI1.png"></img>
                    </div>
                    <div className='show2 grid grid-cols-4 h-full'>
                        <div className='slide-in-bottom '>
                        <h1 className='text-3xl font-bold'>level:<span className='text-3xl font-bold text-red-600'>{courses[8].level}</span> <span className='ml-96'>rating:<span className='text-3xl font-bold text-green-600'>{courses[8].rating}</span> </span></h1>
                    <p className='text-white font-bold text-xl mt-6 ml-6 leading-10'>React is a JavaScript library for building user interfaces.<br/>
                            React is used to build single-page applications.<br/>
                            React allows us to create reusable UI components.</p> 
                   <button onClick={()=>handleRegister('react')} className="mt-6 ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600">register</button>
                        <img style={{marginLeft:'130vh'}} className=' w-2/12' src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png'></img>
                        </div>
                    </div>
                </div>
                
             
        
           
             
             
             
           
             
             </div>
     );
}
 
export default Courses;