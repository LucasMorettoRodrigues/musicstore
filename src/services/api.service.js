import axios from 'axios'
import { getUser } from './auth.service'

axios.defaults.baseURL = 'https://ts-music-store-api.herokuapp.com/api/v1';

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