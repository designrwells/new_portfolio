import React from 'react';
import Header from '../components/Header';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pullLeft, transition, cardUp, cardUpContainer } from '../animations';


const Navbar = styled.nav`
	z-index: 100;
	display: flex;
	justify-content: center;
	
`;
const NavbarLink = styled(Link)`
	text-decoration: none;
	font-family: 'Biryani', sans-serif;
	font-size: clamp(20px, 2vw, 55px);
	margin: 2vw;
	line-height: 1.25;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	background: linear-gradient(to right, #aaa 32%, #444 37%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-size: 380% 100%;
	background-position: 100%;
	transition: background-position 850ms ease;
  	
  	:hover {
  		background-position: 0 100%;
	}
`;

const PortfolioNav = () => {
	return (
		<Navbar>
	        <NavbarLink className='navlink' data-text="ALL" to='/portfolio'>ALL</NavbarLink>
			<NavbarLink className='navlink' data-text="DESIGN" to='/portfolio/design'>DESIGN</NavbarLink>
			<NavbarLink className='navlink' data-text="WEB DEVELOPMENT" to='/portfolio/web-development'>WEB DEVELOPMENT</NavbarLink>
			<NavbarLink className='navlink' data-text="PHOTOGRAPHY" to='/portfolio/photography'>PHOTOGRAPHY</NavbarLink>
		</Navbar>	
	);
};

export default PortfolioNav;