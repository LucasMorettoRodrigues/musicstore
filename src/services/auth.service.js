const getUser = () => {
    const userStr = localStorage.getItem('user')
    if (userStr) return JSON.parse(userStr)
    return null
}

const logout = () => {
    localStorage.removeItem('user')
}

module.exports = {
    getUser,
    logout
}
