export default {
    data() {
        return {
        }
    },
    mounted() {
        setTimeout(() => {
            this.C100()
        }, 5000);
    },
    computed: {
    },
    methods: {
        C100(){
            console.log('ws1-----')
        }
    },
}