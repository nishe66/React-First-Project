import './App.css'
import Affordabel from './components/Affordablepack/Affordabel'
import Bottomfooter from './components/Bottomfooter/Bottomfooter'
import Course from './components/Course/Course'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Livevideo from './components/Livevideo/Livevideo'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter/Newsletter'
import Pakage from './components/Package/Package'
import Reusecourse from './components/Reusecourse/Reusecourse'
import { CiHeart } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";

function App() {
return (
    <>
    <Navbar/>
     <Hero/>
     <Pakage/>
     <Livevideo/>
    <Affordabel />
     <Course/>
    <Education/>
    <Newsletter />
    <Footer/>
    <Bottomfooter/>
  
   </>
  )
}

export default App
