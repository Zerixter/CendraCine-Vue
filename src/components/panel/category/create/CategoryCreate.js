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
            categoryService.addCategory(category)
            .then(res => {
                this.$router.push('/panel/categories');
            })
            .catch(err => {
                this.$notify({
                    group: 'error_create',
                    title: 'Error',
                    text: "S'ha produit un error al intentar crear una categoria"
                });
            });
        }
    }
}