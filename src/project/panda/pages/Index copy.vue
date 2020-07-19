<template>
  <q-page class="ppp">
    <div class="left">
      <q-scroll-area class="left1" style="height: 200px; max-width: 100px;">
       <div>left1</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div>
      <div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div>
      <div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div>
      <div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div>
      </q-scroll-area>
    </div>
    <div class="main">
      <router-view class="main22"/>
    </div>
    <div class="right">
      <q-scroll-area class="right1" style="height: 200px; max-width: 100px;">
      <div>right2</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div>
      <div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div>
      <div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div>
      <div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div>
      </q-scroll-area>
    </div>
    <!-- <router-view /> -->

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      aa1:[1,2,3,45],
      aa2:['a','b','c']
    }
  },
}
</script>
<style scoped>
  .ppp{
background-color: blue;
  }

  .main{
    flex: 1;
    background-color: blueviolet;
  }
  .main22{
    height: 200px;
    width:210px;
  }

  .left{
    width: 100px;
    /* background-color: brown; */
  }

  .right{
    width: 100px;
    /* background-color: blueviolet; */
  }

  .left1{
     position:fixed;
    left:0px;
    top:20px;
    width:200px;
    background-color: red;
  }

  .right1{
    position:fixed;
    right:20px;
    top:20px;
    width:200px;
    background-color: burlywood;
  }
</style>
