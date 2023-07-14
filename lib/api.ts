import axios, {AxiosResponse} from 'axios';
import {ProductResponse} from './types';

export type AxiosConfig = {baseURL: string | undefined; headers?: {}};

const apiUrl = 'https://dummyjson.com';

const axiosObj: AxiosConfig = {
  baseURL: apiUrl,
  headers: {},
};

const instance = axios.create(axiosObj);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: async (url: string) => instance.get(url).then(responseBody),
  // post: async (url: string, body?: {}) => instance.post(url, body).then(responseBody),
  // put: async (url: string, body: {}) => instance.put(url, body).then(responseBody),
  // delete: async (url: string) => instance.delete(url).then(responseBody),
};

export const api = {
  products: {
    list: (): Promise<{limit: number; products: Array<ProductResponse>}> =>
      requests.get('/products'),
    listCategories: (): Promise<Array<string>> =>
      requests.get('/products/categories'),
  },
};
