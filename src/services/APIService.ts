import axios, { Method } from 'axios'


const client = axios.create({
    baseURL: 'https://localhost:5001/api/users',
    responseType: 'json'
    //, withCredentials: true
})

export default {
    async execute(method: Method, resource: string, data?: any) {
        return client({
            method,
            url: resource,
            data
        }).then(req => {
            return req.data
        })
    },
    async getAll(): Promise<User[]> {
        return await this.execute('get', '/')
    },
    async getById(id: number): Promise<User> {
        return await this.execute('get', `/${id}`)
    },
    async create(data: any) {
        return await this.execute('post', '/', data)
    },
    async update(id: number, data: any) {
        return await this.execute('put', `/${id}`, data)
    }
}
