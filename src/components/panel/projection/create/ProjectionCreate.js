import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../../services/URLS'
import { Datetime } from 'vue-datetime';
import { Settings } from 'luxon'

Settings.defaultLocale = 'es'

const urlService = new URLS();

export default {
    name: 'ProjectionCreate',
    components: { 
        datetime: Datetime,
    },
    data() {
        return {
            date: null,
            movies: [],
            theaters: [],
            theaters_select: [],
            movies_select: [],
            projectionDate: "",
            movie: null,
            theater: null,
        }
    },
    mounted() {
        this.getMovies();
        this.getTheaters();
    },
    methods: {
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
            try {
                let d = new Date(this.date);
                d.setHours(d.getHours() + 2);
                let date = d.toISOString();
                let url = urlService.ProjectionURL;
                var movie = this.movies.filter(x => x.id == this.movie.value)[0];
                var theater = this.theaters.filter(x => x.id == this.theater.value)[0];
                var projection = {
                    ProjectionDate: date,
                    Movie: movie,
                    Theater: theater
                };
                console.log(projection)
                axios.post(url, projection)
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err));
            } catch (err) {
                console.log(err)
            }
        }
    }
}