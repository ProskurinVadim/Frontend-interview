export const formatData = (data) => data.map(elem => ({
    ...elem,
    label:elem.name,
}))

export const formatPersentor = ({ name = "", description = "", _id = "" }) => ({ name, description, _id })

