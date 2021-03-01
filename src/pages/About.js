import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import {animationThree} from '../animations';

const About = () => {
	return (
		<motion.div initial='out' animate='end' exit='out' variants={animationThree}>
			<Header />
			<Hero bgcolor={'#777'}/>
		</motion.div>
		)
}

export default About;