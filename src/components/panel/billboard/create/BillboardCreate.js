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
            movie: null,
            movies_select: []
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
                for (var i = 0; i < this.movies.length; i++) {
                    this.movies_select.push({
                        label: this.movies[i].name,
                        value: this.movies[i].id
                    });
                }
            }).catch(error => {console.log(error)});
        },
        addMovie() {
            var movie = this.movies.filter(x => x.id == this.movie.value);
            this.chosen_movies.push(movie[0]);
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