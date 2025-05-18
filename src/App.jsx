import { useEffect } from 'react';  // Importing the useEffect hook to run side-effects in the component
import AOS from "aos";  // Importing the AOS (Animate On Scroll) library for scroll animations
import "aos/dist/aos.css";  // Importing AOS CSS for styling the animations
import Routings from './Routings';  // Importing the Routings component to manage the app's routing

function App() {
  // useEffect hook to initialize AOS and set animation settings
  useEffect(() => {
    // Initializing AOS with custom settings
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sin",
      delay: 100,
    });


    AOS.refresh();
  }, []);  // Empty dependency array to run this effect only once when the component mounts

  return (
    <main>
      <Routings />  {/* Rendering the Routings component that handles routing and page navigation */}
    </main>
  );
}

export default App;  // Exporting the App component for use in other parts of the application
