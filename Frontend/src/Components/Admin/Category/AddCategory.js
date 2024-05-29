import axios from "axios"
import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from "../../ApiServices";


export default function AddCategory(){
    const [name,setName]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    // const token=sessionStorage.getItem("token")
    // if(!token)
    //     {
    //         return <Navigate to={"/login"}/>
    //     }

  const nav=useNavigate()

    const changeImage=(e)=>{
        setImageName(e.target.value)
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }
    const handleForm=(e)=>{
        // {header:{
        //     Authorization:token
        // }}
        e.preventDefault()

        // store form data
        let data=new FormData()
        data.append("categoryName",name)
        data.append("categoryImage",image)
        let obj={
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
        console.log(obj)
        // console.log(data)
        axios.post("http://localhost:4000/apis/category/add",data,obj)
        .then((res)=>{
            console.log(res)
            if(res.data.success==true)
            {
                toast.success(res.data.message)
                setName("") 
                //  this  will empty form
                setImage({})
                setImageName("")
                
                nav("/managecategory")

            }else{
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
              Add <span>Category</span>
            </h4>
        <form action="#" method="post" onSubmit={handleForm}>
              <div className="styled-input agile-styled-input-top">
                
              </div>

            <div className="styled-input">
                <input type="text" name="Name" required="" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <label>Category Name</label>
                <span />
            </div>

            <div className="styled-input">
                <input type="file" name="image" required="" value={imageName} onChange={changeImage} />
                <label>Category Image</label>
                <span />
            </div>

            <div className="styled-input ">
               
            </div>
              <input type="submit" defaultValue="SEND" />
        </form>
</div>
       
        <div className="clearfix"> </div>

            <ToastContainer
             position="bottom-left"
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