import { category } from './categoryarray'
import { useDispatch } from 'react-redux'
import { productfilter } from '../../redux/Productslice'
import { Link, useNavigate } from 'react-router-dom'
const img="https://sandinmysuitcase.com/wp-content/uploads/2020/04/Popular-Indian-Cuisine.jpg"
function Categories() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const search=(name)=>{
    dispatch(productfilter(name))
    navigate('/search')
  }
  return (
    <>
    <div className='w-full mt-[120px] lg:mt-[80px] md:justify-center   overflow-x-auto flex gap-[70px]' >
    <div className='text-center text-green-500'>
    <Link to="/reciepe"> 
    <div className='bg-black w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full p-1  md:p-3 border-2
     border-green-500 '>
    <img  className='w-full h-full rounded-full' src={img}/>
    </div>
    </Link>
    <p>All</p>
    </div>
    {category.map((a)=>(
    <div className=' text-center text-green-500' key={a.name} >
    <div  onClick={()=>search(a.name)}className='bg-black w-[60px] 
      h-[60px] md:w-[80px] md:h-[80px] rounded-full p-1 md:p-3 border-2 border-green-500 ' >
    <img  className='w-full h-full rounded-full' src={a.image}/>
    </div>
    <p >{a.name}</p>
    </div>
))}
    </div>
    </>
  )
}

export default Categories
