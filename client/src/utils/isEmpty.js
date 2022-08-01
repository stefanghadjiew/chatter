export const isObjectValuesEmpty = obj =>
    Object.values(obj).filter(item => item).length === 0;
