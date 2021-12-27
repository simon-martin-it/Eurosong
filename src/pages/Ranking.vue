<template>
    <div id="ranking">
        <h1>RANKING</h1>
        <div id="content">
            <div class="rank" id="second">
                <div class="info">
                    <p id="pos">2</p>
                    {{songs[1].artist.name}} -
                    {{songs[1].title}}

                    <p id="points">
                    {{songs[1].totalpoints}} Points
                    </p>
                </div>
                <div class="spotify">
                    <button class="playbutton" @click="GoToSpotify(songs[1].spotify)">Play!</button>
                </div>
            </div>
            <div class="rank" id="first">
                <div class="info">
                    <p id="pos">1</p>
                    {{songs[0].artist.name}} -
                    {{songs[0].title}}

                    <p id="points">
                    {{songs[0].totalpoints}} Points
                    </p>
                </div>
                <div class="spotify">
                    <button class="playbutton" @click="GoToSpotify(songs[0].spotify)">Play!</button>
                </div>
            </div>
            <div class="rank" id="third">
                <div class="info">
                    <p id="pos">3</p>
                    {{songs[2].artist.name}} -
                    {{songs[2].title}}

                    <p id="points">
                    {{songs[2].totalpoints}} Points
                    </p>
                </div>
                <div class="spotify">
                    <button class="playbutton" @click="GoToSpotify(songs[2].spotify)">Play!</button>
                </div>
            </div>
        </div>
        <div id="list">
            <p>test</p>
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
                songs: []
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
            GoToSpotify(url){
                let base = "https://open.spotify.com/";
                let rest = url.substring(31);
                window.open(base + rest, '_blank');
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
                })
            },
            FetchVotes(songs){
                const url ="http://webservies.be/eurosong/votes";
                fetch(url).then((response) => {
                    return response.json();
                }).then((votes) => {
                    songs.map((song) => {
                        let p = this.CalculateTotalPoints(song.id, votes);
                        song.totalpoints = p;
                    })
                    songs.sort((a, b) => b.totalpoints - a.totalpoints);
                    songs.forEach(element => {
                        this.songs.push(element);
                    });
                })
            },
            CalculateTotalPoints(songid, votes){
                let p = 0;
                votes.forEach(vote => {
                    if(vote.songID == songid){
                        p = p + vote.points;
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
        width: 15rem;
        height: 20rem;
        vertical-align: top;
    }
    #first {
        margin: 0 1rem 0 1rem;
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
    #playbutton {
        border: 1px solid black;
        text-align: center;
    }

    .info {

    }

    .spotify {
        position: absolute;
        bottom: 1rem;
        width: inherit;
    }

    .playbutton {
        border: 1px solid black;
        margin: 0 auto;
    }
</style>