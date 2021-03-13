import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { pullDown, transition, cardUp, cardUpContainer } from '../animations';
import styled from 'styled-components';
import '../css/services.css';

const Section = styled.section`
	background: #020518;
	min-height: 100vh;
`;

const Row = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;	
`;

const Card = styled(motion.div)`
	height: 100vh;
	width: clamp(350px, 22vw, 400px);
`;

const CardInner = styled.div`
	width: 100%;
	height: 100%;
	transition: transform 0.6s;
	transform-style: preserve-3d;
	background: #1077C6;
	display: flex;
	align-items: center;
	justify-content: center;
	${Card}:hover & {
		transform: rotateY(180deg);
	}
`;
const CardFront = styled.div`
	color: #fff;
	position: absolute;
	padding: 10px 10px 30px 10px;
  	-webkit-backface-visibility: hidden;
  	backface-visibility: hidden;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	flex-direction: column;

  	h1 {
  		text-transform: uppercase;
  		color: #F4F1F4;
  		font-family: 'Oswald', sans-serif;
  		font-weight: 400;
  		line-height: 1.3;
		font-size: clamp(1.5rem, 3.3vw, 4.5rem);
		margin-bottom: 0.5rem;
		text-align: center;
		padding: 20% 0 17% 0;
	}
`;
const CardBack = styled.div`
	color: #F4F1F4;
	font-size: clamp(1.1rem, 1.5vw, 21px);
	position: absolute;
	padding: 15%;
  	-webkit-backface-visibility: hidden;
  	backface-visibility: hidden;
  	transform: rotateY(180deg);
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
				<Row exitBeforeEnter
						key='navItems'
						initial='hide'
						animate='show'
						variants={cardUpContainer}	>
					
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
								<h1>Graphic Design</h1>								
							</CardFront>
							<CardBack>
								<p>Artworks, illustrations, outdoor/indoor signage, CD/DVD/book cover & booklets, 
								layouts, posters, apparel, PDFs, etc. Design representing a singular event, project, 
								person, group, or thing allowing a connection with viewers, typically on a more 
								diverse, pictorial, and personal level rather than a corporate one.</p>
							</CardBack>
						</CardInner>
					</Card>
					
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
								<h1>Branding & Identity</h1>								
							</CardFront>
							<CardBack>
								<p>Logos, stationery (business cards, envelopes, letterheads, etc.), 
								marketing material (flyers, brochures, books, etc.), packaging, apparel 
								design, signage, and any other visual elements that may represent a business 
								or group. It is important that a company is represented in a clear and effective 
								manner, thus allowing followers or customers to easily understand and connect in 
								response with what the company is providing.</p>
							</CardBack>
						</CardInner>
					</Card>
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
								<h1>Web Development</h1>
							</CardFront>
							<CardBack>
								<p>Building custom, up-to-date websites with responsive design and modern appeal 
								for blogs, portfolios, small businesses, entertainment, etc. Experience in HTML5, 
								CSS3, JavaScript, jQuery, and PHP. Search Engine Optimization increasing the 
								visibility and search results of your online presence, and directing search engine 
								traffic to your website. Other website setups and CMS including WordPress are an option.</p>
							</CardBack>
						</CardInner>
					</Card>
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
								<h1>Photo Services</h1>
							</CardFront>
							<CardBack>
								<p>Photo shoots, live events, business/product photography, and landscapes - for 
								those interested in personal photos or for those who are looking to create a more 
								professional appearance. Photo editing, retouch, restoration, and colorization for 
								optimal post production images, making old photos like new, or putting color into 
								those old black and white photos of family and close relatives</p>
							</CardBack>
						</CardInner>
					</Card>
				</Row>
			
			</Section>	
		</motion.div>
		)
}

export default Services;