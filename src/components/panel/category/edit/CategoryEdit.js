import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../../services/URLS'
import CategoryService from '../../../../services/CategoryService'

const urlService = new URLS();
const categoryService = new CategoryService();

export default {
    name: 'CategoryEdit',
    data() {
        return {
            id: "",
            cateogry: {},
        }
    },
    mounted() {
        this.getCategory();
    },
    methods: {
        getCategory() {
            this.id = this.$route.params.id;
            let url = urlService.CategoryURL + '/' + this.id;
            axios.get(url)
            .then((response) => {
                console.log(response);
                this.cateogry = JSON.parse(JSON.stringify(response.data));
            }).catch(error => {console.log(error)});
        },
        submitForm() {
            var category = {
                Id: this.id,
                Name: this.billboard.name
            };
            categoryService.editCategory(category);
        }
    },
}