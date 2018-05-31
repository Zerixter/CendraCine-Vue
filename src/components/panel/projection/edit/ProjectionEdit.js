import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../../services/URLS'
import { Datetime } from 'vue-datetime'
import { Settings } from 'luxon'
import AccountService from '../../../../services/AccountService'

Settings.defaultLocale = 'es'

const urlService = new URLS();
const accountService = new AccountService();

export default {
    name: 'ProjectionEdit',
    data() {
        return {
            id: "",
            projection: {},
            date: "",
            theaters: [],
            movies: [],
            movies_select: [],
            theaters_select: [],
            movie: null,
            theater: null,
        }
    },
    components: { 
        datetime: Datetime,
    },
    mounted() {
        this.getProjection();
    },
    methods: {
        getProjection() {
            this.id = this.$route.params.id;
            let url = urlService.ProjectionURL + '/' + this.id;
            axios.get(url)
            .then(res => {
                this.movie = {
                    label: res.data.movie.name,
                    value: res.data.movie.id
                }
                this.theater = {
                    label: 'Sala de cine numero ' + res.data.theater.number,
                    value: res.data.theater.id
                }
                this.projection = JSON.parse(JSON.stringify(res.data));
                this.getMovies();
            }).catch(err => console.log(err));
        },
        getMovies() {
            let url = urlService.MovieURL;
            axios.get(url)
            .then(res => {
                this.movies = JSON.parse(JSON.stringify(res.data));
                for (var i = 0; i < this.movies.length; i++) {
                    this.movies_select.push({
                        label: this.movies[i].name,
                        value: '' + this.movies[i].id
                    });
                }
                this.getTheaters();
            }).catch(err => console.log(err));
        },
        getTheaters() {
            let url = urlService.TheaterURL;
            axios.get(url)
            .then(res => {
                this.theaters = JSON.parse(JSON.stringify(res.data));
                for (var i = 0; i < this.theaters.length; i++) {
                    this.theaters_select.push({
                        label: 'Sala de cine numero ' + this.theaters[i].number,
                        value: '' + this.theaters[i].id
                    });
                }
            })
            .catch(err => console.log(err));
        },
        submitForm() {
            let url = urlService.ProjectionURL;
            var projection = {
                Id: this.id,
                ProjectionDate: this.projection.ProjectionDate,
                Movie: this.movie,
                Theater: this.theater
            };

            axios.put(url, projection)
            .then(res => {
                this.$router.push('/panel/projections');
            }).catch(err => {
                this.$notify({
                    group: 'error_edit',
                    title: 'Error',
                    text: "S'ha produit un error al intentar editar la projecció"
                });
            });
        }
    }
}