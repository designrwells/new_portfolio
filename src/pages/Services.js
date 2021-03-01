import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import {pullDown} from '../animations';

const Services = () => {
	return (
		<motion.div initial='out' animate='in' exti='out' variants={pullDown}>
			<Header />
			<Hero bgcolor={'#444'} />
		</motion.div>
		)
}

export default Services;