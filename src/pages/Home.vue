<template>
    <div>
      <h1>EUROSOOOOOOOOOOOOOOOOOOOOOONG</h1>
      <button @click="GoToPage('game')">Show Game</button>
      <button @click="GoToPage('ranking')">Show Ranking</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            GoToPage(page){
                this.$emit("change-page", page)
            }
        }
    }
</script>