import axios from 'axios';
import store from '.store/store';

export default () => {
    return axios.create({
        baseURL: store.state.baseUrl,
        timeout: 1000,
    });
};