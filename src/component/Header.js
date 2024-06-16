import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Header =()=>{
//  let btnname= "login";

console.log("header render");
const [btnnamereact,setbtnnamereact] = useState("Login");
useEffect(()=>{console.log("useeffect called");},[btnnamereact]
);
 const onlinestatus = useOnlinestatus();

    return(
       <div className="header" >
           <div className="logocontainer">
               <img className ="logo"src ={LOGO_URL} ></img>
               </div>
               <div className=" nav-items">
                   <ul>
                    <li>
                         online status : {onlinestatus? "🟢" :"🔴"
                         }
                    </li>
                       <li> <Link to ="/">
                       Home </Link></li>
                       <li><Link to="/about">About Us</Link></li>
                       <li> <Link to ="/contact">contact-us</Link></li>
                       <li><Link to ="/grocery">Grocery
                       </Link></li>
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