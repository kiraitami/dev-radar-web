import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dev-radar-omnistack-week.herokuapp.com'
});

export default api;