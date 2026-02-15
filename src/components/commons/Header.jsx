import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/logo.jpg";
import { Link } from 'react-router-dom';
import Input from '../ui/Input';

const Header = () => {
  return (
    <div>
        <section className='flex flex-2 items-center justify-end gap-5 w-[96%] my-3'>
            <FaRegUser size={22}/>
            <IoCartOutline size={28}/>
        </section>
        <section className='grid grid-cols-[15%_60%_25%] items-center w-full bg-black text-white py-3'>
            <div>
                <img src={logo} alt="log-alt-text" className='h-12 w-14 rounded-full ml-6'/>
            </div>
            <div className=''>
                <Link to="/" className=''>Home</Link>
                <Link to="/shop" className=''>Shop</Link>
                <Link to="/contact" className=''>Contact</Link>
            </div>
            <div>
                <Input type="text" name="search" placeholder="Search..." />
            </div>
        </section>
    </div>
  )
}

export default Header