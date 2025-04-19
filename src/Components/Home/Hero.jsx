import { hero } from "./Heroarray"

function Hero() {
  return (
    <div className='w-full mt-5 flex  flex-col  md:flex-row '>
    <div className='w-full h-[200px] text-green-500 md:w-[50%] md:text-center '>
    <h1 className='text-2xl font-bold'>What are We about</h1>
    <p>Foodies hub is a place where you can please your 
    <p>soul and turnary with delicious food reciepes</p>
    <p> of all our service is absolutly free so start </p>
    <p>explore now</p>
        <button className='w-[100px] h-9 mt-2 text-white font-bold ' style={{backgroundColor:"#7FFF00"}}>explore now</button>
    </p>
    </div>
    <div className='grid w-full justify-center place-items-center gap-3 grid-cols-3 md:w-[30%]'>
        { hero.map((a)=>(
    <div className='h-[100px]'  key={a.image} data-aos-delay={a.delay} data-aos="fade-right">
        <img className="h-full w-full"src={a.image}/>
    </div> 
)) }
    </div>
    </div>
  )
}

export default Hero
