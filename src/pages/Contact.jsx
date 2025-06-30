import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../style/Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import fleg from "../assets/images/fleg.png"
import { FaFacebookSquare, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube, IoMdMail } from 'react-icons/io';
import { IoHomeSharp } from 'react-icons/io5';

const Contact = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <>
    <Header/>

    <section className="contact_main">
      <div className="container">
        <div className="contact_form my-5">
          <div className="row px-3">
            <div className="col-lg-6 col-12 contact_inner py-3">
              <div className="contact_form_left p-sm-5 p-0" data-aos="zoom-in">
                <h5 className="mb-0">Contact Information</h5>
                <p>Fill the form and our Team will get back to you</p>
                <div className="mt-2 d-flex gap-3">
                  <IoHomeSharp className='fs-3' />
                  <p className="mb-0 ms-2">
                    Plot No. 6510, F-10, M.K.Point, 14, Rd Number 65-B, GIDC,
                    Sachin, Surat, Gujarat 394230
                  </p>
                </div>
                <div className="mt-2 d-flex align-items-center gap-3">
                  <FaPhoneAlt className='' />
                  <p className="mb-0 ms-2">(+91) 9725936585</p>
                </div>
                <div className="mt-2 d-flex align-items-center gap-3">
                  <IoMdMail className='' />
                  <p className="mb-0 ms-2">samjubaacreation7@gmail.com</p>
                </div>
                <div className="mt-4">
                  <h6>connect with us</h6>
                  <div className="">
                    <a href="https://www.facebook.com/share/8qf72raL88k7CarW/?mibextid=qi2Omg"><FaFacebookSquare className='foot_icons fs-3 mx-2 contact_icon' /></a>
                    <a href="https://youtube.com/@samjubaaclothingstore"><IoLogoYoutube className='foot_icons fs-3 mx-2 contact_icon' /></a>
                    <a href="https://www.instagram.com/samjubaa_?igsh=MWUxNnAzMzBsOWVsMA=="><FaInstagram className='foot_icons fs-3 mx-2 contact_icon' /></a>
                    <a href="https://twitter.com/SamjubaaC93241"><FaTwitter className='foot_icons fs-3 mx-2 contact_icon' /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 border border-2">
              <div
                className="contact_form_right d-flex flex-column position-relative my-4" data-aos="zoom-in"
              >
                <input
                  className="my-2 me-sm-5 me-0 ms-sm-3 ms-0 px-2 py-1"
                  type="text"
                  placeholder="Your Name*"
                  required
                />
                <input
                  className="my-2 me-sm-5 me-0 ms-sm-3 ms-0 pe-2 py-1 contact_number"
                  type="text"
                  placeholder="Mobile Number*"
                  maxLength="10"
                  required
                />
                <div className="position-absolute fleg">
                  <img src={fleg} alt="india image" />
                </div>
                <input
                  className="my-2 me-sm-5 me-0 ms-sm-3 ms-0 px-2 py-1"
                  type="email"
                  required
                  placeholder="Email*"
                />
                <input
                  className="my-2 me-sm-5 me-0 ms-sm-3 ms-0 px-2 py-1"
                  type="text"
                  placeholder="Subject*"
                  required
                />
                <textarea
                  className="my-2 me-sm-5 me-0 ms-sm-3 ms-0 px-2 py-1"
                  name=""
                  placeholder="Your Message"
                  id=""
                  rows="4"
                  required
                />
                <div className="d-flex justify-content-end pe-5 mt-2">
                  <button className="bg-black border-0 py-2 px-2 rounded rounded-4">
                    <a className="text-uppercase py-2 px-2 text-decoration-none text-white" >send message</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default Contact