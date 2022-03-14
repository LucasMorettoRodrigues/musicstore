import axios from 'axios'
import { getUser } from './auth.service'

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

const api = axios.create()

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