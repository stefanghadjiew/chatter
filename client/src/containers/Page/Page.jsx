import React, { useEffect } from 'react';
import classes from './styles.module.scss';
import { H1 } from 'components';
import { assignClasses } from 'utils';

export const Page = ({ title, children, titleIcon, componentClasses }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className={[
                assignClasses(componentClasses),
                classes['page-wrapper'],
            ].join(' ')}
        >
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
