import $ from 'jquery'
import axios from 'axios'
import URLS from '../../services/URLS'
import moment from 'moment'
const urlService = new URLS();

export default {
    name: 'Reservation',
    data() {
        return {
            id: "",
            movie: {},
            billboard: {},
            projections: [],
            projections_select: [],
            projection: "Tria una data de projecció per realitzar la reserva",
            trailer: null,
        }
    },
    mounted() {
        this.getMovies();
    },
    methods: {
        getMovies() {
            let url = urlService.BillboardURL + '/actual';
            axios.get(url).then((response) => {
                this.billboard = JSON.parse(JSON.stringify(response.data));
                this.getMovie();
            }).catch(error => { console.log(error); });
        },
        getMovie() {
            this.id = this.$route.params.id;
            let url = urlService.MovieURL + '/' + this.id;
            axios.get(url)
            .then(res => {
                this.movie = JSON.parse(JSON.stringify(res.data));
                let embed = this.movie.trailer;
                this.trailer = embed.replace('watch?v=', 'embed/');
                this.getProjections() 
            }).catch(err => console.log(err));
        },
        getProjections() {
            let url = urlService.ProjectionURL + '/movie';
            var ProjectionMovie = {
                BeginDate: this.billboard.beginDate,
                EndDate: this.billboard.endDate,
                Movie: this.movie
            }
            axios.post(url, ProjectionMovie)
            .then(res => {
                this.projections = JSON.parse(JSON.stringify(res.data));
                for (var i = 0; i < this.projections.length; i++) {
                    this.projections_select.push({
                        label: moment(this.projections[i].projectionDate).format('MM/DD/YYYY HH:mm'),
                        value: this.projections[i].id
                    });
                }
            }).catch(err => console.log(err));
        },
        makeReservation() {
            if (this.projection == "Tria una data de projecció per realitzar la reserva" || this.projection == null) return;
            let id = this.projection.id;
            this.$router.push('/seients/' + id);
        }
    }
}