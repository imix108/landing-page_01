
import './Hero.css'
import padlock_icon from '../../assets/padlock-icon.png'
// import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
      <div className='hero container'>
          <div className='hero-text'>
              <h1>
                  <Link to='contact' smooth={true} offset={-300} duration={500}>
                      <img src={padlock_icon} alt="" className='padlock-icon'/>
                      Unlock Your Potential with English
                  </Link>
              </h1>
              <p>
                  English is not just a language; it is a gateway to endless opportunities. From enhancing your career
                  prospects to connecting with people from around the world, mastering English opens doors you never knew existed.
              </p>
          </div>
      </div>
  );
};

export default Hero