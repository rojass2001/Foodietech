
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const INITIAL_STATE={
    //login:false
   
};
const loginslice= createSlice({
    name: "login",
    initialState: INITIAL_STATE,
    reducers: {
        setlogin:async () => { 
                  Cookies.set('login', JSON.stringify(true), { expires: 7 });
        },
        setlogout: async() => {
            const login=await JSON.parse(Cookies.get('login'))
            console.log(login)
            if (login===true) {
                 Cookies.set('login', JSON.stringify(false), { expires: 7 });
               toast.success("sucessfully logout")
            }
            else {
                 toast.warning("please login first")
            }
            
        },
    }
})
export const { setlogin,setlogout} = loginslice.actions
export default loginslice.reducer
