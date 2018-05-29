import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'
import CategoryService from '../../../services/CategoryService'
import AccountService from '../../../services/AccountService'

const accountService = new AccountService();
const urlService = new URLS();
const categoryService = new CategoryService();

export default {
    name: 'CategoryComponent',
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
            categories: [],
        }
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            let url = urlService.CategoryURL;
            axios.get(url)
            .then((response) => {
                this.categories = JSON.parse(JSON.stringify(response.data));
            }).catch(error => {console.log(error)});
        },
        editCategory(item) {
            this.$router.push('/panel/categories/edit/' + item.id);
        },
        deleteCategory(item) {
            if (confirm("Estàs segur/a de esborrar aquesta categoria?"))
            {
                categoryService.deleteCategory(item.id);
                var position = this.categories.indexOf(item);
                if (position != -1)
                {
                    this.categories.splice(position, 1);
                }
            }
        },
        createCategory() {
            this.$router.push('/panel/categories/create');
        }
    }
}