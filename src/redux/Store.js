import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit
import productslice from './Productslice'; // Import the product slice
import cartslice from './Cartslice'; // Import the cart slice
import Tabslice from './Tabbarslice'; // Import the tab slice

// Configuring the Redux store
export const Store = configureStore({
  reducer: {
    // Defining the reducers (slices) for the store
    product: productslice, // Product slice for managing product-related states
    cart: cartslice, // Cart slice for managing cart-related states
    tab: Tabslice, // Tab slice for managing tab-related states 
  }
});

export default Store; // Exporting the configured store as default
