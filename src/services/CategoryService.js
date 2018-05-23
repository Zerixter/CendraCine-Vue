import $ from 'jquery'
import axios from 'axios'
import URLS from './URLS'

const urlService = new URLS();

export default class CategoryService {
    addCategory(category) {
        let url = urlService.CategoryURL;
        axios.post(url, category)
        .then((response) => {
            console.log(response);
        }).catch(error => {console.log(error)});
    }
}