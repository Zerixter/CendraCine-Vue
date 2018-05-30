import $ from 'jquery'
import axios from 'axios'
import URLS from '../services/URLS'
import AccountService from './AccountService'

const urlService = new URLS();
const accountService = new AccountService();

export default class BillboardService {
    getBillboard(id) {
        accountService.createHeaders();
        let url = urlService.BillboardURL + '/' + id;
        return axios.get(url);
    }
    getMoviesOnBillboard(id) {
        accountService.createHeaders();
        let url = urlService.BMRURL + '/billboard/' + id;
        return axios.get(url);
    }
    createBillboard(billboard) {
        accountService.createHeaders();
        let url = urlService.BillboardURL;
        return axios.post(url, billboard);
    }
    getActualBillboard() {
        let url = urlService.BillboardURL + '/actual';
        return axios.get(url);
    }
    editBillboard(billboard) {
        accountService.createHeaders();
        let url = urlService.BillboardURL;
        return axios.put(url ,billboard);
    }
    deleteBillboard(id) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.BillboardURL + '/' + id;
            axios.delete(url)
            .then((response) => {
                console.log(response);
            }).catch(error => {console.log(error)});
        }
    }
}