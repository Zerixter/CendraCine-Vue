import $ from 'jquery'
import axios from 'axios'
import TheaterService from '../../../../services/TheaterService'
import URLS from '../../../../services/URLS'

const urlService = new URLS();
const theaterService = new TheaterService();

export default {
    name: 'TheaterEdit',
    data() {
        return {
            id: "",
            theater: {},
        }
    },
    mounted() {
        this.getTheater();
    },
    methods: {
        getTheater() {
            this.id = this.$route.params.id;
            let url = urlService.TheaterURL + '/' + this.id;
            axios.get(url)
            .then((response) => {
                this.theater = JSON.parse(JSON.stringify(response.data));
                console.log(response)
            })
            .catch(error => { console.log(error); });
        },
        submitForm() {
            var Seats = [];
            for (var i = 1; i <= this.theater.rowNumbers; i++) {
                for (var j = 1; j <= this.theater.seatNumbers; j++) {
                    Seats.push({
                        SeatNumber: j,
                        RowNumber: i
                    });
                }
            }
            var theater = {
                Id: this.id,
                Number: this.theater.number,
                Capacity: this.theater.capacity,
                RowNumbers: this.theater.rowNumbers,
                SeatNumbers: this.theater.seatNumbers,
                Seats: Seats
            };
            theaterService.editTheater(theater);
        }
    }
}