import React, { useState } from 'react';
import '../style/contact.css';
import { div } from 'framer-motion/client';

const Contact= () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const submit = (e) => {
        e.preventDefault();
        fetch('https://formcarry.com/s/YOUR_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ email, message  }),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.code === 200) {
                setSubmitted(true);
            } else {
                setError(res.message);
            }
        });
    };

    return (
        <div  className='form'>
        <form onSubmit={submit}>
            <h1>Contact us</h1>
            <label >Full Name</label> <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
            <label >email</label> <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
            <label >Mobile No</label> <br />
            <input type="number"  required /> <br />
            <label >Message</label> <br />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br />
            <button type="submit">Send</button>
            {submitted && <p>We've received your message, thank you!</p>}
            {error && <p>{error}</p>}
        </form>
        </div>
    );
};

export default Contact;