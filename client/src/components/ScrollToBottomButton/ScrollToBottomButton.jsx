import { useState, useEffect, Fragment } from 'react';
import {
    IconButton,
    FramerMotionAnimation,
    animationTypes,
} from 'components';
import { BsChevronDown } from 'react-icons/bs';
import classes from './styles.module.scss';
import { AnimatePresence } from 'framer-motion';

export const ScrollToBottomButton = ({ id }) => {
    const [element, setElement] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = document.getElementById(id);
        setElement(el);

        const toggleVisible = () => {
            el.scrollTop < -500 ? setIsVisible(true) : setIsVisible(false);
        };

        el.addEventListener('scroll', toggleVisible, {
            passive: true,
        });
        return () => {
            el.removeEventListener('scroll', toggleVisible);
        };
    }, [isVisible, id]);

    const scrollToBottom = () => {
        element.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Fragment>
            <AnimatePresence>
                {isVisible && (
                    <FramerMotionAnimation
                        animationVariant={animationTypes.bottomToTop}
                        animationDuration={0.2}
                        motionKey="scroll-to-bottom__btn--animation"
                        componentClasses={classes['scroll-to-bottom__btn']}
                    >
                        <IconButton
                            icon={<BsChevronDown />}
                            onClick={scrollToBottom}
                        />
                    </FramerMotionAnimation>
                )}
            </AnimatePresence>
        </Fragment>
    );
};
