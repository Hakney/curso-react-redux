import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8vhzk7MP0ed65Plk7Xvr9LbHloMqtQnEW10jcQwsEH4' 
    }
});