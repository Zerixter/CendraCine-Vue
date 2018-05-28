import CategoryService from '../../../../services/CategoryService'
import AccountService from '../../../../services/AccountService'

const categoryService = new CategoryService();
const accountService = new AccountService();

export default {
    name : 'CategoryCreate',
    beforeCreate() {
        accountService.getRoleAdmin()
        .then(res => {
            if (res.data == 'Admin') return;
            else this.$router.push('/');
        }).catch(err => {
            this.$router.push('/login');
        });
    },
    data() {
        return {
            name: "",
        }
    },
    methods: {
        submitForm() {
            var category = {
                Name: this.name
            }
            categoryService.addCategory(category);
        }
    }
}