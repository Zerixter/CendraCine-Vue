import $ from 'jquery'
import axios from 'axios'
import BillboardService from '../../../../services/BillboardService'
import URLS from '../../../../services/URLS'
import AccountService from '../../../../services/AccountService'

const accountService = new AccountService();
const urlService = new URLS();
const billboardService = new BillboardService();

export default {
    name: 'BillboardCreate',
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
                console.log(response)
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
            var Movie = {
                id: movie[0].id,
                name: movie[0].name
            };
            this.chosen_movies.push(Movie);
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
            console.log(billboard);
            billboardService.createBillboard(billboard);
        },
    }
}