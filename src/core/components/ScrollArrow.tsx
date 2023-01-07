'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const PAGE_T_OFFSET = 400;

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > PAGE_T_OFFSET) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= PAGE_T_OFFSET) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  const scrollTop = () => {
    if (window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <FaArrowCircleUp
      onClick={scrollTop}
      className="fixed w-screen h-8 bottom-5 left-1/2 -translate-x-1/2 transition-opacity duration-300 cursor-pointer animate-fade-in opacity-30 hover:opacity-100"
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  );
};
