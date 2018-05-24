import $ from 'jquery'
import axios from 'axios'
import URLS from '../services/URLS';

let urlService = new URLS();

export default class AccountService {
    login(login) {
        let url = urlService.LoginURL;
        axios.post(url, login).then((response) => {
                localStorage.clear();
                let token = response.data;
                localStorage.token = token;
                //this.$emit("authenticated", true);
                console.log(token);
        }).catch(error => { console.log(error); });
    }
    register(register) {
        let url = urlService.RegisterURL;
        axios.post(url, register).then((response) => {
            localStorage.clear();
            let token = response.data;
            localStorage.token = token;
            //this.$emit("authenticated", true);
            console.log(token);
        }).catch(error => { console.log(error); });
    }
    createHeaders() {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
    }
}