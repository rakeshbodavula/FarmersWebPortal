import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const AdminPortal = (props) => {
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [products, setProducts] = useState(null)

    const seller = localStorage.getItem('email')

    useEffect(() => {
        fetch('http://localhost:9999/adminportal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email : seller}),
        })
            .then(res => res.json())
            .then(result => {
                if(result.msg==='err'){
                    navigate('/')
                }
                setData(result.data)
                setProducts(result.products)
            })
            .catch(err => console.log(err))
    })

    const onLogoutHandler = () =>{
        localStorage.removeItem('email')
        // console.log('Logout')
        navigate('/login')
    }



    // let $sections = $('section');
    // $(window).scroll(function () {
    //     let currentScroll = $(this).scrollTop();
    //     let $currentSection
    //     $sections.each(function () {
    //         let divPosition = $(this).offset().top;
    //         if (divPosition - 100 < currentScroll) {
    //             $currentSection = $(this);
    //         }
    //         if ($currentSection) {
    //             let id = $currentSection.attr('id');
    //             $('a').removeClassName('active');
    //             $("[to='#" + id + "']").addClassName('active');
    //         }
    //     })


    function preventBack() {
        window.history.forward();
    }

    setTimeout(preventBack, 0);

    // window.onunload = function () { null };
    // if (data && products) {

    //     const colors1 = ['orangered', 'rgb(119, 53, 225)', 'rgb(255, 3, 255)', 'royalblue']
    //     const colors2 = ['rgb(253, 200, 181)', 'rgb(207, 177, 255)', 'rgb(255, 192, 250)', 'rgb(173, 173, 255)']
    //     for (let i = 0; i < 4; i++) {
    //         const dataBar = document.querySelector(`.circular-progress_${i}`)
    //         const valContainer = document.querySelector(`.value-container_${i}`)

    //         let initialData = 0;
    //         const finalData = +document.querySelector(`.input_${i}`).value;
    //         // const finalData = 57
    //         const speed = 80;
    //         const maxData = document.querySelector('.input_3').value
    //         const totalDeg = (360 / maxData)

    //         let progress = setInterval(() => {
    //             initialData++;
    //             valContainer.textContent = `${initialData}`;
    //             dataBar.style.background = `conic-gradient(${colors1[i]} ${initialData * totalDeg}deg,${colors2[i]} ${initialData * totalDeg}deg)`;
    //             if (initialData === finalData) {
    //                 clearInterval(progress)
    //             }
    //         }, speed)

    //     }
    // }


    return (
        <AdminPortalWrapper>
            {(!data || !products) && <h1>Loading....</h1>}
            {data && products &&
                <div className="main_container">
                    <aside>
                        <div className="logo-details">
                            {/* <img src="Images/logo1.jpg" alt=""/> */}
                            <span className="logo_name"><Link to="/">Admin Portal</Link></span>
                        </div>

                        <ul className="nav-links">

                            <li><Link to="#dashboard_section" className="active">
                                <i className='bx bx-grid-alt'></i>
                                <span className="links_name">Dashboard</span>
                            </Link></li>

                            <li><Link to="#products_section">
                                <i className='bx bx-box'></i>
                                <span className="links_name">Products</span>
                            </Link></li>

                            <li><Link to="#account_section">
                                <i className='bx bx-cog'></i>
                                <span className="links_name">Account</span>
                            </Link></li>

                            <li className="log_out"><Link onClick={onLogoutHandler}>
                                <i className='bx bx-log-out'></i>
                                <span className="links_name">Log out</span>
                            </Link></li>

                        </ul>
                    </aside>

                    {/* <nav>
                        <h1 className="nav_title">Admin Portal</h1>
                        <h1 className="nav_name">Seller Name : {seller}
                        </h1>
                    </nav> */}

                    <div className="main_details_container">

                        {/* <!------------------------- Dashboard Section Starts here  ------------------------------> */}

                        <section id="dashboard_section">
                            <h1 className="dashboard_main_heading">Product Statistics</h1>
                            <div className="graph">

                                <div className="circular_graph">
                                    <div className="circular-progress circular-progress_0">
                                        <div className="value-container value-container_0">
                                            <input type="number" defaultValue={data.seeds} className="input_0" hidden />
                                        </div>
                                    </div>
                                    <h1>Seeds</h1>
                                </div>


                                <div className="circular_graph">
                                    <div className="circular-progress circular-progress_1">
                                        <div className=" value-container value-container_1">
                                            <input type="number" className="input_1" defaultValue={data.fertilizers} hidden />
                                        </div>
                                    </div>
                                    <h1>Fertilisers</h1>
                                </div>


                                <div className="circular_graph">
                                    <div className="circular-progress circular-progress_2">
                                        <div className="value-container value-container_2">
                                            <input type="number" className="input_2" defaultValue={data.pesticides} hidden />
                                        </div>
                                    </div>
                                    <h1>Pesticides</h1>
                                </div>


                                <div className="circular_graph">
                                    <div className="circular-progress circular-progress_3">
                                        <div className="value-container value-container_3">
                                            <input type="number" className="input_3" defaultValue={data.total} hidden />
                                        </div>
                                    </div>
                                    <h1>Total Products</h1>
                                </div>

                            </div>
                        </section>


                        {/* <!------------------------- Products Section Starts here  ------------------------------> */}

                        <section id="products_section">
                            <h1 className="prod_section_main_heading">My Products</h1>

                            <div className="box-container">
                                {products.length > 0 && products.map(prod => (
                                    <div className="box" key={Math.random()}>
                                        <span className="discount">
                                            {(((prod.mrp - prod.price) / prod.mrp) * 100).toFixed(1)}%<br />
                                        </span>
                                        <Link to={"/productpage/" + prod._id} target="_blank">
                                            <img src={prod.img1} alt="" />
                                            <h3>{prod.name}</h3>
                                        </Link>
                                        <div className="price"> Rs {prod.price}/- <span> Rs {prod.mrp}/- </span> </div>
                                    </div>
                                ))}

                            </div>

                        </section>


                        {/* <!------------------------- Account Section Starts here  ------------------------------> */}

                        <section id="account_section">
                            <div className="account_edit_div">
                                <Link to="">
                                    <h3>Update Credentials</h3>
                                </Link>
                                <Link to="">
                                    <h3>Delete Account</h3>
                                </Link>
                                <Link to="">
                                    <h3>Change a Product</h3>
                                </Link>
                            </div>


                        </section>

                        <button className="goTop_btn"><Link to="#dashboard_section">Back to Top</Link></button>

                    </div>

                </div>
            }
        </AdminPortalWrapper>
    );
}

const AdminPortalWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}


:root {
    --aside_width: 20vw;
    --logo_div_height: 12vh;
    --aside_ul_height: calc(100vh - var(--logo_div_height));

    --nav_height: 6vh;
    --section_height: calc(100vh - var(--nav_height));

    --green: #27ae60;
    --black: #2c2c54;
}

/* <------------------------------------------ styling for aside element ---------------------------------------------> */

aside {
    background-color: rgb(38, 151, 255);
    float: left;
    height: 100vh;
    width: var(--aside_width);
    width : 20vw;
    position: fixed;
    /* padding: 10px; */
}

.logo-details {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    height: var(--logo_div_height);
    // height : 6vh;
    margin-top: 15px;
}

aside a {
    text-decoration: none;
    /* font-size: 18px; */
    font-size: calc(0.8vw + 0.8vh);
    font-weight: 400;
    font-family: Poppins, sans-serif;
    color: #fff;
}

.logo-details a {
    font-size: calc(1vw + 1vh);
}

.logo-details img {
    height: calc(2vh + 2vw);
    width: calc(2vh + 2vw);
    border-radius: 50%;
    margin: 10px 0;
}

aside ul {
    margin-top: 1vh;
    /*subtract margin to prevent overflow in height*/
    // height: calc(var(--aside_ul_height) -5vh);
    // height: 50vh;
}

aside li {
    /* margin-top: 10vh; */
    list-style: none;
    height: 8vh;
}

aside li a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.active {
    background: #00d68b;
    transition: 0.3s ease-in-out;
}

aside li a:hover {
    background-color: #e05260;
}

aside li i {
    width: 25%;
    font-size: 1.5vw;
    color: #fff;
    text-align: center;
}

.log_out {
    position: absolute;
    left : 0;
    bottom : 8vh;
    width: 100%;
}


/* <------------------------ nav bar styling ----------------------------> */

