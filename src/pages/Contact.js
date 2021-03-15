import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../animations';
import ContactForm from '../components/ContactForm';

//page styles
const Section = styled.section`
	background: #999;
	height: 100vh;
`;
const Title = styled.div`
	padding: 3% 3% 4% 3%;
	color: #fff;
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
				<ContactForm />
			</Section>	
		</motion.div>

		)
}

export default Contact;