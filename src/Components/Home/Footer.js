import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

            <div class="home_footer ">
                <div class="home_footer-container ">
                    <div class="row ">
                        <div class="home_footer-col ">
                            <h4>company</h4>
                            <ul>
                                <li><Link to="/Aboutuss">about us</Link></li>
                                <li><Link to="# ">our services</Link></li>
                                <li><Link to="# ">privacy policy</Link></li>
                                <li><Link to="# ">affiliate program</Link></li>
                            </ul>
                        </div>
                        <div class="home_footer-col " id="home_footer-col-online-shop ">
                            <h4>get help</h4>
                            <ul>
                                <li><Link to="# ">FAQ</Link></li>
                                <li><Link to="# ">shipping</Link></li>
                                <li><Link to="# ">returns</Link></li>
                                <li><Link to="# ">order status</Link></li>
                                <li><Link to="# ">payment options</Link></li>
                            </ul>
                        </div>
                        <div class="home_footer-col ">
                            <h4>online shop</h4>
                            <ul>
                                <li><Link to="/search/seeds">seeds</Link></li>
                                <li><Link to="/search/fertilizers">fertilizers</Link></li>
                                <li><Link to="/search/pesticides">pesticides</Link></li>
                            </ul>
                        </div>
                        <div class="home_footer-col ">
                            <h4>follow us</h4>
                            <div className="social-links ">
                                <Link to="# "><i className="fab fa-facebook-f "></i></Link>
                                <Link to="# "><i className="fab fa-twitter "></i></Link>
                                <Link to="# "><i className="fab fa-instagram "></i></Link>
                                <Link to="# "><i className="fab fa-linkedin-in "></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Footer
