<template>
  <div id="app">
      <TheHeader/>
      <div class="container">
      <router-view></router-view>
      </div>
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

.container {
  max-width: 960px;
  padding: 20px;
  margin: 0 auto;
}
</style>
