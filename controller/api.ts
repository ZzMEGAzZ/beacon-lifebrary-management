import axios, { AxiosRequestConfig } from 'axios';
require('dotenv').config();

function getRequestConfig(method: string, url: string, data?: any, token: string | null = ''): AxiosRequestConfig {
    const headers: { [key: string]: string } = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    };
    
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return {
        method,
        url: `${process.env.REACT_APP_PUBLIC_API}${url}`,
        headers,
        data,
    };
}

async function sendRequest(config: AxiosRequestConfig) {
    try {
        const response = await axios(config);
        return JSON.stringify(response.data);
    } catch (error) {
        throw error;
    }
}

export async function get(url: string, params?: any, token: string | null = '') {
    let queryParams = '';
    if (params) {
        const nonEmptyParams = Object.entries(params)
            .filter(([_, value]) => value !== null && value !== undefined && value !== '')
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map(item => `${key}=${item}`).join('&');
                } else {
                    return `${key}=${value}`;
                }
            });
        queryParams = nonEmptyParams.join('&');
    }
    const fullUrl = queryParams ? `${url}?${queryParams}` : url;
    const config = getRequestConfig('get', fullUrl, undefined, token);
    return sendRequest(config);
}

export async function post(url: string, data?: any, token: string | null = '') {
    const config = getRequestConfig('post', url, data, token);
    return sendRequest(config);
}

export async function postForm(url: string, data?: any, token: string | null = '') {
    const formData = new FormData();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            formData.append(key, data[key]);
        }
    }
    const config = getRequestConfig('post', url, formData, token);
    if (!config.headers) {
        config.headers = {}; // Initialize headers as an empty object if it's undefined
    }
    config.headers['Content-Type'] = 'multipart/form-data';
    return sendRequest(config);
}

export async function deleteRequest(url: string, data?: any, token: string | null = '') {
    const config = getRequestConfig('delete', url, data, token);
    return sendRequest(config);
}

export async function put(url: string, data?: any, token: string | null = '') {
    const config = getRequestConfig('put', url, data, token);
    return sendRequest(config);
}

