import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { fade, transition } from '../animations';

const Home = () => {
	return (
		<motion.div
			initial='out'
			animate='in'
			exit='out'
			variants={fade}
			transition={transition}
			>
			<Header />
		 	<Hero bgcolor={'#000'} />

		</motion.div>
		)
}

export default Home;