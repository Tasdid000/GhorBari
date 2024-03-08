// frontend/src/components/Chat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        // Fetch initial messages when the component mounts
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/apiv1/chat/');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const sendMessage = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/apiv1/chat/', {
                message: inputMessage,
                user_type: 'admin', // Set a default user type (e.g., 'admin')
            });
            // Fetch updated messages after sending a new one
            fetchMessages();
            setInputMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const messagesContainerStyle = {
        maxHeight: '200px',
        overflowY: 'auto',
        marginBottom: '15px',
    };

    const messageItemStyle = {
        backgroundColor: '#f5f5f5',
        padding: '8px',
        margin: '5px 0',
        borderRadius: '4px',
    };

    const inputContainerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const inputStyle = {
        flex: '1',
        padding: '8px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        padding: '8px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div>
            <div style={messagesContainerStyle}>
                <ul>
                    {messages.map((message) => (
                        (message.user_type === 'admin') && (
                            <li key={message.id} style={messageItemStyle}>
                                {message.message} ({message.user_type})
                                {message.admin_response && (
                                    <div style={{ fontStyle: 'italic' }}>Admin: {message.admin_response}</div>
                                )}
                            </li>
                        )
                    ))}
                </ul>
            </div>
            <div style={inputContainerStyle}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={sendMessage} style={buttonStyle}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
