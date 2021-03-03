import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuToggle from './menuToggle';
import { menuTransition, menuVariants, navItemVariants, navItemTransition } from '../../animations';

import { Link } from 'react-router-dom';

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
	background-color: #333;
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
	height: 50px;
	margin-bottom: -50px;
	background-color: rgb(0,0,0,0.0);
	padding: 0rem calc((100vw - 1850px) / 2);
	position: absolute;
	right: 15vw;
	top: 15vh;
`;

const NavItems = styled(motion.div)`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const NavbarLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-weight: bold;
	font-size: 4vw;
	padding: .45rem;
	cursor: pointer;
  	&:hover {
   		a {
    	color: #b70000;
    	}
    }
	`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};


const HamburgerMenu = () => {
	const [isOpen, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen(!isOpen);
	};

	return (
		<HamburgerMenuContainer>
			<MenuToggle toggle={toggleMenu} isOpen={isOpen} />	
			<MenuContainer 
				initial={false} 
				animate={isOpen ? 'open' : 'closed'}
				variants={menuVariants}
				transition={menuTransition}
				>
				<Navbar>
					<NavItems
						initial={false}
						animate={isOpen ? 'open' : 'closed'}
						variants={navItemVariants}
						transition={navItemTransition}
					>
						<NavbarLink to='/' onClick={toggleMenu}>HOME</NavbarLink>
						<NavbarLink to='/services' onClick={toggleMenu}>SERVICES</NavbarLink>
						<NavbarLink to='/about' onClick={toggleMenu}>ABOUT</NavbarLink>
						<NavbarLink to='/portfolio' onClick={toggleMenu}>PORTFOLIO</NavbarLink>
						<NavbarLink to='/contact' onClick={toggleMenu}>CONTACT</NavbarLink>
					</NavItems>
				</Navbar>
			</MenuContainer>
		</HamburgerMenuContainer>
	);
};

export default HamburgerMenu;