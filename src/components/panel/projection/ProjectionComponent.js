import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'
import AccountService from '../../../services/AccountService'

const urlService = new URLS();
const accountService = new AccountService();

export default {
    name: 'ProjectionComponent',
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
        },
        editProjection(item) {
            if (item.id != undefined) this.$router.push('/panel/projections/edit/' + item.id);
        },
        createProjection() {
            this.$router.push('/panel/projections/create');
        }
    }
}