import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

const serviceWrapper = func => {
    const inner = async data => {
        let result, error;
        try {
            const response = await func(data);
            result = response.data;
        } catch (err) {
            error = err.response.data?.errors;
        } finally {
            return [result, error];
        }
    }
    return inner;
}

export const registerUser = serviceWrapper(async data => await http.post('/users', data, { withCredentials: true }));

export const loginUser = serviceWrapper(async data => http.post("/auth", data, { withCredentials: true }));

export const getLoggedUser = serviceWrapper(async () => await http.get('/auth', { withCredentials: true }));

export const logoutUser = serviceWrapper(async () => await http.delete('/auth', { withCredentials: true }));