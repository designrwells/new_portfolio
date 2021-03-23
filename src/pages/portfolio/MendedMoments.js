import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';
import '../../css/projects.scss';

//images
import MM_Logo from '../../svg/mm_logo.svg';
import MM_Background from '../../img/mended-moments/mm_background.jpg';
import MM_Img1 from '../../img/mended-moments/mm_img1.jpg';
import MM_Img2 from '../../img/mended-moments/mm_img2.jpg';
import MM_Img3 from '../../img/mended-moments/mm_img3.jpg';


//page styles
const Section = styled.section`
	background-image: url(${MM_Background});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 110vh;
`;
const Logo = styled.img`
	width: clamp(100px, 35vw, 270px);	
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
			<Section>
				<div className='back-wrapper'><Link className='back-link' to='/portfolio'><i className='fas fa-arrow-left' ></i>BACK</Link></div>	
				<div className='intro-content'>
					<div>MENDED MOMENTS PHOTO RESTORATION</div>
					<h1>WEBSITE & DESIGN FOR<br />MENDED MOMENTS</h1>
					<Logo src={MM_Logo} alt='Mended Moments Logo' />
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>Determining a way to market photo restoration services to both older and younger generations both online
					and in print form. A website offering it's service in a palpable way that would provide
					the availablility several custom checkout options allowing customers to tailor service orders.
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>Created a simple Wordpress website, logo, and print materials that would give users an "old timey" vintage feel while maintaing solid UI/UX design.
					 Detailed the process of restoring old and damaged photos by using the Elementor plugin to add before/after sliders. With the help of WooCommerce and 
					 and an additional plugin, user image uploads and custom order options were expanded upon in the checkout process.
						
					</p>
				</div>
			</section>	
			<section className='section-three'>
					<div className='img-column'>
						<img src={MM_Img1} alt='Mended Moments Website Front Page' />
					</div>
					<div className='img-column'>
						<img src={MM_Img2} alt='Mended Moments Brochure1' />
						<img src={MM_Img3} alt='Mended Moments Brochure2' />
					</div>	
			</section>
		</motion.div>
		)
}
export default MendedMoments;