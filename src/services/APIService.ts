import axios, { Method } from 'axios'

const client = axios.create({
  baseURL: 'https://localhost:5001/api/',
  responseType: 'json',
})

const formatQueryParams = (params: any) => {
  const search = new URLSearchParams(params)
  return search
}

const encodeData = (data: any): string => {
  return Object.keys(data).map((key) => {
    return [key, data[key]].map(encodeURIComponent).join('=')
  }).join('&')
}

export default {
  async execute(method: Method, endpoint: string, resource: string, data?: any) {
    return client({
      method,
      url: `${endpoint}/${resource}`,
      data,
    }).then(req => req.data)
  },
  async getAll(endpoint: string): Promise<any[]> {
    return await this.execute('get', endpoint, '')
  },
  async getById(endpoint: string, id: number): Promise<any> {
    return await this.execute('get', endpoint, `${id}`)
  },
  async getByQuery(endpoint: string, query: string): Promise<any> {
    return await this.execute('get', endpoint, `${query}`)
  },
  async create(endpoint: string, data: any) {
    return await this.execute('post', endpoint, '', data)
  },
  async update(endpoint: string, id: number, data: any) {
    return await this.execute('put', endpoint, `${id}`, data)
  },
}
