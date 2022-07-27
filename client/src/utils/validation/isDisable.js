export const isDisable = (column, row) => (
    (column + 3 - (3 - row % 3)) % 3
);