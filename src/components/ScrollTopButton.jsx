import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button className="scroll-top-button" onClick={scrollToTop}>
        <MdOutlineKeyboardDoubleArrowUp />
      </button>
    )
  );
};

export default ScrollTopButton;
