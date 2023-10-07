import './Footer.css'
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import insta from '../../assets/insta-icon.png'
import twitter from '../../assets/twitter-icon.png'
import facebook from '../../assets/facebook-icon.png'
const Footer = () => {
    const {theme, dispatch} = useContext(ThemeContext)
    return ( 
        <div className={theme==="light" ? "footer-container light-mode" : "footer-container dark-mode"}>
            <div className="Wesoilcare">
                <h1>Voyager X</h1>
                <p>Voyager X: Making your imaginations possible through technology. Unleashing space tourism for higher yields. Empowering astronomy enthusiasts for a brighter future.</p>
            </div>
            <div className="Explore">
                <h1>Explore</h1>
                <ul>
                    <li>How we help</li>
                    <li>Required Equipment</li>
                    <li>Usage costs</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="Solutions">
                <h1>Solutions</h1>
                <ul>
                    <li>Features</li>
                    <li>Support</li>
                    <li>Advantages</li>
                    <li>additions</li>
                </ul>
            </div>
            <div className="contact-us">
                <h1>Contact Us</h1>
                <ul>
                    
                </ul>
                <h3><img src=""/>+033340856</h3>
                <h3><img src=""/>wesoilcare@gmail.com</h3>
                <ul className='social-media'>
                    <li><img src={twitter}></img></li>
                    <li><img src={insta}></img></li>
                    <li><img src={facebook}></img></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;