<template>
  <div class="page-mian row no-wrap">
    <div class="box">22222222SSS22222</div>

    <button  @click="colorTest()">test</button>
    <div
      class="middle"
      v-for="(item,i) in get_list"
      :key="item.name"
      @click="set_select_index(i)"
    >{{item.name}}</div>

  </div>
</template>

<script>
import ss from '../mixin/ss'
import { colors } from 'quasar'
export default {
  mixins:[ss],
  name: "zujian",
  data() {
    return {};
  },
  created(){
    // console.log(this.$EventBus.name);
  },
  methods:{
    colorTest(){
//       let themeLink = document.querySelector('link[name="theme"]')
// themeLink.setAttribute('href', stylesheetPath)
        import('../css/green.sass')
        //   .then((module) => {
        //     // Do something with the module.
            this.$forceUpdate();
        //     console.log(module+'');
        //   });
    }
  }
};
</script>
<style lang="stylus">

.box
  width 100px
  height 100px
  border 1px solid yellow
 
</style>

<style lang="scss">
  @import "../css/red.scss"; 
  .box{
    background-color: $mycolorn;
  } 
    
</style>
