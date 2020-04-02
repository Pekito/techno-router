<template>
  <div>
    <div v-if="loading">
            <PageLoading/>
    </div>
      <h1>Contato</h1>
      {{api}}
  </div>
</template>

<script>
// @ representa a mesma coisa que /src <<<
import fetchData from '@/mixins/fetchData.js'
export default {
  name: 'contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato')
  }
}
</script>
<style>

</style>