import $ from 'jquery'
import axios from 'axios'
import URLS from './URLS';

let urlService = new URLS();

export default class AccountService {
    login(login) {
        let url = urlService.LoginURL;
        return axios.post(url, login)
    }
    register(register) {
        let url = urlService.RegisterURL;
        return axios.post(url, register);
    }
    createHeaders() {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
    }
    getRoleAdmin() {
        let url = urlService.baseURL + 'account/role';
        this.createHeaders();
        return axios.get(url);
    }
    isUserLogged() {
        let url = urlService.baseURL + 'account';
        this.createHeaders();
        return axios.get(url);
    }
}