import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';


const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.5, // scroll speed
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div id="main-scroll" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollProvider;