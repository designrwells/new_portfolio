import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import TNT_Logo from '../../svg/tnt_logo.svg';
import TNT_Img1 from '../../img/tnt-automart/tnt_img1.jpg';
import TNT_Img2 from '../../img/tnt-automart/tnt_img2.png';
import TNT_Img3 from '../../img/tnt-automart/tnt_img3.jpg';


//page styles
const Section = styled.section`
	background: #B83835;
	width: 100vw;
	height: 110vh;
`;
const Logo = styled.img`
	width: clamp(450px, 30vw, 600px);
	margin-top: clamp(30px, 5vh, 300px);
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
					<div>TNT AUTOMART</div>
					<h1>LOGO & WEB DESIGN<br />FOR TNT AUTOMART</h1>
					<Logo src={TNT_Logo} alt='Mended Moments Logo' />
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
						<img src={TNT_Img2} alt='TNT AutoMart Logo' />
						<img src={TNT_Img1} alt='TNT AutoMart Website Front Page' />
					</div>
					<div className='img-column'>					
						<img src={TNT_Img3} alt='TNT AutoMart Sign' />
					</div>	
			</section>
		</motion.div>

		)
}
export default TNTAutoMart;