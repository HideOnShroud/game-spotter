import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
    count: number
    next: string | null
    results: T[]
}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7b13f6ef262544a48e75de8bee9810b2'
    }
})

class APIClient<T>{
    endpoint: string
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
    }
}

export default APIClient