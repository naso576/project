class ActionProvider {

    constructor(createChatBotMessage,setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc=setStateFunc;
    }
    greet (){
        const greetingMessage =this.createChatBotMessage("Hello! Nice to see you again!");
        this.setStateFunc((prev)=>({
                ...prev,
                messages: [...prev.messages,greetingMessage],

        }))
    }
    farewell (){
const farewellMessage = this.createChatBotMessage("GoodBye! Have a great day!");
        this.setStateFunc((prev)=>({
                ...prev,
                messages:[...prev.messages,farewellMessage],

        }))
    }
    handleUnknown(){

        const unKnownMessage = this.createChatBotMessage("I'm not sure how to respond to that.");
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, unKnownMessage],
        }))
    }
    handleAppointment(){
        const appointment = this.createChatBotMessage("Great! Your Appointment got confirmed.");
        this.setStateFunc((prev)=>({

            ...prev,
            messages:[...prev.messages, appointment],
        }))
    }
}

export default ActionProvider;