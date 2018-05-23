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
    methods: {
        getTheater() {
            this.id = this.$route.params.id;
            let url = theaterService.editTheater();
            axios.get(url)
            .then((response) => {
                this.theater = JSON.parse(JSON.stringify(response.data));
            })
            .catch(error => { console.log(error); });
        },
        submitForm() {
            var theater = {
                Id: this.id,
                Number: this.theater.number,
                Capacity: this.theater.capacity
            };
            theaterService.editTheater(theater);
        }
    }
}