import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullRight, transition } from '../animations';
import Header_Img from '../img/about_head.jpg';
import Portrair_Img from '../img/about_portrait.jpg';

//images 
import AiSVG from '../svg/ai-black.svg';
import PsSVG from '../svg/ps-black.svg';
import LrSVG from '../svg/lr-black.svg';
import WooSVG from '../svg/woo-black.svg';

//page styles
const Section = styled.section`
	background: #E3E3CF;
	height: 100vh;
`;
const Heading = styled.div`
	height: 100vh;
	background-image: url(${Header_Img});
	background-size: cover;
	background-position: 50% 20%;
	-webkit-filter: grayscale(100%);
  	filter: grayscale(100%);
  	transition: 0.8s ease;

  	&:hover {
  		-webkit-filter: grayscale(0%);
  		filter: grayscale(0%);	
  	}
`;
const Title = styled.div`
	padding: 3% 3% 4% 3%;
	color: #fff;
	font-size: clamp(15px, 1.1vw, 32px);
	font-weight: 400;
	font-family: 'Oswald', sans-serif;
`;
const SectionTwo = styled.section`
	background: #F2F5E7;
	min-height: 100vh;
	width: 100vw;
	margin-top: -1px;
	display: flex;
	flex-wrap: wrap;
`;
const Column = styled(motion.div)`
	width: 600px;
	display: flex;
	flex-direction: column;
	margin: 0 5%;

	@media (max-width: 1480px){
			display: flex;
			justify-content: center;
			align-items: center;
		}
	h2 {
		font-family: 'Oswald', sans-serif;
		font-size: clamp(43px, 2.7vw, 80px);
		margin-bottom: 5%;
		text-align: left;
	}
	h3 {
		font-family: 'Oswald', sans-serif;
		font-size: clamp(32px, 1.9vw, 80px);
		margin: 5% 0;
		text-align: left;
	}
	p {	
		font-size: clamp(1.1rem, 1.3vw, 24px);
		text-align: left;
	}
	span {
		margin: 7px 0 25px -13px;
	}
	i {
		font-size: 55px;
		margin: 0 15px;

		@media (max-width: 550px){
			font-size: 30px;
		}
	}
`;
const Icon = styled.img`
    width: 48px;
    margin: 0 15px -3px 15px;

    @media (max-width: 550px){
			width: 28px;
		}
`;
const Portrait = styled.img`
	max-width: 100%;
		height: auto;
		border-radius: 50%;
		margin: 10% 0;

		@media (max-width: 1480px){
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
`;
const RowFirst = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100vw;
	margin: 7% 0 0px 0;
`;
const RowSecond = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100vw;
	margin-bottom: 150px;

	@media (max-width: 1480px){
		margin: 2% 0 0 0;
	}
`;
const About = () => {
	return (

		<motion.div 
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullRight}
			transition={transition}
			>
		
			<Section>
				<Heading>
					<Title>a b o u t</Title>
				</Heading>
			</Section>
			<SectionTwo>
				<RowFirst>
					<Column>
						<h2>OH, HEY THERE!</h2>
						<p>My name is Darrin and I like to create things - with my hands or with a mouse and keyboard. 
						Armed with a wide creative skillset and teamed up with my trusty basset hound sidekick, 
						I might just be the superhero equipped to help elevate your ideas to their full potential. 
						<br /><br />Let's work together! 
						<br /><br />I guess you could say I'm ready to help write your....Neverending Story.
						<br /><br />(ba dum tss!)
						</p>
						
					</Column>
					<Column className='column'>
						<Portrait src={Portrair_Img} alt='Self Portrait' />
					</Column>
				</RowFirst>
				<RowSecond>
					<Column>
						<h3>SKILLS</h3>
						<span>
							<i className='fab fa-html5'></i>
							<i className='fab fa-css3-alt'></i>
							<i class="fab fa-js"></i>
							<i class="fab fa-react"></i>
						</span>
						<span>
							<i class="fab fa-bootstrap"></i>
							<i className='fab fa-wordpress-simple'></i>
							<i className='fab fa-php'></i>
							<i className='fab fa-elementor'></i>
						</span>
						<span>
							<Icon src={WooSVG} alt='' />
							<Icon src={AiSVG} alt='' />
							<Icon src={PsSVG} alt='' />
							<Icon src={LrSVG} alt='' />
						</span>
					</Column>
					<Column>
						<h3>DISCIPLINES</h3>
						<p style={{lineHeight: '145%'}}>
						User Experience<br />
						Website Development<br />
						Branding<br />
						Photography<br />
						Retouching<br />
						Printing<br />
						IT Systems
						</p>
					</Column>
				</RowSecond>
			</SectionTwo>	
		</motion.div>

		)
}
export default About;