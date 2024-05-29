import React from "react";
import { Link } from "react-router-dom"; 
export default function Header(){
    return(
        <>
  {/* header */}
  <div className="header" id="home">
    <div className="container">
      <ul>
        <li>
          {" "}
          <a href="#" data-toggle="modal" data-target="#myModal">
            <i className="fa fa-unlock-alt" aria-hidden="true" /> Sign In{" "}
          </a>
        </li>
        <li>
          {" "}
          <a href="#" data-toggle="modal" data-target="#myModal2">
            <i className="fa fa-pencil-square-o" aria-hidden="true" /> Sign Up{" "}
          </a>
        </li>
        <li>
          <i className="fa fa-phone" aria-hidden="true" /> Call : 01234567898
        </li>
        <li>
          <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
          <a href="mailto:info@example.com">kaurnavprit5@gmail.com</a>
        </li>
      </ul>
    </div>
  </div>
  {/* //header */}

  {/* header-bot */}
  <div className="header-bot">
    <div className="header-bot_inner_wthreeinfo_header_mid">
      <div className="col-md-4 header-middle">
        <form action="#" method="post">
          <input
            type="search"
            name="search"
            placeholder="Search here..."
            required=""
          />
          <input type="submit" defaultValue=" " />
          <div className="clearfix" />
        </form>
      </div>
      {/* header-bot */}

      <div className="col-md-4 logo_agile">
        <h1>
          <a href="index.html">
            cosmo<span>C</span>ollection{" "}
            <i
              className="fa fa-shopping-bag top_logo_agile_bag"
              aria-hidden="true"
            />
          </a>
        </h1>
      </div>
      {/* header-bot */}
      <div className="col-md-4 agileits-social top_content">
        <ul className="social-nav model-3d-0 footer-social w3_agile_social">
          <li className="share">Share On : </li>
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
      </div>
      <div className="clearfix" />
    </div>
  </div>
  {/* //header-bot */}

  {/* banner */}
  <div className="ban-top">
    <div className="container">
      <div className="top_nav_left">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse menu--shylock"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav menu__list">
                <li className="menu__item ">
                  <Link className="menu__link"  to="/Home">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className=" menu__item">
                  <Link className="menu__link" to="/About">
                    About
                  </Link>
                </li>
                <li className="dropdown menu__item">
                  <Link
                    to="/Mens"
                    className="dropdown-toggle menu__link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Men's wear <span className="caret" />
                  </Link>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="agile_inner_drop_nav_info">
                      <div className="col-sm-6 multi-gd-img1 multi-gd-text ">
                        <a href="mens.html">
                          <img src="/assets/images/top2.jpg" alt=" " />
                        </a>
                      </div>
                      <div className="col-sm-3 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="mens.html">Clothing</a>
                          </li>
                          <li>
                            <a href="mens.html">Wallets</a>
                          </li>
                          <li>
                            <a href="mens.html">Footwear</a>
                          </li>
                          <li>
                            <a href="mens.html">Watches</a>
                          </li>
                          <li>
                            <a href="mens.html">Accessories</a>
                          </li>
                          <li>
                            <a href="mens.html">Bags</a>
                          </li>
                          <li>
                            <a href="mens.html">Caps &amp; Hats</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-3 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="mens.html">Jewellery</a>
                          </li>
                          <li>
                            <a href="mens.html">Sunglasses</a>
                          </li>
                          <li>
                            <a href="mens.html">Perfumes</a>
                          </li>
                          <li>
                            <a href="mens.html">Beauty</a>
                          </li>
                          <li>
                            <a href="mens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="mens.html">Sunglasses</a>
                          </li>
                          <li>
                            <a href="mens.html">Swimwear</a>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </ul>
                </li>
                <li className="dropdown menu__item">
                  <Link
                    to="/Womens"
                    className="dropdown-toggle menu__link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Women's wear <span className="caret" />
                  </Link>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="agile_inner_drop_nav_info">
                      <div className="col-sm-3 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="womens.html">Clothing</a>
                          </li>
                          <li>
                            <a href="womens.html">Wallets</a>
                          </li>
                          <li>
                            <a href="womens.html">Footwear</a>
                          </li>
                          <li>
                            <a href="womens.html">Watches</a>
                          </li>
                          <li>
                            <a href="womens.html">Accessories</a>
                          </li>
                          <li>
                            <a href="womens.html">Bags</a>
                          </li>
                          <li>
                            <a href="womens.html">Caps &amp; Hats</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-3 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <a href="womens.html">Jewellery</a>
                          </li>
                          <li>
                            <a href="womens.html">Sunglasses</a>
                          </li>
                          <li>
                            <a href="womens.html">Perfumes</a>
                          </li>
                          <li>
                            <a href="womens.html">Beauty</a>
                          </li>
                          <li>
                            <a href="womens.html">Shirts</a>
                          </li>
                          <li>
                            <a href="womens.html">Sunglasses</a>
                          </li>
                          <li>
                            <a href="womens.html">Swimwear</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 multi-gd-img multi-gd-text ">
                        <a href="womens.html">
                          <img src="/assets/images/top1.jpg" alt=" " />
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </ul>
                </li>
                <li className="menu__item dropdown">
                  <Link className="menu__link" to="/register" data-toggle="dropdown">
                    Register <b className="caret" />
                  </Link>
                  <ul className="dropdown-menu agile_short_dropdown">
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="/logout">LogOut</a>
                    </li>
                  </ul>
                </li>
                <li className=" menu__item">
                  <Link className="menu__link"  to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="top_nav_right">
        <div className="wthreecartaits wthreecartaits2 cart cart box_1">
          <form action="#" method="post" className="last">
            <input type="hidden" name="cmd" defaultValue="_cart" />
            <input type="hidden" name="display" defaultValue={1} />
            <button
              className="w3view-cart"
              type="submit"
              name="submit"
              value=""
            >
              <i className="fa fa-cart-arrow-down" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
      <div className="clearfix" />
    </div>
  </div>
  {/* //banner-top */}
</>

    )
}