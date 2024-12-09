import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import ActionProvider from './actionProvider';
import MessageParser from './messageParser';
import { useState } from 'react';

function QueriesChat(){
const [userInput,setUserInput] = useState("");
const handleInputChange =(event)=>{
    setUserInput(event.target.value);
}

const handleSend =()=>{
if (userInput.trim() !== ""){
    const actionProvider = new ActionProvider();
    const messageParser = new MessageParser(actionProvider);
    messageParser.parse(userInput);
    setUserInput("")
}
}
    return (

        <div>
<Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
{/* <input type='text'
value={userInput}
onChange={handleInputChange}
placeholder='Type your Question here'
/>
<button onClick={handleSend}>send</button> */}

        </div>
    )
}

export default QueriesChat