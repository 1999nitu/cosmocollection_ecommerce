import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import axios from "axios"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";


export default function AddProduct(){
    const [allCategory,setAllCategory]=useState([])
    const [categoryId,setCategoryId]=useState("")
    const [subCategoryId,setSubCategoryId]=useState("")
    const [data,setData]=useState("")
    const [allSubCategory,setAllSubCategory]=useState([])

  const nav=useNavigate()



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


useEffect(()=>{
    getSubCategory()
},[categoryId])
const getSubCategory=()=>{
    let data={

    }
    if(!!categoryId){
        
          data.categoryId=categoryId
    }

    ApiServices.allsubcategory(data)
    .then((res)=>{
    if(res.data.success)
    {
        setAllSubCategory(res.data.data)
    }
    })
    .catch((err)=>{
        console.log(err)
    })
}

 const [name,setName]=useState("")
    const [brand,setBrand]=useState("")
    const [category,setCategory]=useState("")
    const [subcategory,setSubCategory]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    const [price,setPrice]=useState("")
    const [quantity,setQuantity]=useState("")



    // const token=sessionStorage.getItem("token")
    // if(!token)
    //     {
    //         return <Navigate to={"/login"}/>
    //     }

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
            data.append("price",price)
            data.append("quantity",quantity)
            data.append("categoryId",categoryId)
            data.append("subcategoryId",subCategoryId)
            data.append("brand",brand)

            

            let obj={
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            }
            console.log(obj)
            // console.log(data)
            axios.post("http://localhost:4000/apis/product/add",data,obj)
            .then((res)=>{
                console.log(res)
                if(res.data.success==true)
                {
                    toast.success(res.data.message)
                    setName("") 
                    setImage({})
                    setImageName("")
                    //  this  will empty form
                    setPrice("") 
                    setQuantity("") 
                    setCategory("") 
                    setSubCategory("") 
                    setBrand("") 

                nav("/manageproduct")

                    
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
                 <form onSubmit={handleForm}>

                <label>Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}}/>

                <br/> <br/>
               
                <label>Image</label>
              <input type="file" value={imageName} onChange={changeImage}/>

                <br/>    <br/>
            
                <label>Price</label>
              <input  type="number" min={"0"} value={price} onChange={(e)=>{setPrice(e.target.value)}}/>

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

                <label>Sub-Category</label>
                <select value={subCategoryId} onChange={(e)=>{setSubCategoryId(e.target.value)}}>
                    <option selected disabled value={""}>Choose Sub-cat</option>
                    {allSubCategory?.map((el,index)=>(
                    <option value={el._id}>{el.subcategoryName}-{el?.categoryId?.categoryName}</option>
                  ))}
                </select>
                <br/>
                <br/>

                <label>Brand</label>
                 <input value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>

                <br/>
                <br/>

                <label>Quantity</label>
                <input value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>


                <br/>
                <br/>
                <button>submit</button>
            </form>
        </>
    )
}