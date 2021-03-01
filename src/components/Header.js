import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
	z-index: 100;
	height: 50px;
	margin-bottom: -50px;
	background-color: rgb(0,0,0,0.0);
	padding: 0rem calc((100vw - 1850px) / 2);
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Logo = styled(Link)`
	color: #fff;
	padding-left: 1rem;
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: bold;
	font-style: italic;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	padding: 1rem;
`;

const Header = () => {
	return (
		<Navbar>
		<Logo to='/'>Darrin Wells</Logo>
			<NavItems>
				<NavbarLink to='/'>Home</NavbarLink>
				<NavbarLink to='/services'>Services</NavbarLink>
				<NavbarLink to='/about'>About</NavbarLink>
				<NavbarLink to='/portfolio'>Portfolio</NavbarLink>
				<NavbarLink to='/contact'>Contact</NavbarLink>
			</NavItems>
		</Navbar>
	);
};

export default Header;