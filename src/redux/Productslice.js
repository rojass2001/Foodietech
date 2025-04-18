import { createSlice,} from "@reduxjs/toolkit"

//import Category from "../Components/Category";

//import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const INITIAL_STATE={
    allproducts:[],
    productcontain:[],
    filterproducts:[], 
};
 const productslice=createSlice({
    name:'product',
    initialState:INITIAL_STATE,
      
    reducers:{
        setproducts:(state,action)=>{
          state.allproducts=action.payload;
            },
        setproductdetails:(state,action)=>{
              const data={...action.payload,quantity:1,subtotal:action.payload.price}
              state.productcontain=data;
              console.log(data)
                },
        increaseproduct:(state,action)=>{
              state.productcontain.quantity+=1;
              state.productcontain.subtotal+=action.payload;
            },
        decreaseproduct:(state,action)=>{
              if(state.productcontain.quantity>1){
              state.productcontain.quantity-=1;
              state.productcontain.subtotal-=action.payload;
            }
           
           },
       productfilter:(state,action)=>{
       state.filterproducts=state.allproducts.filter((item)=>item.category===action.payload)
         },
       searchproducts:(state,action)=>{
       state.filterproducts=state.allproducts.filter((item)=>item.name.toLowerCase().includes(action.payload.toLowerCase()))
       console.log(state.allproducts)
        },
 }
  })

export const {setproducts,setproductdetails,increaseproduct,decreaseproduct,productfilter,searchproducts}=productslice.actions;
export default productslice.reducer;
