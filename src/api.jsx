import axios from 'axios'

const BASE_URL  = 'https://api.tiagocorreiabor.repl.co'

const api = axios.create({
    baseURL: BASE_URL
}) 

export default api;