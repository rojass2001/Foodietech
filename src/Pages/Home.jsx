import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '../Components/Box';
import Hero  from '../Components/Home/Hero'
import Culniraryskill from '../Components/Home/Culniraryskill'
import Foodquote from '../Components/Home/Foodquote';
import Ourtopchef from '../Components/Home/Ourtopchef';
import Service from '../Components/Home/Service/Service';
import { setproducts } from '../redux/Productslice';
import { products } from '../Reciepelist';

function Home() {
  const dispatch = useDispatch()
  const setproduccontainer=() => {
      dispatch(setproducts(products))
   }
  useEffect(()=> {
   setproduccontainer()
  }, []);

  return (
    <Box className="w-full mt-[120px] md:mt-[80px] px-2">
      <Hero />
      <Culniraryskill />
      <Foodquote />
      <Ourtopchef />
      <Service />  
    </Box>
  );
}

export default Home;
