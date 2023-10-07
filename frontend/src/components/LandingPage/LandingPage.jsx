import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import darkBG from '../../assets/darkBG.png'
import lightBG from '../../assets/lightBG.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import Vector from '../../assets/Vector.png'
import animation from '../../assets/animation.mp4'
import Footer from "../Layout/Footer";
import ResponsiveAppBar from '../Appbar/AppBar';

import './LandingPage.css'
const LandingPage = () => {
    const {theme, dispatch} = useContext(ThemeContext)
    const [newPosition, setNewPosition] = useState("")

    window.addEventListener('scroll', function(){
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.clientHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / maxScroll) * 500;
        setNewPosition( -scrollPercentage);
    })
 
    return ( 
        <div className={theme==="light" ? "landing-page-container light-mode" : "landing-page-container dark-mode"}  >
            <ResponsiveAppBar />
            <div className="landing-section">
                <button onClick={() => dispatch({type : "TOGGLE"})} className="toggle-button" > <img src={theme==="dark" ? moon : sun}/> </button>
                <button className="explore-button">Explore</button>
                <img src={theme==="dark" ? darkBG : lightBG} className="dark-land" />
            </div>
            <div className="about-us-section grid">
                <div className="text-container">
                    <h1>About Us</h1>
                    <p>In the near future, as space tourism becomes routine, our mission as futuristic travel agents is to create an advanced tool. This tool will not only customize itineraries for those wishing to explore Mars, Jupiter, or Saturn but will also educate current users about our solar system's wonders. We aim to connect the present to the cosmic frontier, inviting everyone to explore space's mysteries and marvels.</p>
                </div>
                <div className="image-container">
                    <img src={Vector} alt="" />
                </div>  
            </div>
            <div className="work-section grid">
                <div className="image-container">
                    <video src={animation} autoPlay muted loop></video>                
                </div>
                <div className="text-container">
                    <div className="text-container">
                        <h1>Work</h1>
                        <p>In this exciting future of space tourism, our team of dedicated travel agents is at the forefront of the industry, pioneering a tool that seamlessly crafts personalized journeys for aspiring space explorers. These intrepid travelers will rely on our collective expertise to select their dream destinations within our solar system, such as Mars, Jupiter, or Saturn, and map out their ideal itineraries. Simultaneously, we are committed to enlightening our present-day audience about the myriad celestial wonders that grace our solar system, fostering a deeper understanding of the cosmic realm. Through this collaborative effort, we aspire to bridge the temporal gap, offering both current and future generations a passport to the wonders of space.</p>
                    </div> 
                </div>
                
                
            </div>
            <div className="features-section grid ">
                <div className="text-container">
                    <h1>Features</h1>
                    <p>Our website is your gateway to the solar system. Explore in-depth guides to all the planets, stay up-to-date with the latest space news and missions, and be the first to know about upcoming travel opportunities to Earth's stations on these distant worlds. Dive into immersive tours, access educational resources, and join a community of space enthusiasts. Whether you're here to learn, dream, or plan your next cosmic adventure, we've got you covered</p>
                    <div className="buttons">
                        <button className="button1">Explore</button>
                        <button className="button2">Travel</button>
                    </div>
                </div>  
                <div className="image-container">
                        <video src={animation} autoPlay muted loop></video> 
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default LandingPage;