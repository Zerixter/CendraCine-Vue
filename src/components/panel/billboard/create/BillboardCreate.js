import $ from 'jquery'
import axios from 'axios'
import BillboardService from '../../../../services/BillboardService'
import URLS from '../../../../services/URLS'

const urlService = new URLS();
const billboardService = new BillboardService();

export default {
    name: 'BillboardCreate',
    data() {
        return {
            name: "",
            beginDate: "",
            endDate: "",
            movies: [],
            chosen_movies: [],
        }
    },
    mounted() {
        this.getMovies();
    },
    methods: {
        getMovies() {
            let url = urlService.MovieURL;
            axios.get(url)
            .then((response) => {
                this.movies = JSON.parse(JSON.stringify(response.data));
            }).catch(error => {console.log(error)});
        },
        addMovie() {
            var select = document.getElementById('select-movie');
            var value = select[select.selectedIndex].value;
            var movie = this.movies.filter(function(obj) {
                return obj.name == value;
            });
            if (movie.length == 0) {
                alert("Error");
                return;
            }
            var is_it_already_in_the_array = this.chosen_movies.filter(function(obj) {
                return obj.name == value;
            });
            if (is_it_already_in_the_array.length > 0)
            {
                alert("Error");
                return;
            }
            this.chosen_movies.push(JSON.parse(JSON.stringify(movie[0])));
        },
        removeMovie(item) {
            var position = this.chosen_movies.indexOf(item);
            if (position != -1)
            {
                this.chosen_movies.splice(position, 1);
            }
        },
        submitForm() {
            var billboard = {
                Name: this.name,
                BeginDate: this.beginDate,
                EndDate: this.endDate,
                Movies: this.chosen_movies
            };
            billboardService.createBillboard(billboard);
        },
    }
}