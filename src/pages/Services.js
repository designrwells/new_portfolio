import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { pullDown, transition } from '../animations';
import styled from 'styled-components';
import '../css/services.css';

const Section = styled.section`
	background: #555;
	min-height: 100vh;
`;

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 12%;
`;

const Card = styled.div`
	height: clamp(300px, 400px, 400px);
	width: clamp(250px, 22vw, 300px);
	margin: 2rem;

`;

const CardInner = styled.div`
	
	width: 100%;
	height: 100%;
	transition: transform 0.6s;
	transform-style: preserve-3d;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	background-color: #43a45a;
	border-radius: 10px;
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
	padding: 10px;
  	-webkit-backface-visibility: hidden;
  	backface-visibility: hidden;
  	padding: 15px;

  	h1 {
		font-size: clamp(1.5rem,1.8vw,2.5rem);
		margin-bottom: 0.5rem;
		text-align: center;
	}
`;
const CardBack = styled.div`
	color: #fff;
	border-radius: 10px;
	background-color: #43a45a;
	position: absolute;
	padding: 18px;
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
				<Row>
					
					<Card>
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
					
					<Card>
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
					<Card>
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
					<Card>
						<CardInner>
							<CardFront>
								<h1>Photography & Photo Services</h1>
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