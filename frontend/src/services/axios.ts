import  axios  from "axios"


export const api = axios.create({
    baseURL: 'http://localhost:3100' ?? process.env.API_URL,
    timeout: 10000,
  })