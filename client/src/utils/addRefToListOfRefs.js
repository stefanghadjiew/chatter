export const addReffToListOfRefs = (el, arrayOfRefs) => {
    if (typeof arrayOfRefs !== 'object') return;
    return (arrayOfRefs.current = [...arrayOfRefs.current, el]);
};
