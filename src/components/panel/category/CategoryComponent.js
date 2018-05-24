import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'
import CategoryService from '../../../services/CategoryService'

const urlService = new URLS();
const categoryService = new CategoryService();

export default {
    name: 'CategoryComponent',
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
            this.$router.push('/panel/category/edit/' + item.id);
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
    }
}