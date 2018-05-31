import AccountService from '../../../services/AccountService'

const accountService = new AccountService();

export default {
    name : 'NavMenu',
    data() {
        return {
            isLogged: false,
        }
    },
    mounted() {
        accountService.isUserLogged()
        .then(res => this.isLogged = true)
        .catch(err => {});
    },
    methods: {
        closeSession() {
            localStorage.clear();
            this.isLogged = false;
            this.$router.push('/');
        },
    }
}