import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"



export default function AddSubCategory(){
    const [allCategory,setAllCategory]=useState([])
    const [categoryId,setCategoryId]=useState("")


useEffect(()=>{
    getCategory()
},[])
const getCategory=()=>{
    ApiServices.allcategory()
    .then((res)=>{
    if(res.data.success)
    {
        setAllCategory(res.data.data)
    }
    })
    .catch((err)=>{
        console.log(err)
    })
}


 const [name,setName]=useState("")
    const [category,setCategory]=useState("")
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
            data.append("productName",name)
            data.append("productImage",image)
            data.append("categoryId",category)
            

            let obj={
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            }
            console.log(obj)
            // console.log(data)
            axios.post("http://localhost:4000/apis/subcategory/add",data,obj)
            .then((res)=>{
                console.log(res)
                if(res.data.success==true)
                {
                    toast.success(res.data.message)
                    setName("") 
                    setImage({})
                    setImageName("")
                    //  this  will empty form
                    
                    setCategory("") 

                nav("/managesubcategory")

                    
                }else{
                    toast.error(res.data.message)  
                }
            })
            .catch((err)=>{
                console.log(err)
            }) }
    return(
        <>
                <form onSubmit={handleForm}>

                <label>Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}}/>

                <br/> <br/>
               
                <label>Image</label>
                <input type="file" value={imageName} onChange={changeImage}/>

                <br/> <br/>
            
            
                <label>Category</label>
                <select value={categoryId} onChange={(e)=>{setCategoryId(e.target.value)}}>

                    <option selected disabled value={""}>Choose One </option>
                    {allCategory?.map((el,index)=>(
                    <option value={el._id}>{el.categoryName}</option>
                    ))}
                </select>
                <br/>
                <br/>

                <button>submit</button>
            </form>
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