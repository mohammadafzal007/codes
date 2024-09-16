import { createSlice } from "@reduxjs/toolkit";


const cartslice=createSlice
({
    name:"cart",
    initialState:[],
    reducers:
    {
        additem:((state,action)=>{
        state.push(action.payload)
        }),
        removeitem:((state,action)=>{
      const itemId = action.payload.id;
      const index = state.findIndex(item => item.id === itemId);
      state.splice(index, 1);
        }),
    
    }

})
export default cartslice.reducer;
export const {additem} =cartslice.actions;
export const {removeitem} =cartslice.actions;