<template>
  <header>
      <nav>
          <div class="logo">
              <router-link to="/">Techno</router-link>
          </div>
          <ul class="lista">
              <li><router-link to="/cursos">Cursos</router-link></li>
              <li><router-link to="/contato">Contato</router-link></li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style scoped>
    header a {
        color: #FFFFFF;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        font-weight: bold;
        text-decoration: none;
        color: #234;
    }
    a.router-link-exact-active {
        color: #4b8;
    }


    .logo {
        flex: 1;
    }
    .lista {
        display: flex;
        align-content: space-between;
    }
    .lista li {
        margin-left: 20px;
    }

    .lista li a {
        display: block;
        padding: 10px;
    }
    header {
        background: #234;
    }
    nav {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        align-content: space-between;
        align-items: center;
    }
</style>