<template>
  <div class="container home-container" v-if="$mq === 'mobile'"> 
    <p class="saldo-mobile">{{ saldoText }}</p>
    <div v-for="movie in filteredData" v-bind:key='movie.orderNumber' class="movie-mobile">
       <div class="poster-wrapper-mobile">
         <router-link v-bind:to="movie.path">
            <img class="poster-mobile" :src="movie.poster_mobile" v-bind:data-id="movie.id"
             v-bind:data-punya="movie.indikator" v-on:click="sendData($event)">
         </router-link>
       </div>
       <p class="title-mobile">{{ movie.title }}</p>
       <p class="price-mobile"> {{ movie.priceText }}</p>
       <div class="rating-wrapper-mobile">
         <img class="star" :src="images.star" :alt="movie.title">
         <p class="rating-mobile"> {{ movie.vote_average }} </p>
       </div>
       <p v-if=" movie.indikator === true" class="indikator-mobile punya"><img class="check" :src="images.check"> 
       sudah punya </p>
       <p v-else-if=" movie.indikator === false" class="indikator-mobile"> belum punya </p>
    </div>
    <div class="page-wrapper-mobile">
      <router-link v-bind:to="'/?page='+this.prevPage">
        <button class="page-prev-mobile" v-on:click="decreasePage()">Previous</button>
      </router-link>
      <router-link v-bind:to="'/?page='+this.nextPage">  
        <button class="page-next-mobile" v-on:click="increasePage()">Next</button>
      </router-link>
    </div>
  </div>

  <div class="container home-container-tablet" v-else-if="$mq === 'tablet'">
    <p class="saldo-tablet">{{ saldoText }}</p>
    <div v-for="movie in filteredData" v-bind:key='movie.orderNumber' class="movie-tablet"> 
      <div class="poster-wrapper-tablet">
        <router-link v-bind:to="movie.path">
          <img class="poster-tablet" :src="movie.poster_mobile" v-bind:data-id="movie.id"
             v-bind:data-punya="movie.indikator" v-on:click="sendData($event)">
        </router-link>
      </div>
      <p class="title-tablet">{{ movie.title }}</p>
      <p class="price-tablet"> {{ movie.priceText }} </p>
      <div class="rating-wrapper-tablet">
         <img class="star" :src="images.star" :alt="movie.title">
         <p class="rating-tablet"> {{ movie.vote_average }} </p>
      </div>
      <p v-if=" movie.indikator === true" class="indikator-tablet punya"><img class="check" :src="images.check"> 
       sudah punya </p>
      <p v-else-if=" movie.indikator === false" class="indikator-tablet"> belum punya </p>
    </div>
    <div class="page-wrapper-tablet">
      <router-link v-bind:to="'/?page='+this.pageParam">
        <button class="page-prev-tablet" v-on:click="decreasePage()">Previous</button> 
      </router-link>
      <router-link v-bind:to="'/?page='+this.pageParam">  
        <button class="page-next-tablet" v-on:click="increasePage()">Next</button>
      </router-link>
    </div>
  </div>

  <div class="container home-container-desktop" v-else-if="$mq === 'desktop'">
    <p class="saldo-desktop">{{ saldoText }}</p>
    <div v-for="movie in filteredData" v-bind:key="movie.orderNumber" class="movie-desktop">
       <div class="poster-wrapper-desktop">
         <router-link v-bind:to="movie.path">
           <img class="poster-desktop" v-bind:src="movie.poster_desktop" v-bind:data-id="movie.id"
             v-bind:data-punya="movie.indikator" v-on:click="sendData($event)">
         </router-link>
       </div>
       <p class="title-desktop">{{ movie.title }}</p>
       <p class="price-desktop"> {{ movie.priceText }} </p>
        <div class="rating-wrapper-desktop">
         <img class="star" v-bind:src="images.star" v-bind:alt="movie.title">
         <p class="rating-desktop"> {{ movie.vote_average }} </p>
       </div>
       <p v-if=" movie.indikator === true" class="indikator-desktop punya"><img class="check" v-bind:src="images.check"> 
       sudah punya </p>
       <p v-else-if=" movie.indikator === false" class="indikator-desktop"> belum punya </p>
     </div>
      <div class="page-wrapper-desktop">
        <router-link v-bind:to="'/?page='+this.pageParam">
          <button class="page-prev-desktop" v-on:click="decreasePage()">Previous</button>
        </router-link>
        <router-link v-bind:to="'/?page='+this.pageParam">
          <button class="page-next-desktop" v-on:click="increasePage()">Next</button>
        </router-link>
      </div>
  </div>
 
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 500,
    tablet: 800,
    desktop: 1200,
  }
})

