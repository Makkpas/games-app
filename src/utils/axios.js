import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;