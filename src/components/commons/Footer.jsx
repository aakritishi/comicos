import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full mt-12 bg-[#dcd9d9]">
      <div className="md:flex md:justify-around w-[90%] mx-auto gap-10 py-12">
        <div>
          <h1 className="text-[24px] font-medium"> Store Info</h1>
          <ul className="text-[20px] font-normal my-3">
            <li className="font-normal mb-2">123 Anime Street, Akihabara Plaza, Nepal </li>
            <li className="font-normal mb-2">Mon–Fri: 10am–8pm JST </li>
            <li className="font-normal mb-2">Email: support@animegalaxystore.com </li>
            <li className="font-normal mb-2">Phone: +977 9803819996</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[24px] font-medium mt-5 md:mt-0">Customer Service</h1>
          <ul className="text-[20px] font-normal my-3">
            <li className="font-normal mb-2">Contact Us</li>
            <li className="font-normal mb-2">Shipping</li>
            <li className="font-normal mb-2">FAQ</li>
            <li className="font-normal mb-2">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[24px] font-medium mt-5 md:mt-0">Follow Us</h1>
          <ul className="text-[20px] flex items-center">
            <li className="" title="facebook-comicos"><Link to="https://www.facebook.com/magic.tshirtprint" target="_blank"><FaFacebook className="text-2xl text-[#1877f2]"/></Link></li>
            <li className="ml-3" title="comicos-instagram"><Link to="https://www.instagram.com/comicos.rn/" target="_blank"><FaInstagramSquare className="text-2xl text-[#E1306C]"/></Link></li>
            <li className="ml-3" title="comicos-tiktok"><Link to="https://www.tiktok.com/@comicos.rn?lang=en-GB" target="_blank"><AiFillTikTok className="text-[28px] text-[#000000]"/></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
