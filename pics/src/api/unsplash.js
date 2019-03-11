import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 311ed41dbd2291efb474e3fd25242e31991a3b7f6d8c564205ca691214e80a77'
    }
});