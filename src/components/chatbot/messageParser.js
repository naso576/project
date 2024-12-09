class MessageParser {

    constructor(actionProvider){
        this.actionProvider=actionProvider;
    }

    parse(message){
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes("hello")){
            this.actionProvider.greet();
        }
        else if (lowerCaseMessage.includes("bye")){
            this.actionProvider.farewell();
        }
        else if (lowerCaseMessage.includes("appoint")){
            this.actionProvider.handleAppointment();
        }
        else {
            this.actionProvider.handleUnknown();
        }
    }
}

export default MessageParser;