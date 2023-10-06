import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import darkBG from '../../assets/darkBG.png'

import './LandingPage.css'
const LandingPage = () => {
    const {theme, dispatch} = useContext(ThemeContext)

    return ( 
        <div className={theme==="light" ? "landing-page-container light-mode" : "landing-page-container dark-mode"}  >
            <div className="landing-section">
                {theme==="dark" && 
                    <div className="dark">
                        <img src={darkBG} className="dark-land" />
                    </div>
                    
                }
            </div>
            <button onClick={() => dispatch({type : "TOGGLE"})} >change theme</button>
        </div>
     );
}
 
export default LandingPage;