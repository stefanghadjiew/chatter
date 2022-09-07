import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from './animationTypes';
import { assignClasses } from 'utils';
import classes from './styles.module.scss';

export const FramerMotionAnimation = forwardRef((props, ref) => {
    const {
        children,
        animationVariant,
        animationDuration,
        motionKey,
        componentClasses,
    } = props;

    const animation = animationVariants(animationDuration).hasOwnProperty(
        animationVariant
    )
        ? animationVariants(animationDuration)[animationVariant]
        : null;

    return (
        <motion.div
            ref={ref}
            key={motionKey}
            className={[
                assignClasses(componentClasses),
                classes['framer-motion'],
            ].join(' ')}
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            variants={animation}
        >
            {children}
        </motion.div>
    );
});
