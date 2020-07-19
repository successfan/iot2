import ws2 from "./ws2";
export default {
    mixins:[ws2],
    data() {
        return {
        }
    },
    mounted() {
    },
    computed: {
    },
    methods: {
        C100(){
            super.C100();
            console.log('ws3-----')
        }
    },
}