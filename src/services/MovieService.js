import $ from 'jquery'
import axios from 'axios'
import URLS from '../services/URLS'
import AccountService from './AccountService'

const accountService = new AccountService();
const urlService = new URLS();

export default class MovieService {
    getMovies() {
        accountService.createHeaders();
        let url = urlService.MovieURL;
        return axios.get(url);
    }
    getMovie(id) {
        accountService.createHeaders();
        let url = urlService.MovieURL + '/' + id;
        return axios.get(url);
    }
    createMovie(movie) {
        accountService.createHeaders();
        let url = urlService.MovieURL;
        return axios.post(url, movie);
    }
    editMovie(movie) {
        accountService.createHeaders();
        let url = urlService.MovieURL;
        return axios.put(url, movie);
    }
    deleteMovie(id) {
        accountService.createHeaders();
        let url = urlService.MovieURL + '/' + id;
        return axios.delete(url);
    }
    uploadImage(file) {
        accountService.createHeaders();
        let url = urlService.UploadImageURL;
        return axios.post(url, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}