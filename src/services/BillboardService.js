import $ from 'jquery'
import axios from 'axios'
import URLS from '../services/URLS'

const urlService = new URLS();

export default class BillboardService {
    createBillboard(billboard) {
        let url = urlService.BillboardURL;
        axios.post(url, billboard)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
    editBillboard(billboard) {
        let url = urlService.CreateBillboardURL;
        axios.put(url ,billboard)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
    removeBillboard(id) {
        let url = urlService.CreateBillboardURL;
        axios.delete(url)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
}