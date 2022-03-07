import axios from 'axios'
import getUser from './auth.service'

const api = axios.create({
    baseURL: 'http:/localhost:5000/api/v1'
})

api.interceptors.request.use(async config => {

    if (!config.headers.Authorization) {
        const loggedUser = getUser()

        if (loggedUser) {
            config.headers.Authorization = `Bearer ${loggedUser.token}`
        }
    }

    return config
})

export default api