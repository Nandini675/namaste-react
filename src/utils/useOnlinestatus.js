import { useEffect, useState } from "react";

const  useOnlinestatus =()=>{

    const [onlinestatus,setonlinestatus]=useState(true);
    // cheack online status
 useEffect (()=>{
window.addEventListener("offline",()=>{
    //if i go offline do smthg :to chnage online status and return it, online stsus would be a state variable
    //onlinestatsus ki value  update hokr"false"ho jayegi
    setonlinestatus(false);
});
window.addEventListener("online",()=>{
    setonlinestatus(true);
});

 },[]);
 //boolean value
    return onlinestatus;
};
export default useOnlinestatus;