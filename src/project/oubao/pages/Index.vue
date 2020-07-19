<template>
   <div class="page-mian row no-wrap">
      <div class="left">
        <q-scroll-area style="min-height:500px; height: calc(100vh - 200px);; width: 100px;" >
            <div>left1</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div>
            <div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div>
            <div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div><div>left</div>
             <div>left2</div>
             </q-scroll-area>
        </div>
        <div class="center">
          <!-- <q-scroll-area style="min-height:500px; height: calc(100vh - 200px);; width: 100%;" > -->
          <router-view/>
          <!-- </q-scroll-area> -->
        </div>
        <div class="right">
          <q-scroll-area style="min-height:500px; height: calc(100vh - 200px);; width: 100px;" >
            <div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div>
            <div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div>
            <div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div><div>right</div>
          </q-scroll-area>
        </div>
      </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
    }
  },
}
</script>
<style scoped>

 .page-mian {
    /* width: 100vw; */
     /* border: 1px solid green; */
     min-width: 800px;
    max-width: 1200px;
    border: 1px solid grey;
    margin: auto;
  }
  .center{
    flex: 1;
    width: 200px;
    height: 200px;
  }
  .left{
    background-color: red;
    width: 100px;
  }
  .right{
    background-color: red;
    width: 100px;
  }
</style>
