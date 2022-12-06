import React from 'react'
import styled from 'styled-components'

import './Dashboard.css';

const Dashboard = () => {

  const onLogoutHandler = () => {
    localStorage.removeItem('email')
    // console.log('Logout')
    window.location.pathname = '/login'
    // navigate("/login")
  }
  return (

    <div className="card">

      <div className="container">
        <h2 className="title"><u>Your Orders</u></h2>
        <div className='complete-container'>
          <div className='card-2'>
            <h3>Bottle gaurd</h3>
            <a href='#'>Link Here</a>
          </div>
          <div className='card-2'>
            <h3>Insecticide</h3>
            <a href='#'>Link Here</a>
          </div>
          <div className='card-2'>
            <h3>Biovita Fertilizer</h3>
            <a href='#'>Link Here</a>
          </div>
        </div>
        <button className="proceed-button">Proceed to payment</button>

      </div>
      <button onClick={onLogoutHandler} style={{ position:"relative",bottom:"5vh",background:"red" }} className="log_out">
        <i className='bx bx-log-out'></i>
        <span className="links_name">Log out</span>
      </button>
    </div>
  )
}

const Discussions_Wrapper = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap");



:root {
  --pale-blue: hsl(225, 100%, 94%);
  --very-pale-blue: hsl(225, 100%, 98%);
  --desaturated-blue: hsl(224, 23%, 55%);
  --dark-blue: hsl(223, 47%, 23%);
  --bright-blue: hsl(245, 75%, 52%);
  --bright-blue-hover: hsl(244, 83%, 68%);
}


.card {
  background-repeat: no-repeat;
  background-size: cover;
  
  font-size: 16px;
  font-family: "Red Hat Display", sans-serif;
  width: 1000px;
  background-color: white;
  color: var(--desaturated-blue);
  border-radius: 20px;
  margin: 50px auto;
  overflow: hidden;
  padding:1rem;
  padding-left:1rem;
  padding-right:1rem;
}

.title {
  color:  black;
  font-weight: 900;
  font-size: 32px;
}

.hero-image {
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 30px;
  font-size: 18px;
}

.container > * {
  margin: 13px 0;
}

.container strong {
  color: var(--dark-blue);
}

.order-description {
  line-height: 25px;
}

.plan-container {
  font-size: 16px;
  background-color: var(--very-pale-blue);
  padding: 25px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.plan-container a {
  color: var(--bright-blue);
  font-size: 13px;
  font-weight: 700;
}

.plan-container a:hover {
  color: var(--bright-blue-hover);
  text-decoration: none;
}

.plan-description {
  margin-right: 75px;
  line-height: 20px;
}

button {
  width: 100%;
  border: none;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 12px;
  cursor: pointer;
}


.cancel-button:hover {
  color: black;
}

.proceed-button {
  background-color: #27ae60;
  padding: 1rem 0;
  color: white;
  box-shadow: 0 20px 30px -8px rgb(197 189 245);
}

.proceed-button:hover {
  background-color: var(--bright-blue-hover);
}

.card-2{
  background-color:whitesmoke;
  border-radius: 5px;
  margin-top: 1rem;
  padding:20px;
  display: flex;
}
.card-2 h3{
  margin-left:2.5rem;
}
.card-2 a{
  position: absolute;
  margin-left:50rem;
}
`;

export default Dashboard
