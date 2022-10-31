import React from 'react'
import './ChatBot.css'
export default function ChatBot() {
  return (
    <div className="chatbot">

        <div className="chatbot-box">
            <ul>
                <li><span>Welcome Farmer! </span></li>
                <li><span>I am EarthWorm!</span></li>
                <li><span>I am Coming Soon!</span></li>
                <li><span>So, stay tuned :) . . . . . . .</span></li>
            </ul>
        </div>
        <div className="chatbot-image">
            <img src="/earthworm.png" alt="earthworm" className="earthworm-img"/>
        </div>
    </div>
  )
}