import $ from 'jquery'
import axios from 'axios'

export default {
    name : 'RegisterComponent',
    data() {
        return {
            name: "",
            email: "",
            password: "",
        }
    },
    methods: {
        register() {
            var register = {
                Name: this.name,
                Email: this.email,
                Password: this.password
            };
            let url = 'http://localhost:5000/api/account/register';
            axios.post(url, register).then((response) => {
                let token = response.data;
                localStorage.token = token;
            }).catch(error => { console.log(error); });
        }
    }
}