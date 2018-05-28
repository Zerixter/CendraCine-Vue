import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../../services/URLS'
import BillboardService from '../../../../services/BillboardService'
import AccountService from '../../../../services/AccountService'

const accountService = new AccountService();
const urlService = new URLS();
const billboardService = new BillboardService();

export default {
    name: 'BillboardEdit',
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
            id: "",
            billboard: {},
            movies: [],
            chosen_movies: [],
        }
    },
    mounted() {
        this.getBillboard();
        this.getMovies();
        this.getChosenMovies();
    },
    methods: {
        getBillboard() {
            this.id = this.$route.params.id;
            let url = urlService.BillboardURL + '/' + this.id;
            axios.get(url)
            .then((response) => {
                //console.log(response);
                this.billboard = JSON.parse(JSON.stringify(response.data));
                var bd = new Date(this.billboard.beginDate);
                bd.setDate(bd.getDate() + 1);
                var ed = new Date(this.billboard.endDate);
                ed.setDate(ed.getDate() + 1);
                this.billboard.beginDate = bd.toISOString().split('T')[0];
                this.billboard.endDate = ed.toISOString().split('T')[0];
            })
            .catch(error => { console.log(error); });
        },
        getChosenMovies() {
            let url = urlService.BMRURL + '/billboard/' + this.id;
            axios.get(url)
            .then((response) => { 
                console.log(response)
                this.chosen_movies = JSON.parse(JSON.stringify(response.data));
            }).catch(error => {console.log(error)});
        },
        getMovies() {
            let url = urlService.MovieURL;
            axios.get(url)
            .then((response) => {
                this.movies = JSON.parse(JSON.stringify(response.data));
            }).catch(error => {console.log(error)});
        },
        submitForm() {
            var billboard = {
                Id: this.id,
                Name: this.billboard.name,
                BeginDate: this.billboard.beginDate,
                EndDate: this.billboard.endDate
            };
            billboardService.editBillboard(billboard);
        },
    }
}