import $ from 'jquery'
import URLS from '../../../services/URLS'
import MovieService from '../../../services/MovieService'
import AccountService from '../../../services/AccountService'

const accountService = new AccountService();
const urlService = new URLS();
const movieService = new MovieService();

export default {
    name: 'MovieComponent',
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
            movies: [],
        }
    },
    mounted() {
        this.getMovies();
    },
    methods: {
        createMovie() {
            this.$router.push('/panel/movies/create');
        },
        getMovies() {
            movieService.getMovies().then((response) => {
                this.movies = JSON.parse(JSON.stringify(response.data));
            }).catch(error => {
                this.$notify({
                    group: 'error_get',
                    title: 'Error',
                    text: "S'ha produit un error al intentar obtenir les pelicules"
                });
            });
        },
        editMovie(item) {
            this.$router.push('/panel/movies/edit/' + item.id);
        },
        deleteMovie(item) {
            if (confirm("Estás segur/a de esborrar aquesta película?"))
            {
                movieService.deleteMovie(item.id)
                .then((response) => {
                    var position = this.movies.indexOf(item);
                    if (position != -1) this.movies.splice(position, 1);
                }).catch(error => {         
                    this.$notify({
                        group: 'error_delete',
                        title: 'Error',
                        text: "S'ha produit un error al intentar esborrar aquesta película"
                    });
                });;
            }
        },
        createMovie() {
            this.$router.push('/panel/movies/create');
        }
    }
}