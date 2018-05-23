import TheaterService from '../../../../services/TheaterService'

const theaterService = new TheaterService();

export default {
    name: 'TheaterCreate',
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
                Seats: Seats
            };
            theaterService.createTheater(theater);
        },
    },
}