import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../../services/URLS'
import CategoryService from '../../../../services/CategoryService'
import AccountService from '../../../../services/AccountService'

const accountService = new AccountService();
const urlService = new URLS();
const categoryService = new CategoryService();

export default {
    name: 'CategoryEdit',
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
            id: "",
            category: {},
        }
    },
    mounted() {
        this.getCategory();
    },
    methods: {
        getCategory() {
            this.id = this.$route.params.id;
            categoryService.getCategory(this.id)
            .then((response) => {
                this.category = JSON.parse(JSON.stringify(response.data));
            }).catch(error => {
                this.$notify({
                    group: 'error_get_category',
                    title: 'Title',
                    text: "S'ha produit un error al intentar obtenir la categoria"
                })
            });
        },
        submitForm() {
            var category = {
                Id: this.category.id,
                Name: this.category.name
            };
            categoryService.editCategory(category)
            .then(res => {
                this.$router.push('/panel/categories');
            })
            .catch(err => {
                this.$notify({
                    group: 'error_edit',
                    title: 'Error',
                    text: "S'ha produit un error al intentar editar la categoria"
                });
            });
        }
    },
}