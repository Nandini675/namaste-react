import { LOGO_URL } from "../utils/constants";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
//  import { Provider } from 'react-redux';

const Header =()=>{
//  let btnname= "login";

// console.log("header render");
const [btnnamereact,setbtnnamereact] = useState("Login");
useEffect(()=>{console.log("useeffect called");},[btnnamereact]
);
 const onlinestatus = useOnlinestatus();
 const {loggedinuser}= useContext(UserContext);
 console.log(loggedinuser);
  // subscribing to the store using a selector
  const cartitems = useSelector((store) =>  store.cart.items); 
console.log(cartitems);
  return(
       <div className="flex  justify-between bg-purple-200 shadow-lg m-2
       " >
           <div className="logocontainer">
               <img className ="w-40"src ={LOGO_URL} ></img>
               </div>
               <div className=" flex items-center ">
                   <ul className="flex p-4  m-4">
                    <li className=" px-4 border-x-4 border-y-2 border-spacing-[15px 50px]  py-4 m-4 rounded-lg cursor-pointer">
                         online status : {onlinestatus? "🟢" :"🔴"
                         }
                    </li>
                       <li className=" px-4  m-4 border-x-4 border-y-2  border-spacing-[15px 50px]  py-2 rounded-lg cursor-pointer"> <Link to ="/">
                       Home </Link></li>
                       <li className=" px-4  m-4 shadow-lg border-y-2 border-x-4  border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer" ><Link to="/about">About Us</Link></li>
                       <li className=" px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer"> <Link to ="/contact">contact-us</Link></li>
                       <li className=" px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer "><Link to ="/grocery">Grocery
                       </Link></li>
                       <li className=" px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer">  < Link to="/cart">Cart 🛒:({cartitems.length}items)</Link></li>
                       <button className="log   m-4 px-4  shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg  cursor-pointer" onClick={()=>{  btnnamereact=="Login"?setbtnnamereact("Logout") : setbtnnamereact("Login");
                        // console.log(btnnamereact);
                       }
                    }> {btnnamereact}
                       </button>
                       <li className=" px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer">{loggedinuser}</li>
                   </ul>

               </div>
       </div>
    );
};
export default Header;