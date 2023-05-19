import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        getCartData()
    }, [])

    const getCartData = () => {
        const email = localStorage.getItem('email')
        fetch('https://fwp.onrender.com/Cart/' + email)
            .then(res => res.json())
            .then(dat => setData(dat))
            .catch(err => console.log(err))
    }

    const onDeleteHandler = (item_id) => {

        const email = localStorage.getItem('email')
        fetch('https://fwp.onrender.com/delete-item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item_id, email }),
        })
            .then(res => res.json())
            .then(dat => setData(dat))
            .catch(err => console.log(err))
    }

    let total_price = 0
    let total_mrp = 0

    return (
        <CartWrapper>

            <div className="container">
                <h1>Shopping Cart</h1>
                <div className="cart">
                    <div className="products">
                        {data !== null && data.items.length>0 && data.items.map(item => (
                            <div className="product" key={Math.random()}>
                                <Link to={"/productpage/" + item.prod_id} >
                                    <img src={item.img} />
                                </Link>
                                <div className="product-info">
                                    <h3 className="product-name">{item.name}</h3>
                                    <h4 className="product-price">₹ {item.price}
                                    </h4>
                                    <p className="product-quantity">Qnt: <input defaultValue={item.quantity} name="quantity" /></p>
                                    {/* <form className="product-remove" onSubmit={(e) => e.preventDefault()}> */}
                                    <input type="text" name="id" defaultValue={item.prod_id} hidden />
                                    <button className="delete_item product-remove" onClick={() => onDeleteHandler(item._id)}><i className="fa fa-trash"
                                        aria-hidden="true"></i></button>
                                    {/* </form> */}
                                </div>
                            </div>
                        ))}


                        {(data === null || data.items.length===0) && <div className="else_div">
                            <h1>No items in the cart</h1>
                            <h3>
                                Please visit
                                <Link to="/Market" style={{ color: "red", textDecoration: "none" }}> Market </Link>
                                to add some items
                            </h3>
                        </div>
                        }

                    </div>


                    <div className="cart-total">
                        {data !== null && data.items.map(item => {
                            total_price += item.price
                            total_mrp += item.mrp
                        })}
                        <p>
                            <span>Total Price</span>
                            <span>₹ {total_price}</span>
                        </p>
                        <p>
                            <span>Number of Items</span>
                            {data != null &&
                                <span>{data.items.length}</span>
                            }
                            {data===null && <span>0</span>}
                        </p>
                        <p>
                            <span>You Save</span>
                            <span>₹ {total_mrp - total_price}</span>
                        </p>
                        <Link to="/checkoutpage">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </CartWrapper>
    );
}



const CartWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.container {
    font-family: 'Comfortaa', cursive;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    top: 8vh;
}

.container h1 {
    padding: 20px 0;
}

.cart {
    display: flex;
}

.products {
    flex: 0.75;
}

.product{
    transition : 0.4s;

}

.product {
    display: flex;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border: 2px solid silver;
    margin-bottom: 20px;
}

.product:hover {
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
}

.product img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    padding: 10px;
}



.product-info {
    padding: 20px;
    width: 100%;
    position: relative;
    background: beige;
}

.product-name,.product-price,.product-offer {
    margin-bottom: 20px;
}


.fa {
    margin-right: 5px;
}

.product-remove {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: green;
    cursor: pointer;
    border-radius: 5px;
    transform : scale(1.2);
    border: none;
    color: #fff;
    // font-size: large;
    cursor: pointer;
}

.product-remove:hover{
    background-color: white;
    color: green;
    border: 1px solid green;
}

.product-remove:hover > .delete_item {
    font-weight: 600;
    color : green;
}

.product-quantity>input {
    width: 40px;
    padding: 5px;
    text-align: center;
}


.delete_item .fa{
    margin : 0;
    padding : 0;
}

.cart-total {
    flex: 0.25;
    margin-left: 20px;
    padding: 20px;
    height: 240px;
    border: 1px solid silver;
    border-radius: 5px;
}

.cart-total p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    font-size: 20px;
}

.cart-total a {
    display: block;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: tomato;
    color: white;
    text-decoration: none;
}

.cart-total a:hover {
    background-color: red;
}

@media screen and (max-width: 700px) {
    .remove {
        display: none;
    }
    .product {
        height: 150px;
    }
    .product>img {
        height: 150px;
        width: 200px;
    }
    .product-name,.product-price,.product-offer {
        margin-bottom: 10px;
    }
}

@media screen and (max-width: 900px) {
    .cart {
        flex-direction: column;
    }
    .cart-total {
        margin-left: 0;
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 1220px) {
    .container {
        max-width: 95%;
    }
}
`;


export default Cart;