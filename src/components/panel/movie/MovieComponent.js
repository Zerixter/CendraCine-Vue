import $ from 'jquery'
import axios from 'axios'

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
                alert("deleted");
                return;
            }
            alert("not deleted")
        }
    }
}