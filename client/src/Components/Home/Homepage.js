import React from 'react';
// import './Homepage.css'
import Container1 from './Container1'
import Container2 from './Container2'
import Container3 from './Container3'
import Container4 from './Container4'
import Footer from './Footer';
import styled from 'styled-components';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
    return (
        <HomeWrapper>
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
            <Footer />
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
/* body {
    background-image: url(/public/images/login1.png)
} */

.container1 {
    /* border: 1px solid black; */
    /* display: flex; */
    height: 80vh;
    background: #00d68b;
    z-index: 2;
}

.con1-row {
    padding-top: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    width: auto;
}

.con1-col1 h1 {
    font-size: 40px;
    font-family: "Helvetica Neue", Helvetica, Arial;
}

.con1-col1 p {
    font-size: 17px;
}

#con1 {
    padding: 200px 200px 200px 200px;
    justify-content: center;
    text-align: center;
    /* border: 1px solid black; */
    height: 70vh;
    background: #00d68b
}

.con1-col1 {
    margin-left: 0vh;
}

.header-images {
    display: flex;
    position: relative;
    top: -15vh;
    left: 20vh;
}

.header-images img {
    position: absolute;
    width: 200px;
    height: 200px;
}

@keyframes animation1 {
    from {
        transform: rotate(10deg);
    }
    to {
        right: 30px;
        transform: rotate(-10deg);
    }
}

@keyframes animation2 {
    from {
        /* transform: rotate(-10deg); */
        transform: rotate(10deg) scale(1.05);
    }
    to {
        /* right: 300px; */
        right: 230px;
        /* transform: rotate(10deg); */
        transform: rotate(-10deg) scale(0.85);
    }
}

@keyframes animation3 {
    from {
        transform: rotate(10deg);
    }
    to {
        right: 430px;
        transform: rotate(-10deg);
    }
}

.header-images img:nth-of-type(1) {
    z-index: 2;
    border-top-right-radius: 25%;
    border-bottom-left-radius: 25%;
    right: 80px;
    top: 250px;
    animation: animation1 4s ease-in-out 0s infinite alternate-reverse;
}

.header-images img:nth-of-type(2) {
    border-radius: 50%;
    right: 280px;
    top: 150px;
    animation: animation2 4s ease-in-out 0s infinite alternate-reverse;
}

.header-images img:nth-of-type(3) {
    border-top-right-radius: 25%;
    border-bottom-left-radius: 25%;
    right: 480px;
    top: 50px;
    animation: animation3 4s ease-in-out 0s infinite alternate-reverse;
}

@media (max-width: 991px) {
    .header-images img {
        height: 150px;
        width: 150px;
    }
    .header-images img:nth-of-type(1) {
        animation: none;
        right: 50px;
    }
    .header-images img:nth-of-type(2) {
        animation: none;
        right: 200px;
    }
    .header-images img:nth-of-type(3) {
        animation: none;
        right: 350px;
    }
}
/* @media (max-width: 767px) {
    .header-images {
        display: flex;
        justify-content: center;
    }
    .header-images img {
        position: absolute;
        height: 100px;
        width: 100px;
    }
    .header-images img:nth-of-type(1) {
        top: 500px;
        animation: none;
        right: 50px;
    }
    .header-images img:nth-of-type(2) {
        top: 450px;
        animation: none;
        right: 160px;
    }
    .header-images img:nth-of-type(3) {
        top: 400px;
        animation: none;
        right: 270px;
    }
} */
/* ========================== */

.shaped-border {
    height: 70px;
    z-index: 3;
    clip-path: polygon(100% 0, -12% 5%, 100% 100%);
    position: relative;
    top: -1.3vh;
    /* bottom: -65px;
    right: 0;
    left: 0; */
    width: 100%;
    background: #00d68b
}

@media(max-width:991px) {
    .con1-row {
        grid-template-columns: 1fr;
        width: auto;
    }
    .shaped-border {
        height: 70px;
        z-index: 3;
        clip-path: polygon(100% 0, -12% 4%, 100% 100%);
        position: relative;
        top: 69.5vh;
        /* bottom: -65px;
        right: 0;
        left: 0; */
        width: 100%;
        background: #00d68b
    }
}

.fullwidth-col-img {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: absolute;
    top: 79vh;
    height: 25vh;
}

