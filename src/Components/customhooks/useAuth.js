import { createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Backend/Firebase/Firebase"
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function useAuthentication(email, password) {
    const navigate = useNavigate()
    const registersubmit = async (e) => {
         e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Success! user created
                const user = userCredential.user;
                toast.success("User created succesfully", user.email);
               
            }).catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error("This email is already registered. Try logging in instead.");
                    
                } else {
                    console.error("Error creating user:", error.message);
                }
            })
    }


    const loginsubmit = async (e) => {
        e.preventDefault()
        try {
               await signInWithEmailAndPassword(auth, email, password);
                Cookies.set('login', JSON.stringify(true), { expires: 7 });
                toast.success("login successfully");
                navigate("/reciepe")
     
            } catch {
            toast.error("invalid username or password");
                     }
    }
    const resetemail = (e) => {
        e.preventDefault()
    sendPasswordResetEmail(auth, email)
       .then(() => {
           toast.success("successfully send link to email please check your email");
        }).catch(() => {
            toast.error("please enter valid email");
       });
    }
    const cartauthentication = async() => {
         const login = Cookies.get('login') ? await JSON.parse(Cookies.get('login')) : null;
            if (!login) {
                toast.warning("please login");
                navigate('/login')     
        }
            else {
                navigate("/cart")
             }
      
    }
    const logout =async () => {
        const login = Cookies.get('login') ? await JSON.parse(Cookies.get('login')) : null;
            if (login === true) {
            Cookies.set('login', JSON.stringify(false),{ expires: 7});
                toast.success("sucessfully logout");
            }
            else {
                toast.warning("please login first");
                }
    }
     const contactsubmit = (e) => {
         e.preventDefault()
         toast.success("message submit sucessfully")
     }
    return{ registersubmit,loginsubmit,resetemail,cartauthentication,logout,contactsubmit }
}




