import React from "react";
import "./App.css";
import Content from "./Component/Content";
function App(){
  return(
    <div id="container">
      <Content/>
    </div>
  )
}
// function Numberone(props) {
//   return (
//     <div>
//       <div className="col-md-3 col-md-3 col-md-3 col-md-3">
//         <img src={props.linkanh} height="300px" width="300px" class="img-responsive" alt="Image" />
//         <p>{props.tieude}</p>
//         <p>Giá sản phẩm: 400k</p>
//       </div>
//     </div>
//   )
// }
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//           <div className="row">
//             <Numberone tieude="Sản phẩm 1" linkanh="https://linhnga.vn/wp-content/uploads/2020/12/HNL266-Vay-cuoi-lam-le-luxury.jpg"></Numberone>
//             <Numberone tieude="Sản phẩm 2" linkanh="https://aocuoicodau.com/image/cache/catalog/danh-muc-sp/banner-ao-cuoi-12-390x570.jpg"></Numberone>
//             <Numberone tieude="Sản phẩm 3" linkanh="https://khoaocuoi.com/wp-content/uploads/2017/10/Ao-cuoi-luxury-L034.jpg"></Numberone>
//             <Numberone tieude="Sản phẩm 4" linkanh="https://mai.wedding/wp-content/uploads/2020/12/IMG_1122.jpg"></Numberone>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default App;
