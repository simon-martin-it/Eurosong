<template>
  <div id="app">

    <!--home-->
    <Home v-if="page == 'home'" @change-page="GoToPage"/>

    <!--Game-->
    <Game v-if="page == 'game'" @change-page="GoToPage"/>

    <!--Ranking-->
    <Ranking v-if="page == 'ranking'" @change-page="GoToPage"/>

  </div>
</template>

<script>
  import Home from './pages/Home.vue'
  import Ranking from './pages/Ranking.vue'
  import Game from './pages/Game.vue'

  export default {
    name: 'App',
    components: {
      Home,
      Game,
      Ranking
    },
    data(){
      return {
        page: "home"
      }
    },
    methods: {
      GoToPage(page){
        this.page = page;
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 1rem;
  text-align: center;
}
</style>