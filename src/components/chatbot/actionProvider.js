import {messages} from './constants.js';

const messagesArray=messages;



class ActionProvider {

    constructor(createChatBotMessage,setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc=setStateFunc;
    }
    greet (){
        const greetingMessage =this.createChatBotMessage(messagesArray.greeting);
        this.setStateFunc((prev)=>({
                ...prev,
                messages: [...prev.messages,greetingMessage],

        }))
    }
    farewell (){
const farewellMessage = this.createChatBotMessage(messagesArray.farewell);
        this.setStateFunc((prev)=>({
                ...prev,
                messages:[...prev.messages,farewellMessage],

        }))
    }
    handleUnknown(){

        const unKnownMessage = this.createChatBotMessage(messagesArray.unknown);
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, unKnownMessage],
        }))
    }
    handleAppointment(){
        const appointment = this.createChatBotMessage(messagesArray.appointment);
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, appointment],
        }))
    }

    handleOptions(){

        const options = [
            { id: 1, text: "1. New Appointment" },
            { id: 2, text: "2. Cancel Appointment" },
            { id: 3, text: "3. Reschedule Appointment" },
            { id:4, text: "4. View Appointment"},
            { id:5, text: "5. Exit"}
          ];

      
        const optionsMessage = this.createChatBotMessage(messagesArray.select,{widget:"options",withAvatar:true} );
        this.setStateFunc((prev)=>({
            ...prev,
            messages:[...prev.messages, optionsMessage]
            ,widgets:{options}
            
        }))
    }
    handleNewAppointment(){
        const newAppointment = this.createChatBotMessage(messagesArray.selectDate);
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, newAppointment],
        }))
    }   
    handleCancelAppointment(){
        const cancelAppointment = this.createChatBotMessage(messagesArray.selectDate);
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, cancelAppointment],
        }))
    }   
    handleRescheduleAppointment(){
        const rescheduleAppointment = this.createChatBotMessage(messagesArray.selectDate);
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, rescheduleAppointment],
        }))
    }   
    handleViewAppointment(){
        const viewAppointment = this.createChatBotMessage(messagesArray.selectDate);
        this.setStateFunc((prev)=>({
            ...prev,
            messages:[...prev.messages, viewAppointment],
        }))
    }   
    handleCancel(){
        const cancel = this.createChatBotMessage(messagesArray.cancel);
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, cancel],
        }))
    }   
    handleExit(){
        const exit = this.createChatBotMessage(messagesArray.exit);
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, exit],
        }))
    } 
    
    handleOptionClick = (text) => {
        console.log(`Option ${text} selected`);
        const message = this.createChatBotMessage(`You selected option ${text}`);
        this.setStateFunc((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
      };

}

export default ActionProvider;