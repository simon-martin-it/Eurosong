<template>
    <div>
      <h2>Ranking</h2>
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

<style scoped lang="scss">

</style>