export const animationTypes = {
    topToBottom: 'top-bottom',
    bottomToTop: 'bottom-top',
    leftToRight: 'left-right',
    rightToLeft: 'right-left',
    insideOut: 'inside-out',
    rotateRightToLeft: 'rotate-right-left',
    rotateLeftToRight: 'rotate-left-right',
};

export const animationVariants = duration => ({
    'top-bottom': {
        initial: { opacity: 0, height: 0 },
        animate: {
            opacity: 1,
            height: 'auto',
            transition: { duration },
        },
        exit: { opacity: 0, height: 0, transition: { duration } },
    },
    'bottom-top': {
        initial: { opacity: 0, y: '25px' },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration,
            },
        },
        exit: { opacity: 0, y: '25px', transition: { duration } },
    },
    'left-right': {
        initial: { x: 250 },
        animate: {
            x: 0,
            transition: { ease: 'easeInOut', duration },
        },
        exit: { x: 350, transition: { duration } },
    },
    'right-left': {
        initial: { x: '-250px' },
        animate: {
            x: 0,
            transition: { ease: 'easeInOut', duration },
        },
        exit: { x: '-250px', transition: { duration } },
    },
    'inside-out': {
        initial: { opacity: 0, scale: 0.95 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: 'easeInOut',
                duration,
            },
        },
        exit: { opacity: 0, scale: 0.95, transition: { duration } },
    },
    'rotate-right-left': {
        initial: { opacity: 0, rotate: 45 },
        animate: {
            opacity: 1,
            rotate: 0,
            transition: {
                ease: 'easeInOut',
                duration,
            },
        },
        exit: { opacity: 0, rotate: 45, transition: { duration } },
    },
    'rotate-left-right': {
        initial: { opacity: 0, rotate: -45 },
        animate: {
            opacity: 1,
            rotate: 0,
            transition: {
                ease: 'easeInOut',
                duration,
            },
        },
        exit: { opacity: 0, rotate: -45, transition: { duration } },
    },
});
