import React from 'react'
import logo from "../assets/images/SAMJUBAA LOGO 2.png";
import { FaFacebookSquare, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { IoLogoYoutube, IoMdMail } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer className="mt-3">
                <div className="container">
                    <div className="footer py-5">
                        <h4 className="text-uppercase">samjubaa creation</h4>
                        <p className="text-capitalize text-black">At SAMJUBAA CREATION, we are dedicated to preserving and celebrating the
                            rich tapestry of Indian culture through our exquisite collection of ethnic wear. As a proud subsidiary of
                            samjubaa creation, we blend tradition with contemporary fashion to bring you a shopping experience that is as
                            unique as it is timeless.</p>
                        <div className="row mx-xl-5 mx-0 align-items-center">
                            <div className="col-lg-5 mt-3 col-12">
                                <div className="footer_img mx-auto mx-lg-0" data-aos="fade-right">
                                    <img src={logo} alt="samjubaa creation logo" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-7 mt-3" data-aos="zoom-in">
                                <h5>CONTACT</h5>
                                <a href="https://maps.app.goo.gl/ZGZsMD1VxeLGwn7w8" className="text-black text-decoration-none">
                                    <div className="foot_add mt-2 d-flex">
                                        <IoHomeSharp className='foot-home-icon' />
                                        <p className="mb-0 ms-2">Plot No. 6510, F-10, M.K.Point, 14, Rd Number 65-B, GIDC, Sachin, Surat, Gujarat
                                            394230</p>
                                    </div>
                                </a>
                                <a href="tel:9725936585" className="text-black text-decoration-none">
                                    <div className="foot_add mt-2 d-flex align-items-center">
                                        <FaPhoneAlt className='' />
                                        <p className="mb-0 ms-2">(+91) 9725936585</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/9725936585?text=I am interested in your website"
                                    className="text-black text-decoration-none">
                                    <div className="foot_add mt-2 d-flex align-items-center">
                                        <FaWhatsapp className='' />
                                        <p className="mb-0 ms-2">+919725936585</p>
                                    </div>
                                </a>
                                <a href="mailto:samjubaacreation7@gmail.com?subject=Hello%20Samjubaa&body=I'm%20interested%20in%20your%20website:%20" className="text-black text-decoration-none">
                                    <div className="foot_add mt-2 d-flex align-items-center">
                                        <IoMdMail className='' />
                                        <p className="mb-0 ms-2">samjubaacreation7@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-5 mt-3">
                                <div className="foot_right text-center">
                                    <p className="text-capitalize">connect with us</p>
                                    <div>
                                        <a href="https://www.facebook.com/share/8qf72raL88k7CarW/?mibextid=qi2Omg"><FaFacebookSquare className='foot_icons fs-3 mx-2' /></a>
                                        <a href="https://www.instagram.com/samjubaa_?igsh=MWUxNnAzMzBsOWVsMA=="><FaInstagram className='foot_icons fs-3 mx-2' /></a>
                                        <a href="https://twitter.com/SamjubaaC93241"><FaTwitter className='foot_icons fs-3 mx-2' /></a>
                                        <a href="https://youtube.com/@samjubaaclothingstore"><IoLogoYoutube className='foot_icons fs-3 mx-2' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
