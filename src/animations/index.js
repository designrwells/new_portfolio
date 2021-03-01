export const fade = {
	in: {
		opacity: 1
	},
	out: {
		opacity: 0
	}
};

export const pullDown = {
	in: {
		opacity: 1,
		y: 0
	},
	out: {
		opacity: 0,
		y: '-100vh'
	}
};

export const animationThree = {
	in: {
		opacity: 1,
		x: -300
	},
	out: {
		opacity: 0,
		x: 300
	},
	end: {
		x: 0,
		opacity: 1
	}
};


export const transition = {
	duration: 0.4
};