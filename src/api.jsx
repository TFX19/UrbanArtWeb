import axios from 'axios'

const BASE_URL  = 'https://arteurbanabackend.onrender.com/'

const api = axios.create({
    baseURL: BASE_URL
}) 

export default api;