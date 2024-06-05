export default function Home(){
    return(
        <>
  {/* Modal1 */}
  <div className="modal fade" id="myModal" tabIndex={-1} role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body modal-body-sub_agile">
          <div className="col-md-8 modal_body_left modal_body_left1">
            <h3 className="agileinfo_sign">
              Sign In <span>Now</span>
            </h3>
            <form action="#" method="post">
              <div className="styled-input agile-styled-input-top">
                <input type="text" name="Name" required="" />
                <label>Name</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="email" name="Email" required="" />
                <label>Email</label>
                <span />
              </div>
              <input type="submit" defaultValue="Sign In" />
            </form>
            <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
              <li>
                <a href="#" className="facebook">
                  <div className="front">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </div>
                  <div className="back">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <div className="front">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </div>
                  <div className="back">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <div className="front">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </div>
                  <div className="back">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="pinterest">
                  <div className="front">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </div>
                  <div className="back">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </div>
                </a>
              </li>
            </ul>
            <div className="clearfix" />
            <p>
              <a href="#" data-toggle="modal" data-target="#myModal2">
                {" "}
                Don't have an account?
              </a>
            </p>
          </div>
          <div className="col-md-4 modal_body_right modal_body_right1">
            <img src="/assets/images/log_pic.jpg" alt=" " />
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //Modal content*/}
    </div>
  </div>
  {/* //Modal1 */}
  {/* Modal2 */}
  <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body modal-body-sub_agile">
          <div className="col-md-8 modal_body_left modal_body_left1">
            <h3 className="agileinfo_sign">
              Sign Up <span>Now</span>
            </h3>
            <form action="#" method="post">
              <div className="styled-input agile-styled-input-top">
                <input type="text" name="Name" required="" />
                <label>Name</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="email" name="Email" required="" />
                <label>Email</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="password" name="password" required="" />
                <label>Password</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="password" name="Confirm Password" required="" />
                <label>Confirm Password</label>
                <span />
              </div>
              <input type="submit" defaultValue="Sign Up" />
            </form>
            <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
              <li>
                <a href="#" className="facebook">
                  <div className="front">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </div>
                  <div className="back">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <div className="front">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </div>
                  <div className="back">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <div className="front">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </div>
                  <div className="back">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="pinterest">
                  <div className="front">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </div>
                  <div className="back">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </div>
                </a>
              </li>
            </ul>
            <div className="clearfix" />
            <p>
              <a href="#">By clicking register, I agree to your terms</a>
            </p>
          </div>
          <div className="col-md-4 modal_body_right modal_body_right1">
            <img src="/assets/images/log_pic.jpg" alt=" " />
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //Modal content*/}
    </div>
  </div>
  {/* //Modal2 */}
  {/* banner */}
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
  <div className="banner_bottom_agile_info">
    <div className="container">
      <div className="banner_bottom_agile_info_inner_w3ls">
        <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
          <figure className="effect-roxy">
            <img src="/assets/images/br1.jpg" alt=" " className="img-responsive" />
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
            <img src="/assets/images/br2.jpg" alt=" " className="img-responsive" />
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
  <div className="schedule-bottom">
    <div className="col-md-6 agileinfo_schedule_bottom_left">
      <img src="/assets/images/mid.jpg" alt=" " className="img-responsive" />
    </div>
    <div className="col-md-6 agileits_schedule_bottom_right">
      <div className="w3ls_schedule_bottom_right_grid">
        <h3>
          Save up to <span>50%</span> in this week
        </h3>
        <p>
          Suspendisse varius turpis efficitur erat laoreet dapibus. Mauris
          sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus
          posuere.
        </p>
        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
          <i className="fa fa-user-o" aria-hidden="true" />
          <h4>Customers</h4>
          <h5 className="counter">653</h5>
        </div>
        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
          <i className="fa fa-calendar-o" aria-hidden="true" />
          <h4>Events</h4>
          <h5 className="counter">823</h5>
        </div>
        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
          <i className="fa fa-shield" aria-hidden="true" />
          <h4>Awards</h4>
          <h5 className="counter">45</h5>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="clearfix"> </div>
  </div>
  {/* //schedule-bottom */}
  {/* banner-bootom-w3-agileits */}
  <div className="banner-bootom-w3-agileits">
    <div className="container">
      <h3 className="wthree_text_info">
        What's <span>Trending</span>
      </h3>
      <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
        <a href="womens.html">
          <div className="bb-left-agileits-w3layouts-inner grid">
            <figure className="effect-roxy">
              <img src="/assets/images/br6.jpg" alt=" " className="img-responsive" />
              <figcaption>
                <h3>
                  <span>S</span>ale{" "}
                </h3>
                <p>Upto 55%</p>
              </figcaption>
            </figure>
          </div>
        </a>
      </div>
      <div className="col-md-7 bb-grids bb-middle-agileits-w3layouts">
        <a href="mens.html">
          <div className="bb-middle-agileits-w3layouts grid">
            <figure className="effect-roxy">
              <img
                src="/assets/images/br7.jpg"
                alt=" "
                className="img-responsive"
              />
              <figcaption>
                <h3>
                  <span>S</span>ale{" "}
                </h3>
                <p>Upto 55%</p>
              </figcaption>
            </figure>
          </div>
        </a>
        <a href="mens.html">
          <div className="bb-middle-agileits-w3layouts forth grid">
            <figure className="effect-roxy">
              <img
                src="/assets/images/nail11.jpg"
                alt=" "
                className="img-responsive"
              />
              <figcaption>
                <h3>
                  <span>S</span>ale{" "}
                </h3>
                <p>Upto 65%</p>
              </figcaption>
            </figure>
          </div>
        </a>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/*/grids*/}
  <div className="agile_last_double_sectionw3ls">
    <div className="col-md-6 multi-gd-img multi-gd-text ">
      <a href="womens.html">
        <img src="/assets/images/br9.jpg" alt=" " />
        <h4>
          Flat <span>50%</span> offer
        </h4>
      </a>
    </div>
    <div className="col-md-6 multi-gd-img multi-gd-text ">
      <a href="womens.html">
        <img src="/assets/images/n1.jpg" alt=" " />
        <h4>
          Flat <span>50%</span> offer
        </h4>
      </a>
    </div>
    <div className="clearfix" />
  </div>
  {/*/grids*/}
  {/* /new_arrivals */}
  <div className="new_arrivals_agile_w3ls_info">
    <div className="container">
      <h3 className="wthree_text_info">
        New <span>Arrivals</span>
      </h3>
      <div id="horizontalTab">
        <ul className="resp-tabs-list">
          <li> Men's</li>
          <li> Women's</li>
          <li> Bags</li>
          <li> Footwear</li>
        </ul>
        <div className="resp-tabs-container">
          {/*/tab_one*/}
          <div className="tab1">
            <div className="col-md-3 product-men">
              <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item">
                  <img src="/assets/images/m1.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/m1.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Formal Blue Shirt</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$45.99</span>
                    <del>$69.71</del>
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
                          defaultValue="Formal Blue Shirt"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/m2.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/m2.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Gabi Full Sleeve Sweatshirt</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$45.99</span>
                    <del>$69.71</del>
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
                          defaultValue="Sweatshirt"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/m3.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/m3.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Dark Blue Track Pants</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$80.99</span>
                    <del>$89.71</del>
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
                          defaultValue="Dark Blue Track Pants"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/m4.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/m4.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Round Neck Black T-Shirt</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$190.99</span>
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
                          defaultValue="Black T-Shirt"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/m5.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/m5.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Men's Black Jeans</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$60.99</span>
                    <del>$90.71</del>
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
                          defaultValue="Men's Black Jeans"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/m7.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/m7.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Analog Watch</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$160.99</span>
                    <del>$290.71</del>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/m6.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/m6.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Reversible Belt</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$30.99</span>
                    <del>$50.71</del>
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
                          defaultValue="Reversible Belt"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/m8.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/m8.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Party Men's Blazer</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$260.99</span>
                    <del>$390.71</del>
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
                          defaultValue="Party Men's Blazer"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
          </div>
          {/*//tab_one*/}
          {/*/tab_two*/}
          <div className="tab2">
            <div className="col-md-3 product-men">
              <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item">
                  <img src="/assets/images/w1.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/w1.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">A-line Black Skirt</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$130.99</span>
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
                          defaultValue="A-line Black Skirt"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/w2.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/w2.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Sleeveless Solid Blue Top</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$140.99</span>
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
                          defaultValue="Sleeveless Solid Blue Top"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/w3.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/w3.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Skinny Jeans</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$150.99</span>
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
                          defaultValue="Skinny Jeans "
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/w4.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/w4.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Black Basic Shorts</a>
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
                          defaultValue="Black Basic Shorts"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/w5.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/w5.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Pink Track Pants</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/w6.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/w6.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Analog Watch</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/w7.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/w7.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Ankle Length Socks</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/w8.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/w8.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Reebok Women's Tights</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
          </div>
          {/*//tab_two*/}
          <div className="tab3">
            <div className="col-md-3 product-men">
              <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item">
                  <img src="/assets/images/b1.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/b1.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Laptop Messenger Bag</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$140.99</span>
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
                          defaultValue=" Laptop Messenger Bag"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/b2.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/b2.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Puma Backpack</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$127.99</span>
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
                          defaultValue="Puma Backpack"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/b3.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/b3.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html"> Laptop Backpack</a>
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
                          defaultValue=" Laptop Backpack"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/b4.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/b4.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Travel Duffel Bag </a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$190.99</span>
                    <del>$259.71</del>
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
                          defaultValue="Travel Duffel Bag "
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/b5.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/b5.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html"> Hand-held Bag </a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$190.99</span>
                    <del>$259.71</del>
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
                          defaultValue=" Hand-held Bag "
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/b6.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/b6.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Butterflies Bag </a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$190.99</span>
                    <del>$259.71</del>
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
                          defaultValue="Butterflies Bag"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/b7.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/b7.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Costa Swiss Bag </a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$290.99</span>
                    <del>$359.71</del>
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
                          defaultValue="Costa Swiss Bag"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/b8.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/b8.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Noble Designs Bag </a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$120.99</span>
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
                          defaultValue="Noble Designs Bag "
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
          </div>
          <div className="tab4">
            <div className="col-md-3 product-men">
              <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item">
                  <img src="/assets/images/s1.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/s1.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Running Shoes</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$80.99</span>
                    <del>$89.71</del>
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
                          defaultValue="Running Shoes"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/s2.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/s2.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Shoetopia Lace Up</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$90.99</span>
                    <del>$59.71</del>
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
                          defaultValue="Shoetopia Lace Up"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/s3.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/s3.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Steemo Casuals(Black)</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$90.99</span>
                    <del>$59.71</del>
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
                          defaultValue="Steemo Casuals (Black)"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/s4.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/s4.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Benetton Flip Flops</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$40.99</span>
                    <del>$99.71</del>
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
                          defaultValue="Benetton Flip Flops"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/s5.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/s5.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Moonwalk Bellies </a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$80.99</span>
                    <del>$99.71</del>
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
                          defaultValue="Moonwalk Bellies"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/s6.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/s6.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Aero Canvas Loafers</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$120.99</span>
                    <del>$199.71</del>
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
                          defaultValue="Aero Canvas Loafers"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/s7.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/s7.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Sparx Sporty Canvas Shoes</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$160.99</span>
                    <del>$199.71</del>
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
                          defaultValue="Sparx Sporty Canvas Shoes"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/s8.jpg" alt="" className="pro-image-front" />
                  <img src="/assets/images/s8.jpg" alt="" className="pro-image-back" />
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
                    <a href="single.html">Women BLACK Heels</a>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">$180.99</span>
                    <del>$199.71</del>
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
                          defaultValue="Women BLACK Heels"
                        />
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* //new_arrivals */}
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
  {/*/grids*/}
  <div className="coupons">
    <div className="coupons-grids text-center">
      <div className="w3layouts_mail_grid">
        <div className="col-md-3 w3layouts_mail_grid_left">
          <div className="w3layouts_mail_grid_left1 hvr-radial-out">
            <i className="fa fa-truck" aria-hidden="true" />
          </div>
          <div className="w3layouts_mail_grid_left2">
            <h3>FREE SHIPPING</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-md-3 w3layouts_mail_grid_left">
          <div className="w3layouts_mail_grid_left1 hvr-radial-out">
            <i className="fa fa-headphones" aria-hidden="true" />
          </div>
          <div className="w3layouts_mail_grid_left2">
            <h3>24/7 SUPPORT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-md-3 w3layouts_mail_grid_left">
          <div className="w3layouts_mail_grid_left1 hvr-radial-out">
            <i className="fa fa-shopping-bag" aria-hidden="true" />
          </div>
          <div className="w3layouts_mail_grid_left2">
            <h3>MONEY BACK GUARANTEE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-md-3 w3layouts_mail_grid_left">
          <div className="w3layouts_mail_grid_left1 hvr-radial-out">
            <i className="fa fa-gift" aria-hidden="true" />
          </div>
          <div className="w3layouts_mail_grid_left2">
            <h3>FREE GIFT COUPONS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/*grids*/}
</>

    )
}