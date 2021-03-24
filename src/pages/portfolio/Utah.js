import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import Utah_Background from '../../img/utah/utah_background.jpg';
import Utah_Img1 from '../../img/utah/utah_img1.jpg';
import Utah_Img2 from '../../img/utah/utah_img2.jpg';
import Utah_Img3 from '../../img/utah/utah_img3.jpg';
import Utah_Img4 from '../../img/utah/utah_img4.jpg';
import Utah_Img5 from '../../img/utah/utah_img5.jpg';


//page styles
const Section = styled.section`
	background: url(${Utah_Background});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 143vh;

	@media (max-width: 768px) {
		height: 90vh;
	}
`;


const Utah = () => {

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
					<div>UTAH ENGAGEMENT</div>
					<h1>PHOTOSHOOT<br />FOR UTAH COUPLE</h1>
					
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>
						Traveling to several locations in the Ogden & Salt Lake City areas and identifying ideal spots for lighting and portrait shots. 
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>
						Made good use of natural sunlight to provide backlighting for these two superheroes, and to evoke a silhouette story book feel in another image. 
						Experimented with different framing and lens flares for more realistic effect and less digital editing. Made minor color and lighting corrections in 
						Adobe Lightroom and Photoshop.
					</p>
				</div>
			</section>	
			<section className='section-three'>
					<div className='img-column'>
						<img className='wide-photo' src={Utah_Img1} alt='Utah engagement photo 1' />
						<img src={Utah_Img4} alt='Utah engagement photo 2' />
						<img className='wide-photo' src={Utah_Img5} alt='Utah engagement photo 3' />
						
					</div>
					<div className='img-column'>					
						<img src={Utah_Img2} alt='Utah engagement photo 4' />
						<img src={Utah_Img3} alt='Utah engagement photo 5' />
					</div>	
			</section>
		</motion.div>

		)
}
export default Utah;