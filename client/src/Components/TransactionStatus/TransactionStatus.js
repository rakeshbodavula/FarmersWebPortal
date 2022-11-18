import React from "react";
import "./TransactionStatus.css";

function TransactionStatus({ data }) {
  console.log(data)
  return (
    <>
      <div className="center-div">


        <div className="col">
          <Item img="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2018/11/26/hFeo0Dp7TMykR9jAYP8ga4rv/zip-for-upload/images/Order-Placed-Icon.jpg" />
        </div>
        <div className="transaction-container">
          <div className="row">

            <div className="col no-gutters">
              {/* <Transaction data={data}/>  */}
              <div className="transaction">
                <div className="transaction1-container">
                  <h2 className="heading-3"><u>
                    Payment Successful:)</u></h2>


                  <h3> Name: {data.fname}</h3>
                  <h3>Order ID:{Math.random()}</h3>
                  <h3>Address:{data.street}</h3>
                  <h3>Credit Card Number:{data.credit}</h3>
                  <h3>Mobile Number: {data.phone}</h3><br />
                  <div className="transaction_btn">
                    <button>Print</button>
                    <button>Close</button>
                  </div>

                  {/* <div className="row">
        <div className="col">
          {/* <Input
            label="Delivery Address:"
            type="text"
            name="delivery_address"
          /> */}
                  {/* </div> */}
                  {/* <div className="col">
          <Input label="Payment Method:" type="text" name="PaymentMethod" />
        </div> */}
                </div>
                {/* <Button text="Download Invoice" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Item = (data) => (
  <div className="item-container">
    <div className="item-image">
      <img src={data.img} />
      <div className="item-details">
        <h3 className="item-name"> {data.name} </h3>
        <h2 className="item-price"> {data.price} </h2>
      </div>
    </div>
  </div>
);

const Transaction = (data) => (

  <div className="transaction">
    <div className="transaction1-container">
      <h2 className="heading-3"><u>
        Payment Successful:)</u></h2>


      <h3> Name: {data.fname}</h3>
      <h3>Order ID:{Math.random()}</h3>
      <h3>Address:{data.street}</h3>
      <h3>Credit Card Number:{data.credit}</h3>
      <h3>Mobile Number: {data.phone}</h3><br />
      <div className="transaction_btn">
        <button>Print</button>
        <button>Close</button>
      </div>

      {/* <div className="row">
        <div className="col">
          {/* <Input
            label="Delivery Address:"
            type="text"
            name="delivery_address"
          /> */}
      {/* </div> */}
      {/* <div className="col">
          <Input label="Payment Method:" type="text" name="PaymentMethod" />
        </div> */}
    </div>
    {/* <Button text="Download Invoice" /> */}
  </div>


);


const Input = (data) => (
  <div className="input">
    <label>{data.label}</label>
    <div className="input-field">
      <input type={data.type} name={data.name} />
      <img src={data.imgSrc} />
    </div>
  </div>
);

const Button = (data) => (
  <button className="transaction-btn" type="button">
    {data.text}
  </button>
);



export default TransactionStatus;
