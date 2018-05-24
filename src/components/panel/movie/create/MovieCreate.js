import $ from 'jquery'
import axios from 'axios'
import MovieService from '../../../../services/MovieService'
import URLS from '../../../../services/URLS'

const urlService = new URLS();

export default {
    name: 'MovieCreate',
    data() {
        return {
            categories: [],
            chosen_categories: [],
            name: "",
            trailer: "",
            age: 0,
            cover: "",
            synopsis: "",
        }
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            console.log("token")
            console.log(localStorage.token)
            let url = urlService.CategoryURL;
            axios.get(url).then((response) => {
                console.log(response)
                this.categories = JSON.parse(JSON.stringify(response.data));
            }).catch(error => { console.log(error); });
            console.log(this.categories)
        },
        addCategory() {
            var select = document.getElementById('select-category');
            var value = select[select.selectedIndex].value;
            var category = this.categories.filter(function(obj) {
                return obj.name == value;
            });
            if (category.length == 0) {
                alert("Error");
                return;
            }
            var is_it_already_in_the_array = this.chosen_categories.filter(function(obj) {
                return obj.name == value;
            });
            if (is_it_already_in_the_array.length > 0)
            {
                alert("Error");
                return;
            }
            this.chosen_categories.push(JSON.parse(JSON.stringify(category[0])));
        },
        removeCategory(category) {
            var position = this.chosen_categories.indexOf(category);
            if (position != -1)
            {
                this.chosen_categories.splice(position, 1);
            }
        },
        submitForm() {
            var movie = {
                Name: this.name,
                Trailer: this.trailer,
                RecommendedAge: this.age,
                Cover: this.cover,
                Synopsis: this.synopsis,
                Categories: this.chosen_categories
            };
            const movieService = new MovieService();
            movieService.createMovie(movie);
        },
    }
}