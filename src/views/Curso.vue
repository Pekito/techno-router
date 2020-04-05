<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api" class="conteudo">
      <div>
        <h1>{{ api.nome }}</h1>
        <p>{{ api.descricao }}</p>
        <h2>Aulas</h2>
        <ul class="lista-aulas">
          <li v-for="aula in api.aulas" :key="aula.id">{{ aula.nome }}</li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Curso",
  props: ["curso"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  }
};
</script>

<style scoped>
.lista-aulas {
  margin: 0;
  padding: 0;
}
.lista-aulas li {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>