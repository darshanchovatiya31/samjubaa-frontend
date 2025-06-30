import React, { useEffect, useState } from 'react';
import no_product_found from "../assets/images/product_not_found.jpeg";
import '../style/ProductCard.css';

const ProductCard = (products) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 991);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // run once on mount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="col-lg-3 col-md-4 col-6 mb-4">
            <div
                className={`product-card h-100 ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="product-image-container">
                    <img
                        src={products.products.image || no_product_found}
                        // alt={products.products.title}
                        className="product-image"
                    />

                    {products.products.isNew && (
                        <span className="badge new-badge">NEW</span>
                    )}

                    {products.products.discount && (
                        <span className="badge discount-badge">-{products.products.discount}%</span>
                    )}

                    <div className={`product-actions ${isMobile ? 'visible': `${isHovered ? 'visible' : ''}` }`}>
                        <button
                            className="action-btn"
                            onClick={() => setIsWishlisted(!isWishlisted)}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={isWishlisted ? "#dc3545" : "none"}
                                stroke={isWishlisted ? "#dc3545" : "#666"}
                                strokeWidth="2"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>

                        <button className="action-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </button>
                    </div>

                    <div className={`add-to-cart-overlay ${isMobile ? 'visible': `${isHovered ? 'visible' : ''}` }`}>
                        <button className="btn btn-dark w-100 add_to_cart_btn">ADD TO CART</button>
                    </div>
                </div>

                <div className="product-details p-3">
                    <h6 className="product-title">
                        {products.products.title}
                    </h6>
                    <div className="price-section">
                        <span className="current-price">{products.products.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
