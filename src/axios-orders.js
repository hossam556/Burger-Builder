import axios from 'axios';

const instance = axios.create({
    baseURL :"https://react-my-burger-e6ef7.firebaseio.com/"
});

export default instance ; 