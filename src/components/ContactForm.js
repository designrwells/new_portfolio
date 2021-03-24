import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
  	justify-content: center;
  	flex-direction: column;
  	width: 55vw;
  	text-align: center;
    margin-bottom: 10%;

    @media (max-width: 768px){
      margin-top: 15%;
      width: 85vw;
    }

  	h1 {
		color: #151E30;
  		font-family: 'Oswald', sans-serif;
  		font-weight: 600;
  		font-size: clamp(30px, 7vw, 100px);
  		margin-bottom: 2.5%;
	}
	div {
		display: flex;
		align-items: center;
		margin: 2.2% 0;
	}
  	label {
  		color: #151E30;
  		font-family: 'Oswald', sans-serif;
  		font-weight: 400;
  		font-size: clamp(20px, 2vw, 40px);
  		margin-right: 4%;
  	}
    input {
      height: 110%;
    }
  	input, textarea {
  		background-color: transparent;
	    border-radius: 0;
	    border: 2px solid #151E30;
	    color: #151E30;
	    font-size: clamp(20px, 2vw, 40px);
	    width: 100%;

      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }
  	}
  	textarea {
  		height: 22vh;
	    width: 100%;
  	}
  	button {
  		font-family: 'Oswald', sans-serif;
  		font-weight: 600;
  		font-size: 25px;
  		color: #EBF3F8;
      border: none;
  		height: 60px;
	    padding: 10px 60px;
      margin-top: 2%;
	    background: linear-gradient(to bottom, #26FF6B 32%, #151E30 37%);
      background-size: 100% 380%;
      background-position: 50% 100%;
      transition: background-position 140ms;
      cursor: pointer;
    
    &:hover {
      background-position: 50% 0%;
      color: #151E30;
  }
  	}
`;

class ContactFrom extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			message: '',
			status: 'SUBMIT'
		};
	}

	handleChange(event) {
    const field = event.target.id;
    if (field === 'name') {
      this.setState({ name: event.target.value });
    } else if (field === 'email') {
      this.setState({ email: event.target.value });
    } else if (field === 'message') {
      this.setState({ message: event.target.value });
    }
  }

   handleSubmit(event) {
    event.preventDefault();  
    this.setState({ status: 'SENDING' });  
    axios({
      method: 'POST',
      url: 'http://localhost:5000/contact',
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'sent') {
        alert('Message Sent');
        this.setState({ name: '', email: '', message: '', status: 'SUBMIT' });
      } else if (response.data.status === 'failed') {
        alert('Message Failed');
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