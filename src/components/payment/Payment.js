import PayPal from 'vue-paypal-checkout'

export default {
    name: 'Payment',
    data() {
        return {
            paypal: {
                sandbox: 'AfzcCFT7kALQ5MLCrGLxJ9noXOVs1FT9cSGllIvSyWmbsLFKBRltffEC5AhjwGukpsfk_KZE-9JdzJoR',
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