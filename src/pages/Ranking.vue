<template>
    <div id="ranking">
        <h1>RANKING</h1>
    <div id="content">
        <div class="rank" id="second">
            <p id="pos">2</p>
        </div>
        <div class="rank" id="first">
            <p id="pos">1</p>
        </div>
        <div class="rank" id="third">
            <p id="pos">3</p>
        </div>
        </div>
            <div id="player">
        </div>
        <div id="list">
        </div>
        <br>
        <button @click="GoToPage('home')">Show Home</button>
    </div>
</template>

<script>
    export default {
        name: 'Ranking',
        data() {
            return{
                songs: [],
            }
        },
        mounted(){
            console.log("mounted ranking");
            this.FetchSongs();
        },
        methods: {
            GoToPage(page){
                this.$emit("change-page", page)
            },
            FetchSongs(){
                const url = "http://webservies.be/eurosong/songs";
                fetch(url).then((response) => {
                    return response.json();
                }).then((songs) => {
                    this.FetchArtists(songs);
                })
            },
            FetchArtists(songs){
                const url = "http://webservies.be/eurosong/artists";
                fetch(url).then((response) => {
                    return response.json();
                }).then((artists) => {
                    songs.map((song) => {
                        const art = artists.find((artist) => artist.id == song.artist);
                        song.artist = art;
                    })
                    this.FetchVotes(songs);
                });
                //this.songs = songs;
            },
            FetchVotes(songs){
                const url = "http://webservies.be/eurosong/votes";
                fetch(url).then((response) => {
                    return response.json();
                }).then((votes) => {
                    songs.map((song) => {
                        let points = this.FetchPoints(song, votes);
                        song.totalpoints = points;
                    })
                });
                this.songs = songs;
            },
            FetchPoints(song, votes){
                let p = 0;
                votes.forEach(vote => {
                    if(vote.songID == song.id){
                        p += vote.points;
                    }
                });
                return p;
            }
        }
    }
</script>

<style lang="scss">
    .rank {
        background-color: white;
        display: inline-block;
        width: 10rem;
        height: 20rem;
    }
    #first {
        margin: 0 0.5rem 0 0.5rem;
        border: 5px solid gold;
        color: gold;
    }
    #second {
        border: 5px solid silver;
        color:silver;
    }
    #third {
        border: 5px solid chocolate;
        color:chocolate;
    }
</style>