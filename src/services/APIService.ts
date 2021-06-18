import axios, { Method } from 'axios'


const client = axios.create({
    baseURL: 'https://localhost:5001/api/',
    responseType: 'json'
    //, withCredentials: true
})

export default {
    async execute(method: Method, endpoint: string, resource: string,  data?: any) {
        return client({
            method,
            url: endpoint + '/' + resource,
            data
        }).then((req: any) => req.data)
    },
    async getAll(endpoint: string): Promise<any[]> {
        return await this.execute('get', endpoint, '')
    },
    async getById(endpoint:string, id: number): Promise<any> {
        return await this.execute('get', endpoint, `${id}`)
    },
    async getByQuery(endpoint:string , query: string): Promise<any> {
        return await this.execute('get', endpoint, `${query}`)
    },
    async create(endpoint:string, data: any) {
        return await this.execute('post',endpoint, '', data)
    },
    async update(endpoint:string, id: number, data: any) {
        return await this.execute('put',endpoint, `${id}`, data)
    }
}
