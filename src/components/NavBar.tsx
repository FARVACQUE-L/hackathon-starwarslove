import LogoBlue from "../assets/logoChickenBlue.png"
import LogoRed from "../assets/logoChickenRed.png"

import "./NavBar.css"

function NavBar() {
    return (
        <nav>
            <div className="forTheScale">
                <img src={LogoBlue} className="firstLogo" alt="Logo Chicken Bleu"></img>
            </div>
            <h1>Force Match</h1>
            <img src={LogoRed} className="secondLogo" alt="Logo Chicken Rouge"></img>
        </nav>
    );
}

export default NavBar