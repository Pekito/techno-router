export default {
    data() {
        return {
          loading: true,
          api: null
        }
      },
      methods: {
        fetchData(pasta) {
          this.loading = true;
          this.api = null;
          fetch(`http://localhost:3000${pasta}`)
          .then(res => res.json())
          .then(data => {
            setTimeout(() => {

                this.api = data;
                this.loading = false;
            }, 800)
            })
        }
      }
}