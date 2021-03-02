import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../animations';

//page styles
const Section = styled.section`
	background: #999;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
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
	
			</Section>	
		</motion.div>

		)
}

export default Contact;