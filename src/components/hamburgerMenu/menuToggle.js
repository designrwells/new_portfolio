import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//styles
const Button = styled.div`
	z-index: 100;
	cursor: pointer;
`;

//path setup for SVG
const Path = (props) => (
	<motion.path 
		fill='transparent'
		strokeWidth='3'
		{...props} />
)

//animation time
const transition = { duration: 0.18 };

//creates button and draws SVG to animate
const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<Button onClick={toggle}>
	        <svg width="40" height="40" viewBox="0 0 23 23">
		        <Path
		          animate={isOpen ? "open" : "closed"}
		          initial={false}
		          variants={{
		            closed: { d: "M 1 2.5 L 20 2.5", stroke: "hsl(0, 0%, 100%)" },
		            open: { d: "M 1 17  L 17 1", stroke: "hsl(0, 100%, 44%)" },
		          }}
		          transition={transition}
		        />
		        <Path
		          d="M 1 9.423 L 20 9.423"
		          stroke="hsl(0, 0%, 100%)"
		          animate={isOpen ? "open" : "closed"}
		          initial={false}
		          variants={{
		            closed: { opacity: 1 },
		            open: { opacity: 0 },
		          }}
		          transition={transition}
		        />
		        <Path
		          animate={isOpen ? "open" : "closed"}
		          initial={false}
		          variants={{
		            closed: { d: "M 1 16.5 L 20 16.5", stroke: "hsl(0, 0%, 100%)" },
		            open: { d: "M 1 1  L 17 17", stroke: "hsl(0, 100%, 44%)" },
		          }}
		          transition={transition}
		        />
		      </svg>
		</Button>
	);
};

export default MenuToggle;