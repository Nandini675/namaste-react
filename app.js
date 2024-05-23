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
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"i m h1 tag"),React.createElement("h2",{},"i m h2 tag")],React.createElement("div",{id:"child 2"},[React.createElement("h1",{},"i m h1 tag"),React.createElement("h2",{},"i m h2 tag")])));
console.log(parent);
const  root= ReactDOM.createRoot(document.getElementById("root"));// root is the plae where all react code will run
root.render(parent);