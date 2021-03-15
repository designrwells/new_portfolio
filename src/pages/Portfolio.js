import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullLeft, transition } from '../animations';
import PortfolioGrid from '../components/PortfolioGrid';



//page styles
const Section = styled.section`
	background: #242123;
	min-height: 100vh;
`;
const Title = styled.div`
	padding: 3% 3% 4% 3%;
	color: #fff;
	font-size: clamp(15px, 1.1vw, 32px);
	font-weight: 400;
	font-family: 'Oswald', sans-serif;
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
				<Title>p o r t f o l i o</Title>
				<PortfolioGrid />

			</Section>	
		</motion.div>
		)
}
export default Portfolio;