// import LOGO_URL from('../utils/constant');
const {LOGO_URL} = require('../utils/constant')
const Navbar = ()=>{
    return (
        <div className="navbar">
            <div className="logo-box">
                <img src={LOGO_URL} ></img>
            </div>
            <div className="links">
                <a>Home</a>
                <a>About</a>
                <a>Contact Us</a>
                <a>Cart</a>
            </div>
        </div>
    )
}

module.exports = Navbar

// export default Navbar