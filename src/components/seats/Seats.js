import $ from 'jquery'
import axios from 'axios'
import URLS from '../../services/URLS'

const urlService = new URLS();

export default {
    name: 'Seats',
    data() {
        return {
            id: "",
            seats: [],
        }
    },
    mounted() {
        this.getSeats();
    },
    methods: {
        getSeats() {
            this.id = this.$route.params.id;
            let url = urlService.ProjectionURL + 'seats/' + this.id;
            axios.get(url)
            .then(res => {
                console.log(res);
                this.seats = JSON.parse(JSON.stringify(res.data));
            })
            .catch (err => console.log(err));
        }
    }
}