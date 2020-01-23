import axios from 'axios';

const fetcher = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
});

export default fetcher;