import $ from 'jquery'
import axios from 'axios'
import URLS from '../services/URLS'

const urlService = new URLS();

export default class TheaterService {
    createTheater(theater) {
        let url = urlService.TheaterURL;
        axios.post(url, theater)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
    editTheater(theater) {
        let url = urlService.TheaterURL;
        axios.put(url, theater)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
    deleteTheater(id) {
        let url = urlService.TheaterURL + '/' + id;
        axios.delete(url)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
}