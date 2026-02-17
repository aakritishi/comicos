import React from 'react'
import Button from '../../ui/Button'
import gallery1 from "../../../assets/gallery/gallery6.jpeg";

const DescriptionSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 md:gap-4 w-[90%] mx-auto mt-12 mb-6'>
        <div className=''>
            <h1 className='text-[30px] font-medium text-[#07070A]'>Create Your Custom <br/>Anime Hoodie </h1>
            <p className='text-[22px] font-normal mt-5'>Design the perfect piece of anime apparel.<br/>Choose your colors, add your favorite characters, <br/>and personalize every detail to match your style.</p>
            <div className='flex items-center md:justify-start justify-center mt-8'>
            <Button>Customize Now</Button>
            </div>
        </div>
        <div className='bg-[#e9e9ed] rounded-t-lg'>
            <img src={gallery1} alt="custom hoodie" className='w-full h-100 object-cover rounded-lg'/>
        </div>
    </div>
  )
}

export default DescriptionSection