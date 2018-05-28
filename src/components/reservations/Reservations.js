import $ from 'jquery'
import axios from 'axios'
import URLS from '../../services/URLS'
import AccountService from '../../services/AccountService'

const accountService = new AccountService();
const urlService = new URLS();

export default {
    name: 'Reservations',
    data() {
        return {
            reservations: []
        }
    },
    mounted() {
        this.getReservations();
    },
    methods: {
        getReservations() {
            let url = urlService.ReservationURL;
            accountService.createHeaders();
            axios.get(url)
            .then(res => {
                console.log(res);
                this.reservations = JSON.parse(JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
        }
    }
}