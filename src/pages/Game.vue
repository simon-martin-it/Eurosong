<template>
  <div>
    <h2>Game</h2>
    <Carousel :songs="songs" :activeindex="ActiveSongIndex" @change-index="ChangeActiveSong" />

    <div v-for="(vote, index) in votes" :key="index">
      <button @click="Vote(vote.points)" v-if="!vote.voted">
        Add {{vote.points}} Points
        {{ vote.voted }}
      </button>
    </div>
    <button @click="GoToPage('home')">Show Home</button>
  </div>
</template>

<script>
  import Carousel from '../components/Carousel.vue'

  export default {
    name: 'Game',
    components: {
      Carousel
    },

    data(){
      return{
        songs: [],
        ActiveSongIndex: 0,
        votes:  [
          {
            points: 1,
            voted: false
          },
          {
            points: 2,
            voted: false
          },
           {
            points: 4,
            voted: false
          },
          {
            points: 8,
            voted: false
          }
        ]
      }
    },
    mounted(){
      console.log("mounted game");
      this.FetchSongs();
    },
    methods: {
      GoToPage(page){
          this.$emit("change-page", page)
      },
      FetchSongs(){
        const url = "http://webservies.be/eurosong/songs";
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((songs) => {
              this.FetchArtists(songs);
          });
      },
      FetchArtists(songs){
        const url = "http://webservies.be/eurosong/artists";
        fetch(url)
          .then((response) => {
            return response.json();
          })
        .then((artists) => {
          songs.map((song) => {
            const art = artists.find((artist) => artist.id == song.artist);
            song.artist = art;
          })
        });
        this.songs = songs;
      },
      ChangeActiveSong(index){
        this.ActiveSongIndex = index;
      },
      Vote(points){
        let votes = this.votes;

        votes.map((vote) => {
          if(vote.points == points){
            vote.voted = true;
          }
          return vote;
        });
        this.PostVote(points);
        let activeVotes = votes.filter((vote) => vote.voted == true);

        //everything is voted, redirect to ranking
        if(activeVotes.length == votes.length){
          this.GoToPage("ranking");
        }

      },
      PostVote(points){
        const songId = this.songs[this.ActiveSongIndex].id
        const url = "http://webservies.be/eurosong/votes"
        
        fetch(url, {
          method: "POST",
          headers: {
            'Accept': "application/json, text/plain",
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            songID: songId,
            points: points
          })
        })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>