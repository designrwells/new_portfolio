import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';
import '../../css/projects.scss';

//images
import PhotoRes_Background from '../../img/photo-res/photo-res_bg.jpg';
import PhotoRes_Img1 from '../../img/photo-res/photo-res_img1.jpg';
import PhotoRes_Img2 from '../../img/photo-res/photo-res_img2.jpg';
import PhotoRes_Img3 from '../../img/photo-res/photo-res_img3.jpg';


//page styles
const Section = styled.section`
	background-image: url(${PhotoRes_Background});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 130vh;
`;

const PhotoRes = () => {

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
					<div>PHOTO RESTORATION</div>
					<h1>DIGITAL RETOUCHING<br />AND RESTORATION</h1>
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>Repairing photographs that are aged or damaged from the sun, liquids, tears, burns, folds, or simply because older photos 
					weren't captured with the quality of today's camera technology. 
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>Harnessed the power of Adobe Photoshop and high resolution scanning to fill gaps and cracks, remove blemishes, and 
					restore/add color all in scrutinous detail. This process often included at least three passes as damage was removed, textures
					were improved, and color was restored and/or added to a more natural state.	
					</p>
				</div>
			</section>	
			<section className='section-three'>
					<div className='img-column'>
						<img src={PhotoRes_Img1} alt='Mended Moments Website Front Page' />
						<img src={PhotoRes_Img2} alt='Mended Moments Brochure1' />
						<img src={PhotoRes_Img3} alt='Mended Moments Brochure2' />
					</div>	
			</section>
		</motion.div>
		)
}
export default PhotoRes;