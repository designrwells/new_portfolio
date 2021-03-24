import React from 'react';
import { motion } from 'framer-motion';
import { fade, transition } from '../animations';
import styled, { keyframes } from 'styled-components';
import DW_Logo from '../svg/dw_logo.svg';
import Home_Intro from '../svg/home_intro.svg';

const Section = styled.section`
	background: #1c1c1c;
	height: 100vh;
`;
const dwRotate = keyframes`
	0% { transorm: rotate(0deg); }
	100% { transform: rotate(359deg); }
`;
const Main = styled.div`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	img {
		width: clamp(300px, 60vw, 1300px);
		opacity: 0.04;
		animation: ${dwRotate} 250s infinite linear;
		@media (max-width: 768px) {
			position: relative;
			margin-bottom: 40%;
		}
	}
`;
const Heading = styled(motion.div)`
	position: absolute;
	top: 10%;
	left: 10%;
	width: clamp(300px, 60%, 60%);
	margin: 10vh 0;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: clamp(250px, 60vw, 1300px);
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
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
				<Main>
				<img src={DW_Logo} alt='DW Logo' />
				</Main>
				<Heading>
						<img src={Home_Intro} alt='DW Intro' />
				</Heading>
			</Section>	
		</motion.div>	
		
		)
}

export default Home;