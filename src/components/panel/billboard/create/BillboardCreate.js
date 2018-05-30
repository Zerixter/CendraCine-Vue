import $ from 'jquery'
import axios from 'axios'
import BillboardService from '../../../../services/BillboardService'
import MovieService from '../../../../services/MovieService'
import AccountService from '../../../../services/AccountService'
import URLS from '../../../../services/URLS'

const accountService = new AccountService();
const urlService = new URLS();
const billboardService = new BillboardService();
const movieService = new MovieService();

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
            movieService.getMovies()
            .then((response) => {
                this.movies = JSON.parse(JSON.stringify(response.data));
                for (var i = 0; i < this.movies.length; i++) {
                    this.movies_select.push({
                        label: this.movies[i].name,
                        value: this.movies[i].id
                    });
                }
            }).catch(error => {
                this.$notify({
                    group: 'error_get_movie',
                    title: 'Error',
                    text: "S'ha produit un error al intentar obtenir les películes"
                })
            });
        },
        addMovie() {
            let id = this.movie.value;
            let m = this.movies.filter(x => x.id == id)[0];
            var cm = this.chosen_movies.filter(x => x.id == m.id)[0];
            if (cm == undefined) this.chosen_movies.push(m);
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
            billboardService.createBillboard(billboard)       
            .then((response) => {
                this.$router.push('/panel/billboards');
            }).catch(error => {
                this.$notify({
                    group: 'error_create',
                    title: 'Error',
                    text: "S'ha produit un error al intentar crear la cartellera"
                });
            });
        },
    }
}