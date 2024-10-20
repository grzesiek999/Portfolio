import React, { useState } from "react";


type EmailInputTypes = {
    className: string;
    onChange: (newValue: string) => void;
}

const EmailInput = ({className, onChange}: EmailInputTypes) => {

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = 'Your email ..';
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMessage = event.target.value;
        onChange(newMessage);
    }

    return (
        <input
            name="email"
            className={className}
            placeholder="Your email ..." 
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            onChange={handleChange}
        />
    );
}


type MessageTextAreaTypes = {
    className: string;
    onChange: (newValue: string) => void;
}

const MessageTextArea = ({className, onChange}: MessageTextAreaTypes) => {

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = '';
    };
        
    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = 'Message content ...';
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = event.target.value;
      onChange(newMessage);
    }

    return(
        <textarea
            name="message"
            className={className}
            rows={10}
            cols={30}
            required
            placeholder="Message content ..."
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            style={{ resize: 'vertical' }}
        />
    );
}

export {MessageTextArea, EmailInput};