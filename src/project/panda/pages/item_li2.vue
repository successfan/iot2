<template>
   <div class="page-mian">
       <!-- <div v-if="i%3==0">
         <div>{{item.label}}--这是模板1</div>
       </div>
       <div v-else-if="i%3==1">
         <div class="t2">{{item.label}}--这是模板2</div>
       </div>
       <div v-else-if="i%3==2">
         <div>{{item.label}}--这是模板3
           <img width="300px" src="../../../project/panda/statics/app-logo-128x128.png" alt="">
         </div>
       </div> -->

       <div class="list">
         <div class="left">-{{i}}-left</div>
         <!-- <div class="center">
           <div class="list2">
            <div class="kk">1</div>
            <div class="kk">2</div>
            <div class="kk">3</div>
            <div class="kk">4</div>
            <div class="kk">5</div>
            <div class="kk">6</div>
           </div>
           <div  class="list23"> 
             <div class="kk">1</div>
            <div class="kk">2</div>
            <div class="kk">3</div>
            <div class="kk">4</div>
            <div class="kk">5</div>
            <div class="kk">6</div>
           </div>
         </div> -->
         <!-- <div class="right">right</div> -->
       </div>
   </div>
</template>

<script>
export default {
  name: 'PageIndex',
  props:['item','i','type'],
  data() {
    return {
    }
  },
  methods:{
    // html_list(item, index){
    //   if(index==0)
    //   {
    //     return '<div class="list"><itemLi :item="item" :i="index"></itemLi>'
    //   } else if(index==this.heavyList.length-1){
    //     return ' <itemLi :item="item" :i="index"></itemLi></div>'
    //   } else
    //   {
    //     return '<itemLi :item="item" :i="index"></itemLi>'
    //   }
    // }
  }
}
</script>
<style scoped>
.kk{
  display: inline-block;
  width: 100px;
  text-align: center;
  background-color: cadetblue;
  margin: 5px;
}
.left{
  width: 60px;
  height: 120px;
}
.right{
  width: 60px;
  height: 120px;
}
.center{
  display: flex;
  overflow: auto;
  height: 120px;
  /* width: 300px; */
  flex-direction: column;
}
.list{
  /* width: 300px; */
  display: flex;
  overflow: auto;
}
.list2{
  /* display: flex;  */
  /* white-space: nowrap;*/
  white-space: nowrap;
  height: 30px;
}
.list23{
  /* display: flex; */
  white-space: nowrap;
  height: 30px;
}
.center{
  flex: 1;
}

 .page-mian {
    /* width: 100vw; */
     /* border: 1px solid green; */
     /* min-width: 800px;
    max-width: 1200px; */
    margin: auto;
  }
  .t2{
    background-color: yellowgreen;
    height: 30px;
  }
</style>
