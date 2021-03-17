import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
  	justify-content: center;
  	flex-direction: column;
  	width: 55vw;
  	text-align: center;

  	h1 {
		color: #fff;
  		font-family: 'Oswald', sans-serif;
  		font-weight: 600;
  		font-size: clamp(30px, 7vw, 100px);
  		margin-bottom: 3%;
	}
	div {
		display: flex;
		align-items: center;
		margin: 3% 0;
	}
  	label {
  		color: #fff;
  		font-family: 'Oswald', sans-serif;
  		font-weight: 400;
  		font-size: clamp(20px, 2vw, 40px);
  		margin-right: 5%;
  	}
  	input, textarea {
  		background-color: transparent;
	    border-radius: 0;
	    border: 2px solid #fff;
	    color: #fff;
	    font-size: clamp(20px, 2vw, 40px);
	    height: 100%;
	    width: 100%;
  	}
  	textarea {
  		height: 20vh;
	    width: 100%;
  	}
  	button {
  		font-family: 'Oswald', sans-serif;
  		font-weight: 600;
  		font-size: 25px;
  		color: #444;
  		height: 60px;
  		text-transform: uppercase;
	    padding: 10px 60px;
	    background: #fff;
  	}
`;

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
			<Form onSubmit={this.handleSubmit.bind(this)} method='POST'>
				<h1>GIVE ME A SHOUT!</h1>
				<div>
				<label htmlFor='name'>NAME:</label>
				<input type='text' id='name' value={this.state.name} onChange={this.handleChange.bind(this)} required />
				</div>

				<div>
				<label htmlFor='email'>EMAIL:</label>
				<input type='text' id='email' value={this.state.email} onChange={this.handleChange.bind(this)} required />
				</div>

				<div>
				<label htmlFor='message'>MESSAGE:</label>
				<textarea id='message' value={this.state.message} onChange={this.handleChange.bind(this)} required />
				</div>
				<button type='submit'>{buttonText}</button>
			</Form>
		)
	}
}

export default ContactFrom;