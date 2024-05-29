
    
   import { Fragment, useEffect, useState } from "react";
   import ApiServices, { BASE_URL } from "../ApiServices";
   import Moment from "react-moment"
   import { Link, useParams } from "react-router-dom";
   
   
   export default function UserViewProduct(){
   const [data,setData]=useState([])

   const param=useParams()
const c_id=param.id

useEffect(
    ()=>{
      let data={

      }
      if(!!c_id){
        data.subCategoryId=c_id
      }
  
       // console.log("btn")
   getData()
   },[]
   )
   
       const getData=()=>{
           ApiServices.allproduct(data)
           .then((res)=>{
               console.log(res)
               setData(res.data.data)
           })
           .catch((err)=>{
               console.log(err)
   
           })
   
       }
   
       return(
           <>
           {data?.map(
             (el,index)=>(
               <Fragment>
              
               <div className="col-md-3 product-men">
          
                 <div className="men-pro-item simpleCart_shelfItem">
                     <div className="men-thumb-item">
                     <img src={BASE_URL  +el.productImage} alt="" className="pro-image-front"  style={{height:"300px", width:"300px"}} />
                     <img src={ BASE_URL +el.productImage} alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
   
                   <div className="men-cart-pro">
                     <div className="inner-men-cart-pro">
                       <a href="/skincare" className="link-product-add-cart">
                         Quick View
                       </a>
                     </div>
                   </div>
   
                   <span className="product-new-top">New</span>
                 </div>
                 <div className="item-info-product ">
   
                   <h4>
                     <a href="/skincare">{el.productName}</a>
                   </h4>
   
                   <div className="info-product-price">
                     <span className="item_price">$120.99</span>
                     <del>$189.71</del>
                   </div>
                   <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                     <form action="#" method="post">
                       <fieldset>
                         <input type="hidden" name="cmd" defaultValue="_cart" />
                         <input type="hidden" name="add" defaultValue={1} />
                         <input type="hidden" name="business" defaultValue=" " />
   
                         <input
                           type="hidden"
                           name="item_name"
                           defaultValue="Skin Care"
                         />
   
                         <input type="hidden" name="amount" defaultValue="30.99" />
                         <input
                           type="hidden"
                           name="discount_amount"
                           defaultValue={1.0}
                         />
   
                         <input
                           type="hidden"
                           name="currency_code"
                           defaultValue="USD"
                         />
   
                         <input type="hidden" name="return" defaultValue=" " />
                         <input
                           type="hidden"
                           name="cancel_return"
                           defaultValue=" "
                         />
                         
                         <input
                           type="submit"
                           name="submit"
                           defaultValue="Add to cart"
                           className="button"
                         />
                       
                       </fieldset>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
             </Fragment>
             )
           )}
           </>
       )
   }
   
   