import axios from "axios"
import * as qs from "qs"

export const BASE_URL ="http://localhost:4000/"
class ApiServices{

    allcategory()
    {
        return axios.post(BASE_URL+"apis/category/getall")
    }

    singlecategory(data)
    {
        return axios.post(BASE_URL+"apis/category/getsingledata",data)
    }

    updatecategory(data){
    let obj={
        Authorization:localStorage.getItem("token")
    }
    // console.log(obj)
    
        return axios.post(BASE_URL+"apis/category/update",data,{headers:obj})
        // JSON (Stringify)
        // qs (query string) for API
        
    }

    DeleteCategory(data)
    {
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/category/softdelete",data,{headers:obj})

    }

    allsubcategory(data)
    {
        return axios.post(BASE_URL+"apis/subcategory/getall",data)
    }

    singlesubcategory(data)
    {
        return axios.post(BASE_URL+"apis/subcategory/getsingledata",data)
    }

    updatesubcategory(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        // console.log(obj)
        
            return axios.post(BASE_URL+"apis/subcategory/update",data,{headers:obj})
            
        }

        deletesubcategory(data)
        {
            let obj={
                Authorization:localStorage.getItem("token")
            }
            return axios.post(BASE_URL+"apis/subcategory/softdelete",data,{headers:obj})
    
        }

   allproduct()
        {
            return axios.post(BASE_URL+"apis/product/getall")
        }

    singleproduct(data)
        {
            return axios.post(BASE_URL+"apis/product/getsingledata",data)
        }
    
    updateproduct(data){
            let obj={
                Authorization:localStorage.getItem("token")
            }
            // console.log(obj)
            
                return axios.post(BASE_URL+"apis/product/update",data,{headers:obj})
                
            }

    DeleteProduct(data)
                {
                let obj={
                    Authorization:localStorage.getItem("token")
                }
                return axios.post(BASE_URL+"apis/product/softdelete",data,{headers:obj})

    }
    allcoupon()
    {
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/coupon/getall",{},{headers:obj})
    }

    singlecoupon(data)
    {
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/coupon/getsingledata",data,{headers:obj})
    }

    updatecoupon(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        // console.log(obj)
        
            return axios.post(BASE_URL+"apis/coupon/update",data,{headers:obj})
            
        }

      deletecoupon(data)
            {
            let obj={
                Authorization:localStorage.getItem("token")
            }
            return axios.post(BASE_URL+"apis/coupon/softdelete",data,{headers:obj})

    }

    login(data){
        return axios.post(BASE_URL+"apis/user/login",data)

    }

    register(data){
        return axios.post(BASE_URL+"apis/user/register",data)

    }


    
    addcoupon(){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/coupon/add",{},{headers:obj})

    }
}   

export default new ApiServices