.fullwidth-col-img *:not(a) {
    color: white
}

.fullwidth-col-img--item {
    padding: 140px 30px 80px;
    position: relative;
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
}

#image1 {
    /* background-image: url(/FWP_V2/HomePage_Images/1.png); */
    background-image: url(/HomePage_Images/1.png);
}

#image2 {
    background-image: url(/HomePage_Images/2.png)
}

#image3 {
    background-image: url(/HomePage_Images/3.png)
}

#image4 {
    background-image: url(/HomePage_Images/4.png)
}

.fullwidth-col-img--item h3 {
    font-size: 24px
}

.fullwidth-col-img--item-bg {
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1
}

@media(max-width:1199px) {
    .fullwidth-col-img--item {
        padding: 100px 25px 60px
    }
    .fullwidth-col-img--item h3 {
        font-size: 20px
    }
    .fullwidth-col-img--item-desc {
        font-size: 14px
    }
}

@media(max-width:991px) {
    .fullwidth-col-img--item {
        position: relative;
        top: 71vh;
        padding: 80px 20px 80px;
        height: 280px
    }
    .fullwidth-col-img {
        display: grid;
        grid-template-columns: 1fr 1fr
    }
}

@media(max-width:479px) {
    .fullwidth-col-img--item h3 {
        font-size: 16px !important
    }
    .fullwidth-col-img--item-desc {
        font-size: 13px
    }
    .fullwidth-col-img {
        grid-template-columns: 1fr 1fr
    }
}
/* =========================== */

.about-wesite {
    position: relative;
    width: 100%;
    height: 1300px;
    top: 23vh;
    padding-top: 10px;
    padding: bottom 50px;
    background-color: #fff;
    /* border: 1px solid black; */
}

.heading {
    font-size: 26px;
}

