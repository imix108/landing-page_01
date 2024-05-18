import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import PricingTable from './Components/Pricing/Pricing'
import unlock_icon from './assets/unlock-icon.png'
import PageUpButton from './Components/PageUpButton/PageUpButton'


const App = () => {
  return (
      <div>
          <Navbar />
         
          <Hero />
          <div className="container">
              <Title subTitle='My SERVICES' title='What I Teach' />
              <Services />
              <About />
              <Title subTitle='My RATES' title='Pricing' />
              <PricingTable />
              <Title subTitle='Contact Me' title='Get In Touch' icon={unlock_icon} />
              <Contact />
              <Footer />
          </div>
          <PageUpButton /> {/* Вставляем кнопку "Page Up" */}
      </div>
  )
}

export default App