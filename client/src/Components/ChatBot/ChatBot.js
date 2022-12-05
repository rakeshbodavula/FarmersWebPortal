import styled from "styled-components";
import "./ChatBot.css"
import ChatBot from "react-simple-chatbot"
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const ChatBot1 = () => {

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our portal",
      trigger: "Hello",
    },

    {
      id: "Hello",
      message: "Please enter your name!",
      trigger: "user",
    },

    {
      id: "user",
      user: true,
      trigger: "Name",
    },

    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },

    {
      id: "issues",
      options: [
        { value: "Virus", label: "Virus", trigger: "Virus", },
        { value: "Worm", label: "Worm", trigger: "Worm" },
        // { value: "other", label: "other", trigger: "other" },
      ],
    },
    {
      id: "Virus",
      message: "Choose the crop",
      trigger: 'crop_select'
      // end: true,
    },
    {
      id: "crop_select",
      options: [
        { value: "Paddy", label: "Paddy", trigger: "Paddy" },
        { value: "Wheat", label: "Wheat", trigger: "Wheat" },
        { value: "Corn", label: "Corn", trigger: "Corn" },
        { value: "Cotton", label: "Cotton", trigger: "Cotton" },
        // { value: "Other", label: "Other", trigger: "Other" }
      ],
      // end: true,
    },
    {
      id: 'Paddy',
      message: "Use Monocrotophos 36%",
      // end: true
      trigger:'thanks'
    },
    {
      id: 'Wheat',
      message: "Use Thiamethoxam (12.6%) + Lambdacyhalothrin (9.5%)",
      // end: true
      trigger:'thanks'
    },
    {
      id: 'Corn',
      message: "Use Quinalphos 25 % EC.",
      // end: true
      trigger:'thanks'
    },
    {
      id: 'Cotton',
      message: "Use Fipronil 5 SC.",
      trigger:'thanks'
      // end: true
    },
    {
      id: "Worm",
      options: [
        { value: "Yellow Mottle worm", label: "Yellow Mottle worm", trigger: "Yellow Mottle worm" },
        { value: "Wire worm", label: "Wire worm", trigger: "Wire worm" },
      ],
      trigger:'thanks'
      // end: true,
    },
    {
      id: "Yellow Mottle worm",
      message: 'Plant more resistant varieties if available.\nPlant early to avoid peaks populations of this insect.\nRemove weeds in and around the field.\nControl insecticides in order not to affect beneficial insects',
      // end: true
      trigger:'thanks'
    },
    {
      id: "Wire worm",
      message: 'Because wireworms have a wide host range, crop rotations are only moderately effective, \nhowever they can help reduce wireworm populations. \nRotations with non-host crops such as onions, lettuce, alfalfa, \nsunflowers and buckwheat will reduce wireworm populations.',
      // end: true
      trigger:'thanks'
    },
    {
      id:'thanks',
      message:"Thank you!",
      end:true
    }
  ]


  return (  
    <>
      <ChatBotWrapper>
        <div className="bot">

          <div className="chatbot_box">
            <ul id="chatbot_ul">
              <li><span>Welcome Farmer! </span></li>
              <li><span>I am EarthWorm!</span></li>
              <li><span>I am Coming Soon!</span></li>
              <li><span>So, stay tuned :) . . . . . . .</span></li>
            </ul>
          </div>
          <div className="chatbot_image">
            <img src="/earthworm.png" alt="earthworm" className="earthworm-img" />
          </div>
        </div>
      </ChatBotWrapper>

      <input type="checkbox" id="click" />
      <label htmlFor="click" className="chat_label">
        <i className="fab fa-facebook-messenger"></i>
        <i className="fas fa-times"></i>
      </label>

      <div className="chatbot_wrapper">
        <ChatBot steps={steps} />
      </div>
    </>
  );
}

const ChatBotWrapper = styled.div`
      @import url("https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");


  body {
    background: #fcedda;
}

/*<------------------------------- body ----------------------------------------------> */

  .bot {
    position: relative;
  top: 8vh;
  padding: 10vh 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

  .chatbot_image {
  display: flex;
  justify-content: center;
  align-items: center;
}

  .chatbot_box {
  display: inline-flex;
  text-align: center;
/* width: 100vw; */
}

  .chatbot_box #chatbot_ul {
  margin: auto;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
/* background-color: blue; */
}

  @keyframes sliding {
    100% {
      top: -360px;
    }
    /* 75%{
      top: -135px;
    }
    50%{
      top: -90px;
    }
    25%{
      top: -45px;
    }
    0%{
      top: 0;
    } */
  }

  .chatbot_box #chatbot_ul li {
    text-transhtmlForm: uppercase;
  list-style: none;
  font-size: 60px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  /* font-weight: 600; */
  position: relative;
  top: 0;
  color: #ee4e34;
  animation: sliding 14s steps(4) infinite;
}

  .chatbot_box #chatbot_ul li span {
    position: relative;
  z-index: -1;
}

  .chatbot_box #chatbot_ul li span::after {
    /* z-index: -1; */
    content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  border-left: 2px solid #ee4e34;
  background-color: #fcedda;
  animation: typing 3.5s steps(20) infinite;
}

  @keyframes typing {
    100% {
      left: 100%;
      margin: 0 - 35px 0 35px;
    }
  }

  .earthworm-img {
    width: 50%;
  height: auto;
} `;

export default ChatBot1;