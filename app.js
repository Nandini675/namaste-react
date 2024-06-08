
import React from"react";// these are coming from the react module of n
import ReactDOM from "react-dom/client";
/***
 * <div id="parent">
 * <div id="child">
 * <h1>"i m h1 tag"</h1>
 * <h2>" i m h2 tag"</h2>
 * 
 *  <div id="child 2">
 * <h1>"i m h1 tag"</h1>
 * <h2>" i m h2 tag"</h2>
 * </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 * 
 */
// creatiing the nested strc
// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"mera naam jaco hai"),React.createElement("h2",{},"i m h2 tag")],React.createElement("div",{id:"child 2"},[React.createElement("h1",{},"i m h1 tag"),React.createElement("h2",{},"i m h2 tag")])));
// console.log(parent);
// const  root= ReactDOM.createRoot(document.getElementById("root"));// root is the plae where all react code will run
// root.render(parent);
//***************************************************** */
// episode 2
// React.createElement =object=Htmlelement(render)
// const heading =React.createElement("h1",{id:"heading"},"aaj 26 tareek hai");
// console.log(heading);
// const name="shreya";
// const  data= api.getData();
const HeadingComponent =() => 
    (  <div id="container">
       {/* <Title />  */}
      {/* <h2> { name+"30"}</h2> */}
     {/* {jsxheading} */}
      {/* {data} */}
      {Title()}

    <h1 className= "heading"> "namste react functional component" 
    </h1>
     </div>
   );

// react   functionalcomponent
const Title = ()=>(<h1  className="head" >
    "good nyt from jsx
 subha ke ek baj gye"
 
</h1>);
// JSX-html like syntax
const jsxheading =(<h1  className="head" >
"good nyt 
so jao sab"
<HeadingComponent/>
</h1>);
// these 2 function r same
// const fn1=()=>true;

// const fun2=()=>{
//     return true;
// };

// console.log(jsxheading);
const root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(jsxheading);
root.render(<HeadingComponent/>);// way to render react component

