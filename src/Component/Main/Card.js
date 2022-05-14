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