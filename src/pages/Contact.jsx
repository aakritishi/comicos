import React from "react";
import ContactDetails from "../components/contactcomponents/ContactDetails";
import GetInTouch from "../components/contactcomponents/GetInTouch";

const Contact = () => {
  return (
    <div className="w-[94%] mx-auto h-auto">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-7">
        <ContactDetails />
        <GetInTouch />
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d832.1337730137068!2d85.32082975510623!3d27.674138600028417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19218cbeaa35%3A0xf0713d04b44719a6!2sMagic%20Print!5e0!3m2!1sen!2snp!4v1771408883447!5m2!1sen!2snp"
        className="w-full h-100 md:h-125 border-0 rounded-2xl my-5"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
