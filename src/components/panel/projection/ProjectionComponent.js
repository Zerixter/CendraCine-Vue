import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'

const urlService = new URLS();

export default {
    name: 'ProjectionComponent',
    data() {
        return {
            projections: []
        }
    },
    mounted() {
        this.getProjections();
    },
    methods: {
        getProjections() {
            let url = urlService.ProjectionURL;
            console.log(url)
            axios.get(url)
            .then(resp => {
                console.log(resp)
                this.projections = JSON.parse(JSON.stringify(resp.data));
            })
            .catch(
                error => console.log(error)
            );
        },
        getDate(item) {
            var d = new Date(item);
            d.setHours(d.getHours() + 2);
            return d.toISOString();
        }
    }
}