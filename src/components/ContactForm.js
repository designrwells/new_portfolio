import React, { Component } from 'react';
import axios from 'axios';

class ContactFrom extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			message: '',
			status: 'Submit'
		};
	}

	handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

   handleSubmit(event) {
    event.preventDefault();  
    this.setState({ status: "Sending" });  
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }
  
	render () {
		let buttonText = this.state.status;
		return (
			<form onSubmit={this.handleSubmit.bind(this)} method='POST'>
				<div>
				<label htmlFor='contact-name'>Name:</label>
				<input type='text' id='contact-name' value={this.state.name} onChange={this.handleChange.bind(this)} required />
				</div>

				<div>
				<label htmlFor='contact-email'>Email:</label>
				<input type='text' id='contact-email' value={this.state.email} onChange={this.handleChange.bind(this)} required />
				</div>

				<div>
				<label htmlFor='contact-message'>Message:</label>
				<textarea id='contact-message' value={this.state.message} onChange={this.handleChange.bind(this)} required />
				</div>
				<button type='submit'>{buttonText}</button>
			</form>
		)
	}
}

export default ContactFrom;