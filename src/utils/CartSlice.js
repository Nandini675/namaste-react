import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: "cart",
    initialState:{
        // what would bee the cart items
        items:[]
    },
    reducers :{

        // action: function
      additem: (state, action)=>{
        state.items.push(action.payload);
      },
      removeitem:(state) =>{
        state.items.pop();
      },
     
      clearcart:(state)=>{

        
        state.items.length=0;
      }
      

    }
    

});
export const {additem,clearcart,removeitem}= Cartslice.actions;
export default Cartslice.reducer;