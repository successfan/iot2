<template>
  <div id="q-app" class="app">
    <router-view />
  </div>
</template>

<script>
import {test} from 'src/public/a.js'
import axios from 'axios'
export default {
  name: 'App',
  updated() {
    console.log(111111);
    setTimeout(() => {
      console.log(2222);
    }, 3000);
  },
  created(){
    test('AAAA');

    let postData = { uselogrname: 'user1'}
 
axios.post('http://127.0.0.1:8000/', postData)
    .then(response => {
        // post 成功，response.data 为返回的数据
        console.log(response.data)
    })
    .catch(error => {
        // 请求失败
        console.log(error)
    })
  }
}
</script>
<style >
body.body--light {
    background-color: aqua;
}

body.body--dark {
  /* ... */
  background-color: rebeccapurple;
}
.body{
  background-color: antiquewhite;
}
*{
  padding: 0px;
  margin: 0px;
}
  #q-app{
    /* border: 1px solid red; */
  }

</style>
