import React, { useEffect } from 'react';
import classes from './styles.module.scss';
import { H1 } from 'components';

export const Page = ({ title, children, titleIcon }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes['page-wrapper']}>
            <header>
                <H1
                    text={title}
                    icon={titleIcon}
                    componentClasses={classes['chatter-logo']}
                />
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};
