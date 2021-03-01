import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const Home = () => {
	return (
		<motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>
			<Header />
			<Hero />
		</motion.div>
		)
}

export default Home;