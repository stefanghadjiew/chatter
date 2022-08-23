import { useEffect, useRef } from 'react';

export const useScrollToBottom = ({ childrenOfElement }) => {
    const pageEndRef = useRef(null);

    const scrollToBottom = () => {
        pageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [childrenOfElement]);

    return [pageEndRef];
};
