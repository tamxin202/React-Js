import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="baneer-w3ls">
        <div className="row no-gutters">
          <div className="col-xl-5 col-lg-6">
            <div className="banner-left-w3">
              <div className="container">
                <div className="banner-info_agile_w3ls">
                  <h5>Only Fresh Burgers</h5>
                  <h3 className="text-da mb-4">Flame <span>Grilled Burger</span> </h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium</p>
                  <a href="about.html" className="button-w3ls active mt-5">Read More
                    <span className="fa fa-caret-right ml-1" aria-hidden="true" />
                  </a>
                  <a href="menu.html" className="button-w3ls mt-5 ml-2">Order Now
                    <span className="fa fa-caret-right ml-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 callbacks_container">
            {/* banner slider */}
            <div className="csslider infinity" id="slider1">
              <input type="radio" name="slides" defaultChecked="checked" id="slides_1" />
              <input type="radio" name="slides" id="slides_2" />
              <input type="radio" name="slides" id="slides_3" />
              <ul className="banner_slide_bg">
                <li>
                  <div className="banner-top1" />
                </li>
                <li>
                  <div className="banner-top2" />
                </li>
                <li>
                  <div className="banner-top3" />
                </li>
              </ul>
              <div className="arrows">
                <label htmlFor="slides_1" />
                <label htmlFor="slides_2" />
                <label htmlFor="slides_3" />
              </div>
              <div className="navigation">
                <div>
                  <label htmlFor="slides_1" />
                  <label htmlFor="slides_2" />
                  <label htmlFor="slides_3" />
                </div>
              </div>
            </div>
            {/* //banner slider */}
          </div>
        </div>
      </div>
        );
    }
}

export default Banner;