
const greetingKeywords = ["hello","hi"];
const appointmentKeywords =["appoint","consult"];
class MessageParser {

    constructor(actionProvider){
        this.actionProvider=actionProvider;
    }

    parse(message){
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes("hello")|| lowerCaseMessage.includes("hi")){
            this.actionProvider.greet();
        }
        else if (lowerCaseMessage.includes("bye")){
            this.actionProvider.farewell();
        }
        else if (lowerCaseMessage.includes("appoint") || lowerCaseMessage.includes("consult")){
            this.actionProvider.handleOptions();
        }
        else if (lowerCaseMessage.includes("book")){
            console.log('book')
                this.actionProvider.handleNewAppointment();
        }
        else if(lowerCaseMessage.includes("cancel")){
            this.actionProvider.handleCancel();
        }
        else if(lowerCaseMessage.includes("reschedule")){
            this.actionProvider.handleReschedule();
        }
        else {
            this.actionProvider.handleUnknown();
        }
    }
}

export default MessageParser;