import "./NavBar_Banner_Footer.css"

import LogoLove from "../assets/logoChickenPink.png"
import LogoRainbow from "../assets/logoChickenRainbow.png"

function Footer() {
    return (<footer>
        <img src={LogoLove} className="firstLogo" alt="Logo Chicken Rose"></img>
        <p>Avec amour… et poulet, fait c’est ❤️🐔</p>
        <div className="forTheScale">
            <img src={LogoRainbow} className="firstLogo" alt="Logo Chicken Arc-en-ciel"></img>
        </div>
    </footer>); 
}

export default Footer;