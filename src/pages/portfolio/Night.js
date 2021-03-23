import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import Night_Background from '../../img/night/night_bg.jpg';
import Night_Img1 from '../../img/night/night_img1.jpg';
import Night_Img2 from '../../img/night/night_img2.jpg';
import Night_Img3 from '../../img/night/night_img3.jpg';
import Night_Img4 from '../../img/night/night_img4.jpg';
import Night_Img5 from '../../img/night/night_img5.jpg';


//page styles
const Section = styled.section`
	background: url(${Night_Background});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 143vh;

	@media (max-width: 768px) {
		height: 90vh;
	}
`;


const Night = () => {

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
					<div>NIGHT SKIES</div>
					<h1>PHOTOGRAPHS<br />TAKEN AFTER DARK</h1>				
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
						<img src={Night_Img1} alt='' />
						<img src={Night_Img4} alt='' />
						<img src={Night_Img5} alt='' />
						
					</div>
					<div className='img-column'>					
						<img src={Night_Img2} alt='' />
						<img src={Night_Img3} alt='' />
					</div>	
			</section>
		</motion.div>

		)
}
export default TNTAutoMart;