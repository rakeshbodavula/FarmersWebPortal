import { Link, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import styled from "styled-components";
import Aos from 'aos'
import "aos/dist/aos.css"
const SearchResults = () => {

    const [data,setData] = useState(null)
    const { query } = useParams()
    // const { data, isPending, error } = props

    // data = data.filter(x => x.name.toLowerCase().trim().includes(name.toLowerCase().trim()))



    useEffect(() => {
        Aos.init({ duration: 1500 });

        try {
            fetch('http://localhost:9999/search', {
                method: 'POST',
                mode:'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({query}),
            })
            .then(res=>res.json())
            .then(results => setData(results))
            .catch(err => console.log(err)) 
        } catch (err) {
            console.log(err)
        }

    }, [])


    const addToCartHandler = async (prod) => {
        // console.log(prod)

        try {
            const res = await fetch('http://localhost:9999/addToCart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prod),
            })
            if (res) {
                // alert('Item Added to cart')
                document.getElementById('prompt').style.display = "block";
                setTimeout(() => {
                    document.getElementById('prompt').style.display = "none";
                }, 2000)
                // navigate('/Cart')
            }
        } catch (err) {
            console.log(err)
        }

    }


    return (
        <SearchResultWrapper>

            <div className="market_body">
                <div id="prompt">Item Added To Cart !</div>
                <Link to="/Cart" className="Res_Cart"><i className="fa-solid fa-cart-shopping"></i> Cart</Link>


                <section className="product" id="product">

                    <h1 className="heading">Results</h1>

                    <div className="box-container">
                        {/* {error && <h1>error</h1>} */}
                        {/* {isPending && <h1 style={{fontSize:"30px"}}>Loading .......</h1>} */}
                        {data && data.map(prod => (

                            <div data-aos='zoom-in-up' className="box" key={Math.random()}>
                                <span className="discount" style={{ fontSize: "14px" }}>
                                    {(((prod.mrp - prod.price) / prod.mrp) * 100).toFixed(1)}<br />Off
                                </span>
                                <Link to={"/productpage/" + prod._id}>
                                    <img src={prod.img1} alt="" />
                                    <h3>{prod.name}</h3>
                                </Link>
                                <div className="stars">
                                    <i className="fas fa-star" key={Math.random()}></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="price"> Rs {prod.price}/- <span> Rs {prod.mrp}/- </span> </div>


                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="quantity">
                                        <span>quantity : </span>
                                        <input type="number" name="quantity" min="1" max="1000" defaultValue="1" />
                                        <span>  kg </span>
                                    </div>
                                    <Link to="/checkoutpage" className="shop_btn">Buy Now</Link>

                                    <div style={{ display: "none" }}>
                                        <input type="text" name="name" defaultValue={prod.name} />
                                        <input type="text" name="productId" defaultValue={prod.id} />
                                        <input type="Number" name="price" defaultValue={prod.price} />
                                        <input type="Number" name="mrp" defaultValue={prod.mrp} />
                                        <input type="text" name="img" defaultValue={prod.img1} />
                                    </div>
                                    <button type="submit" className="addToCart_btn" onClick={() => addToCartHandler(prod)}>Add To Cart</button>
                                </form>

                            </div>
                        ))}
                    </div>

                </section>


                <footer className="market_footer">
                    <div className="market_footer-container ">
                        <div className="market_row ">
                            <div className="market_footer-col ">
                                <h4>company</h4>
                                <ul>
                                    <li><Link to="/Aboutuss">about us</Link></li>
                                    <li><Link to="# ">our services</Link></li>
                                    <li><Link to="# ">privacy policy</Link></li>
                                    <li><Link to="# ">affiliate program</Link></li>
                                </ul>
                            </div>
                            <div className="market_footer-col " id="market_footer-col-online-shop ">
                                <h4>get help</h4>
                                <ul>
                                    <li><Link to="# ">FAQ</Link></li>
                                    <li><Link to="# ">shipping</Link></li>
                                    <li><Link to="# ">returns</Link></li>
                                    <li><Link to="# ">order status</Link></li>
                                    <li><Link to="# ">payment options</Link></li>
                                </ul>
                            </div>
                            <div className="market_footer-col ">
                                <h4>online shop</h4>
                                <ul>
                                    <li><Link to="/search/seeds">seeds</Link></li>
                                    <li><Link to="/search/fertilizers">fertilizers</Link></li>
                                    <li><Link to="/search/pesticides">pesticides</Link></li>
                                </ul>
                            </div>
                            <div className="market_footer-col ">
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
                </footer>


            </div>
        </SearchResultWrapper>
    );
}


