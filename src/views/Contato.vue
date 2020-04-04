<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>{{api.titulo}}</h1>
        <p>{{api.descricao}}</p>
        <ul>
          <li v-for="(value, key) in api.contato" :key="value.telefone">
              {{key | capitalize}}: {{value}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
// @ representa a mesma coisa que /src <<<
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
};
</script>
<style></style>
