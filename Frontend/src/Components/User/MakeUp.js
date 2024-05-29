// 
// Lip makeup
// Eye makeup
// face makeup
// brushes & tools
// nail

import { Fragment, useEffect, useState } from "react";
import ApiServices from "../ApiServices";

export default function MakeUp(){
const [data,setData]=useState([])

useEffect(
    ()=>{
    // console.log("btn")
getData()
},[]
)

    const getData=()=>{
        ApiServices.allcategory(data)
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
             
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to={0} className="active" />
      <li data-target="#myCarousel" data-slide-to={1} className="" />
      <li data-target="#myCarousel" data-slide-to={2} className="" />
      <li data-target="#myCarousel" data-slide-to={3} className="" />
      <li data-target="#myCarousel" data-slide-to={4} className="" />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              The Biggest <span>Sale</span>
            </h3>
            <p>Special for today</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="item item2">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              Summer <span>Collection</span>
            </h3>
            <p>New Arrivals On Sale</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="item item3">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              The Biggest <span>Sale</span>
            </h3>
            <p>Special for today</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="item item4">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              Summer <span>Collection</span>
            </h3>
            <p>New Arrivals On Sale</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="item item5">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              The Biggest <span>Sale</span>
            </h3>
            <p>Special for today</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
    <a
      className="left carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="prev"
    >
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="right carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="next"
    >
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
    {/* The Modal */}
  </div>
  {/* //banner */}
            <div className="col-md-3 product-men">
       
            <div className="men-pro-item simpleCart_shelfItem">
              <div className="men-thumb-item">
                <img src="/assets/images/m-1.webp" alt="" className="pro-image-front"  style={{height:"300px", width:"300px"}} />
                <img src="/assets/images/m-1.webp" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
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
                  <a href="single.html">Eye Makeup</a>
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
                <img src="/assets/images/m-2.webp" alt="" className="pro-image-front"  style={{height:"300px", width:"300px"}} />
                <img src="/assets/images/m-2.webp" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
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
                  <a href="single.html">Face Makeup</a>
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
                <img src="/assets/images/m-3.webp" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                <img src="/assets/images/m-3.webp" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
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
                  <a href="single.html">Lip Makeup</a>
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
                <img src="/assets/images/m-4.webp" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                <img src="/assets/images/m-4.webp" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
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
                  <a href="single.html">Nail </a>
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
                <img src="/assets/images/m-5.webp" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                <img src="/assets/images/m-5.webp" alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
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
                  <a href="single.html">Brushes & Tools </a>
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
  <div className="banner_bottom_agile_info">
    <div className="container">
      <div className="banner_bottom_agile_info_inner_w3ls">
        <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
          <figure className="effect-roxy">
            <img src="/assets/images/bottom1.jpg" alt=" " className="img-responsive" />
            <figcaption>
              <h3>
                <span>F</span>all Ahead
              </h3>
              <p>New Arrivals</p>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
          <figure className="effect-roxy">
            <img src="/assets/images/bottom2.jpg" alt=" " className="img-responsive" />
            <figcaption>
              <h3>
                <span>F</span>all Ahead
              </h3>
              <p>New Arrivals</p>
            </figcaption>
          </figure>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/* schedule-bottom */}

            {/* /we-offer */}
  <div className="sale-w3ls">
    <div className="container">
      <h6>
        We Offer Flat <span>40%</span> Discount
      </h6>
      <a className="hvr-outline-out button2" href="single.html">
        Shop Now{" "}
      </a>
    </div>
  </div>
  {/* //we-offer */}
          </Fragment>
          )
        )

        }
       
    
  
      
  

        </>
    )
}