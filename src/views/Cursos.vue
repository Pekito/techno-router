<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>Contato</h1>
        {{ api }}
      </div>
    </transition>
  </div>
</template>

<script>
// @ representa a mesma coisa que /src <<<
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  }
};
</script>
<style></style>
