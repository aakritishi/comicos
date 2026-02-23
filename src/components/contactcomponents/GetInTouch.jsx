import React from 'react'
import Input from '../ui/Input';
import Label from "../ui/Label";
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';

const GetInTouch = () => {
  return (
    <div className='w-full p-9 border border-black rounded-xl'>
        <h1 className='font-semibold text-[28px] text-[#07070A]'>Get In Touch With Us</h1>
        <h2 className='font-extralight text-[16px]'>We’re here to answer your questions, support your needs, and guide you <br/> through every step. Let’s connect and make things happen.</h2>
        <form action="">
          <Label>Fullname:</Label>
          <Input type="" placeholder="Enter Fullname"></Input>
          <Label>Contact no:</Label>
          <Input type="" placeholder="Enter Contact number"></Input>
          <Label>Email:</Label>
          <Input type="" placeholder="Enter Email"></Input>
          <Label>Message:</Label>
          <TextArea placeholder="Enter Your Message" rows="6" columns="80"></TextArea>
          <div className='flex justify-center items-center mt-3'>
          <Button>Submit</Button>
          </div>
        </form>
    </div>
  )
}

export default GetInTouch