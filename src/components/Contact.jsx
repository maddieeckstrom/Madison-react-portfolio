import React, { useState } from 'react';

export default function BasicForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')

  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/ooQEgY3WPwX", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We received your submission, thank you!");
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });
  }


  return (
    <section>
        <form id="contactBackImage" className="contactForm" onSubmit={(e) => onSubmit(e)}>

            <h2 className="contactHeader">let's connect</h2>
        
            <div className="formcarry-block">
                <label htmlFor="name">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="your first and last name" />
            </div>
            
            <div className="formcarry-block">
                <label htmlFor="email">Your Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="email@email.com" />
            </div>
            
            <div className="formcarry-block">
                <label htmlFor="message">Your message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="enter your message"></textarea>
            </div>
            
            <div className="formcarry-block">  
                <button type="submit">Send</button>
            </div>
        </form>
    </section>
  )
}