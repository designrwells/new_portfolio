import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullUp, transition } from '../../animations';
import { Link } from 'react-router-dom';

//images
import TNT_Logo from '../../svg/tnt_logo.svg';
import TNT_Img1 from '../../img/tnt-automart/tnt_img1.jpg';
//import TNT_Img2 from '../../img/tnt-automart/tnt_img2.jpg';
//import TNT_Img3 from '../../img/tnt-automart/tnt_img3.jpg';


//page styles
const Section1 = styled.section`
	background: #B83835;
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

	&:hover {
		font-size: clamp(30px, 2.2vw, 85px);
		color: #000;
		-webkit-transform: translateY(-6px);
		transform: translateY(-6px);
    	transition: 0.15s;
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
		width: clamp(2vh, 50vw, 560px);
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
const TNTAutoMart = () => {

	return (

		<motion.div
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullUp}
			transition={transition}
		>
			<Section1>
				<Back><BackLink to='/portfolio'><i className='fas fa-arrow-left' ></i>BACK</BackLink></Back>	
				<IntroContent>
					<div>TNT AUTOMART</div>
					<h1>LOGO & WEB DESIGN<br />FOR TNT AUTOMART</h1>
					<img src={TNT_Logo} alt='Mended Moments Logo' />
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
						<img src={TNT_Img1} alt='Mended Moments Website Front Page' />
					</ImgColumn>
					<ImgColumn>
						<img src='' alt='Mended Moments Website Front Page' />
						<img src='' alt='Mended Moments Website Front Page' />
					</ImgColumn>	
			</Section2>
		</motion.div>

		)
}
export default TNTAutoMart;