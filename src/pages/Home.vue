<template>
    <div id="home">
        <h1>MINESONG</h1>
        <button id="button1" @click="GoToPage('game')">Show Game</button>
        <button id="button2" @click="GoToPage('ranking')">Show Ranking</button>
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

<style lang="scss">
    button {
        margin: 0rem 0rem 1rem 0rem;
        
    }
    
    #button1 {
        margin-right:1rem;
    }

    #button2 {
        margin-left: 1rem;
    }
</style>