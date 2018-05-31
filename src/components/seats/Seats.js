import $ from 'jquery'
import axios from 'axios'
import URLS from '../../services/URLS'
import PayPal from 'vue-paypal-checkout'

const urlService = new URLS();

export default {
    name: 'Seats',
    data() {
        return {
            id: "",
            seats: [],
            projection_reservations: [],
            rows: [],
            theater: null,
            seat_selected: false,
            seat: null,
            price: 12 + '',
            paypal: {
                sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
                production: '<insert production client id>'
            }
        }
    },
    components: {
        PayPal
    },
    mounted() {
        this.getSeats();
    },
    methods: {
        getSeats() {
            this.id = this.$route.params.id;
            let url = urlService.ProjectionURL + '/seats/' + this.id;
            axios.get(url)
            .then(res => {
                this.seats = JSON.parse(JSON.stringify(res.data));
                this.getReservations();
            })
            .catch (err => console.log(err));
        },
        getReservations() {
            let url = urlService.ProjectionURL + '/reservations/' + this.id;
            axios.get(url)
            .then(res => {
                this.projection_reservations = JSON.parse(JSON.stringify(res.data));
                this.getOccupedSeats();
            }).catch(err => console.log(err));
        },
        getOccupedSeats() {
            for (var i = 0; i < this.seats.length; i++) {
                if (this.theater == null) this.theater = this.seats[i].theater; 
                if (this.seats[i].reservations.length == 0) continue;
                var reservation = this.seats[i].reservations.filter(x => x.projection.id == this.id)[0];
                if (reservation == undefined) continue;
                this.seats[i].occuped = true;
            }
            this.setSeats();
        },
        setSeats() {
            for (var i = 1; i <= this.theater.rowNumbers; i++) {
                var row = [];
                for (var j = 1; j <= this.theater.seatNumbers; j++) {
                    var seat = this.seats.filter(x => x.rowNumber == i && x.seatNumber == j);
                    if (seat == undefined) continue;
                    row.push(seat[0]);
                }
                this.rows.push(row);
            }
        },
        setSeat(item) {
            if (item != null && item != undefined)
            {
                this.seat_selected = true;
                if (this.seat != null) {
                    this.seat.selected = false;
                }
                this.seat = item;
                this.seat.selected = true;
            }
        },
        paymentAuthorized: function (data) {
        },
        paymentCompleted: function (data) {
            console.log(data);
            if (data.state == "approved")
            {
                var reserva = {
                    Status: true,
                    Price: parseFloat(this.price),
                    Projection: {
                        Id: this.id
                    },
                    Theater : {
                        Id: this.theater.id
                    },
                    Seat: {
                        Id: this.seat.id
                    }
                };
                let url = urlService.ReservationURL; 
                axios.post(url, reserva)
                .then(res => {
                    this.$router.push('/reserves');
                }).catch(err => console.log(err));
            }
        },
        paymentCancelled: function (data) {
        },
    }
}