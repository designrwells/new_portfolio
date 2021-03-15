import React from 'react';
import { motion } from 'framer-motion';
import { fade, transition } from '../animations';
import styled from 'styled-components';

const Section = styled.section`
	background: #222;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
`;


const Home = () => {
	return (
		
		<motion.div 
			initial='out' 
			animate='in' 
			exit='out' 
			variants={fade}
			transition={transition}
			>
		
			<Section>
	
			</Section>	
		</motion.div>	
		
		)
}

export default Home;