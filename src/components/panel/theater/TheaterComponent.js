import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'

const urlService = new URLS();

export default {
    name: 'TheaterComponent',
    data() {
        return {
            theaters: [],
        }
    },
    mounted() {
        this.getTheaters();
    },
    methods: {
        getTheaters() {
            let url = urlService.TheaterURL;
            axios.get(url)
            .then((response) => {
                this.theaters = JSON.parse(JSON.stringify(response.data));
            }).catch(error => {console.log(error)});
        },
        editTheater(item) {
            
        },
        deleteTheater(item) {

        },
    }
}