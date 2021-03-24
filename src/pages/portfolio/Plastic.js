import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import Plastic_Logo from '../../img/plastic/plastic_logo.png';
import Plastic_Img1 from '../../img/plastic/plastic_img1.jpg';


//page styles
const Section = styled.section`
	background: #447AE7;
	width: 100vw;
	min-height: 100vh;
`;
const Logo = styled.img`
	width: clamp(450px, 30vw, 600px);
`;

const Plastic = () => {

	return (

		<motion.div
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullUp}
			transition={transition}
		>
			<Section>
				<div className='back-wrapper'><Link className='back-link' to='/portfolio'><i className='fas fa-arrow-left' ></i>BACK</Link></div>	
				<div className='intro-content'>
					<div>THE PLASTIC TRUTH</div>
					<h1>INFOGRAPHIC DESIGN</h1>
					<Logo src={Plastic_Logo} alt='The Plastic Truth logo' />
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>
						As worldwide plastic pollution rapidly increases, so does the growing concern for the future of marine wildlife and economic stability. I
						wanted to illustrate a visual that might generate more interest on the subject.				
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>
						After much research and documentation on this topic, I gathered various vectors and design ideas to combine the information and the images into
						one cohesive layout using Adobe Illustrator.
					</p>
				</div>
			</section>	
			<section className='section-three'>
					<div className='img-column'>
						<img src={Plastic_Img1} alt='The Plastic Truth Infographic' />
					</div>		
			</section>
		</motion.div>

		)
}
export default Plastic;