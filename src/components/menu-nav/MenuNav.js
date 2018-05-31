import PrimaryNavMenu from '@/components/primary-nav-menu/PrimaryNavMenu.vue'
import NavMenu from '@/components/panel/navmenu/NavMenu.vue'
import AccountService from '@/services/AccountService'

const accountService = new AccountService();

export default {
    name: 'MenuNav',
    components: {
        'nav-menu': NavMenu,
        'primary-nav-menu': PrimaryNavMenu
    },
    data() {
        return {
            isAdmin: false,
            isLogged: false,
        }
    },
    mounted() {
        this.admin();
        this.login();
    },
    methods: {
        admin() {
            accountService.getRoleAdmin()
            .then(res => {
                if (res.data == 'Admin') {
                    this.isAdmin = true;
                    this.isLogged = true;
                }
            })
            .catch(err => {});
        },
        login() {
            accountService.isUserLogged()
            .then(res => this.isLogged = true)
            .catch(err => {});
        },
        closeSession() {
            localStorage.clear();
            this.isAdmin = false;
            this.isLogged = false;
            this.$router.push('/');
        },
    }
}