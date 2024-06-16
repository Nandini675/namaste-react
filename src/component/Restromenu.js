import useRestromenu from "../utils/useRestromenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const  Restromenu =()=>{
 
//  const[resinfo,setresinfo]=useState(null);
 const {resId}=useParams();
 const resinfo =useRestromenu(resId);
 

   
   if  (resinfo===null) return (<Shimmer />);
      const {name,cloudinaryImageId,cuisines,costForTwoMessage} = resinfo?.cards[2]?.card?.card?.info;
   const{itemCards}= resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(itemCards);  
   return (

      <div className="menu">
        <h1>{name}</h1> 
        
          <img  className="imgo" alt="restro" src={cloudinaryImageId}>
          </img>
       
        
         
         <h3>{cuisines.join(",")}</h3> 
         <h3>{costForTwoMessage}</h3> 
        <h2>menu</h2> 
        <ul>
          {itemCards.map((item)=> (<li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>))}
            {/* <li>{itemCards[0]?.card?.info?.name}</li>
            <li>{itemCards[1]?.card?.info?.name}</li>
            <li>{itemCards[2]?.card?.info?.name}</li> */}
        </ul>

      </div>  
    );

};
export default Restromenu;