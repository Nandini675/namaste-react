import UserClass from "./UserClass";
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
        <div>
                <h1>About</h1>
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
