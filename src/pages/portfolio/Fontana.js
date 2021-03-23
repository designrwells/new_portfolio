import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import Fontana_Logo from '../../svg/fontana_logo.svg';
import Fontana_Img1 from '../../img/fontana/fontana_img1.png';


//page styles
const Section = styled.section`
	background: linear-gradient(to top, #ED1F24, #ED1F24 5%, #FFF 5%, #FFF 50%, #43B649 50%);
	width: 100vw;
	min-height: 103vh;
`;
const Logo = styled.img`
	width: clamp(450px, 30vw, 600px);
`;

const Fontana = () => {

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
					<Logo src={Fontana_Logo} alt='Fontana Logo' />
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
						<img src={Fontana_Img1} alt='Fontana bread package label' />
					</div>	
			</section>
		</motion.div>

		)
}
export default Fontana;