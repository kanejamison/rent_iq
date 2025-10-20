import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchProperties = () => api.get('/properties')

export const fetchProperty = (id) => api.get(`/properties/${id}`)

export const createProperty = (property) => api.post('/properties', property)

export default api
