import heroBannerLg from '../assets/hero-banner-large.jpg';
import heroBannerSm from '../assets/hero-banner-small.jpg';
import AboutUs from '../Components/AboutUs';
import Configuration from '../Components/Configuration';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const Home = () => {
  return (
    <>
      <Navbar />
      <img 
        src={heroBannerLg} 
        srcSet={`${heroBannerSm} 770w, ${heroBannerLg} 1200w`}
        alt="sora and saki banner" 
        className='w-full'
      />
      <Configuration />
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home;