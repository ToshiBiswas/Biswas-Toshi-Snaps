

const Footer = () => {
    return(
        <div className="content">
            <div className="content_left"> 
                <a href ="../../index.html"><h1>Snaps</h1></a>
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
                <div classaNme={`socials ${window.innerWidth>=1280 ? 'active' : 'inactive'}`} style={{width:`${window.innerWidth>=1280 ? "0%" : 'auto'}`}}>
                    <a className="Facebook" href="https://m.facebook.com/"><img className="Facebook_Logo"></img></a>
                    <a className="X" href="https://x.com/"><img className="X_Logo"></img></a>
                    <a className="Instagram" href="https://www.instagram.com/"><img className="Instagram_Logo"></img></a>
                    <a className="Pinterest" href="https://www.pinterest.com/"><img className="Pinterest_Logo"></img></a>
                </div>
            </div>
            <div classaNme={`socials ${window.innerWidth<1280 ? 'active' : 'inactive'}`} style={{width:`${window.innerWidth>=1280 ? "0%" : 'auto'}`}}>
                    <a className="Facebook" href="https://m.facebook.com/"><img className="Facebook_Logo"></img></a>
                    <a className="X" href="https://x.com/"><img className="X_Logo"></img></a>
                    <a className="Instagram" href="https://www.instagram.com/"><img className="Instagram_Logo"></img></a>
                    <a className="Pinterest" href="https://www.pinterest.com/"><img className="Pinterest_Logo"></img></a>

            </div>
        </div>
    )

}
export default Footer;