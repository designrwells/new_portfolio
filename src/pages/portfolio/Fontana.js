import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import Fontana_Logo from '../../svg/fontana_logo.svg';
import Fontana_Img1 from '../../img/fontana/fontana_img1.png';


//page styles
const Section = styled.section`
	background: linear-gradient(to top, #ED1F24, #ED1F24 5%, #FFF 5%, #FFF 50%, #43B649 50%);
	width: 100vw;
	min-height: 103vh;
`;
const Logo = styled.img`
	width: clamp(450px, 30vw, 600px);
`;

const Fontana = () => {

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
					<div>FONTANA</div>
					<h1>RESTAURANT<br />LOGO & BRAND DESIGN</h1>
					<Logo src={Fontana_Logo} alt='Fontana Logo' />
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>
						Spec logo for a local Italian restaurant. The goal in mind was to capture the friendly, comforting feel of this little restaurant, while 
						adding a little more of a modern edge. In addition, I wanted to create a packaging label for their delicious homemade bread.
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>
						Finding the perfect font, using Italy's flag colors, and adding an olive branch that flowed with the font, I used Adobe Illustrator to create
						a logo that felt as great as the food of the place that would serve it. 
					</p>
				</div>
			</section>	
			<section className='section-three'>
					<div className='img-column'>
						<img src={Fontana_Img1} alt='Fontana bread package label' />
					</div>	
			</section>
		</motion.div>

		)
}
export default Fontana;