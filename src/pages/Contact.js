import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../animations';
import ContactForm from '../components/ContactForm';

//page styles
const Section = styled.section`
	background: #D1E2EB;
	width: 100vw;
	min-height: 100vh;
`;

const FormWrapper = styled.div `
	display: flex;
	justify-content: center;
`;
const Title = styled.div`
	padding: 3% 3% 4% 3%;
	color: #151E30;
	font-size: clamp(15px, 1.1vw, 32px);
	font-weight: 400;
	font-family: 'Oswald', sans-serif;
`;

const Contact = () => {
	return (

		<motion.div 
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullUp}
			transition={transition}
			>
		
			<Section>
				<Title>c o n t a c t</Title>
				<FormWrapper>
					<ContactForm />
				</FormWrapper>
			</Section>	
		</motion.div>

		)
}

export default Contact;