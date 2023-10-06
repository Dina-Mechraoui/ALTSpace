import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import darkBG from '../../assets/darkBG.png'
import lightBG from '../../assets/lightBG.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'

import './LandingPage.css'
const LandingPage = () => {
    const {theme, dispatch} = useContext(ThemeContext)

    return ( 
        <div className={theme==="light" ? "landing-page-container light-mode" : "landing-page-container dark-mode"}  >
            <div className="landing-section">
                <button onClick={() => dispatch({type : "TOGGLE"})} > <img src={theme==="dark" ? moon : sun}/> </button>
                <button className="explore-button">Explore</button>
                <img src={theme==="dark" ? darkBG : lightBG} className="dark-land" />
            </div>
            <div className="about-us-section grid">
                <h1>About Us</h1>
                <p>In the near future, as space tourism becomes routine, our mission as futuristic travel agents is to create an advanced tool. This tool will not only customize itineraries for those wishing to explore Mars, Jupiter, or Saturn but will also educate current users about our solar system's wonders. We aim to connect the present to the cosmic frontier, inviting everyone to explore space's mysteries and marvels.</p>
            </div>
            <div className="work-section grid">
                <h1>Work</h1>
                <p>In this exciting future of space tourism, our team of dedicated travel agents is at the forefront of the industry, pioneering a tool that seamlessly crafts personalized journeys for aspiring space explorers. These intrepid travelers will rely on our collective expertise to select their dream destinations within our solar system, such as Mars, Jupiter, or Saturn, and map out their ideal itineraries. Simultaneously, we are committed to enlightening our present-day audience about the myriad celestial wonders that grace our solar system, fostering a deeper understanding of the cosmic realm. Through this collaborative effort, we aspire to bridge the temporal gap, offering both current and future generations a passport to the wonders of space.</p>
            </div>
            <div className="contact-section grid ">
                <h1>Contact</h1>
                <p>We value your input and are eager to assist with any questions or inquiries you may have. Please feel free to reach out to us using the contact information provided below. Your feedback and queries are important to us, and we look forward to hearing from you. </p>
            </div>
        </div>
     );
}
 
export default LandingPage;