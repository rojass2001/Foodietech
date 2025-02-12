import React from 'react'
const hero=[{
  image:"https://coolfooddude.com/wp-content/uploads/2020/08/SFS_Classic_Sirloin_Blend_030-2-scaled.jpg",
  delay:"100"},
  {
    image:"https://sandinmysuitcase.com/wp-content/uploads/2020/04/Popular-Indian-Cuisine.jpg" ,
    delay:"200"
  },
  {
    image:"https://www.antonio-carluccio.com/wp-content/uploads/2020/05/Chinese-Dishes-1536x1053.jpg" ,
    delay:"300"
  },
  {
    image:"https://www.lacademie.com/wp-content/uploads/2022/04/types-of-cuisine.jpg" ,
    delay:"800"
  },

{
    image:"https://www.antonio-carluccio.com/wp-content/uploads/2020/05/Chinese-Dishes-1536x1053.jpg",
    delay:"1200"
},   {
     image:"https://unlike.net/wp-content/uploads/2017/12/Get-To-Know-Main-Types-Of-Indian-Curries-775x694.jpg",
     delay:"400"
},
{
    image:"https://img.faballey.com/alleygal/images/4(1).jpg",
    delay:"700"
},
{
    image: "https://www.fodors.com/wp-content/uploads/2019/10/08_NoodlesToTryInChina__ShanghaiStyleNoodles_shutterstock_1405485869-1600x1067.jpg",
    delay:"600"
  },
  {
     image:"https://c.pxhere.com/photos/f0/94/tempeh_salad_vegan_food_fresh_vegetable_vegetarian_colorful-1040918.jpg!d",
     delay:"500"
    }
    ]
function Hero() {
  return (
    <div className='w-full mt-5 flex  flex-col  md:flex-row '>
    <div className='w-full h-[200px] text-white md:w-[50%] md:text-center '>
    <h1 className='text-2xl font-bold'>What are We about</h1>
    <p>Foodies hub is a place where you can please your 
    <p>soul and turnary with delicious food reciepes</p>
    <p> of all our service is absolutly free so start </p>
    <p>explore now</p>
        <button className='w-[100px] h-9 mt-2 font-bold ' style={{backgroundColor:"#7FFF00"}}>explore now</button>
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
