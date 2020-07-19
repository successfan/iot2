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
  </div>
</template>

<script>
// import itemLi from '../pages/item_li.vue'
import itemlist from "./item_list.vue";
export default {
  components: { itemlist },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.list.push({ i: i });
    }
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