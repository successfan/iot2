export default {
    data() {
        return {
            list:[],
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.C100()
        // }, 5000);
        class Class01 {
            constructor(view) {
                this.view = view;
            }

            C100()
            {
                console.log('Class01--')
            }
        }

        class Class02 extends Class01{
            // constructor(view) {
            //     this.view = view;
            // }

            C100()
            {
                super.C100()
                console.log('Class0222--')
            }
        }

        var a = new Class02(this);
        a.C100();
    },
    computed: {
    },
    methods: {
        rev(){
            this.list.forEach(item => {
                if(list.C100)
                {
                    list.C100();
                }
            });
        },
        C100(){
            console.log('ws1-----')
        }
    },
}