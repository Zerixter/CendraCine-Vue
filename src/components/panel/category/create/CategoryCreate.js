import CategoryService from '../../../../services/CategoryService'

const categoryService = new CategoryService();

export default {
    name : 'CategoryCreate',
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