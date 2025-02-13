import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
const topchef=[
{image:"https://www.awesomecuisine.com/wp-content/uploads/2018/03/sanjeev_kapoor.jpg",name:"juan cruis",reciepe:"10",cusions:"Mexican",delay:"100"},
{image:"https://amakenlb.com/wp-content/uploads/2016/07/stock-footage-happy-chef-making-ok-sign-to-camera-in-commercial-kitchen.jpg",name:"John Duo",reciepe:"12",cusions:"Italian",delay:"300"},
{image:"https://tse4.mm.bing.net/th?id=OIP.hfgoAsnRXfFy5poKiFYgRgHaHZ&pid=Api&P=0&h=180",name:"Erich Maria",reciepe:"8",cusions:"Spanish",delay:"500"},
{image:"https://tse1.mm.bing.net/th?id=OIP.InodvXKawZFy0-POSMrqsgHaLH&pid=Api&P=0&h=180",name:"Ben John",reciepe:"6",cusions:"France",delay:"700"},
{image:"https://thetoptenchefs.com/wp/wp-content/uploads/2017/07/Gennaro-Contaldo-top-Italain-chefs-1024x682.jpg",name:"Chris Brown",reciepe:"11",cusions:"Poland",delay:"900"},
{image:"https://www.antonio-carluccio.com/wp-content/uploads/2020/03/chef.jpg",name:"Johan Kennedy",reciepe:"4",cusions:"England",delay:"1100"}
]
function Ourtopchef() {
  return (
    <>
    <div className='w-full text-green-500 grid gap-5 grid-cols-1 md:grid-cols-3'>
    
    {topchef.map((a)=>(
        <div className='flex  border-2 border-green-500 h-[100px] ' 
        key={a.name} data-aos-delay={a.delay} data-aos="fade-right" >
        
    <img className='w-[30%] h-full' src={a.image}/>
    <div>
    <p className='font-bold text-xl'>{a.name}</p>
    <p>{a.reciepe}</p>
    <p>{a.cusions}</p>
    <div className='w-full flex gap-1'><FaFacebook/><FaInstagram/></div>
    </div>
    </div>
       )) }
    </div>
    </>
  )
}

export default Ourtopchef
