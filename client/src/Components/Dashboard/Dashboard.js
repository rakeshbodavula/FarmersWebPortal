import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState(".jpg")

  useEffect(() => {
    getCartData()
  }, [])
  

  const getCartData = () => {
    const email = localStorage.getItem('email')
    fetch('http://localhost:9999/Cart/' + email)
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


  const fileChangeHandler = (event) => {
    setImage(event.target.files[0]);
  }

  const updateProfilePicFormHandler = async (e) => {
    e.preventDefault()
    let formData = new FormData();
    // formData.append('image', image)

    console.log("update profile pic form handler --- function")
    console.log(image)
    formData.append("image", image)
    // console.log(formData["image"])
    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }

    try {
      // await axios.post("http://localhost:9999/uploadprofilepic", formData, {
      const email = localStorage.getItem('email')
      axios.post("http://localhost:9999/uploadprofilepic/" + email, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        }
      })
        .then(res => res.data)
        .then(ext => {  
          setUrl(ext.ext)
          console.log(ext)
        })
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="dashboard_main_container">
        <form onSubmit={updateProfilePicFormHandler} style={{ height: "5vh" }}>
          <input type="file" name="profilepic" accept='image/*' onChange={fileChangeHandler} />
          <button type="submit">Upload Profile Picture</button>
          {/* <img src="http://localhost:9999/uploads/63fd84474bc6d8b8181d7610.jpg"></img> */}
        </form>
        {url &&
          <img src={"/uploads/" + localStorage.getItem('email') + url} style={{ height: "250px", width: "200px" }}alt="No Photo"></img>
        }
        {/* <img src="/uploads/test@gmail.com.png" style={{height:"100px",width:"100px"}}></img> */}
      </div>
      <div className="dashboard_card">
        <div className="dashboard_container">
          <h2 className="dashboard_title"><u>Your Orders</u></h2>
          <div className='complete-container'>
            {data && data.items.map(item => (
              <Link to={"/productpage/" + item.prod_id} key={item._id}>
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
    </>
  )
}


export default Dashboard
