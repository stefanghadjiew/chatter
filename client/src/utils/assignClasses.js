export const assignClasses = classes => {
    if (!classes) return;
    if (typeof classes === 'string') {
        return classes;
    } else {
        return [...classes].join(' ');
    }
};
