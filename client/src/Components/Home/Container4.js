import React from 'react';
import svg1 from '../assets/Images/svg.svg'
import svg2 from '../assets/Images/14.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Container4() {
    return (
        <>
            <div className="about-wesite ">
                <div className="heading ">
                    <h1>ABOUT THIS PORTAL</h1>
                </div>

                <div id="row-fluid-wrapper-1 " className="row-fluid-wrapper mqcss1">
                    <div className="row-fluid-wrapper-image-1">
                        <img src={svg1} data-aos="zoom-in-right" alt="" />
                    </div>
                    <div className="row-fluid-wrapper-content-1" data-aos="zoom-in-left">
                        <h1>CROP SUGGESTIONS....</h1><br />
                        <p>This portal is used to educate farmers about various types of crops. The <strong>CROPS</strong> page takes input from the user and displays the best possible and suitable crops according to the input given. This page displays full-fledged
                            details such as investment, water requirement, Gross income and total profit that can be earned.<br />This helps the Farmers to have better understanding of professional farming.</p>
                    </div>
                </div>

                <div id="row-fluid-wrapper-2 " className="row-fluid-wrapper mqcss2">
                    <div className="row-fluid-wrapper-content-2" data-aos="zoom-in-right">
                        <h1>MARKET PLACE....</h1><br />
                        <p>This portal also works as a platform that provides the farmers all the essential items from trustworthy manufacturers who have their products verified,certified and approved by the Government of India.<br /></p>
                    </div>
                    <div className="row-fluid-wrapper-image-2">
                        <img src={svg2} data-aos="zoom-in-left" alt="" />
                    </div>
                </div>
            </div>


            <div className="customer-review ">
                <div className="row-fluid-wrapper quote-background-image ">
                    <div className="row-fluid-h ">

                        <blockquote className="quoteh cardh ">
                            <div className="quote_content ">
                                "Because of their connection to the land,farmers do more to protect and preserve our environment then almost anyone else. They are some of the best environmentalists around."<br />
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
        </>
    );
}

export default Container4;