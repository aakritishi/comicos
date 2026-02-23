import React from "react";
import { FaClock, FaQuestionCircle } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import contactdetails from "../data/contactdetails..json";
import contactdetails2 from "../data/contactdetails2.json";

const ContactDetails = () => {
  const iconMap = {
    FaPhone: FaPhone,
    MdEmail: MdEmail,
    FaLocationDot: FaLocationDot,
    FaClock: FaClock,
  };

  const iconMap2 = {
    FaQuestionCircle: FaQuestionCircle,
    IoShieldCheckmarkSharp: IoShieldCheckmarkSharp,
  };
  return (
    <div className="w-full">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactdetails.map((data) => {
          const IconComponent = iconMap[data.icon];
          return (
            <div className="border border-black rounded-xl p-9" key={data.id}>
              <div className="flex items-center justify-start mb-3">
                <IconComponent size={22} className="inline-block mr-2" />
                <h1 className="text-[18px] font-medium">{data.title}</h1>
              </div>
              <p className="text-[16px] font-normal text-nowrap">
                {data.description}
              </p>
            </div>
          );
        })}
      </section>
      <section className="w-full grid grid-cols-1 gap-5 m-4">
        {contactdetails2.map((data) => {
          const IconComponent = iconMap2[data.icon];
          return (
            <div className="px-6 py-2">
              <div
                className="flex items-center gap-2 mt-5"
                key={data.id}
              >
                <IconComponent size={22} className="inline-block text-[#212121B2]" />
                <h1 className="text-[18px] font-medium text-[#212121B2]">{data.title}</h1>
              </div>
              <p className="text-[16px] font-normal mt-2 text-justify text-[#212121B2]">
                {data.description}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ContactDetails;
