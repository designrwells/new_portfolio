import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';


//page styles
const Section1 = styled.section`
	background: #FFE300;
	width: 100vw;
	height: 70vh;
`;
const Section2 = styled.section`
	background: #999;
	width: 100vw;
	height: 55vh;
`;
const Back = styled(motion.div)`
	display: flex;
	justify-content: center;
	margin: 5% 60% 5% 0;

`;
const BackLink = styled(Link)`
	font-family: 'Oswald', sans-serif;
	font-size: clamp(25px, 2vw, 80px);
	text-decoration: none;
	transition: 0.15s;
	color: #fff;

	&:hover {
		font-size: clamp(30px, 2.2vw, 85px);
		color: #000;
		-webkit-transform: translateY(-6px);
		transform: translateY(-6px);
    	transition: 0.15s;
	}
`;
const MendedMoments = () => {



	return (

		<motion.div
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullUp}
			transition={transition}
		>
			<Section1>
				Photo here
				<Back><BackLink to='/portfolio'><i class='' ></i>(arrow) BACK</BackLink></Back>
				
			</Section1>	
			<Section2>
				<h1>Mended Moments</h1>
				<img src='' alt='' />
				<p>Some text here kdkdkdkdkdkdkd;alksjfd;alskjdf;askjdf;slkdjf</p>
			</Section2>	
		</motion.div>

		)
}
export default MendedMoments;