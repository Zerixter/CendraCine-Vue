import $ from 'jquery'
import axios from 'axios'
import URLS from '../../services/URLS'

const urlService = new URLS();

export default {
    name: 'Billboard',
    data() {
        return {
            bbmr: [],
        }
    },
    mounted() {
        this.getMovies();
    },
    methods: {
        getMovies() {
            let url = urlService.BillboardURL + '/actual';
            axios.get(url).then((response) => {
                console.log(response.data);
                this.bbmr = JSON.parse(JSON.stringify(response.data.billboardMovieRegister));
            }).catch(error => { console.log(error); });
        },
        reservar(item) {
            this.$router.push('/reserva/' + item.movie.id);
        }
    }
}