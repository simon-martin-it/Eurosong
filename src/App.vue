<template>
  <div id="app">
    <img id="bg" src="../src/assets/img/eurosong.png" />
    <div id="content">
      <!--home-->
      <Home v-if="page == 'home'" @change-page="GoToPage"/>

      <!--Game-->
      <Game v-if="page == 'game'" @change-page="GoToPage"/>

      <!--Ranking-->
      <Ranking v-if="page == 'ranking'" @change-page="GoToPage"/>
    </div>
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
        page: "ranking"
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
@font-face {
  font-family: "MC";
  src: local("MC"),
  url(../src/assets/font/MinecraftRegular-Bmg3.otf) format("truetype");
}

button {
    font-family: inherit;
    transition: transform .2s;
    background-color: white; /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

button:hover {
  transform: scale(1.2);
}

img {
  object-fit: cover;
}

#app {
  font-family: "MC";
  font-size: 150%;
  color: #2c3e50;
  text-align: center;
  width: 50%;
  color: white;
  margin: 0 auto;
}

#home {
    overflow: hidden;
    position: relative;
}

#bg {
    opacity: 0.9;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

#content {
    position: relative;
}
</style>