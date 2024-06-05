import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from "../ApiServices";

export default function Register(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [contact,setContact]=useState("")
    const [address,setAddress]=useState("")
    const nav=useNavigate()

    const handleForm=(e)=>{
        e.preventDefault()
        let data={
            name:name,
            email:email,
            password:password,
            contact:contact,
            address:address
        }
        // axios.post("http://localhost:4000/apis/user/register",data)
        ApiServices.register(data)
        .then((res)=>{
            console.log(res)
            if(res.data.success==true){
                toast.success(res.data.message)
                let dataLogin={
                    email:email,
                    password:password
                }
        ApiServices.login(dataLogin)

                .then((res)=>{
                    // console.log(res)
                    if(res.data.success==true)
                    {
                        sessionStorage.setItem("token",res.data.token)
                        if(res.data.data.userType==1)
                        {
                            nav("/managecategory")
                        }
                        else{
                            nav("/login")
                        }
                }})
                .catch((err)=>{
                    console.log(err)
                })
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
       
        <div className="col-md-6 contact-form">
            <h4 className="white-w3ls">
              Register <span>Form</span>
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

            <div className="styled-input">
                <input type="text" name="password" required="" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <label>Name</label>
                <span />
            </div>

            <div className="styled-input">
                <input type="text" name="contact" required="" value={contact} onChange={(e)=>{setContact(e.target.value)}} />
                <label>Contact</label>
                <span />
            </div>

            <div className="styled-input">
                <input type="text" name="address" required="" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                <label>Address</label>
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

