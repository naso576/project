import { createChatBotMessage} from 'react-chatbot-kit';
import ActionProvider from './actionProvider';
import Options from "./options";

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

widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options : [
          { id: 1, text: " Book Appointment", handler: () => {ActionProvider.handleAppointment()}} ,
          { id: 2, text: " Cancel Appointment", handler: () => {ActionProvider.handleCancel()}},
          { id: 3, text: " Reschedule Appointment",handler: () => {ActionProvider.handleReschedule()}},
          { id:4, text: " View Appointment",handler: () => {ActionProvider.handleView()}},
          { id:5, text: " Exit", handler: () => {ActionProvider.handleExit()}}
        ],
        actionProvider :ActionProvider,
      },
      },
   
  ],
actionProvider :ActionProvider,
}

export default config;