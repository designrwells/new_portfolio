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