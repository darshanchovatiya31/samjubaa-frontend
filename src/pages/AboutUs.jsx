import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import about_two from "../assets/images/about_two.png"
import about_three from "../assets/images/about_three.png"
import about_three2 from "../assets/images/about_three2.png"
import about_four1 from "../assets/images/about_four1.png"
import about_four2 from "../assets/images/about_four2.png"
import about_four3 from "../assets/images/about_four3.png"
import about_three3 from "../assets/images/about_three3.png"
import about_three4 from "../assets/images/about_three4.png"

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <Header />
      
      <section className="about_hero_section about_bg_gradient">
        <div className="container">
          <div className="row align-items-center about_hero">
            <div className="col-lg-12 order-2 order-lg-1">
              <div className="hero-content text-center" data-aos="fade-right">
                <span className="about_badge_text">Welcome to Samjubaa Creation</span>
                <h1 className="about_hero_title">Where Tradition Meets <span className="text-primary">Elegance</span></h1>
                <p className="hero-description">
                  We are dedicated to preserving and celebrating the rich tapestry of Indian culture through our exquisite collection of ethnic wear, blending tradition with contemporary fashion.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3>500+</h3>
                    <p>Happy Customers</p>
                  </div>
                  <div className="stat-item">
                    <h3>100+</h3>
                    <p>Unique Designs</p>
                  </div>
                  <div className="stat-item">
                    <h3>5+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="about_journey_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about_content_block">
                <span className="about_section_tag">Our Story</span>
                <h2 className="about_section_title">Our Journey</h2>
                <p className="about_section_description">
                  Samjubaa Creation was born out of a passion for India's vibrant heritage and a desire to share it with the world. Founded under the esteemed umbrella of SAMJUBAA CREATION, our journey began with a vision to showcase the beauty of Indian craftsmanship and textiles.
                </p>
                <p className="about_section_description">
                  Drawing inspiration from the diverse cultures and traditions of India, we curate collections that capture the essence of our rich cultural heritage while embracing modern trends.
                </p>
                <div className="about_feature_list">
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Authentic Indian Craftsmanship</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Modern Design Sensibilities</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Premium Quality Materials</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about_image_wrapper">
                <img src={about_three} alt="Our Journey" className="img-fluid rounded-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="about_collection_section about_bg_gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
              <div className="about_image_wrapper">
                <img src={about_three2} alt="Our Collection" className="img-fluid rounded-4" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
              <div className="about_content_block">
                <span className="about_section_tag">What We Offer</span>
                <h2 className="about_section_title">Our Collection</h2>
                <p className="about_section_description">
                  Our stunning collection reflects the unparalleled artistry and craftsmanship of India. From exquisite sarees and intricately embroidered blouses to graceful bridal and bridesmaid lehenga cholis, each piece is a testament to India's rich textile heritage.
                </p>
                <div className="about_collection_grid">
                  <div className="collection-item">
                    <h5>Sarees & Blouses</h5>
                    <p>Exquisite traditional wear</p>
                  </div>
                  <div className="collection-item">
                    <h5>Lehenga Cholis</h5>
                    <p>Bridal & bridesmaid collection</p>
                  </div>
                  <div className="collection-item">
                    <h5>Men's Kurta Sets</h5>
                    <p>Elegant traditional menswear</p>
                  </div>
                  <div className="collection-item">
                    <h5>Custom Designs</h5>
                    <p>Personalized ethnic wear</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about_features_section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="about_section_tag">Why Choose Us</span>
            <h2 className="about_section_title">What Makes Us Special</h2>
            <p className="about_section_subtitle">Discover the values that drive our commitment to excellence</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src={about_four1} alt="Quality Craftsmanship" />
                </div>
                <h4>Quality Craftsmanship</h4>
                <p>Each garment is meticulously crafted by skilled artisans using traditional techniques passed down through generations, ensuring unmatched quality and attention to detail.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src={about_four2} alt="Wide Variety" />
                </div>
                <h4>Wide Variety</h4>
                <p>From timeless silk sarees for special occasions to contemporary kurta pajama sets for everyday wear, our diverse collection caters to every taste and style preference.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src={about_four3} alt="Customer Satisfaction" />
                </div>
                <h4>Customer Satisfaction</h4>
                <p>Customer satisfaction is our top priority. We're committed to providing exceptional service and ensuring every shopping experience is enjoyable and hassle-free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="about_commitment_section about_bg_gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about_content_block">
                <span className="about_section_tag">Our Promise</span>
                <h2 className="about_section_title">Our Commitment</h2>
                <p className="about_section_description">
                  We are committed to promoting and preserving India's rich cultural heritage. We work closely with artisans and weavers from across the country to support traditional craftsmanship and provide sustainable livelihoods.
                </p>
                <p className="about_section_description">
                  We strive to make our collection accessible to customers worldwide, allowing them to experience the beauty and elegance of Indian ethnic wear wherever they are.
                </p>
                <div className="about_commitment_values">
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    <div>
                      <h5>Cultural Preservation</h5>
                      <p>Supporting traditional artisans and crafts</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="fas fa-globe"></i>
                    </div>
                    <div>
                      <h5>Global Accessibility</h5>
                      <p>Bringing Indian fashion to the world</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about_image_wrapper">
                <img src={about_three3} alt="Our Commitment" className="img-fluid rounded-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="about_cta_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
              <div className="about_image_wrapper">
                <img src={about_three4} alt="Join Us" className="img-fluid rounded-4" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
              <div className="cta-content">
                <span className="about_section_tag">Join Our Journey</span>
                <h2 className="about_section_title">Experience Timeless Elegance</h2>
                <p className="about_section_description">
                  Join us on a journey through the vibrant colors and rich textures of India. Explore our collection, discover the stories behind each piece, and experience the timeless elegance of authentic Indian fashion.
                </p>
                <p className="about_section_description">
                  Whether you're celebrating a special occasion or adding a touch of Indian heritage to your wardrobe, we invite you to discover the beauty of ethnic wear with Samjubaa Creation.
                </p>
                <div className="cta-buttons">
                  <button className="btn btn-primary btn-lg me-3">Explore Collection</button>
                  <button className="btn btn-outline-primary btn-lg">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutUs