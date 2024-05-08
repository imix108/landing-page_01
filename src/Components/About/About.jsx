
import './About.css'
import me_img from '../../assets/me.png'

const About = () => {
  return (
    <div className='about'>
       <div className="about-left">
       <img src={me_img} alt="" className='me-img'/>
       </div>
       <div className="about-right">
       <h3>ABOUT ME</h3>
       <h2>Experienced English Teacher</h2>
       <p> My name is Maria. I am a CELTA-trained English teacher. I graduated from an English-speaking university and I have a Bachelor degree in Management, Business Administration. I have been teaching ESL for over 13 years. I teach mainly adults and I specialize in Business English, IELTS preparation and FCE/CAE exams. I also can help with personal statements, CVs and applications. Contact me for more information. </p>
       </div>
      
        </div>
  )
}

export default About