import $ from 'jquery'
import axios from 'axios'
import AccountService from '../../services/AccountService'

export default {
    name : 'LoginComponent',
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
            var login = {
                Email: this.email,
                Password: this.password
            };
            const accountService = new AccountService();
            accountService.login(login).then((response) => {
                localStorage.clear();
                console.log(response.data)
                localStorage.setItem('token', response.data.token);
                window.location.href = "/";
            }).catch(error => { console.log(error); });;
        }
    }
}