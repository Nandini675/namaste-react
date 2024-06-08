import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header =()=>{
//  let btnname= "login";
const [btnnamereact,setbtnnamereact] = useState("Login");
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