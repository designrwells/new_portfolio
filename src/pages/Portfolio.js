import React from 'react';
import Header from '../components/Header';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullLeft, transition, cardUp, cardUpContainer } from '../animations';
import PortfolioNav from '../components/PortfolioNav';
import Design from './portfolio/Design';
import WebDevelopment from './portfolio/WebDevelopment';
import Photography from './portfolio/Photography';


//page styles
const Section = styled.section`
	background: #ccc;
	min-height: 100vh;
	padding-top: 10%;
`;

const Row = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Card = styled(motion.div)`
	height: clamp(400px, 500px, 500px);
	width: clamp(350px, 22vw, 400px);
	margin: 0rem 1.25rem 5rem 1.25rem;
`;

const CardInner = styled.div`
	width: 100%;
	height: 100%;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	background-color: #FFF;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	${Card}:hover & {
		
	}
`;
const CardFront = styled.div`
	color: #fff;
	position: absolute;
	padding: 10px 10px 30px 10px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	flex-direction: column;
`;

const Portfolio = () => {



	return (

		<motion.div 
			initial='out' 
			animate='in' 
			exit='out' 
			variants={pullLeft}
			transition={transition}
			>


			<Section>
			
				<PortfolioNav />

				<Switch>
					<Route path="/portfolio/design" component={Design} />
		            <Route path="/portfolio/web-development" component={WebDevelopment} />
		            <Route path="/portfolio/photography" component={Photography} />
				</Switch>
				<Row exitBeforeEnter
						key='navItems'
						initial='hide'
						animate='show'
						variants={cardUpContainer}	>
					
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
							</CardFront>
						</CardInner>
					</Card>
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
							</CardFront>
						</CardInner>
					</Card>
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
							</CardFront>
						</CardInner>
					</Card>

				</Row>
				<Row exitBeforeEnter
						key='navItems'
						initial='hide'
						animate='show'
						variants={cardUpContainer}	>
					
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
							</CardFront>
						</CardInner>
					</Card>
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
							</CardFront>
						</CardInner>
					</Card>
					<Card variants={cardUp}>
						<CardInner>
							<CardFront>
							</CardFront>
						</CardInner>
					</Card>

				</Row> 
			</Section>	
		</motion.div>

		)
}
export default Portfolio;