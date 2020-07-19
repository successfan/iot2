<template>
  <div id="q-app" class="app">
    oubao
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  updated() {
    console.log(111111);
    setTimeout(() => {
      console.log(2222);
    }, 3000);
  }
}
</script>
<style >
*{
  padding: 0px;
  margin: 0px;
}
  #q-app{
    /* border: 1px solid red; */
    /* min-width: 600px;
    max-width: 1200px;
    margin: auto; */
  }

</style>
