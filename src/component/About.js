 import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";
// import User from "./user";
 import React from "react";
 class  About extends React.Component {
  constructor(props){
super(props);
// console.log( "parentconstructor");
  }
  componentDidMount(){
    // console.log("parent component did mount");
}
 render(){
    // console.log("parentrender");
    return(
        <div className=" m-4 p-4">
                <h1>About</h1>
                 <div>
                loggedin user  
                <UserContext.Consumer>
                
                 {({loggedinuser}) => <h1 className="text-xl font-bold">{loggedinuser}</h1>}
                </UserContext.Consumer>
                </div> 
                 <h2>
                    This is namaste reactc series
                 </h2>
                
                 <UserClass name={"first(class)"}/>
                
         </div>  
    );
}
 }
 export default About;
// const About= ()=> {
//     return(
//         <div>
//         <h1>About</h1>
//         <h2>
//             This is namaste reactc series
//         </h2>
        
//         <UserClass name={"Nandini sharma (class)"}/>
// </div>
//     );

// };
