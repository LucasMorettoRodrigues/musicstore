const getUser = () => {
    const userStr = localStorage.getItem('user')
    if (userStr) return JSON.parse(userStr)
    return null
}

const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    window.location.reload()
}

module.exports = {
    getUser,
    logout
}
