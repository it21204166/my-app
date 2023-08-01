import React, { useState } from 'react';
import '../Components/Contact.css';

export default function Contact() {
  const [message, setMessage] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    messageText: '',
  });

  const handleMessageChange = (event) => {
    const { name, value } = event.target;
    setMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    console.log('Sending message:', message);
    // You can add logic here to send the message to the server or perform other actions.
    // For now, let's just log the message to the console.

    // Clear the form after sending
    setMessage({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      messageText: '',
    });
  };

  return (
    <div>
      <section className='contact' id='contact'>
        <h2 className='heading'>
          Contact <span>Me!</span>
        </h2>

        <form>
          <div className='input-box'>
            <input
              type='text'
              name='fullName'
              value={message.fullName}
              onChange={handleMessageChange}
              placeholder='Full Name'
            />
            <input
              type='email'
              name='email'
              value={message.email}
              onChange={handleMessageChange}
              placeholder='Email Address'
            />
          </div>

          <div className='input-box'>
            <input
              type='text'
              name='phone'
              value={message.phone}
              onChange={handleMessageChange}
              placeholder='Mobile Number'
            />
            <input
              type='text'
              name='subject'
              value={message.subject}
              onChange={handleMessageChange}
              placeholder='Email Subject'
            />
          </div>
          <textarea
            name='messageText'
            value={message.messageText}
            onChange={handleMessageChange}
            cols={30}
            rows={10}
            placeholder='Your Message..'
          ></textarea>
          <button className='btn' onClick={handleSendMessage}>Send Message</button>
        </form>
      </section>
    </div>
  );
}
