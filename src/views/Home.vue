<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link tag="button" class="btn-cursos" to="/cursos"
            >Cursos</router-link
          >
          <div>
            <h2>Avaliações</h2>
            <ul class="atirador">
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/05.png" alt="Aprenda desenvolvimento web!" />
      </div>
    </transition>
  </div>
</template>

<script>
// @ representa a mesma coisa que /src <<<
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
};
</script>

<style scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 40px;
  font-size: 1rem;
  margin-bottom: 40px;
  margin-top: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}


</style>
