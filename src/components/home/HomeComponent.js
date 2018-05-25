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
            }).catch(error => { console.log(error); });
        },
    },
}