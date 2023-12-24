import axios, { AxiosInstance, AxiosResponse } from "axios"

const API_URL = "http://localhost:3000"
export type RequestPayload = {
  method: 'get' | 'post' | 'put' | 'delete',
  endpoint: string,
  data?: Object,
  filter?: Record<string, any>
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
})

// Reponse interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
)

const handleRequest = async<T>(payload: RequestPayload): Promise<T> => {
  try {
    const { method, endpoint, data } = payload;
    const response: AxiosResponse<T> = await axiosInstance[method](endpoint, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
}

export const GET = <T>(endpoint: string, filter?: Record<string, any>): Promise<T> => {
  return handleRequest<T>({ method: 'get', endpoint, data: undefined, filter })
}

export const POST = <T>(endpoint: string, data?: Object): Promise<T> => {
  return handleRequest<T>({ method: 'post', endpoint, data, filter: undefined })
}
