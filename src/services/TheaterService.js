import $ from 'jquery'
import axios from 'axios'
import URLS from './URLS'
import AccountService from './AccountService'

const urlService = new URLS();
const accountService = new AccountService();

export default class TheaterService {
    createTheater(theater) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.TheaterURL;
            axios.post(url, theater)
            .then((response) => {
                console.log(response);
            }).catch(error => {console.log(error)});
        }
    }
    editTheater(theater) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.TheaterURL;
            axios.put(url, theater)
            .then((response) => {
                console.log(response);
            }).catch(error => {console.log(error)});
        }
    }
    deleteTheater(id) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.TheaterURL + '/' + id;
            axios.delete(url)
            .then((response) => {
                console.log(response);
            }).catch(error => {console.log(error)});
        }
    }
}