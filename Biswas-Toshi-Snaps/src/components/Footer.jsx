
import "../styles/Footer.css"
import Facebook from "../assets/Icons/Facebook.svg"
import X from "../assets/Icons/X_twitter.svg"
import Instagram from"../assets/Icons/Instagram.svg"
import Pinterest from "../assets/Icons/Pinterest.svg"
import { Link } from "react-router-dom"
const Footer = () => {
    return(
        <div className ="content-container">
            <div className="contents">
                <div className="content_left"> 
                    <Link to="/">Snaps</Link>
                </div>
                <div className="content_right"> 
                    <div className="content_right_left">
                        <p>For photographers</p>
                        <p>Hire talent</p>
                        <p>Inspiration</p>
                    </div>
                    <div className="content_right_center">
                        <p>About</p>
                        <p>Careers</p>
                        <p>Support</p>
                    </div>
                </div>

            </div>
            <div className={`socials ${window.innerWidth<1280 ? 'active' : 'inactive'}`} >
                    <a className="Facebook" href="https://m.facebook.com/"><img className="Facebook_Logo" src={Facebook}></img></a>
                    <a className="X" href="https://x.com/"><img className="X_Logo" src={X}></img></a>
                    <a className="Instagram" href="https://www.instagram.com/"><img className="Instagram_Logo" src={Instagram}></img></a>
                    <a className="Pinterest" href="https://www.pinterest.com/"><img className="Pinterest_Logo" src={Pinterest}></img></a>
                </div>
        </div>

    )

}
export default Footer;