import { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMobileMenu(false);
    }
  };
 const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMobileMenu(false); // Закрываем меню после клика на иконку
  };
  // Функция для закрытия меню при клике на элементе меню и переходе
  const handleMenuClick = () => {
    setMobileMenu(false);
  };

  return (
    <nav ref={navbarRef} className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' onClick={handleHomeClick} />
      
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={handleMenuClick}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-315} duration={500} onClick={handleMenuClick}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-180} duration={500} onClick={handleMenuClick}>About me</Link></li>
        <li><Link to='pricing' smooth={true} offset={-180} duration={500} onClick={handleMenuClick}>Pricing</Link></li>
        {/* <li>Test Your Level</li> */}
        <li><Link to='contact' smooth={true} offset={-300} duration={500} className='btn' onClick={handleMenuClick}>Contact me</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
