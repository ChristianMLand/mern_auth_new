import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

http.defaults.withCredentials = true;

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

export const registerUser = serviceWrapper(
    async data => await http.post('/users', data)
);

export const loginUser = serviceWrapper(
    async data => http.post("/auth", data)
);

export const getLoggedUser = serviceWrapper(
    async () => await http.get('/auth')
);

export const logoutUser = serviceWrapper(
    async () => await http.delete('/auth')
);

//TODO maybe refactor to use a single useService hook, where the service name and data are passed as args