export default {
  name: 'Home',
  data: function(){
    return{
      apiKey: 'c6d705fa0fcbcfbebd83c899a86bbcfb',
      movies: [],
      collection: [],
      images:{
        star: require('./../assets/star.png'),
        search: require('./../assets/search.png'),
        check: require('./../assets/check.png')
      },
      saldo: 100000,
      pageNumber: 1,
      pageParam: 1,
    }
  },
  computed:{
    filteredData: function(){
      let beginIndex =  this.pageNumber * 4 - 1 - 3;
      return this.movies.slice(beginIndex , this.pageNumber * 4 );
    },
    saldoText: function(){
      let text = this.saldo.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(text))
          text = text.replace(pattern, "$1.$2");
          text = 'Rp. '+text;
          return text;
    },
    nextPage: function(){
      let next = this.pageNumber;
      return next+1;
    },
    prevPage: function(){
      let prev = this.pageNumber;
      return prev-1;
    }
  },
  mounted: function(){
    
    let self = this;
    let counter = 0;

    if(localStorage.getItem('harga-beli') !== null ){
      let moviePrice = Number(localStorage.getItem('harga-beli'));
      self.saldo -= moviePrice;  
    }

    if(localStorage.getItem('movieId') !== null ){
      let id = Number(localStorage.getItem('movieId'));
      self.collection.push(id);
    }

    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key="+self.apiKey+"&language=id&page=1&region=id")
    .then(function(response){
      return response.json();
    })
     .then(function(data){
  
      let list = data['results'];

      // fill listHome with every movie on data['results']
      list.forEach(function(item){
          
          let punya = false;
          if(self.collection.indexOf(item['id']) !== -1 ){
            punya = true;
          }else if(self.collection.indexOf(item['id']) === -1 ){
            punya = false;
          }

          item['indikator'] = punya;
          item['poster_mobile'] = 'https://image.tmdb.org/t/p/w500'+item['poster_path'];
          item['poster_desktop'] = 'https://image.tmdb.org/t/p/original'+item['poster_path'];

          let harga = 0;
          if( item['vote_average'] >= 0 && item['vote_average'] <= 3 ){
              harga =  3500;
          }else if( item['vote_average'] > 3 && item['vote_average'] <= 6 ){
              harga =  8250;
          }else if( item['vote_average'] > 6 && item['vote_average'] <= 8 ){
              harga =  16350;
          }else if( item['vote_average'] > 8 && item['vote_average'] <= 10 ){
              harga =  21250;
          }

          function numberToText(x) {
            x = x.toString();
            let pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
              x = x.replace(pattern, "$1.$2");
              x = 'Rp. '+x;
            return x;
          }

          let slugText = item['title'].replace(' ','-');
          item['path'] = item['id']+'-'+slugText;
          item['slug'] = slugText;

          counter = counter + 1;
          item['orderNumber'] = counter;
          item['priceText'] =  numberToText(harga);
          item['price'] = harga;

          if(item['poster_path'] !== null){
            self.movies.push(item);
          }                               
      }) 
    }).catch( err => {
            throw err;
    })
  },
  methods:{
    increasePage: function(){
      ++this.pageNumber;
    },
    decreasePage: function(){
      --this.pageNumber;
    },
    sendData: function(){
        let id = event.currentTarget.getAttribute('data-id');
        localStorage.setItem('movieId',id);
        let punya = event.currentTarget.getAttribute('data-indikator');
        if(punya === null){
          localStorage.setItem('indikator',false);
        }else if(punya === true){
          localStorage.setItem('indikator',true);
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:500');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

  .container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem 1.5rem;
  }

  /* mobile */
  .saldo-mobile{
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
    color: #45D554;
  }

  .movie-mobile{
    width: 100%;
    margin-bottom: 1.2rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
  }

  .poster-mobile{
    width: 100%;
  }

  .title-mobile{
    margin: 0;
    margin-bottom: .2rem;
    color: #1C1C1C;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: normal;
    text-align: left;
  }

  .price-mobile{
    margin: 0;
    margin-bottom: .2rem;
    font-family: 'Open Sans', sans-serif;
    font-size: .9rem;
    font-weight: bolder;
    color: rgb(255, 87, 34);
  }

  .rating-wrapper-mobile{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .star{
    width: 25px;
    height: 25px;
    display: block;
    margin-right: .3rem;
  }

  .rating-mobile{
    width: 30%;
    margin: 0;
    line-height: 1.5rem;
    vertical-align: bottom;
    font-family: 'Open Sans', sans-serif;
    font-size: .9rem;
    color: #606060;
  }

  .check{
    widows: 15px;
    height: 15px;
  }

  .indikator-mobile{
    margin: 0;
    margin-top: .4rem;
    color: #1C1C1C;
    font-size: .9rem;
    line-height: 1.5rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: normal;
    text-align: left;
  }
  
   .page-wrapper-mobile{
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .page-prev-mobile{
    margin-right: 5%;
    width: 6rem;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
  }

  .page-prev-mobile:hover{
    cursor: pointer;
  }

  .page-next-mobile{
    margin-left: 1.5rem;
    width: 6rem;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
  }

  .page-next-mobile:hover{
    cursor: pointer;
  }
  

  /* tablet */
  .saldo-tablet{
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
    color: #45D554;
  }

  .movie-tablet{
    width: calc((100% - 1.5rem)/2);
    margin-right: 1.5rem; 
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
  }
  
  .movie-tablet:nth-of-type(2n){
    margin-right: 0;
  }

  .poster-wrapper-tablet{
    widows: 100%;
  }

  .poster-tablet{
    width: 100%;
  }

  .title-tablet{
    margin: 0;
    margin-bottom: .2rem;
    color: #1C1C1C;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: normal;
    text-align: left;
  }

  .price-tablet{
    margin: 0;
    margin-bottom: .2rem;
    font-family: 'Open Sans', sans-serif;
    font-size: .9rem;
    font-weight: bolder;
    color: rgb(255, 87, 34);
  }

  .rating-wrapper-tablet{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .star{
    width: 25px;
    height: 25px;
    display: block;
    margin-right: .3rem;
  }

  .rating-tablet{
    width: 30%;
    margin: 0;
    line-height: 1.5rem;
    vertical-align: bottom;
    font-family: 'Open Sans', sans-serif;
    font-size: .9rem;
    color: #606060;
  }

  .check{
    widows: 15px;
    height: 15px;
  }

  .indikator-tablet{
    margin: 0;
    margin-top: .4rem;
    color: #1C1C1C;
    font-size: .9rem;
    line-height: 1.5rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: normal;
    text-align: left;
  }

  .page-wrapper-tablet{
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 2rem;
  }

  .page-prev-tablet{
    margin-right: 15%;
    width: 6rem;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
  }

  .page-prev-tablet:hover{
    cursor: pointer;
  }

  .page-next-tablet{
    margin-left: 6rem;
    width: 6rem;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
  }

  .page-next-tablet:hover{
    cursor: pointer;
  }


  /* desktop */

  .saldo-desktop{
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
    color: #45D554;
  }

  .movie-desktop{
    width: calc((100% - 2rem)/2);
    margin-right: 2rem; 
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
  }
  
  .movie-desktop:nth-of-type(2n){
    margin-right: 0;
  }

  .poster-wrapper-desktop{
    widows: 100%;
  }

  .poster-desktop{
    width: 100%;
  }

  .title-desktop{
    margin: 0;
    margin-bottom: .2rem;
    color: #1C1C1C;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: normal;
    text-align: left;
  }

  .price-desktop{
    margin: 0;
    margin-bottom: .2rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: bolder;
    color: rgb(255, 87, 34);
  }

  .rating-wrapper-desktop{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .star{
    width: 25px;
    height: 25px;
    display: block;
    margin-right: .3rem;
  }

  .rating-desktop{
    width: 30%;
    margin: 0;
    line-height: 1.5rem;
    vertical-align: bottom;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    color: #606060;
  }

  .check{
    widows: 15px;
    height: 15px;
  }

  .indikator-desktop{
    margin: 0;
    margin-top: .4rem;
    color: #1C1C1C;
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: normal;
    text-align: left;
  }

  .page-wrapper-desktop{
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 2rem;
  }

  .page-prev-desktop{
    margin-right: 30%;
    width: 6rem;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
  }

  .page-prev-desktop:hover{
    cursor: pointer;
  }

  .page-next-desktop{
    margin-left: 20rem;
    width: 6rem;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
  }

  .page-next-desktop:hover{
    cursor: pointer;
  }

  .poster-mobile:hover , .poster-tablet:hover, .poster-desktop:hover{
    cursor: pointer;
    opacity: .8;
  }

  .punya{
    color: #5EDB4B;
  }
  
</style>
