import { useEffect, useState } from 'react';

export const usePortal = (id, stackingContext) => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState(`portal-${id}`);

    useEffect(() => {
        const div = document.createElement('div');
        div.id = portalId;
        div.style = `position: fixed; z-index: ${stackingContext}; background-color: rgba(0,0,0,0.5)`;
        document.getElementsByTagName('body')[0].prepend(div);
        setLoaded(true);
        return () => {
            document.getElementsByTagName('body')[0].removeChild(div);
        };
    }, [portalId, stackingContext]);

    return [loaded, portalId];
};
