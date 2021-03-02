import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullRight, transition } from '../animations';

//page styles
const Section = styled.section`
	background: #f34c12;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
`;



const About = () => {
	return (

		<motion.div 
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullRight}
			transition={transition}
			>
		
			<Section>
	
			</Section>	
		</motion.div>

		)
}
export default About;