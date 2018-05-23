import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../../services/URLS'
import BillboardService from '../../../../services/BillboardService'

const urlService = new URLS();
const billboardService = new BillboardService();

export default {
    name: 'BillboardEdit',
    data() {
        return {
            id: "",
            billboard: {},
        }
    },
    mounted() {
        this.getBillboard();
    },
    methods: {
        getBillboard() {
            this.id = this.$route.params.id;
            let url = urlService.BillboardURL + '/' + this.id;
            axios.get(url)
            .then((response) => {
                console.log(response);
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