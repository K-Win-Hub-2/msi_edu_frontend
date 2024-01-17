export const getShortMonth = (date) => {
    let cast = date ?? new Date();
    return cast.toLocaleString("default", {month: 'short'})
}

export const getDay = (date) => {
    let cast = date ?? new Date();
    return cast.getDay()
}