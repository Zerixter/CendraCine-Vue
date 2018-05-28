import AccountService from '../../services/AccountService'
import URLS from '../../services/URLS'

const accountService = new AccountService();
const urlService = new URLS();

export default {
    name: 'Panel',
    beforeCreate() {
        accountService.getRoleAdmin()
        .then(res => {
            if (res.data == 'Admin') return;
            else this.$router.push('/');
        }).catch(err => {
            this.$router.push('/login');
        });
    }
}