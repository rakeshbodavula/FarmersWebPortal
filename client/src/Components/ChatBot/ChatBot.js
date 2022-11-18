import styled from "styled-components";

const ChatBot = () => {
  return (
    <ChatBotWrapper>
      <div class="bot">

        <div class="chatbot_box">
          <ul id="chatbot_ul">
            <li><span>Welcome Farmer! </span></li>
            <li><span>I am EarthWorm!</span></li>
            <li><span>I am Coming Soon!</span></li>
            <li><span>So, stay tuned :) . . . . . . .</span></li>
          </ul>
        </div>
        <div class="chatbot_image">
          <img src="/earthworm.png" alt="earthworm" class="earthworm-img"/>
        </div>
      </div>
    </ChatBotWrapper>
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
  text-transform: uppercase;  
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
    margin: 0 -35px 0 35px;
  }
}

.earthworm-img {
  width: 50%;
  height: auto;
}

`;
export default ChatBot;