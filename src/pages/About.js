import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullRight, transition } from '../animations';

//page styles
const Section = styled.section`
	background: #f34c12;
	height: 100vh;
`;
const Title = styled.div`
	padding: 3% 3% 4% 3%;
	color: #fff;
	font-size: clamp(15px, 1.1vw, 32px);
	font-weight: 400;
	font-family: 'Oswald', sans-serif;
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
				<Title>a b o u t</Title>
			</Section>	
		</motion.div>

		)
}
export default About;