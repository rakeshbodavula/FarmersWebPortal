import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getCartData()
  }, [])
  const getCartData = () => {
    fetch('http://localhost:9999/Cart')
      .then(res => res.json())
      .then(dat => setData(dat))
      .catch(err => console.log(err))
  }



  const onLogoutHandler = () => {
    localStorage.removeItem('email')
    // console.log('Logout')
    window.location.pathname = '/login'
    // navigate("/login")
  }
  return (

    <div className="dashboard_card">

      <div className="dashboard_container">
        <h2 className="dashboard_title"><u>Your Orders</u></h2>
        <div className='complete-container'>
          {data && data.map(item=>(
            <Link to={"/productpage/" + item.prod_id}>
            <div className="dashboard_card-2" key={Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <h2>Rs.{item.price}/-</h2>
            </div>
              </Link>
          ))}
          {/* <div className='dashboard_card-2'>
            <h3>Bottle gaurd</h3>
            <a href='#'>Link Here</a>
          </div>
          <div className='dashboard_card-2'>
            <h3>Insecticide</h3>
            <a href='#'>Link Here</a>
          </div>
          <div className='dashboard_card-2'>
            <h3>Biovita Fertilizer</h3>
            <a href='#'>Link Here</a>
          </div> */}
        </div>
        <Link to="/Market"><button className="dashboard_proceed-button">Proceed to shop</button></Link>
        <br />
      </div>
      <button onClick={onLogoutHandler} style={{ position: "relative", bottom: "5vh", background: "red" }} className="dashboard_proceed-button">
        <i className='bx bx-log-out'></i>
        <span className="links_name">Log out</span>
      </button>
    </div>
  )
}


export default Dashboard
