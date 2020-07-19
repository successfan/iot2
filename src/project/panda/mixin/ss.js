import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            isNoData: false,
            isShowLoding: true
        }
    },
    mounted() {
        console.log('111111111111');
    },
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            'get_list',
        ])
    } ,
    methods: {
        ...mapActions(['set_list','set_select_index']
        ),
    },
}