import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        // name property here actually refers to the name of the target rather than the name input
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        } 

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
      
    // JSX
    return (
        <Card id='contact' component='section' elevation={6}>
            <div className='card-head'>
                <h2>Let's get in touch!</h2>
            </div>
            <CardContent>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div id='contact-message'>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className='button-container'>
                    <Button 
                        variant='contained' 
                        type='submit'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                    >
                        Submit Form
                        <SendIcon style={{ color: '#ffffff' }} className='icon-open'/>
                    </Button>
                </div>
            </form>
            </CardContent>
        </Card>
    )
}
    
export default ContactForm;