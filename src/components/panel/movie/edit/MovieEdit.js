import $ from 'jquery'
import axios from 'axios'
import URLS from '../../../../services/URLS'
import MovieService from '../../../../services/MovieService'
import AccountService from '../../../../services/AccountService'

const accountService = new AccountService();
const movieService = new MovieService();
const urlService = new URLS();

export default {
    name: 'MovieEdit',
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
            id: "",
            categories: [],
            chosen_categories: [],
            movie: {},
            category: null,
            categories_select: [],
            selected_file: null,
        }
    },
    mounted() {
        this.getMovie();
        this.getCategories();
    },
    methods: {
        getMovie() {
            this.id = this.$route.params.id;
            movieService.getMovie(this.id)
            .then((response) => {
                this.movie = JSON.parse(JSON.stringify(response.data))
                if (this.movie.categories != undefined) this.chosen_categories = this.movie.categories;
            })
            .catch(error => {
                this.$notify({
                    group: 'error_get_movie',
                    title: 'Error',
                    text: "S'ha produit un error al intentar obtenir la película"
                });
            });
        },
        getCategories() {
            let url = urlService.CategoryURL;
            axios.get(url).then((response) => {
                this.categories = JSON.parse(JSON.stringify(response.data));
                for (var i = 0; i < this.categories.length; i++) {
                    this.categories_select.push({
                        label: this.categories[i].name,
                        value: this.categories[i].id
                    });
                }
            }).catch(error => {
                this.$notify({
                    group: 'error_get_categories',
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
            if (this.movie.name.length > 0 ) {
                if (this.selected_file != null)
                {
                    movieService.uploadImage(this.selected_file)
                    .then(resp => {
                        console.log(resp);
                        this.createMovie(resp.data);
                    }).catch(error => {
                        this.$notify({
                            group: 'error_upload_image',
                            title: 'Error',
                            text: "S'ha produit un error al intentar pujar l'imatge"
                        });
                    });
                } else this.createMovie(null);
            }
        },
        createMovie(cover) {
            if (cover == null) cover = this.movie.cover;
            var movie = {
                Id: this.id,
                Name: this.movie.name,
                Synopsis: this.movie.synopsis,
                Trailer: this.movie.trailer,
                RecommendedAge: this.movie.recommendedAge,
                Cover: cover,
                Categories: this.chosen_categories
            };
            movieService.editMovie(movie)
            .then(res => {
                this.$router.push('/panel/movies');
            })
            .catch(err => {
                this.$notify({
                    group: 'error_edit_movie',
                    title: 'Error',
                    text: "S'ha produit un error al intentar"
                });
            });
        }
    }
}