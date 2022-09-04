export const isObjectValuesEmpty = obj => {
    if (typeof obj !== 'object') return;
    return Object.values(obj).filter(item => item).length === 0;
};

export const isArrayEmpty = arr => {
    return arr.length === 0;
};
