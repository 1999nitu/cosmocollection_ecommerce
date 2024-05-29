import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import axios from "axios"
import { toast } from "react-toastify"

export default function AddProduct(){
    const [allCategory,setAllCategory]=useState([])
    const [categoryId,setCategoryId]=useState("")
    const [data,setData]=useState("")
    const [allSubCategory,setAllSubCategory]=useState([])

    const [name,setName]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    const [brand,setBrand]=useState("")
    const [price,setPrice]=useState("")
    const [quantity,setQuantity]=useState("")


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
    if(!!categoryId){
        let data={
            categoryId:categoryId
        }
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


const changeImage=(e)=>{
    setImageName(e.target.value)
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
}
const handleForm=(e)=>{
    {header:{
        Authorization:token
    }}
    e.preventDefault()

    // store form data
    let data=new FormData()
    data.append("categoryName",name)
    data.append("categoryImage",image)
    data.append("price",price)
    data.append("quantity",quantity)
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
                    
                    setBrand("") 
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

                <br/>
                <br/>

                <label>Image</label>
                <input type="file" value={imageName} onChange={changeImage}/>

                <br/>
                <br/>

                <label>Price</label>
                <input  type="number" min={"0"} value={price} onChange={(e)=>{setPrice(e.target.value)}}/>


                <br/>
                <br/>

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
                <select>
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