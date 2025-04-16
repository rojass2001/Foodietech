import { configureStore} from "@reduxjs/toolkit";
import productslice from './Productslice'
import cartslice from './Cartslice'
import loginslice from './loginslice'

export const Store=configureStore({
    reducer: {
      product:productslice,
      cart:cartslice,
      login:loginslice 
      }
    
    
});
export default Store