import $ from 'jquery'
import axios from 'axios'
import URLS from '../services/URLS'
import AccountService from './AccountService'

const accountService = new AccountService();
const urlService = new URLS();

export default class MovieService {
    createMovie(movie) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.MovieURL;
            axios.post(url, movie)
            .then((response) => {
                console.log(response);
            }).catch(error => { console.log(error); });
        }
    }
    editMovie(movie) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.MovieURL;
            axios.put(url, movie)
            .then((response) => {
                console.log(response);
            }).catch(error => {console.log(error)});
        }
    }
    deleteMovie(id) {
        if (localStorage.token != undefined)
        {
            accountService.createHeaders();
            let url = urlService.MovieURL + '/' + id;
            axios.delete(url)
            .then((response) => {
                console.log(response);
            }).catch(error => {console.log(error)});
        }
    }
}