//--MENU ANIMATIONS--
export const menuTransition = { 
	type: 'tween',
	duration: 0.2,
	delay: 0.1,
	staggerChildren: 0.5,
};
export const menuVariants = {
	open: {
		transform: 'translateY(0%)',
		opacity: 1,
		display: 'block'
	},
	closed: {
		transform: 'translateY(0%)',
		opacity: 0,
		transitionEnd: { 
			display: 'none'
		}
	},
};
export const navItemVariants = {
	open: {
		transform: 'translateY(0vh)',
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 1,
		},
	},
	closed: {
		transform: 'translateY(-5vh)',
		opacity: 0,
		transition: {
			type: 'tween',
			duration: 0.12,
		},
	},
};
export const navItemTransition = { 
	type: 'tween',
	duration: 2,
	delay: 1.5,
}

//--PAGE ANIMATIONS--
export const fade = {
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	}
};

export const pullDown = {
	in: {
		opacity: 1,
		y: 0
	},
	out: {
		opacity: 0.8,
		y: '-100vh'
	}
};

export const pullUp = {
	in: {
		opacity: 1,
		y: 0,
	},
	out: {
		opacity: 0.8,
		y: '100vh',
	}
};

export const pullRight = {
	in: {
		opacity: 1,
		x: 0,
	},
	out: {
		opacity: 0,
		x: '-100vw',
	}
};

export const pullLeft = {
	in: {
		opacity: 1,
		x: 0,
	},
	out: {
		opacity: 0,
		x: '100vw',
	}
};

export const transition = {
	type: 'tween',
	ease: 'anticipate',
	duration: 0.4
};





