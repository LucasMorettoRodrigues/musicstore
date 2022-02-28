const getUser = () => {
    const userStr = localStorage.getUItem('user')
    if (userStr) return JSON.parse(userStr)
    return null
}

export default getUser