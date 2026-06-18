import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
   <div className='bg-dark text-white'>
    <div className='row container p-5'>
     <div className='col-lg-4'>
      <h3>AI Bulider</h3>
      <p>An AI Powered</p>
     </div>
      <div className='col-lg-4'></div>
       <div className='col-lg-4'>
        <h3>Contact Us</h3>
        <p><MdEmail />resumebulider@gmail.com</p>
        <p><FaPhone />97546672728</p>
        <h4>Connect with us</h4>
        <div className='d-flex gap-4 mt-3'>
          <FaInstagram />
          <FaFacebook />
          <FaWhatsapp />

        </div>
       </div>

    </div>
    <div className='pb-5'>
      <h5 className='text-center'>Desinged & bulid with❤️ using React</h5>
    </div>
   </div>
    </>
  )
}

export default Footer