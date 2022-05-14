import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Menu  from './Component/Menu/Menu';
import Card from './Component/Main/Card';
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
var vinh;
function App() {
  const [listProduct,setListProduct] = useState([]); 
  const [type, setType] = useState('') 
  const getData = () => {
    axios.get("https://61bfebc9b25c3a00173f4f54.mockapi.io/items")
      .then((res) => {
        setListProduct(res.data);
      });
  }
  useEffect(() => {
    console.info(Math.random())
    getData()
  },[])
 
  const changeTypeProduct=(type)=>{
    // var Category = [];
    // for(var i = 0; i<vinh.length;i++){
    //   if (vinh[i].type === type) {
    //     Category.push(vinh[i]);
    //   }
    // }
    // setListProduct(
    //    listProduct.filter(product => product.type==type)
    //   );
    setType(type)
  }
  return (
    <>
      <Header link_image="/NCBF-Logo.png" />
      <Menu />
      <button
        onClick={() => {
          changeTypeProduct("Thoi trang nam");
        }}
      >
        Thời trang Nam
      </button>
      <button
        onClick={() => {
          changeTypeProduct("Thoi trang nu");
        }}
      >
        {" "}
       Thời trang Nữ
      </button>
      <button
        onClick={() => {
          changeTypeProduct("hoccu");
        }}
      >
        Dụng cụ học tập
      </button>
      <button
        onClick={() => {
          changeTypeProduct("dochoi");
        }}
      >
        Đồ chơi trẻ em
      </button>
     
      <div class="row">
        {type == ""
          ? listProduct.map((product) => (
              <Card
                image={product.image}
                nameItem={product.nameItem}
                price={product.price}
              />
            ))
          : listProduct
              .filter((product) => product.type == type)
              .map((product) => (
                <Card
                  image={product.image}
                  nameItem={product.nameItem}
                  price={product.price}
                />
              ))}
      </div>
    </>
  );
}

export default App;
