import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'
import BillboardService from '../../../services/BillboardService'
import AccountService from '../../../services/AccountService';

const accountService = new AccountService();
const urlService = new URLS();
const billboardService = new BillboardService();

export default {
    name: 'BillboardComponent',
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
            billboards: [],
        }
    },
    mounted() {
        this.getBillboards();
    },
    methods: {
        getBillboards() {
            let url = urlService.BillboardURL;
            axios.get(url).then((response) => {
                this.billboards = JSON.parse(JSON.stringify(response.data));
                console.log(response);
            }).catch(error => { console.log(error); });
        },
        editBillboard(item) {
            this.$router.push('/panel/billboards/edit/' + item.id);
        },
        deleteBillboard(item) {
            if (confirm("Estás segur/a de esborrar aquesta película?"))
            {
                billboardService.deleteBillboard(item.id);
                var position = this.billboards.indexOf(item);
                if (position != -1)
                {
                    this.billboards.splice(position, 1);
                }
                return;
            }
        },
        getDate(date) {
            var d = new Date(date);
            d.setDate(d.getDate() + 1);
            d = d.toISOString().split('T')[0];
            return d;
        }
    }
}