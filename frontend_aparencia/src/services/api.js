import axios from 'axios';

const api = axios.create({
    baseURL: 'https://meu-file-uploader.herokuapp.com',
});

export default api;