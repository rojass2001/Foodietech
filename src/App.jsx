import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Routings from './Routings'

function App() {
  useEffect(()=>{
    AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sin",
    delay:100,
    });
    AOS.refresh();
      },[])
  return (
  
      <>
      <Routings/>
      </>
      
  )
}

export default App
