// hair accessories
// hair Styling
// shampoo & conditioners
// hair care & styling tools

import { Fragment, useEffect, useState } from "react";
import ApiServices from "../ApiServices";

export default function Jewelery(){
const [data,setData]=useState([])
useEffect(
    ()=>{
    // console.log("btn")
getData()
},[]
)

    const getData=()=>{
        ApiServices.allsubcategory(data)
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
       
     {/* //banner */}
     <div className="col-md-3 product-men">
       
       <div className="men-pro-item simpleCart_shelfItem">
         <div className="men-thumb-item">
           <img src="/assets/images/j1.jpeg" alt="" className="pro-image-front"  style={{height:"300px", width:"300px"}} />
           <img src="/assets/images/j1.jpeg" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
           <div className="men-cart-pro">
             <div className="inner-men-cart-pro">
               <a href="/userviewsubcategory" className="link-product-add-cart">
                 Quick View
               </a>
             </div>
           </div>
           <span className="product-new-top">New</span>
         </div>
         <div className="item-info-product ">
           <h4>
             <a href="single.html">Earrings</a>
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
                 {/* <Link to={"/skinproducts/" +el._id}>
                     View
                 </Link> */}
               </fieldset>
             </form>
           </div>
         </div>
       </div>
     </div>
     <div className="col-md-3 product-men">
       <div className="men-pro-item simpleCart_shelfItem">
         <div className="men-thumb-item">
           <img src="/assets/images/j2.png" alt="" className="pro-image-front"  style={{height:"300px", width:"300px"}} />
           <img src="/assets/images/j2.png" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
           <div className="men-cart-pro">
             <div className="inner-men-cart-pro">
               <a href="single.html" className="link-product-add-cart">
                 Quick View
               </a>
             </div>
           </div>
           <span className="product-new-top">New</span>
         </div>
         <div className="item-info-product ">
           <h4>
             <a href="single.html">Pendants</a>
           </h4>
           <div className="info-product-price">
             <span className="item_price">$220.99</span>
             <del>$389.71</del>
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
                   defaultValue="Pink Track Pants"
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
     <div className="col-md-3 product-men">
       <div className="men-pro-item simpleCart_shelfItem">
         <div className="men-thumb-item">
           <img src="/assets/images/j3.webp" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
           <img src="/assets/images/j3.webp" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
           <div className="men-cart-pro">
             <div className="inner-men-cart-pro">
               <a href="single.html" className="link-product-add-cart">
                 Quick View
               </a>
             </div>
           </div>
           <span className="product-new-top">New</span>
         </div>
         <div className="item-info-product ">
           <h4>
             <a href="single.html">Hair Accessories</a>
           </h4>
           <div className="info-product-price">
             <span className="item_price">$320.99</span>
             <del>$489.71</del>
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
                   defaultValue="Analog Watch"
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
     <div className="col-md-3 product-men">
       <div className="men-pro-item simpleCart_shelfItem">
         <div className="men-thumb-item">
           <img src="/assets/images/j4.png" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
           <img src="/assets/images/j4.png" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
           <div className="men-cart-pro">
             <div className="inner-men-cart-pro">
               <a href="single.html" className="link-product-add-cart">
                 Quick View
               </a>
             </div>
           </div>
           <span className="product-new-top">New</span>
         </div>
         <div className="item-info-product ">
           <h4>
             <a href="single.html">Nose Pins & Rings </a>
           </h4>
           <div className="info-product-price">
             <span className="item_price">$320.99</span>
             <del>$489.71</del>
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
                   defaultValue="Analog Watch"
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
     <div className="col-md-3 product-men">
       <div className="men-pro-item simpleCart_shelfItem">
         <div className="men-thumb-item">
           <img src="/assets/images/j5.webp" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
           <img src="/assets/images/j5.webp" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
           <div className="men-cart-pro">
             <div className="inner-men-cart-pro">
               <a href="single.html" className="link-product-add-cart">
                 Quick View
               </a>
             </div>
           </div>
           <span className="product-new-top">New</span>
         </div>
         <div className="item-info-product ">
           <h4>
             <a href="single.html">Teekas </a>
           </h4>
           <div className="info-product-price">
             <span className="item_price">$320.99</span>
             <del>$489.71</del>
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
                   defaultValue="Analog Watch"
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
     <div className="col-md-3 product-men">
       <div className="men-pro-item simpleCart_shelfItem">
         <div className="men-thumb-item">
           <img src="/assets/images/j6.jpeg" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
           <img src="/assets/images/j6.jpeg" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
           <div className="men-cart-pro">
             <div className="inner-men-cart-pro">
               <a href="single.html" className="link-product-add-cart">
                 Quick View
               </a>
             </div>
           </div>
           <span className="product-new-top">New</span>
         </div>
         <div className="item-info-product ">
           <h4>
             <a href="single.html">Anklets </a>
           </h4>
           <div className="info-product-price">
             <span className="item_price">$320.99</span>
             <del>$489.71</del>
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
                   defaultValue="Analog Watch"
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
     <div className="col-md-3 product-men">
       <div className="men-pro-item simpleCart_shelfItem">
         <div className="men-thumb-item">
           <img src="/assets/images/j7.jpeg" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
           <img src="/assets/images/j7.jpeg" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
           <div className="men-cart-pro">
             <div className="inner-men-cart-pro">
               <a href="single.html" className="link-product-add-cart">
                 Quick View
               </a>
             </div>
           </div>
           <span className="product-new-top">New</span>
         </div>
         <div className="item-info-product ">
           <h4>
             <a href="single.html">Hand Accessories</a>
           </h4>
           <div className="info-product-price">
             <span className="item_price">$320.99</span>
             <del>$489.71</del>
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
                   defaultValue="Analog Watch"
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

     <div className="clearfix" />

      {/* //banner */}
                </Fragment>
            )
        )}

        </>
    )
}