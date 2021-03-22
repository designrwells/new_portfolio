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


const TNTAutoMart = () => {

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
					<div>Utah Engagement</div>
					<h1>PHOTOSHOOT<br />FOR UTAH COUPLE</h1>
					
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>Quae rerum ipsum modi. Placeat sunt aliquam eius qui nam magni aliquam. Consequatur tenetur nesciunt ipsa. 
					Aperiam voluptas eum tempore optio ut ex aliquam. Sint velit sit facere labore tempora totam enim ipsum. 
					Maiores autem suscipit enim voluptatem. Enim numquam velit sequi itaque sequi perferendis consequatur. Qui qui eveniet beatae.</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>Quae rerum ipsum modi. Placeat sunt aliquam eius qui nam magni aliquam. Consequatur tenetur nesciunt ipsa. 
					Aperiam voluptas eum tempore optio ut ex aliquam. Sint velit sit facere labore tempora totam enim ipsum. 
					Maiores autem suscipit enim voluptatem. Enim numquam velit sequi itaque sequi perferendis consequatur. Qui qui eveniet beatae.</p>
				</div>
			</section>	
			<section className='section-two'>
					<div className='img-column'>
						<img className='wide-photo' src={Utah_Img1} alt='TNT AutoMart Sign' />
						<img src={Utah_Img4} alt='TNT AutoMart Logo' />
						<img className='wide-photo' src={Utah_Img5} alt='TNT AutoMart Website Front Page' />
						
					</div>
					<div className='img-column'>					
						<img src={Utah_Img2} alt='TNT AutoMart Sign' />
						<img src={Utah_Img3} alt='TNT AutoMart Sign' />
					</div>	
			</section>
		</motion.div>

		)
}
export default TNTAutoMart;