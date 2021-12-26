<template>
    <div id="carousel">
        <button id="button1" @click="ChangeIndex(-1)">Previous</button>
        <button id="button2" @click="ChangeIndex(1)">Next</button>
        <div v-for="(song, index) in songs" :key="song.id">
            <div v-if="index == activeindex">
                <iframe :src="song.spotify" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Carousel',
        props: [
            "songs",
            "activeindex"
        ],
        methods: {
            ChangeIndex(val){
                let i = this.activeindex;
                i += val;
                if(i < 0){
                    i = this.songs.length -1;
                }
                else if(i == this.songs.length){
                    i = 0;
                }
                this.$emit("change-index", i);
            }
        },
    }
</script>

<style lang="scss">
#button1 {
    margin-right:1rem;
}

#button2 {
    margin-left: 0rem;
}
</style>