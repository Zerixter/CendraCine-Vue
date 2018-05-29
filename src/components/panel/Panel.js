import AccountService from '../../services/AccountService'
import URLS from '../../services/URLS'

const accountService = new AccountService();
const urlService = new URLS();

export default {
    name: 'Panel',
    data(){
        return {
        }
    },
    beforeCreate() {
        accountService.getRoleAdmin()
        .then(res => {
            if (res.data == 'Admin') return;
            else this.$router.push('/');
        }).catch(err => {
            this.$router.push('/login');
        });
    },
    methods:{
        createMovie() {
            this.$router.push('/panel');
        }
    }
}