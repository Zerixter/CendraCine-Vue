import BillboardService from '../../../../services/BillboardService'

const billboardService = new BillboardService();

export default {
    name: 'BillboardCreate',
    data() {
        return {
            name: "",
            beginDate: "",
            endDate: "",
        }
    },
    methods: {
        submitForm() {
            var billboard = {
                Name: this.name,
                BeginDate: this.beginDate,
                EndDate: this.endDate,
            };
            billboardService.createBillboard(billboard);
        },
    }
}