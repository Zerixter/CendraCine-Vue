<template>
    <div class="content row">
        <div class="col-md-12 row">
            <div class="col-md-12">
                <h1 class="title-seat">Tria un seient</h1>
            </div>
            <div class="col-md-9 table-responsive">
                <table class="table">
                    <tr v-for="(row, index) in rows" :key="`row-${index}`">
                        <td>Fila {{ index + 1 }}</td>
                        <td v-for="seat in row" :key="seat.id">
                            <div v-if="seat.occuped">
                                <img class="butaca" src="http://localhost:5000/assets/butaca_ocupada.png" alt="butaca">
                            </div>
                            <div v-else-if="seat.selected">
                                <img class="butaca" src="http://localhost:5000/assets/butaca_seleccionada.png" alt="butaca">
                            </div>
                            <div v-else>
                                <img v-on:click="setSeat(seat)" class="butaca" src="http://localhost:5000/assets/butaca.png" alt="butaca">
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-md-3">
                <div class="card" v-if="seat_selected">
                    <h5 class="card-header">Dades de la reserva</h5>
                    <div class="card-body">
                        <p>Numero de la fila: {{ seat.rowNumber }}</p>
                        <hr>
                        <p>Numero del seient: {{ seat.seatNumber }}</p>
                        <hr>
                        <p>Preu del ticket: {{ price }} €</p>
                        <hr>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Seats.js"></script>
<style>
.row {
    margin-left: 0px;
    margin-right: 0px;
}
.butaca {
    width: 100%;
}
.butaca:hover {
    cursor: pointer;
}
.title {
    text-align: center;
}
.title-seat {
    padding: 15px 0;
}
.col-md-12 {
    padding: 0px;
}
div.col-md-12.div-title {
    width: 100% !important;
    text-align: center;
}
</style>