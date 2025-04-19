import { configureStore} from "@reduxjs/toolkit";
import productslice from './Productslice'
import cartslice from './Cartslice'

export const Store=configureStore({
    reducer: {
      product:productslice,
      cart:cartslice, 
      }
    
    
});
export default Store