nav,.main_details_container {
    position: relative;
    left: var(--aside_width);
    // width: calc(100% - var(--aside_width));
    overflow: hidden;
}

.main_container{
    position : relative;
    top: 7vh;
}

nav {
    position: fixed;
    /* width: 100%; */
    background-color: rgb(191, 186, 192);
    height: var(--nav_height);
    z-index: 2;
}

nav h1 {
    font-size: calc(1vh + 1vw);
    line-height: var(--nav_height);
}

nav .nav_title {
    float: left;
    padding-left: 2vw;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

nav .nav_name {
    float: right;
    padding-right: 2vw;
}


/* <------------------------------------------ styling for  main-details-container  div ---------------------------------------------> */


.main_details_container {
    /* margin-top: var(--nav_height); */
    position: relative;
    top: var(--nav_height);
    left : 20vw;
    width : 75vw;
}

.main_details_container section {
    height: var(--section_height);
    scroll-margin-top: var(--nav_height);

}


/* <------------------------------------------ styling for Dashboard Section ---------------------------------------------> */


#dashboard_section{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.dashboard_main_heading{
    font-size: calc(2vh + 2vw);
    text-align: center;
}

.graph {
    /* display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
    align-items: center; */
    /* background-color: #372d5e; */

    display: grid;
    grid-template-columns: repeat(2,1fr);
    text-align: center;
    scroll-margin-bottom: 0;
}





/* <------------------------------------------ styling for circular progress bar element ---------------------------------------------> */



.circular_graph {
    font-size: calc(1vh + 1.5vw);
    padding: 0 1.5rem;
}

.circular-progress_3,
.circular-progress_0,
.circular-progress_1,
.circular-progress_2 {
    height: calc(7vh + 8vw);
    width: calc(7vh + 8vw);
    border-radius: 50%;
    display: grid;
    place-items: center;
}

.circular-progress_3:before,
.circular-progress_0:before,
.circular-progress_1:before,
.circular-progress_2:before {
    content: "";
    position: absolute;
    height: calc(6vh + 7vw);
    width: calc(6vh + 7vw);
    background-color: #fff;
    border-radius: 50%;
}

.value-container_3,
.value-container_0,
.value-container_1,
.value-container_2 {
    position: relative;
    /* font-size: 50px; */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #231c3d;
}

.circular_graph h1 {
    padding: 1.8rem 0;
    font-size: calc(1vh + 1vw);
    ;
}


/* <------------------------------------------ styling for Dashboard Section Ends here ---------------------------------------------> */




/* <------------------------------------------ styling for Products section ---------------------------------------------> */


#products_section {
    /* background-color: rgb(222, 220, 224); */
    height: max-content;
}

.prod_section_main_heading {
    text-align: center;
    font-size: calc(2vh + 2vw);
}

.box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 3rem;
}

.box-container .box {
    flex: 1 1 16rem;
    text-align: center;
    padding: 1.5rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    /* overflow: hidden; */
    position: relative;
}

.box-container .box img {
    height: 10rem;
}

.box-container .box .discount {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(0, 255, 0, 0.1);
    color: var(--green);
    padding: 0.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;
}

.box-container a {
    text-decoration: none;
    color: #000;
}

.box-container .box h3 {
    color: var(--black);
    font-size: 1.5rem;
}


.box-container .box .price {
    font-size: 1.2rem;
    color: #333;
    padding: 0.5rem 0;
}

.box-container .box .price span {
    font-size: calc(1vh + 1vw);;
    color: #999;
    text-decoration: line-through;
}













/* <------------------------------------------ styling for Account Section ---------------------------------------------> */

#account_section {
    /* height: max-content; */
}

.account_edit_div {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 3rem;
    margin: auto;
    height: 100%;
    width: 70%;
    text-decoration: none;
    font-size: calc(1vh + 1vw);
}

.account_edit_div a {
    margin: 1rem 0;
    text-decoration: none;
    color: #000;
    border: solid rgb(141, 140, 140);
    border-radius: 10px;
    padding: 0.5rem;
}




.goTop_btn{
    padding: 0.8rem;
    background-color: rgb(182, 181, 181);
    float: right;
    position: absolute;
    bottom: 1%;
    right: 1%;
}

.goTop_btn a{
    text-decoration: none;
    font-size: 1.1rem;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #000;
    font-weight: 500;
}

`;

export default AdminPortal;