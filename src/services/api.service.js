import axios from 'axios'
import { getUser } from './auth.service'

axios.defaults.baseURL = 'https://musicstore-api-production.up.railway.app/api/v1';

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
