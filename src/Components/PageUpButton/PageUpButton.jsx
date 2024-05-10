import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './PageUpButton.css';

const PageUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const springStyles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 200, friction: 10 }
  });

  return (
    <animated.button
      className="page-up-button"
      style={springStyles}
      onClick={handlePageUp}
    >
      <div className="arrow" />
    </animated.button>
  );
};

export default PageUpButton;
