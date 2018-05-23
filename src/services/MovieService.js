import $ from 'jquery'
import axios from 'axios'
import URLS from '../services/URLS'

const urlService = new URLS();

export default class MovieService {
    createMovie(movie) {
        let url = urlService.MovieURL;
        axios.post(url, movie)
        .then((response) => {
            console.log(response);
        }).catch(error => { console.log(error); });
    }
    editMovie() {

    }
    deleteMovie() {

    }
}