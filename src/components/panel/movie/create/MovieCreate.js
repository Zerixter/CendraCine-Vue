import $ from 'jquery'
import axios from 'axios'
import MovieService from '../../../../services/MovieService'
import URLS from '../../../../services/URLS'
import AccountService from '../../../../services/AccountService'

const accountService = new AccountService();
const urlService = new URLS();

export default {
    name: 'MovieCreate',
    beforeCreate() {
        accountService.getRoleAdmin()
        .then(res => {
            if (res.data == 'Admin') return;
            else this.$router.push('/');
        }).catch(err => {
            this.$router.push('/login');
        });
    },
    data() {
        return {
            categories: [],
            chosen_categories: [],
            name: "",
            trailer: "",
            age: 0,
            cover: "",
            synopsis: "",
            selected_file: null,
        }
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            console.log("token")
            console.log(localStorage.token)
            let url = urlService.CategoryURL;
            axios.get(url).then((response) => {
                console.log(response)
                this.categories = JSON.parse(JSON.stringify(response.data));
            }).catch(error => { console.log(error); });
            console.log(this.categories)
        },
        addCategory() {
            var select = document.getElementById('select-category');
            var value = select[select.selectedIndex].value;
            var category = this.categories.filter(function(obj) {
                return obj.name == value;
            });
            if (category.length == 0) {
                alert("Error");
                return;
            }
            var is_it_already_in_the_array = this.chosen_categories.filter(function(obj) {
                return obj.name == value;
            });
            if (is_it_already_in_the_array.length > 0)
            {
                alert("Error");
                return;
            }
            this.chosen_categories.push(JSON.parse(JSON.stringify(category[0])));
        },
        removeCategory(category) {
            var position = this.chosen_categories.indexOf(category);
            if (position != -1)
            {
                this.chosen_categories.splice(position, 1);
            }
        },
        onFileChanged(event) {
            let file = event.target.files[0];

            this.selected_file = new FormData();
            this.selected_file.append("file", file, file.name);
        },
        submitForm() {
            let url = 'http://localhost:5000/api/upload';
            axios.post(url, this.selected_file, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(resp => {
                console.log(resp)
                this.createMovie(resp.data);
            }).catch(error => {
                console.log("error critico")
                console.log(error)
            });
        },
        createMovie(cover){
            var movie = {
                Name: this.name,
                Trailer: this.trailer,
                RecommendedAge: this.age,
                Cover: cover,
                Synopsis: this.synopsis,
                Categories: this.chosen_categories
            };
            const movieService = new MovieService();
            movieService.createMovie(movie);
        }
    }
}