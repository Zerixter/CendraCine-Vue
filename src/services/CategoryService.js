import $ from 'jquery'
import axios from 'axios'
import URLS from './URLS'
import AccountService from './AccountService'

const urlService = new URLS();
const accountService = new AccountService();

export default class CategoryService {
    getCategory(id) {
        accountService.createHeaders();
        let url = urlService.CategoryURL + '/' + id;
        return axios.get(url);
    }
    getCategories() {
        accountService.createHeaders();
        let url = urlService.CategoryURL;
        return axios.get(url);
    }
    getMovieCategories(id) {
        accountService.createHeaders();
        let url = urlService.CategoryURL + '/moviecategory/' + id;
        return axios.get(url);
    }
    addCategory(category) {
        accountService.createHeaders();
        let url = urlService.CategoryURL;
        return axios.post(url, category);
    }
    editCategory(category) {
        accountService.createHeaders();
        let url = urlService.CategoryURL;
        return axios.put(url, category);
    }
    deleteCategory(id) {
        accountService.createHeaders();
        let url = urlService.CategoryURL + '/' + id;
        axios.delete(url)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
}