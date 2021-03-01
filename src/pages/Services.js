import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import {pullDown} from '../animations';
import styled from 'styled-components';

const Section = styled.section`
	background: #555;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;

`;
	
const Services = () => {
	return (
		<motion.div 
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullDown}
			>
		
			<Section>
	
			</Section>	
		</motion.div>
		)
}

export default Services;