<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>
    <h1>Página Home</h1>
    {{api}}
  </div>
</template>

<script>
// @ representa a mesma coisa que /src <<<
import fetchData from '@/mixins/fetchData.js'
export default {
  name: 'home',
  mixins: [fetchData],
  created() {
    this.fetchData('/home')
  }
}
</script>
