import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuToggle from './menuToggle';
import { menuTransition, menuVariants, navItemVariants } from '../../animations';
import { Link } from 'react-router-dom';

//Hamburger icon styling animation
const HamburgerMenuContainer = styled.div`
	display: flex;
	position: absolute;
	top: 3%;
	right: 3%;
`;

//Menu wrapper/backdrop
const MenuContainer = styled(motion.div)`
	height: 100%;
	width: 100%;
	background-color: #151E30;
	z-index: 90;
	position: fixed;
	top: 0;
	right: 0;
	user-select: none;
`;

//Nav styles
const Navbar = styled.nav`
	z-index: 100;
	display: flex;
	justify-content: center;
	margin: 13vh 0 0 32vw;
`;
const NavItems = styled(motion.div)`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
const NavbarLink = styled(Link)`
	text-decoration: none;
	font-family: 'Oswald', sans-serif;
	font-weight: 600;
	font-size: clamp(3.2rem, 4.6vw, 120px);
	line-height: 1.27;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	background: linear-gradient(to right, #26FF6B 32%, #EBF3F8 37%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-size: 380% 100%;
	background-position: 100%;
	transition: background-position 775ms;
  	
  	&:hover {
  		background-position: 0 100%;
	}
`;
const SocialLinks = styled(motion.div)`
	display: flex;
	justify-content: left;
	a {
		font-size: clamp(1.5rem, 1.8vw, 40px);
		text-decoration: none;
		color: rgba(235, 243, 248,0.5);
		margin: 6rem 3% 0 3%;
	}
	a:hover {
		color: #EBF3F8;
	}
`;


const HamburgerMenu = () => {
	const [isOpen, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen(!isOpen);
	};
	return (
		<HamburgerMenuContainer>
			<MenuToggle toggle={toggleMenu} isOpen={isOpen} />	
			<MenuContainer  id='ex1'
				exitBeforeEnter	
				key='menu'
				initial={false} 
				animate={isOpen ? 'open' : 'closed'}
				variants={menuVariants}
				transition={menuTransition}
				exit='closed'
				>
				<Navbar>
					<NavItems id='ex1-layer'	
						exitBeforeEnter
						key='navItems'
						initial={false}
						animate={isOpen ? 'open' : 'closed'}
						variants={navItemVariants}	
					>
						<NavbarLink className='navlink' data-text="HOME" to='/' onClick={toggleMenu}>HOME</NavbarLink>
						<NavbarLink className='navlink' data-text="SERVICES" to='/services' onClick={toggleMenu}>SERVICES</NavbarLink>
						<NavbarLink className='navlink' data-text="ABOUT" to='/about' onClick={toggleMenu}>ABOUT</NavbarLink>
						<NavbarLink className='navlink' data-text="PORTFOLIO" to='/portfolio' onClick={toggleMenu}>PORTFOLIO</NavbarLink>
						<NavbarLink className='navlink' data-text="CONTACT" to='/contact' onClick={toggleMenu}>CONTACT</NavbarLink>
						<SocialLinks 
							key='socials'
							initial={false}
							animate={isOpen ? 'open' : 'closed'}
							variants={navItemVariants}	
						>
							<a href="http://www.facebook.com/darrin.wells88" target="_blank"><i class="fa fa-facebook"></i></a>
							<a href="http://www.instagram.com/designrwells/" target="_blank"><i class="fa fa-instagram"></i></a>
							<a href="http://twitter.com/DesignrWells" target="_blank"><i class="fa fa-twitter"></i></a>
							<a href="http://drivenimage.deviantart.com/" target="_blank"><i class="fa fa-deviantart"></i></a>
							<a href="http://www.linkedin.com/in/darrinwells" target="_blank"><i class="fa fa-linkedin"></i></a>
						</SocialLinks>
					</NavItems>
				</Navbar>
			</MenuContainer>
			
		</HamburgerMenuContainer>
	);
};

export default HamburgerMenu;