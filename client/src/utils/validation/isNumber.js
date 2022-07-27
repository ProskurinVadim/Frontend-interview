export const isNumber = (str) => (
    !isNaN(str) && +str !== 0
);