import React from "react";
import "./TransactionStatus.css";

function TransactionStatus() {
  return (
    <>
    <div className="center-div">
    
      <div className="col">
        <Item img="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2018/11/26/hFeo0Dp7TMykR9jAYP8ga4rv/zip-for-upload/images/Order-Placed-Icon.jpg" />
      </div>
      <div className="TransactionStatus-container">
        <div className="row">
          
          <div className="col no-gutters">
            <Checkout />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

const Item = (props) => (
  <div className="item-container">
    <div className="item-image">
      <img src={props.img} />
      <div className="item-details">
        <h3 className="item-name"> {props.name} </h3>
        <h2 className="item-price"> {props.price} </h2>
      </div>
    </div>
  </div>
);

const Checkout = (props) => (
  <div className="checkout">
    <div className="checkout-container">
      <h3 className="heading-3">Payment Successful!</h3>
      <Input label="Name:" type="text" name="name" />
      <Input label="Order ID:" type="number" name="order_number" />
      <div className="row">
        <div className="col">
          <Input
            label="Delivery Address:"
            type="text"
            name="delivery_address"
          />
        </div>
        <div className="col">
          <Input label="Payment Method:" type="text" name="PaymentMethod" />
        </div>
      </div>
      {/* <Button text="Download Invoice" /> */}
    </div>
  </div>
);

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
      <img src={props.imgSrc} />
    </div>
  </div>
);

const Button = (props) => (
  <button className="checkout-btn" type="button">
    {props.text}
  </button>
);

export default TransactionStatus;
