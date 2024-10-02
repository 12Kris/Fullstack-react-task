import logoIcon from "../assets/green-logo.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";

function Footer() {
    return (
        <footer>
            <img src={logoIcon} alt="logo-icon"/>
            <div className="footer-menu">
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Projects</a>
            </div>
            <div className="social-media">
                <a href="/"><img src={facebook} alt="facebook"/></a>
                <a href="/"><img src={instagram} alt="instagram" /></a>
                <a href="/"><img src={twitter} alt="twitter" /></a>
                <a href="/"><img src={pinterest} alt="pinterest"/></a>
            </div>
        </footer>
    );
}

export default Footer;