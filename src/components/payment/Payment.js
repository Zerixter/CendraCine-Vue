import PayPal from 'vue-paypal-checkout'

export default {
    name: 'Payment',
    data() {
        return {
            paypal: {
                sandbox: 'Adi5qIHCqNUlhkWovnD9QsSEmPuUhDamhXWPvM7FEZgk1-CXgB50DniejelXekT7AFIOeuDrwRjKFRfP',
                production: '<insert production client id>'
            }
        }
    },
    components: {
        PayPal
    },
    methods: {
        paymentAuthorized: function (data) {
            console.log(data);
        },
        paymentCompleted: function (data) {
            console.log(data);
        },
        paymentCancelled: function (data) {
            console.log(data);
        },
    }
}