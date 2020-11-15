import { getCookie } from "./app.utils";

/**
     * Adicionar o Auth do authorization
     * 
     * @param {AxiosRequestConfig} request request de um interceptor
     */
export const addAuthToken = (request) => {
    const token = getCookie('token');

    if (token) {
        request.headers = {
            ...request.headers,
            Authorization: `${token}`
        }
    }

    return request;
}