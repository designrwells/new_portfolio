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