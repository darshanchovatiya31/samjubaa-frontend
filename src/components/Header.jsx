import logo from "../assets/images/SAMJUBAA LOGO 3.png";
import { Link, NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {

  const closeOffcanvas = () => {
    const offcanvasEl = document.querySelector('.offcanvas');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg header_main top-0 py-0">
        <div className="container">
          <Link className="navbar-brand head_main_logo" to={"/"}>
            <img src={logo} alt="SAMJUBAA LOGO" width="100%" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Link className="navbar-bran" to={"/"}>
                  <img src={logo} alt="SAMJUBAA LOGO" width={"250px"}/>
                </Link>
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body align-items-center">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto fw-bolder">
                <li className="nav-item">
                  <NavLink className="nav-link ps-4 ps-lg-2 ps-sm-5" to="/" onClick={closeOffcanvas}>HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ps-4 ps-lg-2 ps-sm-5" to="/new-arrival" onClick={closeOffcanvas}>SHOP</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ps-4 ps-lg-2 ps-sm-5" to="/about-us" onClick={closeOffcanvas}>ABOUT US</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ps-4 ps-lg-2 ps-sm-5" to="/contact" onClick={closeOffcanvas}>CONTACT US</NavLink>
                </li>
              </ul>
              <div className="ps-4 ps-lg-2 ps-sm-5 mx-2 mx-lg-0">
                <FaRegHeart className="fs-5 me-3 head_icon"/><MdOutlineShoppingCart className="fs-4 head_icon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
