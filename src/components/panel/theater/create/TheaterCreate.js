import TheaterService from '../../../../services/TheaterService'
import AccountService from '../../../../services/AccountService'

const theaterService = new TheaterService();
const accountService = new AccountService();

export default {
    name: 'TheaterCreate',
    beforeCreate() {
        accountService.getRoleAdmin()
        .then(res => {
            if (res.data == 'Admin') return;
            else this.$router.push('/');
        }).catch(err => {
            this.$router.push('/login');
        });
    },
    data() {
        return {
            number: 0,
            capacity: 0,
            seats: 0,
            rows: 0,
        }
    },
    methods: {
        submitForm() {
            var Seats = [];
            for (var i = 1; i <= this.rows; i++) {
                for (var j = 1; j <= this.seats; j++) {
                    Seats.push({
                        SeatNumber: j,
                        RowNumber: i
                    });
                }
            }
            var theater = {
                Number: this.number,
                Capacity: this.capacity,
                Seats: Seats,
                RowNumbers: this.rows,
                SeatNumbers: this.seats
            };
            theaterService.createTheater(theater);
        },
    },
}