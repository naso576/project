import { createChatBotMessage} from 'react-chatbot-kit';
import ActionProvider from './actionProvider';

const config= {
    botName :"ChatBot",
    initialMessages :[createChatBotMessage("Hi ! How Can I help you today?"),
                        createChatBotMessage("You can use this chatbot for appointments.")

],
customMessages : {

    greeting: createChatBotMessage("Hello! Nice to see you again!"),
    farewell: createChatBotMessage("GoodBye! Have a great day!"),
    appointment: createChatBotMessage("Please pick the date for appointment"),
},
actionProvider :ActionProvider,
}

export default config;