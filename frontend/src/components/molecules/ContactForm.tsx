import { SyntheticEvent, useState } from "react";
import { EmailInput, MessageTextArea } from "../atoms/Inputs";



const ContactForm = () => {

    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();

    const sendMessage = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                message
            })
        });
        if(response.ok) {}
        else {console.error(response.status, response.statusText)}
    }

    return(
        <form onSubmit={sendMessage}>
            <EmailInput onChange={setEmail} className="email-input"/>
            <MessageTextArea onChange={setMessage} className="message-text-area"/>
            <button type="submit" className="send-message-button">Send</button>
        </form>
    );
}

export {ContactForm}