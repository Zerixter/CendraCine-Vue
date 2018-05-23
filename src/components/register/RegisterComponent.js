import AccountService from '../../services/AccountService'

const accountService = new AccountService();

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
            accountService.register(register);
        }
    }
}