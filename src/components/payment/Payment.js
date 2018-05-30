import PayPal from 'vue-paypal-checkout'

export default {
    name: 'Payment',
    data() {
        return {
            paypal: {
                sandbox: 'AbevwZFFjgy3H1kmHm_qMgTKjk6yVGZbLe2rNKeLS077V1A61rDFie1xftrVMrxqJ5ymFwx73SoimRRm',
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