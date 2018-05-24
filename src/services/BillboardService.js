import $ from 'jquery'
import axios from 'axios'
import URLS from '../services/URLS'
import AccountService from './AccountService'

const urlService = new URLS();
const accountService = new AccountService();

export default class BillboardService {
    createBillboard(billboard) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.BillboardURL;
            axios.post(url, billboard)
            .then((response) => {
                console.log(response);
            }).catch(error => {console.log(error)});
        }
    }
    editBillboard(billboard) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.BillboardURL;
            axios.put(url ,billboard)
            .then((response) => {
                console.log(response);
            }).catch(error => {console.log(error)});
        }
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