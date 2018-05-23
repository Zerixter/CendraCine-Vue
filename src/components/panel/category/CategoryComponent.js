import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'

const urlService = new URLS();

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
        editCategory(category) {
            
        },
        deleteCategory(category) {

        },
    }
}