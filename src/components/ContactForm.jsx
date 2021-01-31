import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const encode = (data) => {
    return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    };

    handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state }),
            }).then(() => alert("Success!"))
            .catch((error) => alert(error));

        e.preventDefault();    
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <form id="contact-form" onSubmit={this.handleSubmit} netlify name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>
                        Your Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}                        
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Your Email:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}                        
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={message}
                            onChange={this.handleChange}                        
                        />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            <Form>
              <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
              </Form.Group>

              <Button className="d-inline-block" variant="primary" type="submit">
                  Send
              </Button>
            </Form>
        )
    }
}
export default ContactForm


