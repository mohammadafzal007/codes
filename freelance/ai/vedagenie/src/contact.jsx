import React, { useState } from 'react';
import * as Icon from 'react-feather';
import Navbar from './nev'; // Ensure this path is correct


// InputSide component
const InputSide = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);

  const nameHandler = (e) => setName(e.target.value);
  const emailHandler = (e) => setEmail(e.target.value);
  const phoneHandler = (e) => setPhone(e.target.value);
  const messageHandler = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    // Simulate a network request
    setTimeout(() => {
      // console.log({ name, email, phone, message });
      setButtonLoading(false);
    }, 2000);
  };

  return (
    <div className='input-side-wrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='inputform'>Write Us</h2>
        <p className='inputform'>Write us a note and we'll get back to you as quickly as possible</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={nameHandler}
          className='input-field'
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailHandler}
          className='input-field'
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={phoneHandler}
          className='input-field'
          required
        />
        <textarea
          rows="5"
          placeholder="Message"
          value={message}
          onChange={messageHandler}
          className='text-area'
          required
        ></textarea>
        <button
          type="submit"
          className='submit-button'
          disabled={buttonLoading}
        >
          {buttonLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

// Main Component
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='page-wrapper'>
        <div className='image-wrapper'>
          <div className='overlay-text'>
            <h1 className='overlay-title'>Contact Us</h1>
            <p className='overlay-subtitle'>Any questions or remarks? Just write us a message</p>
          </div>
        </div>
        <div className='form-container'>
          <div className='details-bar-wrapper'>
            <div className='text-wrapper'>
              <p className='text-three'>Contact Information</p>
              <p className='text-four'>Fill up the form and our team will get back to you within 24 hours</p>
            </div>
            <div>
              
              <div className='con-dev'>
                <h3 className='contact-text'>Bhawna bansal</h3>
                <h3 className='contact-text'>Phone no:  +91 9811575689</h3>
                <h3 className='contact-text'>Mail: Bhawnagarg2702@gmail.com</h3>
              </div>
              <div className='con-dev'>
                <h3 className='contact-text'>Dr. Yogesh bansal</h3>
                <h3 className='contact-text'>Phone no:  +91 9888527176</h3>
                <h3 className='contact-text'>Mail: Dryogeshbansal2020@gmail.com</h3>
              </div>
              <div>
              <h3 className='contact-text'>Mail: mail@vedagenie.com</h3>
              </div>
            </div>
            <div>
              <div className='big-circle'></div>
              <div className='small-circle'></div>
            </div>
            <div className='socials-wrapper'>
              <a href="#" className='social-icon-wrapper'>
                <Icon.Facebook color="#fff" size={20} className='icon' />
              </a>
              <a href="#" className='social-icon-wrapper'>
                <Icon.Instagram color="#fff" size={20} className='icon' />
              </a>
              <a href="#" className='social-icon-wrapper'>
                <Icon.Linkedin color="#fff" size={20} className='icon' />
              </a>
            </div>
          </div>
          <InputSide />
        </div>

      </div>
    </>
  );
};

export default Contact;
