<template>
    <div class="content">
        <PayPal
        v-on:payment-authorized="paymentAuthorized"
        v-on:payment-completed="paymentCompleted"
        v-on:payment-cancelled="paymentCancelled"
        amount="12.00"
        currency="EUR" 
        :client="paypal"
        env="sandbox">
        </PayPal>
    </div>
</template>


<script src="./Payment.js"></script>