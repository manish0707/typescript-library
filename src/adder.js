const addArray = arr => {
    return arr.reduce((total, item) => {
        return total + item
    })
}

module.exports = {
    addArray
}