<template>
   <div class="page-mian">
     <div id="_before">
      <slot name="before"></slot>
    </div>
    <div>--------------------------------------------------</div>
    <div>
      <div v-for="(item,index) in list" :key="item.i">
        <itemitem :item="item" :index="index">
          <template v-slot="{ item, index }">
              <slot :item="item" :index="index"></slot>
          </template>
        </itemitem>
        <!-- <slot  :item="item" :index="index"></slot> -->
      </div>
    </div>
    <div>--------------------------------------------------</div>
     <div id="_after">
      <slot name="after"></slot>
    </div>
   </div>
</template>

<script>
import itemitem from "./item_item.vue";

export default {
  components: { itemitem },
  name: 'PageIndex',
  props:['list','index'],
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
