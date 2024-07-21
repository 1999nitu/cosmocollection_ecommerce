// import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import ApiServices from "../ApiServices";

// export default function Login(){
//   const [email,setEmail] =useState("")
//   const [password,setPassword] =useState("")


//   const nav=useNavigate()
//   const handleForm=(e)=>{
//     e.preventDefault();
    
//     let data={
//       email:email,
//       password:password
//     }
//     ApiServices.login(data)
//     .then((res)=>
//   {
//     console.log(res);
//     if(res.data.success==true)
//     {
//       toast.success(res.data.message)
//       sessionStorage.setItem("token",res.data.token)
//       sessionStorage.setItem("userId",res.data.data._id)
//       localStorage.setItem("token",res.data.token)
//       if(res.data.data.userType==1)
//       {
//           nav("/managecategory")
//       }
//       else{
//         nav("/userviewcategory")
//       }
//     }else{
//       toast.error(res.data.message)
//     }
   
//   })
//   .catch((err)=>
//   {
//     console.log(err);
//   })
//   }
//   return(
//     <>

// <div className="col-md-6 contact-form">
//             <h4 className="white-w3ls">
//               Login <span>Form</span>
//             </h4>
//         <form action="#" method="post" onSubmit={handleForm}>
//               <div className="styled-input agile-styled-input-top">
                
//               </div>

//             <div className="styled-input">
//                 <input type="email" name="Email" required="" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//                 <label>Email</label>
//                 <span />
//             </div>

//             <div className="styled-input">
//                 <input type="text" name="password" required="" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//                 <label>Password</label>
//                 <span />
//             </div>

//             <div className="styled-input ">
               
//             </div>
//               <input type="submit" defaultValue="SEND" />
//         </form>
// </div>
       
//         <div className="clearfix"> </div>


//       <ToastContainer
//       position="top-right"
//       autoClose={5000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="dark"
     
//       />
//     </>
//   )
// }



import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'
import ApiServices from '../ApiServices'
export default function Login(){
    const nav=useNavigate()
    const [loading,setLoading]=useState(false)
    const[message,setMessage]=useState()
    const override={
        
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    useEffect(()=>{
        setMessage(sessionStorage.getItem("message"))
        if(message){
            toast.error(message)
            setTimeout(()=>{
                sessionStorage.removeItem("message")
            },2000)
        }
    },[message])
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const handleForm=(e)=>{
        e.preventDefault();
        setLoading(true)
        let data={
            email:email,
            password:password
        }
        ApiServices.login(data).then((res)=>{
            setLoading(false)
            if(res.data.success){
                toast.success(res.data.message)
                // console.warn(data.data.token)
                sessionStorage.setItem("userId", res.data._id)
                sessionStorage.setItem("name",res.data.name)
                sessionStorage.setItem("email", res.data.email)
                sessionStorage.setItem("token", res.data.token)
                sessionStorage.setItem("userType", res.data.userType)
                sessionStorage.setItem("Authorization",true)
                if(res.data.userType==1|| res.data.userType=="1"){
                    nav("/admin")
                }
                else{
                    nav("/")
                }
            }
            else{
                toast.error(res.data.message)
            }
        }).catch((error)=>{
            console.log(error)
            toast.error("Something went Wrong")
            setTimeout(()=>{
                setLoading(false)
            },1000)
        })
    }
    return(
        <>
         <div className="page-head_agile_info_w3l">
                <div className="container">
                    <h3>
                    User <span>Login </span>
                    </h3>
                    <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <ul className="w3_short">
                        <li>
                            <Link to={"/"}>Home</Link>
                            <i>|</i>
                        </li>
                        <li>Login</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-5">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div>     
                 <div className={loading?"disabled-screen":""}>
        
            <div className="container-fluid my-5">
                <div className="row ">
                    <div className='col-md-3'></div>
                    <div className="col-md-6  contact-form">
                        <h4 className="white-w3ls">
                            SignIn <span>Form</span>
                        </h4>
                        <form onSubmit={handleForm} method="post">
                            <div className="styled-input">
                            <input type="email" name="Email" required="" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            <label>Email</label>
                            <span />
                            </div>
                            <div className="styled-input">
                            <input type="password" name="Password" required="" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                            <label>Password</label>
                            <span />
                            </div>
                            <input type="submit" value="SEND" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}








