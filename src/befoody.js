import React from"react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";// if u dont put extension over here still it will work
import Body from "./component/Body";

  const Applayout =()=>// 1st we will  build top level component
{
    return(
        <div className="app">

{Header()}
{Body()}

        </div>
    );
};
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>) ;         