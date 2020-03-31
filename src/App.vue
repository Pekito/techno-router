<template>
  <div id="app">
      <TheHeader/>
      <router-view></router-view>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  export default {
    components: {
      TheHeader,
    }
  }
</script>
<style>
body {

  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #234;
}
</style>
