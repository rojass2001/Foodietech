import { configureStore} from "@reduxjs/toolkit";
//import cartReducer from "./Reducers";
import productslice from './Productslice'
import cartslice from './Cartslice'
import popups from'./Popup'
//import thunk from 'redux-thunk';
//import Users from "./Reducers2"
export const Store=configureStore({
    reducer: {
      product:productslice,
        cart:cartslice,
        popup:popups,
      }
    
    
});
export default Store