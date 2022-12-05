import { useState, useEffect } from 'react';
import styled from 'styled-components'


const ChatBot = () => {
  const [messages, setMessages] = useState([])
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9999/fetchMessages')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.log("Error: ", err))
  })

  const Search_Question = (e) => {
    e.preventDefault();
    setQuestions([])
    const msg = document.getElementById('new_msg').value;
    let res =  []
    for(let i=0;i<messages.length;i++){
      if(messages[i].message.toLowerCase().includes(msg.toLowerCase())) res.push(messages[i])
    }
    // console.log(res)
    if (res.length > 0) {
      setQuestions(res)
    }
    else{
      alert('No results found!')
    }
  }


  const Search_Answer = (e) => {
    e.preventDefault();
    setAnswers([])
    const opt = document.getElementById('choice').value;
    if (opt < questions.length) {
      const refer_id = questions[opt].referedTo
      setAnswers([(messages.filter(x => x.referedTo === refer_id).map(x => x.message))])
      setQuestions([])
    }
    else{
      alert('Please enter valid index!')
    }
  }


  let count = 0

  return (
    <ChatBotWrapper>
      {messages.length === 0 && <h1>Loading....</h1>}
      {/* {messages.length > 0 && messages.map(msg => (
        <div key={Math.random()}>
          <span>{msg.message} </span>
          <span>{msg.referedTo} </span>
          <span>{msg.timestamp} </span>
          <span>{msg.username}</span>
        </div>
      ))} */}


      <form onSubmit={Search_Question}>
        <label htmlFor="new_msg">Enter: </label>
        <input type="text" id="new_msg" />
        <button>Send</button>
      </form>

      {questions.length > 0 && questions.map(ques => (
        <h2 key={Math.random()}>{count++}){ques.message}</h2>
      ))}
      {questions.length > 0 &&
        <form onSubmit={Search_Answer}>
          <label htmlFor="choice">Select Question: </label>
          <input type="number" id="choice" />
          <button>Send</button>
        </form>
      }

      {answers.length > 0 && answers.map(ans =>(
        <h5 key={Math.random()}>{ans}</h5>
      ))}
    </ChatBotWrapper>
  );
}

const ChatBotWrapper = styled.div`
  position : relative;
  top : 10vh;
`;

export default ChatBot;