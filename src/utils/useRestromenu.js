import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

 const  useRestromenu =(resId)=>{
   
    const [resinfo,setresinfo] = useState(null);
   //fetch data - we will fetch the data in a similar way as we used to do ina component
useEffect(()=>{
    fetchdata();
},[]);
const fetchdata = async() =>{
    const data = await  fetch( MENU_API+ resId);
        const json = await data.json();
        console.log(json);
        setresinfo(json.data);
  };



    return resinfo;
 }
 export default useRestromenu;