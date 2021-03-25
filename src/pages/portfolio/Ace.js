import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import Ace_Logo from '../../img/ace/ace_logo.png';
import Ace_Img1 from '../../img/ace/ace_img1.jpg';
import Ace_Img2 from '../../img/ace/ace_img2.jpg';
import Ace_Img3 from '../../img/ace/ace_img3.jpg';


//page styles
const Section = styled.section`
	background: #231A17;
	width: 100vw;
	min-height: 100vh;
`;
const Logo = styled.img`
	width: clamp(450px, 30vw, 600px);
`;

const Ace = () => {

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
					<div>ACE AUTOMOTIVE</div>
					<h1>LOGO DESIGN<br />& STORE BANNER</h1>
					<Logo src={Ace_Logo} alt='Ace Automotive Logo' />
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>
						Local auto shop requested a photo-realistic banner and logo to be mounted above their storefront. The requirements were to include a
						wrench and diamond plate metal texture as a background.
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p> 
						After designing the project in Adobe Illustrator and Photoshop, the image was then measured, scaled to fit, printed and cut for placement 
						on four 8ft x 2ft acrylic slabs, totalling 32ft in length.
					</p>
				</div>
			</section>	
			<section className='section-three'>
					<div className='img-column'>
						<img src={Ace_Img1} alt='Ace Automotive banner design' />
						<img src={Ace_Img2} alt='Printing the banner'/>
						<img src={Ace_Img3} alt='Final print of Ace Automotive banner' />
					</div>		
			</section>
		</motion.div>

		)
}
export default Ace;