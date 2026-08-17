import axios from 'axios'

// configuracao de projeto global a partir do endpoint da api
const blogFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type':'application/json',
    },
});

export default blogFetch;