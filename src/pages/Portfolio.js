import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullLeft, transition, cardUp, cardUpContainer } from '../animations';
import PortfolioGrid from '../components/PortfolioGrid';



//page styles
const Section = styled.section`
	background: #ccc;
	min-height: 100vh;
	padding-top: 10%;
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
				<PortfolioGrid />

			</Section>	
		</motion.div>

		)
}
export default Portfolio;