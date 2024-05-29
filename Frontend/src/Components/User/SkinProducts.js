import { Fragment, useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import Moment from "react-moment"


export default function SkinProducts(){
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
            // console.log(res)
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)

        })

    }

    return(
        <>
    
    <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/lip.webp" alt="" className="pro-image-front" />
              <img src="/assets/images/lip.webp" alt="" className="pro-image-back" />
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
                <a href="single.html">Lip Care</a>
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
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/eye1.webp" alt="" className="pro-image-front" />
              <img src="/assets/images/eye1.webp" alt="" className="pro-image-back" />
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
                <a href="single.html">Eye Care</a>
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
              <img src="/assets/images/pik1.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/pik1.jpg" alt="" className="pro-image-back" />
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
                <a href="single.html">Makeup</a>
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
              <img src="/assets/images/haircare-1.png" alt="" className="pro-image-front" />
              <img src="/assets/images/haircare-1.png" alt="" className="pro-image-back" />
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
                <a href="single.html">Hair Care</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$100.99</span>
                <del>$159.71</del>
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
                      defaultValue="Ankle Length Socks"
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
              <img src="/assets/images/hair_3.webp" alt="" className="pro-image-front" />
              <img src="/assets/images/hair_3.webp" alt="" className="pro-image-back" />
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
                <a href="single.html">Accessories</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$130.99</span>
                <del>$169.71</del>
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
                      defaultValue="Reebok Women's Tights"
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
              <img src="/assets/images/babycare.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/babycare.jpg" alt="" className="pro-image-back" />
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
                <a href="single.html">Mom & Baby</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$100.99</span>
                <del>$159.71</del>
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
                      defaultValue="Ankle Length Socks"
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
              <img src="/assets/images/9952.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/9952.jpg" alt="" className="pro-image-back" />
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
                <a href="single.html">Jewelery</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$100.99</span>
                <del>$159.71</del>
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
                      defaultValue="Ankle Length Socks"
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
      
  

        </>
    )
}

