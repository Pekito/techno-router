<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader
  }
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
  color: #234;
}

.container {
  max-width: 960px;
  padding: 20px;
  margin: 0 auto;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

img {
  max-width: 100%;
}

.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
}

@media only screen and (max-width: 573px) {
  .conteudo {
    display: block;
  }
}
</style>
