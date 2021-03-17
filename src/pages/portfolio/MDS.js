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
					<div>MEDICAL DEVICE SUCCESS</div>
					<h1> MDS LOGO & WEB DESIGN</h1>
					<Logo src={MDS_Logo} alt='Mended Moments Logo' />
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
						<img src={MDS_Img1} alt='Medical Device Success Website Front Page' />
					</div>
					<div className='img-column'>					
						<img src={MDS_Img2} alt='Medical Device Success Logo' />
					</div>	
			</section>
		</motion.div>

		)
}
export default TNTAutoMart;