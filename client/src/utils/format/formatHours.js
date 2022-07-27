export const formatHours = (hours) => (
    isNaN(+hours) ? false : hours < 10 ? "0" + hours + ":00" : hours + ":00"
)
