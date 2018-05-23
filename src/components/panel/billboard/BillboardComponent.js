import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../services/URLS'

const urlService = new URLS();

export default {
    name: 'BillboardComponent',
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
            this.$router.push('/panel/movies/edit/' + item.id);
        },
        deleteBillboard(item) {
            if (confirm("Estás segur/a de esborrar aquesta película?"))
            {
                alert("deleted");
                return;
            }
        }
    }
}