import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { pullDown, transition } from '../animations';
import styled from 'styled-components';

const Section = styled.section`
	background: #555;
	height: 100vh;
	display: flex;
	justify-content: center;

`;

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: absolute;
	top: 10vh;
	
`;

const Container = styled.div`
	vertical-align: baseline;
	color: #fff;
	width: clamp(200px, 20vw, 300px);
	padding: 2rem;
	backdrop-filter: blur(5px);
	background-color: rgba(0,0,0,0.3);
	margin: 2rem;
	border-radius: 10px;

	h1 {
		font-size: clamp(1.5rem,2vw,2.5rem);
		margin-bottom: 0.5rem;
		text-align: center;
	}

	p {
		text-align: left;

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
				<Row>
					<Container>
						<h1>Graphic Design</h1>
						<p>Artworks, illustrations, outdoor/indoor signage, CD/DVD/book cover & booklets, 
						layouts, posters, apparel, PDFs, etc. Design representing a singular event, project, 
						person, group, or thing allowing a connection with viewers, typically on a more 
						diverse, pictorial, and personal level rather than a corporate one.</p>
					</Container>
					<Container>
						<h1>Branding & Identity</h1>
						<p>Logos, stationery (business cards, envelopes, letterheads, etc.), 
						marketing material (flyers, brochures, books, etc.), packaging, apparel 
						design, signage, and any other visual elements that may represent a business 
						or group. It is important that a company is represented in a clear and effective 
						manner, thus allowing followers or customers to easily understand and connect in 
						response with what the company is providing.</p>
					</Container>
					<Container>
						<h1>Web Development</h1>
						<p>Building custom, up-to-date websites with responsive design and modern appeal 
						for blogs, portfolios, small businesses, entertainment, etc. Experience in HTML5, 
						CSS3, JavaScript, jQuery, and PHP. Search Engine Optimization increasing the 
						visibility and search results of your online presence, and directing search engine 
						traffic to your website. Other website setups and CMS including WordPress are an option.</p>
					</Container>
					<Container>
						<h1>Photography & Photo Services</h1>
						<p>Photo shoots, live events, business/product photography, and landscapes - for 
						those interested in personal photos or for those who are looking to create a more 
						professional appearance. Photo editing, retouch, restoration, and colorization for 
						optimal post production images, making old photos like new, or putting color into 
						those old black and white photos of family and close relatives</p>
					</Container>
				</Row>
			
			</Section>	
		</motion.div>
		)
}

export default Services;