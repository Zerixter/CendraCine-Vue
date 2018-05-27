<template>
    <div class="content">
        <div>
            <h1>Reserves realitzades</h1>
        </div>
        <div class="table-responsive">
            <table class="table">
                <tr>
                    <th>Data de la reserva</th>
                    <th>Preu</th>
                    <th>Data de la projecció</th>
                    <th>Seient</th>
                </tr>
                <tr v-for="item in reservations" :key="item.id">
                    <td>{{ item.dateReservated | formatDate }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.projection.projectionDate | formatDate }}</td>
                    <td>Fila: {{ item.seat.rowNumber }} Seient: {{ item.seat.seatNumber }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script src="./Reservations.js"></script>