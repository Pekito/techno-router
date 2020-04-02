<template>
  <div>
    <h1>Página Home</h1>
    {{api}}
  </div>
</template>

<script>
// @ representa a mesma coisa que /src <<<

export default {
  name: 'home',
  data() {
    return {
      api: null
    }
  },
  methods: {
    fetchData() {
      fetch('http://localhost:3000/home')
      .then(res => res.json())
      .then(data => {
        this.api = data;
        })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>
