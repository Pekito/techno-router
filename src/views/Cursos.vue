<template>
  <div>
    <div v-if="loading">
            <PageLoading/>

    </div>
      <h1>Cursos</h1>
      {{api}}
  </div>
</template>

<script>
// @ representa a mesma coisa que /src <<<
import fetchData from '@/mixins/fetchData.js'
export default {
  name: 'cursos',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos')
  }
}
</script>
<style>

</style>