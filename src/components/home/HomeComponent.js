import $ from 'jquery'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'

export default {
    name : 'HomeComponent',
    components: {
        swiper,
        swiperSlide
    },
    mounted() {
        this.getMovies();
    },
    data() {
        return {
            movies: [],
            swiperOption: {
                slidesPerView: 7,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
            }
        };
    },
    methods: {
        getMovies() {
            let url = 'http://localhost:5000/api/movie';
            axios.get(url).then((response) => {
                this.movies = JSON.parse(JSON.stringify(response.data));
                console.log(response);
            }).catch(error => { console.log(error); });
        },
    },
}