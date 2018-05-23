import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'
import MovieService from '../../../services/MovieService'

const urlService = new URLS();
const movieService = new MovieService();

export default {
    name: 'MovieComponent',
    data() {
        return {
            movies: [],
        }
    },
    mounted() {
        this.getMovies();
    },
    methods: {
        getMovies() {
            let url = 'http://localhost:5000/api/movie';
            axios.get(url).then((response) => {
                this.movies = JSON.parse(JSON.stringify(response.data));
                console.log(response);
            }).catch(error => { console.log(error); });
        },
        editMovie(item) {
            this.$router.push('/panel/movies/edit/' + item.id);
        },
        deleteMovie(item) {
            if (confirm("Estás segur/a de esborrar aquesta película?"))
            {
                movieService.deleteMovie(item.id);
                var position = this.movies.indexOf(item);
                if (position != -1)
                {
                    this.movies.splice(position, 1);
                }
                return;
            }
        }
    }
}