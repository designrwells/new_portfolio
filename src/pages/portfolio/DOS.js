import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';
import '../../css/projects.scss';

//images
import DOS_Logo from '../../svg/dos_logo.svg';
import DOS_Img1 from '../../img/dos/dos_img1.jpg';
import DOS_Img2 from '../../img/dos/dos_img2.jpg';

//page styles
const Section = styled.section`
	background: #F26422;
	width: 100vw;
	height: 110vh;
`;
const Logo = styled.img`
	width: clamp(100px, 35vw, 700px);	
`;

const DOS = () => {

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
					<div>DISCOUNT OFFICE SOURCE</div>
					<h1>WEBSITE & DESIGN FOR <br />DISCOUNT OFFICE SOURCE</h1>
					<Logo src={DOS_Logo} alt='Discount Office Source Logo' />
				</div>
			</Section>	
			<section className='section-two'>
				<div className='column'>
					<h2>THE CHALLENGE</h2>
					<p>
					 Discount Office Source is a ink, toner, and office supplies company. To meet their business needs, they required a large ecommerce web presence 
					 capable of mass product managment, reliable uptime, and sturdy functionality. They would also need analytical data to later form product marketing
					 campaigns and for search engine optimization purposes.
					</p>
				</div>
				<div className='column'>
					<h2>THE SOLUTION</h2>
					<p>
						Designed website within the boundaries of the Network Solutions ecommerce platform to meet desired specifications. Created logo and ads, implemented 
						6000+ products, performed keyword research, and gathered SEO data through Google Analytics. All of this required the study of the business, products, 
						market, and target audience to allow for specific, effective designs and page information. Additionally, a JavaScript search tool was created to allow
						users to easily search and match their specific machines to their compatible office supplies.
					</p>
				</div>
			</section>	
			<section className='section-three'>
					<div className='img-column'>
						<img src={DOS_Img1} alt='Discount Office Source Website Front Page' />
					</div>
					<div className='img-column'>
						<img src={DOS_Img2} alt='Discount Office Source Logo' />
					</div>	
			</section>
		</motion.div>
		)
}
export default DOS;