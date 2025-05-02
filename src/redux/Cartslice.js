import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Initial state for the cart slice
const INITIAL_STATE = {
  cartproducts: [], // Stores all products in the cart
  totalprice: 0,    // Total price of all products in the cart
};

const cartslice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    // Action to add a product to the cart
    addtocart: (state, action) => {
      const newItem = action.payload; // Get the new item to be added to the cart
      const itemIndex = state.cartproducts.find(item => item.id === newItem.id); // Check if the item already exists in the cart

      // If the item is already in the cart, show an error toast
      if (itemIndex) {
        toast.error(`${itemIndex.name} already exists in cart`);
      } else {
        // Add the new item to the cart
        state.cartproducts.push({
          id: newItem.id,
          image: newItem.image,
          name: newItem.name,
          price: newItem.price,
          category: newItem.category,
          quantity: newItem.quantity || 1,  // Default quantity is 1
          subtotal: newItem.subtotal || newItem.price, // Calculate subtotal based on quantity and price
        });

        // Update the total price of the cart
        state.totalprice += newItem.subtotal || newItem.price;

        // Show a success toast
        toast.success(`${newItem.name} added successfully to cart`);
      }
    },

    // Action to increase the quantity of a product in the cart
    cartincrease: (state, action) => {
      const cartItem = action.payload; // Get the item ID to be increased
      const itemIndex = state.cartproducts.find(item => item.id === cartItem); // Find the item in the cart

      // If the item exists, increase its quantity, update subtotal and total price
      if (itemIndex) {
        itemIndex.quantity += 1;
        state.totalprice += itemIndex.price; // Increase total price by item price
        itemIndex.subtotal += itemIndex.price; // Update subtotal of the item
      }
    },

    // Action to decrease the quantity of a product in the cart
    cartdecrease: (state, action) => {
      const cartItem = action.payload; // Get the item ID to be decreased
      const itemIndex = state.cartproducts.find(item => item.id === cartItem); // Find the item in the cart

      // If the item exists and quantity is greater than 1, decrease quantity, update subtotal and total price
      if (itemIndex && itemIndex.quantity > 1) {
        itemIndex.quantity -= 1;
        state.totalprice -= itemIndex.price; // Decrease total price by item price
        itemIndex.subtotal -= itemIndex.price; // Update subtotal of the item
      }
    },

    // Action to remove a product from the cart
    removecart: (state, action) => {
      const cartItem = action.payload; // Get the product to be removed
      const itemIndex = state.cartproducts.findIndex(item => item.id === cartItem.id); // Find the item in the cart

      // If the item exists, remove it from the cart and update total price
      if (itemIndex >= 0) {
        state.totalprice -= cartItem.subtotal; // Subtract item subtotal from total price
        state.cartproducts.splice(itemIndex, 1); // Remove the item from the cart
      }
    },
  },
});

// Exporting actions to dispatch in components
export const { addtocart, cartincrease, cartdecrease, removecart } = cartslice.actions;

// Exporting the reducer to be added to the Redux store
export default cartslice.reducer;
