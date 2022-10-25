import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'

const Home = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="home_div">

            <section className="carousel1">

                <div className="carousel1-container">
                    <div className="carousel1-container-box">
                        <div className="carousel1-container-row">
                            <div className="carousel1-container-heading">
                                <h1>WELCOME TO FARMERS PORTAL</h1>
                                <p>Join the portal and learn the professional way of farming</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="shaped-border">
                    <div className="shape-inner "></div>
                </div>
                <div className="fullwidth-col-img ">
                    <div className="fullwidth-col-img--item" id="image1">
                        <div className="fullwidth-col-img--item-bg "></div>
                        <div className="fullwidth-col-img--item-inner ">
                            <h3>
                                CROP SUGGESTIONS
                            </h3>
                            <div className="fullwidth-col-img--item-desc ">
                                This page will suggest the best crops and their detailed information according to the
                                given input.
                            </div>
                        </div>
                    </div>
                    <div className="fullwidth-col-img--item" id="image2">
                        <div className="fullwidth-col-img--item-bg "></div>
                        <div className="fullwidth-col-img--item-inner ">
                            <h3>
                                MARKET PLACE
                            </h3>
                            <div className="fullwidth-col-img--item-desc ">
                                This Page provides farmers the best products at the very minimal price
                            </div>
                        </div>
                    </div>
                    <div className="fullwidth-col-img--item" id="image3">
                        <div className="fullwidth-col-img--item-bg "></div>
                        <div className="fullwidth-col-img--item-inner ">
                            <h3>
                                CHAT BOT
                            </h3>
                            <div className="fullwidth-col-img--item-desc ">
                                ChatBot helps the users to solve their problems instantly.
                            </div>
                        </div>
                    </div>
                    <div className="fullwidth-col-img--item" id="image4">
                        <div className="fullwidth-col-img--item-bg "></div>
                        <div className="fullwidth-col-img--item-inner ">
                            <h3>
                                DISCUSSIONS
                            </h3>
                            <div className="fullwidth-col-img--item-desc ">
                                Discussions tab helps to unite all the farmers for the query solving among each other
                            </div>
                        </div>
                    </div>
                </div>


                <div className="header-images ">
                    <img src="/HomePage_Images/11.png " />
                    <img src="/HomePage_Images/8.png " />
                    <img src="/HomePage_Images/9.png " />
                </div>
            </section>

            <div className="about-wesite ">
                <div className="heading ">
                    <h1>ABOUT THIS PORTAL</h1>
                </div>
                <div id="row-fluid-wrapper-1 " className="row-fluid-wrapper">
                    <div className="row-fluid-wrapper-image-1">
                        <img src="/HomePage_Images/svg.svg" data-aos="zoom-in-right" />
                    </div>
                    <div className="row-fluid-wrapper-content-1" data-aos="zoom-in-left">
                        <h1>CROP SUGGESTIONS....</h1><br />
                        <p>This portal is used to educate farmers about various types of crops. The
                            <strong>CROPS</strong> page takes input from the user and displays the best possible and
                            suitable crops according to the input given. This page displays full-fledged
                            details such as investment, water requirement, Gross income and total profit that can be
                            earned.<br />This helps the Farmers to have better understanding of professional farming.</p>
                    </div>
                </div>

                <div id="row-fluid-wrapper-2 " className="row-fluid-wrapper">
                    <div className="row-fluid-wrapper-content-2" data-aos="zoom-in-right">
                        <h1>MARKET PLACE....</h1><br />
                        <p>This portal also works as a platform that provides the farmers all the essential items from
                            trustworthy manufacturers who have their products verified,certified and approved by the
                            Government of India.<br /></p>
                    </div>
                    <div className="row-fluid-wrapper-image-2">
                        <img src="/HomePage_Images/14.png" data-aos="zoom-in-left" />
                    </div>
                </div>




            </div>

            <div className="customer-review ">
                <div className="row-fluid-wrapper quote-background-image ">
                    <div className="row-fluid ">

                        <blockquote className="quote card ">
                            <div className="quote_content ">
                                "Because of their connection to the land,farmers do more to protect and preserve our
                                environment then almost anyone else. They are some of the best environmentalists
                                around."<br />
                                <footer className="quote_footer ">
                                    <div className="quote_author-content ">
                                        Ike Skelton, American politician
                                    </div>
                                </footer>
                            </div>
                        </blockquote>

                    </div>
                </div>
            </div>

            <div className="contact-us ">
                <div className="contact-us-container">
                    <div id="contact-us-button " className="us-button ">
                        <button><a href="#">Contact us</a></button>
                    </div>
                    <div id="about-us-button" className="us-button ">
                        <button><a href="/Aboutuss">About us</a></button>
                    </div>
                </div>
            </div>



            <footer className="footer ">
                <div className="footer-container ">
                    <div className="row ">
                        <div className="footer-col ">
                            <h4>company</h4>
                            <ul>
                                <li><a href="# ">about us</a></li>
                                <li><a href="# ">our services</a></li>
                                <li><a href="# ">privacy policy</a></li>
                                <li><a href="# ">affiliate program</a></li>
                            </ul>
                        </div>
                        <div className="footer-col " id="footer-col-online-shop ">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="# ">FAQ</a></li>
                                <li><a href="# ">shipping</a></li>
                                <li><a href="# ">returns</a></li>
                                <li><a href="# ">order status</a></li>
                                <li><a href="# ">payment options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col ">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="/search/seeds">seeds</a></li>
                                <li><a href="/search/fertilizers">fertilizers</a></li>
                                <li><a href="/search/pesticides">pesticides</a></li>
                            </ul>
                        </div>
                        <div className="footer-col ">
                            <h4>follow us</h4>
                            <div className="social-links ">
                                <a href="# "><i className="fab fa-facebook-f "></i></a>
                                <a href="# "><i className="fab fa-twitter "></i></a>
                                <a href="# "><i className="fab fa-instagram "></i></a>
                                <a href="# "><i className="fab fa-linkedin-in "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;