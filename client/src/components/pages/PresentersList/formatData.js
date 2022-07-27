export const formatData = (data) => {
    let newArr = [];
    console.log(data)
    data.forEach(person =>
        newArr = person.tables.filter(elem => elem !== "Disable" && elem !== "Empty")
            .map(elem => ({ ...elem, avatar: { name: person.name, src: person.src } }))
    )
    return newArr
};
