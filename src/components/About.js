import React, { useState } from 'react';
// import { useForm, ValidationError } from '@formspree/react';

// template ID: template_73j07wd
// service id: service_3jgl6k8
// privatekey: dmBD7v_dP9tcIt4bX2nCx
// import './App.css';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });


  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [state, handleSubmit] = useForm(movqbvjz);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value });
    console.log('Form Submitted', 'Form Data:',  {...formData, [name]: value});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // const response = await fetch('https://formspree.io/f/movqbvjz', {
      const response = await fetch('https://formspree.io/f/mrbgvpro', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSubmitted(true)
        alert('Request submitted!');

        setFormData({
          name: '',
          email: '',
          address: '',
          phone: '',
          message: '',
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
      else {
        alert('Failed to send request. Please try again later or get intouch with the number below.');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('Failed to send request. PLease try again or get intouch on the phone.');
    } finally {
      setIsSending(false);
    }
  };

  const toggleScheduleForm = () => {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <div className='container mt-4 about-page'>
      <h1 className='about-pageh1'>About Us</h1>
      <p className='aboutpage-word'>
        The wash Room is built on the foundation of a service that is premium, affordable, designed for customer satisfaction to take care of everything in your closet.
      </p>

      <button className='btn' onClick={toggleScheduleForm}>
        Click to Schedule...
      </button>
      {isFormVisible && (
        <div className='mt-4 theForm'>
          <h1> Pick-Up / Delivery</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Name</label>
              <input type='text' id='name' className='form-control' name='name' onChange={handleChange} required />
              {/* <ValidationError prefix='name' field='name' errors={state.errors} /> */}
            </div>
            <div className='mb-3'>
            <label className='form-label'>Email</label>
              <input type='email' className='form-control' name='email' onChange={handleChange} value={FormData.email} required />
            </div>
            <div className='mb-3'>
            <label className='form-label'>Adress</label>
              <input type='text' className='form-control' name='address' onChange={handleChange} value={FormData.address} required />
            </div>
            <div className='mb-3'>
            <label className='form-label'>Phone Number</label>
              <input type='tel' className='form-control' name='phone' onChange={handleChange} value={FormData.phone} required />
            </div>
            <div className='mb-3'>
            <label className='form-label'>Message</label>
              <textarea className='form-control' name='message' onChange={handleChange} value={FormData.message} rows='3' placeholder='Tell us what you want...' required></textarea>
            </div>
            <button type='submit' className='btn' disabled={isSending}>Schedule Now!</button>
          </form>
          {isSubmitted && <p className='mt-3 text-success'>Thank you for your request!</p>}
        </div>
      )}

      <div className='mt-4 '>
        <h2 className='aboutpageGetintouch'>Get In Touch</h2>
        <p>Phone: +234 8145056692</p>
        <p>Email: senalaundrey@gmail.com</p>
        <p>Address: Ibadan. Nigeria</p>
      </div>
    </div>
  );
}

export default About
