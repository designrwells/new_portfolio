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
//import DOS_Img3 from '../../img/DOS/dos_img3.jpg';


//page styles
const Section = styled.section`
	background: #F26422;
	width: 100vw;
	height: 110vh;
`;
const Logo = styled.img`
	width: clamp(100px, 35vw, 700px);	
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
					<div>DISCOUNT OFFICE SOURCE</div>
					<h1>WEBSITE & DESIGN FOR <br />DISCOUNT OFFICE SOURCE</h1>
					<Logo src={DOS_Logo} alt='Mended Moments Logo' />
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
						<img src={DOS_Img1} alt='Discount Office Source Website Front Page' />
					</div>
					<div className='img-column'>
						<img src={DOS_Img2} alt='Discount Office Source Logo' />
					</div>	
			</section>
		</motion.div>
		)
}
export default MendedMoments;