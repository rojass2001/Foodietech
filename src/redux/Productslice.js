import { createSlice } from "@reduxjs/toolkit";

// Initial state structure for the product slice
const INITIAL_STATE = {
  allproducts: [],     // Stores all products fetched
  productcontain: [],  // Stores details of a single product (product page)
  filterproducts: [],  // Stores products based on applied filter or search
};
// Creating the product slice with actions and reducers
const productslice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,
  reducers: {
    // Action to set all products to the store
    setproducts: (state, action) => {
      state.allproducts = action.payload;
    },
    // Action to set product details for a selected product
    setproductdetails: (state, action) => {
      // Adding default values for quantity and subtotal
      const data = { ...action.payload, quantity: 1, subtotal: action.payload.price }
      state.productcontain = data;
      // Optional: Debugging log for product details
      console.log(data);
    },

    // Action to increase product quantity in the product detail page
    increaseproduct: (state, action) => {
      state.productcontain.quantity += 1;
      state.productcontain.subtotal += action.payload; // Increase subtotal by product price
    },

    // Action to decrease product quantity in the product detail page
    decreaseproduct: (state, action) => {
      if (state.productcontain.quantity > 1) {
        state.productcontain.quantity -= 1;
        state.productcontain.subtotal -= action.payload; // Decrease subtotal by product price
      }
    },

    // Action to filter products based on selected category
    productfilter: (state, action) => {
      state.filterproducts = state.allproducts.filter((item) => item.category === action.payload);
    },

    // Action to search products based on the product name
    searchproducts: (state, action) => {
      state.filterproducts = state.allproducts.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      
      // Optional: Debugging log for the filtered products
      console.log(state.allproducts);
    },
  },
});

// Exporting actions for dispatch in components
export const {setproducts,setproductdetails,increaseproduct,decreaseproduct,productfilter,searchproducts,} = productslice.actions;

// Exporting the reducer to be added to the store
export default productslice.reducer;
