import { configureStore} from "@reduxjs/toolkit";
//import cartReducer from "./Reducers";
import productslice from './Productslice'
import cartslice from './Cartslice'
import loginslice from './loginslice'
//import thunk from 'redux-thunk';
//import Users from "./Reducers2"
export const Store=configureStore({
    reducer: {
      product:productslice,
      cart:cartslice,
      login:loginslice 
      }
    
    
});
export default Store