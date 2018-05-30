import $ from 'jquery'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import URLS from '../../services/URLS'

const urlService = new URLS();

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
            bbmr: [],
            movies_best_rating: [],
            movies_random: [],
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
            let url = urlService.BillboardURL + '/actual';
            axios.get(url).then((response) => {
                console.log(response)
                this.bbmr = JSON.parse(JSON.stringify(response.data.billboardMovieRegister));
                this.getBestRating();
            }).catch(error => { console.log(error); });
        },
        getBestRating() {
            let array = this.bbmr.sort();
            for (var i = 0; i < 3; i++) {
                this.movies_best_rating.push(array[i].movie);
            }
        },
    },
}