.heading h1 {
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.row-fluid-wrapper {
    height: 65vh;
    display: flex;
    flex-direction: row;
    /* padding: 40px 20px 40px 20px; */
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    justify-content: space-around;
    align-items: center;
    text-align: center;
    line-height: 1.7;
}

.row-fluid-wrapper h1 {
    font-family: 'Oswald', sans-serif;
}

.row-fluid-wrapper-image-1 {
    margin-left: 20vh;
    margin-top: 20vh;
    padding-left: 5vh
    /* position: relative;
    left: 45vh;
    top: 9vh; */
}

.row-fluid-wrapper-content-1 {
    /* position: relative;
    left: 65vh;
    top: 0vh; */
    width: 500px;
    height: 200px;
    padding-right: 5vh;
    margin-right: 10vh;
    text-align: left;
}

.row-fluid-wrapper-image-1 img,
.row-fluid-wrapper-image-2 img {
    height: 350px;
    width: 400px;
}

.row-fluid-wrapper-content-2 {
    /* position: relative;
    left: 9vh;
    top: 5vh; */
    margin-left: 20vh;
    padding-left: 5vh;
    width: 500px;
    height: 200px;
    text-align: left;
}

.row-fluid-wrapper-image-2 {
    padding-right: 5vh;
    margin-top: 5vh;
    /* position: relative;
    left: -10vh;
    top: 8vh; */
}

.row-fluid-wrapper-content-1,
.row-fluid-wrapper-content-2 h1 {
    font-size: 35px;
}

.row-fluid-wrapper-content-1,
.row-fluid-wrapper-content-2 p {
    font-size: 18px;
}

.row-fluid-wrapper-image-2 {
    position: relative;
    right: 100px;
}

@media (max-width: 991px) {
    .about-wesite {
        height: 1700px;
        position: relative;
        top: 126vh;
    }
    .heading {
        font-size: 20px;
    }
    .mqcss1,
    .mqcss2 {
        display: flex;
        flex-direction: column;
        height: 650px
    }
    .mqcss1 {
        margin-bottom: 20vh
    }
    .row-fluid-wrapper-image-1 {
        margin: 0;
        padding: 0;
    }
    .row-fluid-wrapper-content-1 {
        width: 300px;
        height: 200px;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    .row-fluid-wrapper-content-2 {
        margin: 0;
        padding: 0;
        width: 300px;
        height: 200px;
        text-align: left;
    }
    .row-fluid-wrapper-image-2 {
        margin-left: 22vh;
        padding: 0;
    }
    .row-fluid-wrapper-image-1 img,
    .row-fluid-wrapper-image-2 img {
        height: 250px;
        width: 300px;
    }
    .row-fluid-wrapper-content-1,
    .row-fluid-wrapper-content-2 h1 {
        font-size: 27px;
    }
    .row-fluid-wrapper-content-1,
    .row-fluid-wrapper-content-2 p {
        font-size: 14px;
    }
}
/* ============================================================ */

.customer-review {
    height: 600px;
    width: 100%;
    position: relative;
    background: white;
    top: 28vh;
    padding: 0px 100px 20px 100px;
    /* border: 1px solid black; */
}

.quote-background-image {
    background-image: url(/HomePage_Images/login.webp) !important;
    background-size: auto !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
}

.quote-max-width>.row-fluid-h {
    max-width: 750px !important;
    margin-left: auto !important;
    margin-right: auto !important;
}

.quoteh {
    height: 500px;
    width: 500px;
    background-image: url(/HomePage_Images/quotes1.svg) !important;
    float: right;
    background-size: contain;
    text-align: center;
    padding: 100px 60px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    position: relative
}

.quote_content {
    margin-bottom: 1.4rem;
    font-size: 16px;
    padding-top: 40px
}

.quote_footer {
    align-items: center;
    display: flex;
    padding: 10px 20px 0
}

.quote_author-image {
    border-radius: 100px;
    margin-right: 1.05rem
}

.quote_author-content {
    font-size: 16px;
    font-weight: 500
}

@media (max-width:991px) {
    .customer-review {
        position: relative;
        top: 126vh;
    }
}

@media(max-width:650px) {
    .quote_content {
        font-size: 14px;
        padding-top: 18px
    }
    .quoteh {
        height: auto;
        width: 100%;
        float: right;
        padding: 80px 20px 40px 20px;
        display: flex;
        align-items: center;
        background: white;
        background-repeat: no-repeat;
        text-align: unset;
        background-size: 115%;
        background-position: -200% -47px;
        background-image: none !important
    }
    blockquote.quoteh.cardh:before {
        content: " ";
        display: BLOCK;
        background-image: url(/HomePage_Images/quotes1.svg);
        /* background-image: url(../HomePage_Images/quotes1.svg); */
        height: 100px;
        width: 100px;
        background-repeat: no-repeat;
        background-size: 300px 300px;
        position: absolute;
        top: 0
    }
    blockquote.quoteh.cardh:after {
        content: " ";
        display: BLOCK;
        background-image: url(/HomePage_Images/quotes1.svg);
        /* background-image: url(../HomePage_Images/quotes1.svg); */
        height: 100px;
        width: 100px;
        background-repeat: no-repeat;
        background-size: 300px 300px;
        position: absolute;
        bottom: -20px;
        right: 0px;
        transform: rotate(180deg);
        z-index: 0
    }
    .quote_footer {
        z-index: 1;
        position: relative
    }
}
/* ====================================== */

.home_footer-container {
    max-width: 1170px;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.home_footer-col ul {
    list-style: none;
}

.home_footer {
    background-color: #24262b;
    padding: 70px 0;
    position: relative;
    top: 47vh;
}

.home_footer-col {
    width: 25%;
    padding: 0 15px;
}

.home_footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
}

.home_footer-col h4::before {
    content: '';
    position: absolute;
    left: 10;
    bottom: -15px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.home_footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.home_footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
    text-align: left;
    padding-left: 80px
}

#home_footer-col-online-shop ul li a {
    padding-left: 100px;
}

.home_footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 88px;
}

#home_footer-col-online-shop ul li a:hover {
    padding-left: 108px;
}

.home_footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
}

.home_footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
}
/*responsive*/

@media(max-width: 767px) {
    .home_footer-col {
        width: 50%;
        margin-bottom: 30px;
    }
}

@media(max-width: 574px) {
    .home_footer-col {
        width: 100%;
    }
}

.fa-facebook-f,
.fa-linkedin-in {
    color: #5393fa;
}

.fa-twitter {
    color: rgba(29, 161, 242, 1.00);
}

.fa-instagram {
    color: rgb(189, 63, 84);
}
`;



export default Homepage;
