import $ from 'jquery'
import axios from 'axios'
import MovieService from '../../../../services/MovieService'
import CategoryService from '../../../../services/CategoryService'
import URLS from '../../../../services/URLS'
import AccountService from '../../../../services/AccountService'

const accountService = new AccountService();
const categoryService = new CategoryService();
const movieService = new MovieService();
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
            category: null,
            categories_select: [],
        }
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            categoryService.getCategories()
            .then((response) => {
                this.categories = JSON.parse(JSON.stringify(response.data));
                for (var i = 0; i < this.categories.length; i++) {
                    this.categories_select.push({
                        label: this.categories[i].name,
                        value: this.categories[i].id
                    });
                }
            }).catch(error => {
                this.$notify({
                    group: 'error_get_category',
                    title: 'Error',
                    text: "S'ha produit un error al intentar obtenir les categories"
                });
            });
        },
        addCategory() {
            let id = this.category.value;
            let c = this.categories.filter(x => x.id == id)[0];
            var cc = this.chosen_categories.filter(x => x.id == c.id)[0];
            if (cc == undefined) this.chosen_categories.push(c);
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
            if (this.name.length > 0 ) {
                movieService.uploadImage(this.selected_file)
                .then(resp => {
                    this.createMovie(resp.data);
                }).catch(error => {
                    this.$notify({
                        group: 'error_upload_image',
                        title: 'Error',
                        text: "S'ha produit un error al intentar pujar l'imatge"
                    });
                });
            }
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
            movieService.createMovie(movie)
            .then(res => {
                this.$router.push('/panel/movies');
            })
            .catch(err => {
                this.$notify({
                    group: 'error_create_movie',
                    title: 'Error',
                    text: "S'ha produit un error al intentar pujar l'imatge"
                });
            });
        },
    }
}