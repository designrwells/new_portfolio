import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import {animationThree} from '../animations';

const About = () => {
	return (
		<motion.div 
			initial='out' 
			animate='in' 
			exit='end' 
			variants={animationThree}
			>
			
			
		</motion.div>
		)
}

export default About;