const SearchResultWrapper = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

:root {
    --green: #27ae60;
    --black: #2c2c54;
}


.market_body> * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.2s linear;
}

.market_body>*::selection {
    background: var(--green);
    color: #fff;
}

/* html {
    font-size: 62%;
    overflow-x: hidden;
    scroll-padding-top: 6.5rem;
    scroll-behavior: smooth;
} */

.market_body {
    font-family: "Nunito", sans-serif;
    position: absolute;
    top: 7vh;
}

.home,
.category,
.product {
    padding: 3rem 3%;
}

.shop_btn {
    display: inline-block;
    margin-top: 1rem;
    background: var(--green);
    color: #fff;
    padding: 0.8rem 3rem;
    font-size: 1.7rem;
    text-align: center;
    cursor: pointer;
    width: 100%;
    text-decoration: none;
}

.shop_btn:hover {
    background: var(--black);
}

.addToCart_btn:hover {
    background-color: rgb(255, 0, 89);
}

#product {
    width : 98vw;
}

.product .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.product heading{
    text-align : center;
}

.product .box-container .box {
    flex: 1 1 25rem;
    text-align: center;
    padding: 0.6rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
}

.product .box-container .box img {
    height: 12rem;
}

.product .box-container .box .discount {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(0, 255, 0, 0.1);
    color: var(--green);
    padding: 0.7rem 1rem;
    font-size: 2rem;
}



.product .box-container .box h3 {
    color: var(--black);
    font-size: 1.7rem;
}

.product .box-container .box .stars i {
    padding: 0.7rem 0.1rem;
    font-size: 1.4rem;
    color: gold;
}

.product .box-container .box .price {
    font-size: 1.6rem;
    color: #333;
    padding: 0.5rem 0;
}

.product .box-container .box .price span {
    font-size: 1.5rem;
    color: #999;
    text-decoration: line-through;
}

.product .box-container .box .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 0.3rem;
    text-align: center;
}

.product .box-container .box a {
    text-decoration: none;
}

.product .box-container .box .quantity span {
    text-align: center;
    padding: 0 0.7rem;
    font-size: 1.2rem;
}

.product .box-container .box .quantity input {
    text-align: center;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    font-size: 1.3rem;
    font-weight: bolder;
    color: var(--black);
    padding: 0.2rem 0.5rem;
    background: rgba(0, 0, 0, 0.05);
}

.product .box-container .box .shop_btn {
    display: block;
    width: 60%;
    text-align: center;
    position: relative;
    left : 20%;
    font-size: 1.3rem;
}





@media (max-width: 991px) {

    .header-1,
    .header-2 {
        padding: 2rem;
    }

    .home,
    .category,
    .product {
        padding: 2rem;
    }
}



/* //////////////////////////////////////////////////////////////////////////////// */

.content p {
    font-size: 400;
}

/* //////////////////////////////////////////////////////////////////////////////// */

.market_footer-container {
    margin: auto;
}

.market_row {
    display: flex;
    flex-wrap: wrap;
}

.market_body>ul {
    list-style: none;
}

.market_footer {
    background-color: #24262b;
    padding: 70px 0;
}

.market_footer-col {
    width: 25%;
    padding: 0 15px;
}

.market_footer-col h4 {
    font-size: 18px;
    font-size: calc(1.8vh + 0.4vw);
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
}

.market_footer-col h4::before {
    content: "";
    position: absolute;
    left: 10;
    bottom: -15px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.market_footer-col ul{
    list-style: none;
}

.market_footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.market_footer-col ul li a {
    font-size: calc(1.5vh + 0.5vw);
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
    text-align: left;
    padding-left: 3vw;
}


.market_footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 2.8vw;
}


.market_footer-col .social-links a {
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

.fab {
    font-size: 14px;
}

.market_footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
}

.fa-facebook-f,
.fa-linkedin-in {
    color: #5393fa;
}

.fa-twitter {
    color: rgba(29, 161, 242, 1);
}

.fa-instagram {
    color: rgb(189, 63, 84);
}

.box img {
    height: 150px;
    width: 150px;
}

/* input[type="submit"]{ */
.addToCart_btn {
    background-color: #27ae60;
    margin-top: 1rem;
    background: var(--green);
    color: #fff;
    padding: 0.8rem 3rem;
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;
    width: 60%;
}

.market_body>input[type="submit"]:hover {
    background-color: #2c2c54;
}

.Res_Cart{
    float : right;
    font-size : 26px;
    color : #000;
    margin : 10px;
}

`;


export default SearchResults;