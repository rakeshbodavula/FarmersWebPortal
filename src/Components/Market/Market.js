import './Market.css'

const Market = () => {
    return (
        <div className="Market_body">


            <div class="search">    
                <a href="" class="logo">Market Place</a>
                <form action="/search" method="post" class="search-bar-form">
                    <input type="search" id="search-bar" name="query" placeholder="Search for products">
                    <button type="submit" class="search_btn">
                        <label for="search-bar" class="fas fa-search"></label>
                    </button>
                </form>
                <a href="/Cart">Cart</a>
            </div>

            <section class="home" id="home">

                <div class="image">
                    <img src="/Images/Market_Images/main-img.avif" alt="">
                </div>

                <div class="content">
                    <span>One stop for farmers!</span><br/><br/>
                    <h2>Get all the assential products for cultivating crops and make our country stay healthy</h2>
                </div>

            </section>


            <section class="category" id="category">

                <h1 class="heading">shop by <span>category</span></h1>

                <div class="box-container">

                    <div class="box">
                        <h3>Seeds</h3>
                        <p>upto 50% off</p>
                        <img src="/Images/Market_Images/seeds1.webp" alt="">
                        <a href="/search/seeds" class="btn">shop now</a>
                    </div>
                    <div class="box">
                        <h3>Fertilizers</h3>
                        <p>upto 44% off</p>
                        <img src="/Images/Market_Images/fertiliser1.jpg" alt="">
                        <a href="/search/fertilizers" class="btn">shop now</a>
                    </div>
                    <div class="box">
                        <h3>Pesticides</h3>
                        <p>upto 35% off</p>
                        <img src="/Images/Market_Images/fertiliser2.jpg" alt="">
                        <a href="/search/pesticides" class="btn">shop now</a>
                    </div>
                    <!-- <div class="box">
                    <h3> Equipments</h3>
                    <p>upto 12% off</p>
                    <img src="/Images/Market_Images/sickle.jpg" height="133px">
                    <a href="#" class="btn">shop now</a>
                </div> -->

                </div>

            </section>


            <section class="product" id="product">

                <h1 class="heading">latest <span>products</span></h1>

                <div class="box-container">
                    <% if(data.length>0) { %>
                        <% data.forEach(prod=> { %>
                            <div class="box">
                                <span class="discount" style="font-size: 14px;"><%=
                                        (((prod.mrp-prod.price)/prod.mrp)*100).toFixed(1) %>%<br/>Off</span>
                                <a href="/productpage/<%= prod._id %>" target="_blank">
                                    <img src="<%= prod.img1 %>" alt="">
                                    <h3>
                                        <%= prod.name %>
                                    </h3>
                                </a>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <div class="price"> Rs <%= prod.price %>/- <span> Rs <%= prod.mrp %>/- </span> </div>


                                <form action="/addToCart" method="post">
                                    <div class="quantity">
                                        <span>quantity : </span>
                                        <input type="number" name="quantity" min="1" max="1000" value="1">
                                        <span>  kg </span>
                                    </div>
                                    <a href="/checkoutpage" class="btn">Buy Now</a>

                                    <div style="display: none;">
                                        <input type="text" name="name" value="<%= prod.name %>">
                                        <input type="text" name="productId" value="<%= prod._id %>">
                                        <input type="Number" name="price" value="<%= prod.price %>">
                                        <input type="Number" name="mrp" value="<%= prod.mrp %>">
                                        <input type="text" name="img" value="<%= prod.img1 %>">
                                    </div>
                                    <!-- <a class="btn">add to cart</a> -->
                                    <!-- <input type="submit" value="Add To Cart"> -->
                                    <button type="submit" class="addToCart_btn">Add To Cart</button>
                                    <!-- <button type="submit">add to cart</button> -->
                                </form>

                            </div>
                            <% }) %>
                                <% } %>

                </div>

            </section>








            <footer class="footer ">
                <div class="footer-container ">
                    <div class="row ">
                        <div class="footer-col ">
                            <h4>company</h4>
                            <ul>
                                <li><a href="/Aboutuss">about us</a></li>
                                <li><a href="# ">our services</a></li>
                                <li><a href="# ">privacy policy</a></li>
                                <li><a href="# ">affiliate program</a></li>
                            </ul>
                        </div>
                        <div class="footer-col " id="footer-col-online-shop ">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="# ">FAQ</a></li>
                                <li><a href="# ">shipping</a></li>
                                <li><a href="# ">returns</a></li>
                                <li><a href="# ">order status</a></li>
                                <li><a href="# ">payment options</a></li>
                            </ul>
                        </div>
                        <div class="footer-col ">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="/search/seeds">seeds</a></li>
                                <li><a href="/search/fertilizers">fertilizers</a></li>
                                <li><a href="/search/pesticides">pesticides</a></li>
                                <!-- <li><a href="# ">equipment</a></li> -->
                            </ul>
                        </div>
                        <div class="footer-col ">
                            <h4>follow us</h4>
                            <div class="social-links ">
                                <a href="# "><i class="fab fa-facebook-f "></i></a>
                                <a href="# "><i class="fab fa-twitter "></i></a>
                                <a href="# "><i class="fab fa-instagram "></i></a>
                                <a href="# "><i class="fab fa-linkedin-in "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Market;
