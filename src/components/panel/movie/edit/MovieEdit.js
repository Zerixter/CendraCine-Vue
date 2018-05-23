import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../../services/URLS'
import MovieService from '../../../../services/MovieService'

const movieService = new MovieService();
const urlService = new URLS();

export default {
    name: 'MovieEdit',
    data() {
        return {
            id: "",
            categories: [],
            chosen_categories: [],
            movie: {},
        }
    },
    mounted() {
        this.getMovie();
        this.getCategories();
    },
    methods: {
        getMovie() {
            this.id = this.$route.params.id;
            // Per alguna rao si no faig el get en el mateix component en comptes de en el service no funciona bé (cosas de javascript)
            let url = urlService.MovieURL + '/' + this.id;
            axios.get(url)
            .then((response) => {
                console.log(response);
                this.movie = JSON.parse(JSON.stringify(response.data))
                this.chosen_categories = this.movie.categories;
            })
            .catch(error => { console.log(error); });
        },
        getCategories() {
            let url = urlService.CategoryURL;
            axios.get(url).then((response) => {
                this.categories = JSON.parse(JSON.stringify(response.data));
            }).catch(error => { console.log(error); });
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
                Id: this.id,
                Name: this.movie.name,
                Synopsis: this.movie.synopsis,
                Trailer: this.movie.trailer,
                RecommendedAge: this.movie.recommendedAge,
                Cover: this.movie.cover,
                Categories: this.chosen_categories
            };
            movieService.editMovie(movie);
        }
    }
}