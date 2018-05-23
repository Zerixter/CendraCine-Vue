import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'
import TheaterService from '../../../services/TheaterService'

const urlService = new URLS();
const theaterService = new TheaterService();

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
            this.$router.push('/panel/theaters/edit/' + item.id);
        },
        deleteTheater(item) {
            if (confirm("Estás segur/a de esborrar aquesta sala?"))
            {
                theaterService.deleteTheater(item.id);
                var position = this.theaters.indexOf(item);
                if (position != -1)
                {
                    this.theaters.splice(position, 1);
                }
                return;
            }
        },
    }
}