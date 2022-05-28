import React, { Component } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import data from "./data";

function promotion(item) {
  if (item.old_price != 0) {
    return item.old_price + " đ";
  }
}

function datMua() {
  alert("thank you your order");
}

function cards(items) {
  return items.map((item) => (
    <div class="col-4 card-columns d-flex justify-content-center">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img className="card-img-top" src={item.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.code}</p>
          <p className="card-text price">
            {item.price} đ&nbsp;
            <del className="promotion">{promotion(item)}</del>
          </p>
          <a href={"/detail/"+item.id} className="btn btn-warning" onClick={() => datMua()}>
            Đặt mua
          </a>
        </div>
      </div>
    </div>
  ));
}
class Home extends Component {
  render() {
    var nam = [];
    var nu = [];
    var products = this.props.cards;
    for (var i = 0; i < products.length; i++) {
      if (products[i].name_category === "Thời trang nam") {
        nam.push(products[i]);
      } else {
        nu.push(products[i]);
      }
    }
    return (
      <div>
        <div className="container-fluid">
          <h2>THỜI TRANG NAM</h2>
          <hr />
          <div class="row">{cards(nam)}</div>

          <h2>THỜI TRANG NỮ</h2>
          <hr />
          <div class="row">{cards(nu)}</div>
        </div>
      </div>
    );
  }
}

export default Home;
