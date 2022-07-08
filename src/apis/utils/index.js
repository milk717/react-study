import axios from 'axios';

const BASE_URL = 'https://milk717.github.io/web';

export default axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
});