import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header id="home">
        {/* top-bar */}
        <div className="top-bar py-2 border-bottom">
          <div className="container">
            <div className="row middle-flex">
              <div className="col-xl-7 col-md-5 top-social-agile mb-md-0 mb-1 text-lg-left text-center">
                <div className="row">
                  <div className="col-xl-3 col-6 header-top_w3layouts">
                    <p className="text-da">
                      <span className="fa fa-map-marker mr-2" />Parma Via, Italy
                    </p>
                  </div>
                  <div className="col-xl-3 col-6 header-top_w3layouts">
                    <p className="text-da">
                      <span className="fa fa-phone mr-2" />+1 000263676
                    </p>
                  </div>
                  <div className="col-xl-6" />
                </div>
              </div>
              <div className="col-xl-5 col-md-7 top-social-agile text-md-right text-center pr-sm-0 mt-md-0 mt-2">
                <div className="row middle-flex">
                  <div className="col-lg-5 col-4 top-w3layouts p-md-0 text-right">
                    {/* login */}
                    <a href="login.html" className="btn login-button-2 text-uppercase text-wh">
                      <span className="fa fa-sign-in mr-2" />Login</a>
                    {/* //login */}
                  </div>
                  <div className="col-lg-7 col-8 social-grid-w3">
                    {/* social icons */}
                    <ul className="top-right-info">
                      <li>
                        <p>Follow Us:</p>
                      </li>
                      <li className="facebook-w3">
                        <a href="#facebook">
                          <span className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li className="twitter-w3">
                        <a href="#twitter">
                          <span className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="google-w3">
                        <a href="#google">
                          <span className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li className="dribble-w3">
                        <a href="#dribble">
                          <span className="fa fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                    {/* //social icons */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-top py-1">
        <div className="container">
          <div className="nav-content">
            {/* logo */}
            <h1>
              <a id="logo" className="logo" href="index.html">
                <img src="images/logo.png" alt="" className="img-fluid" /><span>Tasty</span> Burger
              </a>
            </h1>
            {/* //logo */}
            {/* nav */}
            <div className="nav_web-dealingsls">
              <nav>
                <label htmlFor="drop" className="toggle">Menu</label>
                <input type="checkbox" id="drop" />
                <ul className="menu">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li>
                    {/* First Tier Drop Down */}
                    <label htmlFor="drop-3" className="toggle toogle-2">Pages <span className="fa fa-angle-down" aria-hidden="true" />
                    </label>
                    <a href="#pages">Pages <span className="fa fa-angle-down" aria-hidden="true" /></a>
                    <input type="checkbox" id="drop-3" />
                    <ul>
                      <li><a className="drop-text" href="#services">Services</a></li>
                      <li><a className="drop-text" href="about.html">Our Chefs</a></li>
                      <li><a className="drop-text" href="#blog">Blog</a></li>
                      <li><a className="drop-text" href="single.html">Single Page</a></li>
                      <li><a className="drop-text" href="login.html">Login</a></li>
                      <li><a className="drop-text" href="register.html">Register</a></li>
                    </ul>
                  </li>
                  <li><a href="menu.html">Menu</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li>
                    {/* login */}
                    <a href="https://w3layouts.com/" target="_blank" className="dwn-button ml-lg-5">
                      <span className="fa fa-cloud-download mt-lg-0 mt-4" aria-hidden="true" />
                    </a>
                    {/* //login */}
                  </li>
                </ul>
              </nav>
            </div>
            {/* //nav */}
          </div>
        </div>
      </div>
            </div>
            
        );
    }
}

export default Header;

