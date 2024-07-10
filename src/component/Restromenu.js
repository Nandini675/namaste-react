
import { useState } from "react";

import useRestromenu from "../utils/useRestromenu";
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const  Restromenu =()=>{
 
//  const[resinfo,setresinfo]=useState(null);
 const {resId}=useParams();
 const resinfo =useRestromenu(resId);
 const [showindex,setshowindex] = useState(null);

   
   if  (resinfo===null) return (<Shimmer />);
      const {name,cloudinaryImageId,cuisines,costForTwoMessage} = resinfo?.cards[2]?.card?.card?.info;
   const{itemCards}= resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log( itemCards); 
   const categories= resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
   (c=>c.card?.card?.["@type"]==
    'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )// u caannot name a property with @ in js if u have a prop which is not a variable inside js u can wrap it inside a square bracket
   console.log(categories); 
  return (

      <div className="menu text-center">
        <h1 className="font-bold my-10  text-2xl">{name }</h1> 
        <p className=" font-bold text -lg">{cuisines.join(",")}- {costForTwoMessage}</p> 
        {/* categories accordian */}
        {categories.map ((category,index) => 
          (<ResCategory  key ={category?.card?.card.title}
           data ={category?.card?.card }
          showitems={index == showindex ? true:false}
        // setshowitems={()=>!showitems()}
           setshowindex={()=>setshowindex(index)}
           
           />))}
         
         
       

      </div>  
    );

};
export default Restromenu;