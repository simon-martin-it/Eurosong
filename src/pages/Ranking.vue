<template>
    <div id="ranking">
      <h1>RANKING</h1>
      <div id="content">
          
      </div>
      <button @click="GoToPage('home')">Show Home</button>
    </div>
</template>

<script>
    export default {
        name: 'Ranking',
        methods: {
            GoToPage(page){
                this.$emit("change-page", page)
            }
        }
    }
</script>