import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import MM_Logo from '../../svg/mm_logo.svg';
import MM_Background from '../../img/mended-moments/mm_background.jpg';
import MM_Img1 from '../../img/mended-moments/mm_img1.jpg';
import MM_Img2 from '../../img/mended-moments/mm_img2.jpg';
import MM_Img3 from '../../img/mended-moments/mm_img3.jpg';


//page styles
const Section1 = styled.section`
	background-image: url(${MM_Background});
	width: 100vw;
	height: 100vh;
`;
const Back = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1% 80% 5% 0;
`;
const BackLink = styled(Link)`
	font-family: 'Oswald', sans-serif;
	font-size: clamp(25px, 2vw, 80px);
	text-decoration: none;
	transition: 0.15s;
	color: #fff;
	overflow: hidden;
	background: linear-gradient(to right, #26FF6B 32%, #fff 37%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-size: 380% 100%;
	background-position: 100%;
	transition: background-position 420ms;

	&:hover {
		background-position: 0 100%;
	}
	i {
		margin-right: 20px;
	}
`;
const IntroContent = styled(motion.div)`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin-top: 5vh;

	div {
		color: #FFF;
		font-family: 'Oswald', sans-serif;
		font-weight: 400;
		font-size: clamp(1rem, 1.2vw, 50px);
		text-align: center;
		margin-bottom: 10px;

	}
	h1 {
		color: #FFF;
		font-family: 'Oswald', sans-serif;
		font-weight: 400;
		font-size: clamp(48px, 4.5vw, 120px);
		margin-bottom: 14vh;
		text-align: center;
		line-height: 120%;
	}
	img {
		width: clamp(20vh, 14vw, 350px);
	}
`;
const Section2 = styled.section`
	background: #fff;
	width: 100vw;
	margin-top: -1px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 5%;
`;
const Column = styled(motion.div)`	
	width: 500px;
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 5%;
	h2 {
		font-family: 'Oswald', sans-serif;
		font-size: clamp(32px, 2.7vw, 80px);
		margin-bottom: 4%;
	}
	p {
		font-size: clamp(1.2rem, 1.2vw, 22px);
	}
`;
const ImgColumn = styled(motion.div)`
	display: flex;
	flex-direction: column;

	img {
		margin: 2%;
	}
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
			<Section1>
				<Back><BackLink to='/portfolio'><i class='fas fa-arrow-left' ></i>BACK</BackLink></Back>	
				<IntroContent>
					<div>MENDED MOMENTS PHOTO RESTORATION</div>
					<h1>MENDED MOMENTS<br />WEBSITE & PRINT DESIGN</h1>
					<img src={MM_Logo} alt='Mended Moments Logo' />
				</IntroContent>
			</Section1>	
			<Section2>
				<Column>
					<h2>THE CHALLENGE</h2>
					<p>Quae rerum ipsum modi. Placeat sunt aliquam eius qui nam magni aliquam. Consequatur tenetur nesciunt ipsa. 
					Aperiam voluptas eum tempore optio ut ex aliquam. Sint velit sit facere labore tempora totam enim ipsum. 
					Maiores autem suscipit enim voluptatem. Enim numquam velit sequi itaque sequi perferendis consequatur. Qui qui eveniet beatae.</p>
				</Column>
				<Column>
					<h2>THE SOLUTION</h2>
					<p>Quae rerum ipsum modi. Placeat sunt aliquam eius qui nam magni aliquam. Consequatur tenetur nesciunt ipsa. 
					Aperiam voluptas eum tempore optio ut ex aliquam. Sint velit sit facere labore tempora totam enim ipsum. 
					Maiores autem suscipit enim voluptatem. Enim numquam velit sequi itaque sequi perferendis consequatur. Qui qui eveniet beatae.</p>
				</Column>
			</Section2>	
			<Section2>
					<ImgColumn>
						<img src={MM_Img1} alt='Mended Moments Website Front Page' />
					</ImgColumn>
					<ImgColumn>
						<img src={MM_Img2} alt='Mended Moments Brochure1' />
						<img src={MM_Img3} alt='Mended Moments Brochure2' />
					</ImgColumn>	
			</Section2>
		</motion.div>

		)
}
export default MendedMoments;