const Card = (props) => {
     return (
       <>
         <div>
           <img src={props.image} />
           <p>{props.nameItem}</p>
           <p>{props.price}</p>
           <button >Mua ngay</button>
         </div>     
       </>
     );
}
export default Card
// import './Card.css';
// function Card(props){
//      return (
//        <>
//          <div className='card'>
//            <img src={props.linkimg} alt="" />
//            <h3>{props.namepro} </h3>
//            <h4>{props.price} </h4>
//          </div>
         
//        </>
//      );
// }
// export default Card;