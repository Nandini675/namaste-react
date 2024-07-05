import React, {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";// if u dont put extension over here still it will work
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Restromenu from "./component/Restromenu";
//import Grocery from "./component/Grocery";
import UserContext from "./utils/UserContext";
 

const Grocery = lazy( ()=> import ("./component/Grocery"));

const About = lazy(() =>import("./component/About"));

const Applayout =()=>// 1st we will  build top level component
{
  const [username,setusername] =useState();
  // authentication
  useEffect(()=>{
// make an api call and send username and passwrd
const data={
  name: "dhee"
}
setusername(data.name)
  },[])
    return(
      <UserContext.Provider  value=
      {{loggedinuser:username ,setusername}}>
       
        <div className="app">
  
<Header/>

<Outlet/>

        </div>
        </UserContext.Provider> 
    );
};
const approuter= createBrowserRouter(
  [
    
    {
path: "/",
element:< Applayout/>,// load my home page
children:[
  {
    path:"/",
    element:<Body/>,
  },
  {
    path:"/about",
    element:<About/>,
    
  },
  {
  path:"/contact",
element:<Contact/>,
},
{
  path:"/grocery",
element: (<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>),
},



{
  path:"/restraunts/:resId",
  element:<Restromenu/>,
}

],
errorElement:<Error/>
}
   
    ]
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>) ;         