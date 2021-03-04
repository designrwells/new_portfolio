import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import MenuToggle from './menuToggle';
import { menuTransition, menuVariants, navItemVariants } from '../../animations';
import { Link } from 'react-router-dom';
import '../../css/nav.scss'

const HamburgerMenuContainer = styled.div`
	display: flex;
	position: absolute;
	top: 38px;
	right: 38px;
`;

//Hamburger icon styling animation
const HamburgerIcon = styled.div`
	color: ${({ reverseColor }) => reverseColor ? '#000' : '#fff'};
	cursor: pointer;
	z-index: 100;
	transition: all 250ms ease-in-out;
`;


const MenuContainer = styled(motion.div)`
	height: 100%;
	width: 100%;
	background-color: #222;
	z-index: 90;
	position: fixed;
	top: 0;
	right: 0;
	user-select: none;
	padding: 1em 2.5em;
`;
//Nav styles
const Navbar = styled.nav`
	z-index: 100;
	position: absolute;
	right: 18vw;
	top: 15vh;
`;

const NavItems = styled(motion.div)`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const NavbarLink = styled(Link)`
	font-family: Firestorm, sans-serif; 
	text-decoration: none;
	font-weight: bold;
	font-size: 3.5vw;
	margin: .7rem;
	cursor: pointer;
  
`;

const SocialLinks = styled(motion.div)`
	display: flex;
	justify-content: left;
	a {
		font-size: 1.8vw;
		text-decoration: none;
		color: rgba(255,255,255,0.5);
		margin: 6rem 3% 0 3%;
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
			<MenuContainer exitBeforeEnter
				key='menu'
				initial={false} 
				animate={isOpen ? 'open' : 'closed'}
				variants={menuVariants}
				transition={menuTransition}
				exit='closed'
				>
				<Navbar>
					<NavItems exitBeforeEnter
						key='navItems'
						initial={false}
						animate={isOpen ? 'open' : 'closed'}
						variants={navItemVariants}	
					>
						<NavbarLink className='glitch' data-text="HOME" to='/' onClick={toggleMenu}>HOME</NavbarLink>
						<NavbarLink className='glitch' data-text="SERVICES" to='/services' onClick={toggleMenu}>SERVICES</NavbarLink>
						<NavbarLink className='glitch' data-text="ABOUT" to='/about' onClick={toggleMenu}>ABOUT</NavbarLink>
						<NavbarLink className='glitch' data-text="PORTFOLIO" to='/portfolio' onClick={toggleMenu}>PORTFOLIO</NavbarLink>
						<NavbarLink className='glitch' data-text="CONTACT" to='/contact' onClick={toggleMenu}>CONTACT</NavbarLink>
						<SocialLinks 
							key='socials'
							initial={false}
							animate={isOpen ? 'open' : 'closed'}
							variants={navItemVariants}	
						>
							<a href="http://www.facebook.com/darrin.wells88"><i class="fa fa-facebook"></i></a>
							<a href="http://www.instagram.com/designrwells/"><i class="fa fa-instagram"></i></a>
							<a href="http://twitter.com/DesignrWells"><i class="fa fa-twitter"></i></a>
							<a href="http://drivenimage.deviantart.com/"><i class="fa fa-deviantart"></i></a>
							<a href="http://www.linkedin.com/in/darrinwells"><i class="fa fa-linkedin"></i></a>
						</SocialLinks>
					</NavItems>
				</Navbar>
			</MenuContainer>
			
		</HamburgerMenuContainer>
	);
};

export default HamburgerMenu;