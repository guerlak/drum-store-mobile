import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.jsonbin.io/b/5e67121dff85de370f672ccd',
});

export default api;
