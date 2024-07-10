import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearcart } from "../utils/Cartslice";
import Cartslice from "../utils/Cartslice";

const Cart =()=>{
  
 const cartitems= useSelector((store)=> store.cart.items);
 
 const dispatch= useDispatch();
 const handleclearcart =()=>{
 dispatch(clearcart());

 }
 

    return  (
    <div className="cart container text-center p-4 m-4">
      <h1  className="text-2xl font-bold">Cart</h1> 
      <div className=" w-7/12 m-auto ">
<div  className="items-center p-2 m-2">
       <button className="p-2 m-2 bg-black 
        text-white rounded-lg  text-center" 
        onClick={handleclearcart}
        
        > 
        
        Clear Cart
        </button>
        </div>
        
        {cartitems.length==0 && (<h1 className="text-xl font-bold text-center  items-center">
          Cart is empty <h2 className="text-xl font-bold  text-center"> Grab Items , We have a lot for uh!</h2></h1>)}

        
    
          <Itemlist items={cartitems}/> 
      </div>
    </div>
    
);
}
    


export default Cart;