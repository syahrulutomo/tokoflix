<template>
  <div class="container home-container" v-if="$mq === 'mobile'">
    
    <div class="search-wrapper">
      <input class="search" type="text" placeholder="search for a movie">
    </div>
     
     <div v-for="movie in movies" v-bind:key='movie.orderNumber' class="movie-mobile">
       <div class="poster-wrapper-mobile">
         <img class="poster-mobile" :src="movie.poster_mobile">
       </div>
       <p class="title-mobile">{{ movie.title }}</p>
       <p class="price-mobile"> {{ movie.priceText }}</p>
       <div class="rating-wrapper-mobile">
         <img class="star" :src="images.star" :alt="movie.title">
         <p class="rating-mobile"> {{ movie.vote_average }} </p>
       </div>
       <p v-if=" sudahPunya === true" class="indikator-mobile" v-bind:class="{ punya:sudahPunya }"><img class="check" :src="images.check"> 
       sudah punya </p>
       <p v-else-if=" sudahPunya === false" class="indikator-mobile"> belum punya </p>
     </div>

  </div>

  <div class="container home-container-tablet" v-else-if="$mq === 'tablet'">

    <div class="search-wrapper">
      <input class="search" type="text" placeholder="search for a movie">
    </div>

    <div v-for="movie in movies" v-bind:key='movie.orderNumber' class="movie-tablet"> 
       <div class="poster-wrapper-tablet">
         <img class="poster-tablet" :src="movie.poster_mobile">
       </div>
       <p class="title-tablet">{{ movie.title }}</p>
       <p class="price-tablet"> {{ movie.priceText }} </p>
       <div class="rating-wrapper-tablet">
         <img class="star" :src="images.star" :alt="movie.title">
         <p class="rating-tablet"> {{ movie.vote_average }} </p>
       </div>
        <p v-if=" sudahPunya === true" class="indikator-tablet" v-bind:class="{ punya:sudahPunya }"><img class="check" :src="images.check"> 
       sudah punya </p>
       <p v-else-if=" sudahPunya === false" class="indikator-tablet"> belum punya </p>
     </div>
  </div>

  <div class="container home-container-desktop" v-else-if="$mq === 'desktop'">

    <div class="search-wrapper">
      <input class="search" type="text" placeholder="search for a movie">
    </div>

    <div v-for="movie in movies" v-bind:key='movie.orderNumber' class="movie-desktop">
       <div class="poster-wrapper-desktop">
         <img class="poster-desktop" :src="movie.poster_desktop">
       </div>
       <p class="title-desktop">{{ movie.title }}</p>
       <p class="price-desktop"> {{ movie.priceText }} </p>
        <div class="rating-wrapper-desktop">
         <img class="star" :src="images.star" :alt="movie.title">
         <p class="rating-desktop"> {{ movie.vote_average }} </p>
       </div>
       <p v-if=" sudahPunya === true" class="indikator-desktop" v-bind:class="{ punya:sudahPunya }"><img class="check" :src="images.check"> 
       sudah punya </p>
       <p v-else-if=" sudahPunya === false" class="indikator-desktop"> belum punya </p>
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
      images:{
        star: require('./../assets/star.png'),
        search: require('./../assets/search.png'),
        check: require('./../assets/check.png')
      },
      sudahPunya: false
    }
  },
  mounted: function(){

    let self = this;
    let counter = 0;

      // fetch movies data from list id 1 to 20 on page 1
      for(let i = 1; i <= 20; i++){
        fetch('https://api.themoviedb.org/4/list/'+i+'?page=1&api_key='+this.apiKey+'&sort_by=vote_average.desc')
        .then(function(response){
          return response.json();
        })
        .then(function(data){
  
          let list = data['results'];

          // fill listHome with every movie on data['results']
          list.forEach(function(item){
            
            item['poster_mobile'] = 'https://image.tmdb.org/t/p/w500'+item['poster_path'];
            item['poster_desktop'] = 'https://image.tmdb.org/t/p/original'+item['poster_path'];


            let harga = 0;
            if( item['vote_average'] >= 1 && item['vote_average'] <= 3 ){
              harga =  3500;
            }else if( item['vote_average'] > 3 && item['vote_average'] <= 6 ){
              harga =  8250;
            }else if( item['vote_average'] > 6 && item['vote_average'] <= 8 ){
              harga =  16350;
            }else if( item['vote_average'] > 8 && item['vote_average'] <= 10 ){
              harga =  21250;
            }

            function numberWithCommas(x) {
                x = x.toString();
                var pattern = /(-?\d+)(\d{3})/;
                while (pattern.test(x))
                    x = x.replace(pattern, "$1.$2");
                    x = 'Rp. '+x;
                return x;
            }

            counter = counter + 1;
            item['orderNumber'] = counter;
            item['priceText'] =  numberWithCommas(harga);
            item['price'] = harga;
            self.movies.push(item);
          }) 

         
        }).catch( err => {
            throw err;
        })
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

  .search-wrapper{
    width: 80%;
    margin-bottom: 2rem;
   
  }

  .search-icon{
    width: 25px;
    height: 25px;
  }

  .search{
    width: 80%;
    margin-left: 20%;
    margin-right: auto;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #e0e0e0;
    padding: 0 30px;
    height: 40px;
    box-sizing: border-box;
    font-size: 1rem;
    color: #606060;
    padding-left: 1rem;
  }

  /* mobile */
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
  
  .punya{
    color: #5EDB4B;
  }

  /* tablet */
  .movie-tablet{
    width: calc((100% - 1.5rem)/2);
    margin-right: 1.5rem; 
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
  }
  
  .movie-tablet:nth-of-type(2n+1){
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

  /* desktop */

  .movie-desktop{
    width: calc((100% - 4rem)/3);
    margin-right: 2rem; 
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
  }
  
  .movie-desktop:nth-of-type(3n+1){
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

  .movie-mobile:hover , .movie-tablet:hover, .movie-desktop:hover{
    cursor: pointer;
    opacity: .8;
  }
</style>
