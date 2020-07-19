<template>
  <div>
    <itemlist :list="list">
      <template v-slot:before>111</template>

      <template v-slot="{ item, index }">
         <!-- <slot :item="item" :index="index"> -->
           <span style="color:red;">{{item.i}}--***--{{index}}</span>
         <!-- </slot> -->
      </template>

      <template v-slot:after>222</template>
    </itemlist>
    <button>1111</button>
  </div>
</template>

<script>
// import itemLi from '../pages/item_li.vue'
import itemlist from "./item_list.vue";
import ws from "../mixin/ws3";
export default {
  components: { itemlist },
  mixins:[ws],
  data() {
    return {
      list: []
    };
  },
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.list.push({ i: i });
    }

    var licia = require('licia');
    const queue = new licia.Queue();
    console.log(queue.size); // -> 0
    queue.enqueue({o:'1'});
    queue.enqueue(333);
    // queue.dequeue(); // -> 2
    // console.log(queue.size); // -> 1
    // queue.peek(); // -> 3
    // console.log(queue.size); // -> 
    var run = true;
    // setInterval(() => {
    //   while(run)
    //   {
    //     var aa =  queue.dequeue();
    //     console.log(aa+'>>>>>>>>1');
    //     aa =  queue.dequeue();
    //     console.log(aa+'>>>>>>>>2');
    //   }
    // }, 10);
    (async function () {
        // while(run)
        // {
        //   var aa =  queue.dequeue();
        //   console.log(aa+'>>>>>>>>2--'+queue.size);
        //   if(queue.size == 0)
        //   {
        //     await licia.sleep(200);
        //   }
        // }
        var a=1;
        for (let i = 1; i < 1000; i++) {
          a+=i;
          // await licia.sleep(10);
          console.log('a='+a)
        }
        console.log(`a=${a}`)
    })();
  },

  methods: {}
};
</script>
<style>
.list {
  width: 600px;
  display: flex;
  overflow: auto;
}
.kkk {
  background-color: red;
  width: 100vw;
  height: 30px;
}
.left {
  width: 100px;
  border: 1px solid red;
  margin: 20px;
}
.right {
  width: 100px;
  border: 1px solid green;
}
.main {
  flex: 1;
  border: 1px solid chocolate;
}
.www {
  width: 800px;
  border: 1px solid chocolate;
  margin: auto;
}
.kk {
}

.hh {
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: red;
  z-index: 99999;
}
.bb {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0px;
}
</style>