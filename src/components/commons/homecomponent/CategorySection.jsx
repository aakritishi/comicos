import React from 'react'
import gallery1 from "../../../assets/gallery/gallery6.jpeg";
import gallery2 from "../../../assets/gallery/gallery8.jpeg";
import gallery3 from "../../../assets/gallery/gallery3.jpeg";
import category from "../../../components/data/category.json"

const imageMap ={
    "gallery1.jpeg": gallery1,
    "gallery2.jpeg": gallery2,
    "gallery3.jpeg": gallery3
}

const CategorySection = () => {
  return (
    <div className='w-[92%] mx-auto my-10'>
        <h1 className='text-center text-[30px] font-medium text-[#07070A]'>Shop By Categories</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full mx-auto mt-3'>
            {category.map((data)=>(
                <div key={data.id} className='bg-[#e9e9ed] p-4 rounded-t-lg'>
                <img src={imageMap[data.image]} alt={data.title} className='w-full h-75 object-cover rounded-lg'/>
                <h1 className='text-center my-3 text-[20px] font-normal'>{data.title}</h1>
            </div>
            ))}
        </div>
    </div>
  )
}

export default CategorySection