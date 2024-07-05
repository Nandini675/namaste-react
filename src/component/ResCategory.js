// import { useSearchParams } from "react-router-dom";
import Itemlist from "./Itemlist";
import { useState } from "react";

// import { CDN_URL } from "../utils/constants";
 const ResCategory =({data,showitems,setshowindex})=> {
    const handleclick=()=>{
      //  setshowitems();
       setshowindex();
    };
 

    return (
         <div>


            {/* header */}
           <div className=" w-9/12 mx-auto my-7  bg-gray-50 shadow-lg  p-4 ">
<div className="flex  justify-between cursor-pointer" onClick={handleclick}>
<span className=" font-bold text-lg">
    {data.title} ({data.itemCards.length})
</span>
<span>⬇️</span>
</div>
{ showitems && <Itemlist items={data.itemCards}  />}
           </div>
           
           
        </div>
    );
    
 }
 export default ResCategory;