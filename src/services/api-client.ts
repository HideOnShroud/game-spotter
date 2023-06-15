import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7b13f6ef262544a48e75de8bee9810b2'
    }
})