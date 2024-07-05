    import {  CDN_URL } from "../utils/constants";

    const Itemlist=( {items})=>{
   
   return(
<div>
   {items.map((item) =>(
    <div 
    key ={item.card.info.id} className=" p-4 m-4   border-gray-200 border-b-2 text-left flex  justify-between  ">

      
      
         <div className = "w-9/12">
            <div>
    <span className="font-semibold text-lg">{item.card.info.name}</span> <br></br>
    <span className="font-semibold text-lg"> -₹ {item.card.info.defaultPrice ?
    item.card.info.defaultPrice/100: item.card.info.price/100}</span>
       
    </div>
    <p className="text-s p-2 ">{item.card.info.description}</p>
    </div>
    <div className=" w-3/12   p-4 "> 
    <div className="absolute  bottom">
    <button className=" px-4  py-2 mx-16 rounded-lg bg-white font-extrabold text-green-500  text-lg ">ADD +</button>
    </div>
    <img src={ CDN_URL + item.card.info.imageId} className="  float-right  rounded-md  w-25">
      </img> 
      
      </div> 
</div> 
    
   ))}
</div>

    );
 }
 export default Itemlist;