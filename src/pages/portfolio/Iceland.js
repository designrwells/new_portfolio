import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import Iceland_Background from '../../img/iceland/iceland_bg.jpg';
import Iceland_Img1 from '../../img/iceland/iceland_img1.jpg';
import Iceland_Img2 from '../../img/iceland/iceland_img2.jpg';
import Iceland_Img3 from '../../img/iceland/iceland_img3.jpg';
import Iceland_Img5 from '../../img/iceland/iceland_img5.jpg';
import Iceland_Img6 from '../../img/iceland/iceland_img6.jpg';
import Iceland_Img7 from '../../img/iceland/iceland_img7.jpg';
import Iceland_Img8 from '../../img/iceland/iceland_img8.jpg';
import Iceland_Img9 from '../../img/iceland/iceland_img9.jpg';

//page styles
const Section = styled.section`
	background: url(${Iceland_Background});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 113vh;

	@media (max-width: 768px) {
		height: 90vh;
	}
`;


const Iceland = () => {

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
					<div>ICELAND LANDSCAPES</div>
					<h1>LANDSCAPE PHOTOGRAPHY<br />IN ICELAND</h1>				
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>
						Traveling 1000+ miles around Iceland to photograph some of the world's most scenic locations and landscapes.
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>
						Mapped over 70 locations and created a flexible route in Google Maps to plan around weather, timing, and camp location
						over the course of 10 days. Went equipped with a 28-300mm lens for versatility (and minimal lens swap time) and an 18-55mm for wide angle range.
					</p>
				</div>
			</section>	
			<section className='section-three'>
					<div className='img-column'>
						<img src={Iceland_Img9} alt='iceland engagement 1' />
						<img src={Iceland_Img3} alt='iceland engagement 2' />
						<img src={Iceland_Img8} alt='iceland engagement 3' />
						<img src={Iceland_Img7} alt='iceland engagement 3' />
						
					</div>
					<div className='img-column'>					
						<img src={Iceland_Img2} alt='iceland engagement 4' />
						<img src={Iceland_Img6} alt='Utah engagement 5' />
						<img src={Iceland_Img1} alt='Utah engagement 5' />
						<img src={Iceland_Img5} alt='iceland engagement 3' />
					</div>	
			</section>
		</motion.div>

		)
}
export default Iceland;