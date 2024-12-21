import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import ActionProvider from './actionProvider';
import MessageParser from './messageParser';
import { useState , useEffect} from 'react';
import { IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";

function QueriesChat(){
const [userInput,setUserInput] = useState("");
const [isChatbotOpen,setChatbotOpen] = useState(false);
const toggleChatbot = ()=>{
    console.log('toggle');
    setChatbotOpen(!isChatbotOpen);
}
const handleInputChange =(event)=>{
    setUserInput(event.target.value);
}
useEffect(()=>{

    console.log(isChatbotOpen);
},[])
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

  <IconButton onClick={toggleChatbot}>   
  {   
    isChatbotOpen? <CloseIcon/>
: <ChatBubbleOutlineIcon/>
}
</IconButton>
{isChatbotOpen &&
<Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>}
</div>
    )
}

export default QueriesChat
