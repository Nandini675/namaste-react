import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
const Header =()=>{
//  let btnname= "login";
const [btnnamereact,setbtnnamereact] = useState("Login");
console.log("header render");
useEffect(()=>{console.log("useeffect called");},[]
);


    return(
       <div className="header" >
           <div className="logocontainer">
               <img className ="logo"src ={LOGO_URL} ></img>
               </div>
               <div className=" nav-items">
                   <ul>
                       <li>Home</li>
                       <li> Aboutus</li>
                       <li>contact-us</li>
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