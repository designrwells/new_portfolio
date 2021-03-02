import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullLeft, transition } from '../animations';

//page styles
const Section = styled.section`
	background: #ccc;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
`;



const Portfolio = () => {
	return (

		<motion.div 
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullLeft}
			transition={transition}
			>
		
			<Section>
	
			</Section>	
		</motion.div>

		)
}
export default Portfolio;