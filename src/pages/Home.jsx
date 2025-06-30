import { useEffect } from 'react';
import Slider from 'react-slick';
import Header from '../components/Header';
import '../style/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import ProductCard from '../components/ProductCard';

const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: false,
  };

  const products = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    }]
  };

   const productss = [
    {
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      title: "PUJIMILLS WOMEN'S READYMADE HALF SLEEVE KHADI COTTON BLOUSE",
      price: "Rs. 899.00",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=400&fit=crop",
      title: "ELEGANT DESIGNER SAREE WITH EMBROIDERED BORDER",
      price: "Rs. 1,299.00",
      isNew: true,
      // discount: 20
    },
    {
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      title: "TRADITIONAL SILK KURTA SET WITH PALAZZO",
      price: "Rs. 1,599.00",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=400&fit=crop",
      title: "COTTON PRINTED DRESS WITH FLORAL PATTERN",
      price: "Rs. 799.00",
      isNew: false
    }
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <section className="hero">
        <Slider {...settings}>
          <div className="item">
            <div className="hero_inner hero_item1 d-flex flex-column justify-content-center align-items-center">
              <div className="text-center hero_light py-4">
                <h2 data-aos="fade-down" data-aos-duration="2000">WELCOME TO</h2>
                <h1 data-aos="fade-down" data-aos-duration="1500">SAMJUBAA CREATION</h1>
                <p data-aos="fade-down" data-aos-duration="1000">where tradition meets elegance</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="hero_inner hero_item2 d-flex flex-column justify-content-center align-items-center">
              <div className="text-center hero_light py-4">
                <h2 className="text-uppercase">a fasion of passion and heritage</h2>
                <p className="px-0 px-md-5"> born under SAMJUBAA CREATION, we celebrate india’s vibrant heritage</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="hero_inner hero_item3 d-flex flex-column justify-content-center align-items-center">
              <div className="text-center hero_light py-4">
                <h2 className="text-uppercase">a symphony of indian craftsmanship</h2>
                <p className="px-0 px-md-5"> from intricate sarees to bridal lehengas, we curate timeless elegance </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="hero_inner hero_item4 d-flex flex-column justify-content-center align-items-center">
              <div className="text-center hero_light py-4">
                <h2 className="text-uppercase">quality craftsmanship</h2>
                <p className="px-0 px-md-5"> every garment a masterpiece. meticulously crafted by skilled artisans,preserving tradition in every stitch </p>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className="product my-4">
        <div className="container">
          <Slider {...products} id="product">
            <div className="item text-center" data-aos="fade-right">
              <img src={product1} alt="product images" />
              <h5 className="pt-3 text-uppercase">south indian saree</h5>
            </div>
            <div className="item text-center" data-aos="fade-right">
              <img src={product2} alt="product images" />
              <h5 className="pt-3 text-uppercase">designer saree</h5>
            </div>
            <div className="item text-center" data-aos="fade-down">
              <img src={product3} alt="product images" />
              <h5 className="pt-3 text-uppercase">ready to wear saree</h5>
            </div>
            <div className="item text-center" data-aos="fade-down">
              <img src={product4} alt="product images" />
              <h5 className="pt-3 text-uppercase">plain silk saree</h5>
            </div>
            <div className="item text-center" data-aos="fade-down">
              <img src={product5} alt="product images" />
              <h5 className="pt-3 text-uppercase">lahenga choli</h5>
            </div>
            <div className="item text-center" data-aos="fade-left">
              <img src={product6} alt="product images" />
              <h5 className="pt-3 text-uppercase">mens kurta payjama</h5>
            </div>
            <div className="item text-center" data-aos="fade-left">
              <img src={product7} alt="product images" />
              <h5 className="pt-3 text-uppercase">modi nehru jacket koti</h5>
            </div>
          </Slider>
        </div>
      </section>

      <section className="new_arrival py-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="section-title">New Arrivals</h2>
              <p style={{ color: '#7f8c8d', fontSize: '16px', maxWidth: '500px', margin: '0 auto'}}> Discover our latest collection of trending fashion pieces</p>
            </div>
          </div>
          
          <div className="row">
            {productss.map((product, index) => ( <ProductCard key={index} products={product} /> ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container px-0 px-sm-2">
          <div className="welcome d-flex align-items-center">
            <div className="welcome_inner mx-xl-auto ms-auto me-lg-5 text-center" data-aos="zoom-in-down">
              <h4 className="mb-3">WELCOME TO SAMJUBAA CREATION</h4>
              <p className="text-black">At SAMJUBAA CREATION, we are dedicated to preserving and celebrating the rich tapestry of Indian culture through our exquisite collection of ethnic wear.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="new_arrival py-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="section-title">New Arrivals</h2>
              <p style={{ color: '#7f8c8d', fontSize: '16px', maxWidth: '500px', margin: '0 auto'}}> Discover our latest collection of trending fashion pieces</p>
            </div>
          </div>
          
          <div className="row">
            {productss.map((product, index) => ( <ProductCard key={index} products={product}/>))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
