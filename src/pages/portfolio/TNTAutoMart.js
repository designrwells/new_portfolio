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
					<Logo src={TNT_Logo} alt='TNT Automart Logo' />
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>Creating a clean, retro style logo alongside a website optimized for vehicle inventory management. This needed to include 
					vehicle photos, prices, and various available inventory specifications. TNT AutoMart is a family owned business wanting to 
					represent pride in both their and hardworking team.
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>Worked with the team to come up with a logo idea to be used on billboard sign, apparel, and print before designing it Adobe Illustrator.
					 Redesigned an initial template in Wordpress, using the WPBakery Page Builder plugin to make major revisions and create new pages. 
					 Added custom HTML, CSS, and PHP to further tweak changes to the theme, forms, and overall styling. Provided photography of staff, actions shots,
					 and vehicle inventory.
					 <br />Visit them <a href='https://tntautomartok.com/' target="_blank">here</a>.
					</p>
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