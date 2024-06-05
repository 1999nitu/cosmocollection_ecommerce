import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from "../ApiServices";

export default function Login(){
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")


  const nav=useNavigate()
  const handleForm=(e)=>{
    e.preventDefault();
    
    let data={
      email:email,
      password:password
    }
    ApiServices.login(data)
    .then((res)=>
  {
    console.log(res);
    if(res.data.success==true)
    {
      toast.success(res.data.message)
      sessionStorage.setItem("token",res.data.token)
      sessionStorage.setItem("userId",res.data.data._id)
      localStorage.setItem("token",res.data.token)
      if(res.data.data.userType==1)
      {
          nav("/managecategory")
      }
      else{
        nav("/userviewcategory")
      }
    }else{
      toast.error(res.data.message)
    }
   
  })
  .catch((err)=>
  {
    console.log(err);
  })
  }
  return(
    <>

<div className="col-md-6 contact-form">
            <h4 className="white-w3ls">
              Login <span>Form</span>
            </h4>
        <form action="#" method="post" onSubmit={handleForm}>
              <div className="styled-input agile-styled-input-top">
                
              </div>

            <div className="styled-input">
                <input type="email" name="Email" required="" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <label>Email</label>
                <span />
            </div>

            <div className="styled-input">
                <input type="text" name="password" required="" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <label>Password</label>
                <span />
            </div>

            <div className="styled-input ">
               
            </div>
              <input type="submit" defaultValue="SEND" />
        </form>
</div>
       
        <div className="clearfix"> </div>

        



      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
     
      />
    </>
  )
}










