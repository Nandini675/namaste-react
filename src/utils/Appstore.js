import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
const Appstore = configureStore ({
    // this is a our app reducer 
     reducer:{
        // and contain small reducer for each slice
 cart: cartReducer,
    }
});
export default  Appstore;