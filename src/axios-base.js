import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://utilities-manager.firebaseio.com'
});

export default instance;