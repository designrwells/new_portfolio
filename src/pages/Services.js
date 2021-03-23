import React from 'react';
import { motion } from 'framer-motion';
import { pullDown, transition, rowRight, rowSlideContainer } from '../animations';
import styled from 'styled-components';
import Header_Img from '../img/services_head.jpg';

const Section = styled.section`
	background: #020518;
`;
const Heading = styled.div`
	height: 60vh;
	background-image: url(${Header_Img});
	background-size: cover;
	background-position: 50% 20%;
`;
const Title = styled.div`
	padding: 3% 3% 4% 3%;
	color: #fff;
	font-size: clamp(15px, 1.1vw, 32px);
	font-weight: 400;
	font-family: 'Oswald', sans-serif;
`;
const Row = styled(motion.div)`	
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const RowInner1 = styled(motion.div)`
	display: flex;
	color: #fff;
	padding: 10vh 2%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background: #151E30;

  	h1 {
  		display: flex;
  		justify-content: center;
  		width: 200px;
  		text-transform: uppercase;
  		color: #EBF3F8;
  		font-family: 'Oswald', sans-serif;
  		font-weight: 400;
		font-size: clamp(1.8rem, 4vw, 4.5rem);
		margin: 2% 5%;
		text-align: right;

		@media (max-width: 1200px) {
		text-align: center;;
		}
	}
	p {
		width: 70%;
		color: #EBF3F8;
		font-size: clamp(1rem, 1.6vw, 25px);
		padding: 2% 6%;
		@media (max-width: 1200px) {
		text-align: center;;
		}
	}
`;

const RowInner2 = styled(motion.div)`

	display: flex;
	padding: 10vh 2%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	@media (max-width: 1200px) {
			flex-direction: column-reverse;
		}

  	h1 {
  		display: flex;
  		justify-content: center;
  		flex-direction: row;
  		width: 200px;
  		text-transform: uppercase;
  		color: #EBF3F8;
  		font-family: 'Oswald', sans-serif;
  		font-weight: 400;
		font-size: clamp(1.8rem, 4vw, 4.5rem);
		margin: 2% 5%;

		@media (max-width: 1200px) {
		text-align: center;;
		}

		
	}
	p {
		width: 70%;
		color: #EBF3F8;
		font-size: clamp(1rem, 1.6vw, 25px);
		padding: 2% 6%;
		text-align: right;

		@media (max-width: 1200px) {
		text-align: center;;
		}
	}
`;

const Services = () => {
	return (
		<motion.div
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullDown}
			transition={transition}
			>
			<Section>
				<Heading>
					<Title>s e r v i c e s</Title>
				</Heading>
				<Row exitBeforeEnter
						key='navItems'
						initial='hide'
						animate='show'
						variants={rowSlideContainer}	>
					
					<RowInner1 variants={rowRight}>
						<h1>Graphic Design</h1>								
						<p>Artworks, illustrations, outdoor/indoor signage, CD/DVD/book cover & booklets, 
						layouts, posters, apparel, PDFs, etc. Design representing a singular event, project, 
						person, group, or thing allowing a connection with viewers, typically on a more 
						diverse, pictorial, and personal level rather than a corporate one.</p>
					</RowInner1>
					<RowInner2 variants={rowRight}>
						<p>Logos, stationery (business cards, envelopes, letterheads, etc.), 
						marketing material (flyers, brochures, books, etc.), packaging, apparel 
						design, signage, and any other visual elements that may represent a business 
						or group. It is important that a company is represented in a clear and effective 
						manner, thus allowing followers or customers to easily understand and connect in 
						response with what the company is providing.</p>
						<h1>Branding & Identity</h1>													
					</RowInner2>
					<RowInner1 variants={rowRight}>
						<h1>Web Development</h1>
						<p>Building custom, up-to-date websites with responsive design and modern appeal 
						for blogs, portfolios, small businesses, entertainment, etc. Experience in HTML5, 
						CSS3, JavaScript, jQuery, and PHP. Search Engine Optimization increasing the 
						visibility and search results of your online presence, and directing search engine 
						traffic to your website. Other website setups and CMS including WordPress are an option.</p>
					</RowInner1>
					<RowInner2 variants={rowRight}>
						<p>Photo shoots, live events, business/product photography, and landscapes - for 
						those interested in personal photos or for those who are looking to create a more 
						professional appearance. Photo editing, retouch, restoration, and colorization for 
						optimal post production images, making old photos like new, or putting color into 
						those old black and white photos of family and close relatives</p>
						<h1>Photo Services</h1>							
					</RowInner2>
				</Row>
			</Section>	
		</motion.div>
		)
}

export default Services;