import './NavBar.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

{/* <FontAwesomeIcon icon={solid('user-secret')} /> */ }


const NavBar = () => {
    const [username,setUsername] = useState(null)
    useEffect(() => {
        setUsername(localStorage.getItem('email'))
        // sticky nav bar
        window.onscroll = function () {
            let offset = document.querySelector("nav").offsetTop;
            if (window.scrollY > 1) {
                document.querySelector('nav').classList.remove("change-nav-scroll")
            } else {
                document.querySelector('nav').classList.add("change-nav-scroll")
            }
        }
    },[])

    return (
        <nav className="change-nav-scroll">
            <div className="logo-title-div">
                <p>
                    <img id="farmer-logo" src='/logo1.jpg' alt="Logo" />
                </p>
                <h1><Link to="/" className="title">Farmers Web Portal</Link></h1>
            </div>
            <div className="nav">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="expandbtn">
                    <i className='fa-solid fa-bars'></i>
                </label>
                <label htmlFor="check" className="contractbtn">
                    <i className='fa-solid fa-xmark'></i>
                </label>
                <ul>
                    <li><Link to="/CropSuggestion" className="nav-element CropSuggestion">Crops</Link></li>
                    <li><Link to="/discussions" className="nav-element discussions">Discussions</Link></li>
                    <li><Link to="/ChatBot" className="nav-element ChatBot">Chat Bot</Link></li>
                    <li><Link to="/Market" className="nav-element Market">Market</Link></li>
                    <li><Link to="/Aboutus" className="nav-element Aboutuss">About Us</Link></li>
                    {username === null &&
                        <li><Link to="/login" id="loginUser" className="nav-element">Guest</Link></li>
                    }
                    {username &&
                        <li><Link to="/login" id="loginUser" className="nav-element">{username.slice(0,6).toUpperCase()}</Link></li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;