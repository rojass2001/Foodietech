import { createSlice} from "@reduxjs/toolkit"
//import Category from "../Components/Category";

//import { setSelectionRange } from "@testing-library/user-event/dist/utils";
const INITIAL_STATE={
detail:false,
login:true,
logincontain:false
};
 const popups=createSlice({

    name:'popups',
    initialState:INITIAL_STATE,
      
    reducers:{
   
        productpopup:(state)=>{
            if(state.detail==false){
                state.detail=true
               }
               else{
                state.detail=false
               }
            }, 
            loginpopup:(state)=>{
                if(state.logincontain==false){
                    state.logincontain=true
                   }
                   else{
                    state.logincontain=false
                   }
                }, 
                registerpopup:(state)=>{
                    if(state.login==true){
                        state.login=false
                       }
                       else{
                        state.login=true
                       }
                    }, 

}})
export const {productpopup,loginpopup,registerpopup}=popups.actions;
export default popups.reducer;
