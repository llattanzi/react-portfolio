import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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

    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;
        var honeypot;
    
        var fields = Object.keys(elements).filter(function(k) {
        if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
        }
        return true;
        }).map(function(k) {
        if(elements[k].name !== undefined) {
            return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
            return elements[k].item(0).name;
        }
        }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
        });
    
        var formData = {};
        fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;
    
        // when our element has multiple items, get their values
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
                data.push(item.value);
            }
            }
            formData[name] = data.join(', ');
        }
        });
    
        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail
        = form.dataset.email || ""; // no email by default
    
        return {data: formData, honeypot: honeypot};
    }
    
    function handleFormSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below

        // validate form data
        const validateForm = Object.values(formState).every(value => {
            if (value) {
                return true;
            }
            return false
        });

        if (!validateForm) {
            alert("Failed to submit form. Please fill out all fields.");
            return false;
        }

        var form = event.target;
        var formData = getFormData(form);
        var data = formData.data;
    
        // If a honeypot field is filled, assume it was done so by a spam bot.
        if (formData.honeypot) {
        return false;
        }
    
        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
            form.reset();
            var formElements = form.querySelector(".form-elements")
            if (formElements) {
                formElements.style.display = "none"; // hide form
            }
            var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
                thankYouMessage.style.display = "block";
            }
            }
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
    }
    
    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        }
    }
      
    // JSX
    return (
        <>
        <Card id='contact' component='section' elevation={6}>
            <div className='card-head'>
                <h2>Let's get in touch!</h2>
            </div>
            <CardContent>
            <form id="contact-form" className='gform' method="POST" data-email="llattan@ncsu.edu" 
            action="https://script.google.com/macros/s/AKfycbz4cO6RFKEYwJ3ljq8pxZCleg5U9bh9lu0VyU-hWzqtBKEN2nAWrTzJaxCxbn_U2kec/exec"
            onSubmit={handleFormSubmit}>
                <div className='form-elements'>
                    <fieldset>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                    </fieldset>
                    <fieldset id='contact-message'>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
                    </fieldset>
                    <fieldset style={{display:'none'}} className="honeypot-field">
                        <label htmlFor="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
                        <input id="honeypot" type="text" name="honeypot" value="" />
                    </fieldset>

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
                </div>
                <div style={{display:'none'}} className="thankyou_message">
                    <h3>Thanks for your message. I will get back to you soon!
                    </h3>
                </div>
            </form>
            </CardContent>
        </Card>
        {/* <script data-cfasync="false" src="form-submission-handler.js"></script> */}
        </>
    )
}
    
export default ContactForm;