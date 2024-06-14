import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Header =()=>{
//  let btnname= "login";

console.log("header render");
const [btnnamereact,setbtnnamereact] = useState("Login");
useEffect(()=>{console.log("useeffect called");},[btnnamereact]
);


    return(
       <div className="header" >
           <div className="logocontainer">
               <img className ="logo"src ={LOGO_URL} ></img>
               </div>
               <div className=" nav-items">
                   <ul>
                       <li> <Link to ="/">
                       Home </Link></li>
                       <li><Link to="/about">About Us</Link></li>
                       <li> <Link to ="/contact">contact-us</Link></li>
                       <li> cart</li>
                       <button className="log" onClick={()=>{  btnnamereact=="Login"?setbtnnamereact("Logout") : setbtnnamereact("Login");
                        // console.log(btnnamereact);
                       }
                    }> {btnnamereact}
                       </button>
                   </ul>

               </div>
       </div>
    );
};
export default Header;