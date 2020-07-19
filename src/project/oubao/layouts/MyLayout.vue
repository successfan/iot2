<template>
<div>
  <!-- <q-layout view="hHh lpR fFf"> -->
    <div class="layout-mian column no-wrap">
      <div class="top">top</div>
      <div class="middle">
          <router-view class="rrr"/>
      </div>
      <div class="footer">footer</div>
    </div>
  </div>
</template>

<script>
import index from 'src/project/oubao/pages/Index.vue'
export default {
  components:{index},
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>
<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  .layout-mian{
    height: 100vh;
    /* border: 1px solid red; */
  }
  .top{
    background-color: gold;
    width: 100vw;
    height: 100px;
  }
  .footer{
    background-color: green;
    width: 100vw;
    height: 100px;
  }
  .middle{
    flex: 1;
  }
  

</style>