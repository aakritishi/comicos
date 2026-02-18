import React from 'react'
import shop from "../data/shop.json"
import gallery8 from "../../assets/gallery/gallery8.jpeg";
import gallery10 from "../../assets/gallery/gallery10.jpeg";
import gallery16 from "../../assets/gallery/gallery16.jpeg";
import gallery18 from "../../assets/gallery/gallery18.jpeg";
import gallery19 from "../../assets/gallery/gallery19.jpeg";
import gallery20 from "../../assets/gallery/gallery20.jpeg";
import gallery21 from "../../assets/gallery/gallery21.jpg";
import gallery22 from "../../assets/gallery/gallery22.jpg";
import gallery23 from "../../assets/gallery/gallery23.jpg";
import gallery24 from "../../assets/gallery/gallery24.jpg";
import gallery25 from "../../assets/gallery/gallery25.jpg";
import gallery26 from "../../assets/gallery/gallery26.jpg";
import gallery27 from "../../assets/gallery/gallery27.jpg";
import gallery28 from "../../assets/gallery/gallery28.jpg";
import gallery29 from "../../assets/gallery/gallery29.jpg";

const ShopSection = () => {
    const imageMap = {
        "gallery8.jpeg": gallery8,
        "gallery10.jpeg": gallery10,
        "gallery16.jpeg": gallery16,
        "gallery18.jpeg": gallery18,
        "gallery19.jpeg": gallery19,
        "gallery20.jpeg": gallery20,
        "gallery21.jpg": gallery21,
        "gallery22.jpg": gallery22,
        "gallery23.jpg": gallery23,
        "gallery24.jpg": gallery24,
        "gallery25.jpg": gallery25,
        "gallery26.jpg": gallery26,
        "gallery27.jpg": gallery27,
        "gallery28.jpg": gallery28,
        "gallery29.jpg": gallery29
    }
  return (
    <div className='w-[92%] mx-auto my-10'>
        <h1 className='text-[40px] font-semibold'>Shop</h1>
        <h2 className='text-[24px] font-normal'>Here’s anime merch you will love</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full mx-auto mt-5'>
            {shop.map((data)=>(
                <div key={data.id} className='bg-[#d6d6da] p-4 my-4 rounded-t-lg'>
                    <img src={imageMap[data.image]} alt={data.title} className='w-full h-75 object-cover rounded-md'/>
                    <h1 className='font-normal text-[24px] text-center mt-3'>{data.title}</h1>
                    <h1 className='font-normal text-[24px] text-center'>Rs {data.price}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShopSection