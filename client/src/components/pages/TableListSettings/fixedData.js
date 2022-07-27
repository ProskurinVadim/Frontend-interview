export const formatData = (data) => data.map(elem => ({
    ...elem,
    aditional_label: "Price: " + elem.price
}))