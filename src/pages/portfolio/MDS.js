import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import MDS_Logo from '../../svg/mds_logo.svg';
import MDS_Img1 from '../../img/mds/mds_img1.jpg';
import MDS_Img2 from '../../img/mds/mds_img2.jpg';

//page styles
const Section = styled.section`
	background: #000;
	width: 100vw;
	height: 100vh;
`;
const Logo = styled.img`
	width: clamp(250px, 15vw, 600px);
`;

const MDS = () => {

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
					<div>MEDICAL DEVICE SUCCESS</div>
					<h1> MDS LOGO & WEB DESIGN</h1>
					<Logo src={MDS_Logo} alt='Mended Moments Logo' />
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>Medical Device Success is a professional blog space & podcast that offers consultation and advice in the medtech industry. The goal 
					was to update the brand presence with a more up-to-date logo and responsive, user-frienldy website.</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>Redesigned an initial template in Wordpress, using the Elementor plugin to make major revisions and create new pages. 
					Added custom HTML, CSS, and PHP to further tweak changes to the theme, forms, and overall styling. 
					Visit <a href='https://www.medicaldevicesuccess.com/' target="_blank">here</a>.	
					</p>
				</div>
			</section>	
			<section className='section-two'>
					<div className='img-column'>
						<img src={MDS_Img1} alt='Medical Device Success Website Front Page' />
					</div>
					<div className='img-column'>					
						<img src={MDS_Img2} alt='Medical Device Success Logo' />
					</div>	
			</section>
		</motion.div>

		)
}
export default MDS;