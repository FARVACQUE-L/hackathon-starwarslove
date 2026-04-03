import LogoBlue from "../assets/logoChickenBlue.png"
import LogoRed from "../assets/logoChickenRed.png"

import "./NavBar_Banner_Footer.css"

type NavBarProps = {
	onTitleClick?: () => void;
};

function NavBar({ onTitleClick }: NavBarProps) {
    return (
        <nav>
            <div className="forTheScale">
                <img src={LogoBlue} className="firstLogo" alt="Logo Chicken Bleu"></img>
            </div>
            <h1
                className={onTitleClick ? "nav-title nav-title-clickable" : "nav-title"}
                onClick={onTitleClick}
            >
                Force Match
            </h1>
            <img src={LogoRed} className="secondLogo" alt="Logo Chicken Rouge"></img>
        </nav>
    );
}

export default NavBar
