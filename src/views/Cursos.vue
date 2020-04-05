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
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <router-link :to="{name: 'curso', params: {curso: curso.id}}">{{curso.nome}} - {{curso.totalAulas}} aulas | {{curso.horas}} horas</router-link>
            </h2>
            <p>{{curso.descricao}}</p>
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
  name: "cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  }
};
</script>
<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

  }
</style>
