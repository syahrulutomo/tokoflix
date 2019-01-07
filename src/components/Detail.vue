<template>
    <div class="detail-container-mobile" v-if="$mq === 'mobile'">
        <div class="movie-detail-mobile">
            <p class="title-mobile">{{ title }}</p>
            <p class="tagline-mobile">{{ tagline }}</p>
            <div class="poster-wrapper-mobile">
                <img class="poster-mobile" v-bind:src="posterMobile">
            </div>
            <p class="overview-mobile">{{ overview }}</p>
            <p class="cast-label-mobile">Cast:</p>
            <div class="cast-wrapper-mobile">              
                <p v-for="cast in casts" v-bind:key="cast.id" class="casts-mobile">{{ cast.name }}</p>
            </div>
            <p class="rating-label-mobile">Rating:</p>
            <div class="rating-wrapper-mobile">
                <img class="star" :src="images.star" v-bind:alt="title">
                <p class="rating-mobile">{{ rating }}</p>
            </div>
            <p class="durasi-label-mobile">Durasi:</p>
            <p class="durasi-mobile">{{ durasi }} menit</p>
            <p class="harga-label-mobile">Harga:</p>
            <p class="harga-mobile">{{ priceText }}</p>
            <p class="indikator-mobile">Status:  Anda {{ indikator }} film ini</p>
        </div>
        <router-link to="/">
            <button class="beli-btn-mobile" v-on:click="beli">Beli</button>
        </router-link>
        <p class="same-label-mobile">Film Serupa</p>
        <div class="same-wrapper-mobile">
            <div v-for="same in similars" v-bind:key="same.id" class="same-mobile">
                <div class="poster-wrapper-mobile">
                    <img class="poster-same-mobile" v-bind:src="same.poster_mobile">
                </div>
                <p class="title-same-mobile">{{ same.title }}</p>
                <p class="price-same-mobile"> {{ same.priceText }} </p>
                    <div class="rating-wrapper-mobile">
                    <img class="star" v-bind:src="images.star" v-bind:alt="same.title">
                    <p class="rating-same-mobile"> {{ same.vote_average }} </p>
                </div>
            </div>
        </div>
        
        <p class="recomend-label-mobile">Rekomendasi Film</p>
        <div class="recomend-wrapper-mobile">
            <div v-for="recomend in recomends" v-bind:key="recomend.id" class="recomend-mobile">
                <div class="poster-wrapper-mobile">
                    <img class="poster-recomend-mobile" v-bind:src="recomend.poster_mobile">
                </div>
                <p class="title-recomend-mobile">{{ recomend.title }}</p>
                <p class="price-recomend-mobile"> {{ recomend.priceText }} </p>
                    <div class="rating-wrapper-mobile">
                    <img class="star" v-bind:src="images.star" v-bind:alt="recomend.title">
                    <p class="rating-recomend-mobile"> {{ recomend.vote_average }} </p>
                </div>
            </div>
        </div>
    </div>

    <div class="detail-container-tablet" v-else-if="$mq === 'tablet'">
        <div class="movie-detail-tablet">
            <p class="title-tablet">{{ title }}</p>
            <p class="tagline-tablet">{{ tagline }}</p>
            <div class="poster-wrapper-tablet">
                <img class="poster-tablet" v-bind:src="posterMobile">
            </div>
            <p class="overview-tablet">{{ overview }}</p>
            <p class="cast-label-tablet">Cast:</p>
            <div class="cast-wrapper-tablet">              
                <p v-for="cast in casts" v-bind:key="cast.id" class="casts-tablet">{{ cast.name }}</p>
            </div>
            <p class="rating-label-tablet">Rating:</p>
            <div class="rating-wrapper-tablet">
                <img class="star" :src="images.star" v-bind:alt="title">
                <p class="rating-tablet">{{ rating }}</p>
            </div>
            <p class="durasi-label-tablet">Durasi:</p>
            <p class="durasi-tablet">{{ durasi }} menit</p>
            <p class="harga-label-tablet">Harga:</p>
            <p class="harga-tablet">{{ priceText }}</p>
            <p class="indikator-tablet">Status:  Anda {{ indikator }} film ini</p>
        </div>
        <router-link to="/">
            <button class="beli-btn-tablet" v-on:click="beli">Beli</button>
        </router-link>
        <p class="same-label-tablet">Film Serupa</p>
        <div class="same-wrapper-tablet">
            <div v-for="same in similars" v-bind:key="same.id" class="same-tablet">
                <div class="poster-wrapper-tablet">
                    <img class="poster-same-tablet" v-bind:src="same.poster_mobile">
                </div>
                <p class="title-same-tablet">{{ same.title }}</p>
                <p class="price-same-tablet"> {{ same.priceText }} </p>
                    <div class="rating-wrapper-tablet">
                    <img class="star" v-bind:src="images.star" v-bind:alt="same.title">
                    <p class="rating-same-tablet"> {{ same.vote_average }} </p>
                </div>
            </div>
        </div>
        
        <p class="recomend-label-tablet">Rekomendasi Film</p>
        <div class="recomend-wrapper-tablet">
            <div v-for="recomend in recomends" v-bind:key="recomend.id" class="recomend-tablet">
                <div class="poster-wrapper-tablet">
                    <img class="poster-recomend-tablet" v-bind:src="recomend.poster_mobile">
                </div>
                <p class="title-recomend-tablet">{{ recomend.title }}</p>
                <p class="price-recomend-tablet"> {{ recomend.priceText }} </p>
                    <div class="rating-wrapper-tablet">
                    <img class="star" v-bind:src="images.star" v-bind:alt="recomend.title">
                    <p class="rating-recomend-tablet"> {{ recomend.vote_average }} </p>
                </div>
            </div>
        </div>
    </div>

    <div class="detail-container-desktop" v-else-if="$mq === 'desktop'">
        <div class="movie-detail-desktop">
            <p class="title-desktop">{{ title }}</p>
            <p class="tagline-desktop">{{ tagline }}</p>
            <div class="poster-wrapper-desktop">
                <img class="poster-desktop" v-bind:src="posterOriginal">
            </div>
            <p class="overview-desktop">{{ overview }}</p>
            <p class="cast-label-desktop">Cast:</p>
            <div class="cast-wrapper-desktop">              
                <p v-for="cast in casts" v-bind:key="cast.id" class="casts-desktop">{{ cast.name }}</p>
            </div>
            <p class="rating-label-desktop">Rating:</p>
            <div class="rating-wrapper-desktop">
                <img class="star" :src="images.star" v-bind:alt="title">
                <p class="rating-desktop">{{ rating }}</p>
            </div>
            <p class="durasi-label-desktop">Durasi:</p>
            <p class="durasi-desktop">{{ durasi }} menit</p>
            <p class="harga-label-desktop">Harga:</p>
            <p class="harga-desktop">{{ priceText }}</p>
            <p class="indikator-desktop">Status:  Anda {{ indikator }} film ini</p>
        </div>
        <router-link to="/">
         <button class="beli-btn-desktop" v-on:click="beli">Beli</button>
        </router-link>
        <p class="same-label-desktop">Film Serupa</p>
        <div class="same-wrapper-desktop">
            <div v-for="same in similars" v-bind:key="same.id" class="same-desktop">
                <div class="poster-wrapper-desktop">
                    <img class="poster-same-desktop" v-bind:src="same.poster_desktop">
                </div>
                <p class="title-same-desktop">{{ same.title }}</p>
                <p class="price-same-desktop"> {{ same.priceText }} </p>
                    <div class="rating-wrapper-desktop">
                    <img class="star" v-bind:src="images.star" v-bind:alt="same.title">
                    <p class="rating-same-desktop"> {{ same.vote_average }} </p>
                </div>
            </div>
        </div>
        
        <p class="recomend-label-desktop">Rekomendasi Film</p>
        <div class="recomend-wrapper-desktop">
            <div v-for="recomend in recomends" v-bind:key="recomend.id" class="recomend-desktop">
                <div class="poster-wrapper-desktop">
                    <img class="poster-recomend-desktop" v-bind:src="recomend.poster_desktop">
                </div>
                <p class="title-recomend-desktop">{{ recomend.title }}</p>
                <p class="price-recomend-desktop"> {{ recomend.priceText }} </p>
                    <div class="rating-wrapper-desktop">
                    <img class="star" v-bind:src="images.star" v-bind:alt="recomend.title">
                    <p class="rating-recomend-desktop"> {{ recomend.vote_average }} </p>
                </div>
            </div>
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
  name: 'Detail',
  data: function(){
    return{
      apiKey: 'c6d705fa0fcbcfbebd83c899a86bbcfb',
      id: 0,
      title: '',
      tagline: '',
      posterMobile: '',
      overview: '',
      posterOriginal: '',
      rating: 0,
      images:{
        star: require('./../assets/star.png'),
        check: require('./../assets/check.png')
      },
      casts: [],
      companies: [],
      genres: [],
      similars: [],
      recomends: [],
      durasi: 0,
      price: 0,
      priceText: '',
      indikator: '',
    }
  },
  created: function(){
      let self = this;
      let id = localStorage.getItem('movieId');
      self.id = id;
      
      let punya = localStorage.getItem('indikator');
      let punyaText = '';
      
      if(punya === 'true'){
         punyaText = 'sudah punya';
      }else if(punya === 'null'){
          punyaText = 'belum punya';
      }
      self.indikator = punyaText;

  },
  mounted: function(){
    
      let self = this;

      fetch('https://api.themoviedb.org/3/movie/'+self.id+'?api_key='+self.apiKey+'&language=en')
      .then(function(response){
        return response.json();
      }).then(function(data){
        self.title = data['title'];
        self.posterMobile = 'https://image.tmdb.org/t/p/w500'+data['poster_path'];
        self.posterOriginal = 'https://image.tmdb.org/t/p/original'+data['poster_path'];
        self.rating = data['vote_average'];
        self.durasi = data['runtime'];
        self.tagline = data['tagline'];
        self.overview = data['overview'];

        let harga = 0;
        if( data['vote_average'] >= 0 && data['vote_average'] <= 3 ){
            harga =  3500;
        }else if( data['vote_average'] > 3 && data['vote_average'] <= 6 ){
            harga =  8250;
        }else if( data['vote_average'] > 6 && data['vote_average'] <= 8 ){
            harga =  16350;
        }else if( data['vote_average'] > 8 && data['vote_average'] <= 10 ){
            harga =  21250;
        }
        self.price = harga; 

        function numberToText(x) {
        x = x.toString();
        let pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
            x = 'Rp. '+x;
         return x;    
       }
      
        self.priceText = numberToText(self.price);

        data['genres'].forEach(function(item){
            self.genres.push(item);
        })
        
        data['production_companies'].forEach(function(item){
            self.companies.push(item);
        })

        fetch('https://api.themoviedb.org/3/movie/'+self.id+'/credits?api_key='+self.apiKey)
        .then(function(response){
            return response.json();
        }).then(function(data){
            data['cast'].forEach(function(item){
                self.casts.push(item);
            })
        })

        fetch('https://api.themoviedb.org/3/movie/'+self.id+'/recommendations?api_key='+self.apiKey+'&language=id&page=1')
        .then(function(response){
            return response.json();
        }).then(function(data){

            if(data['results'].length > 0){
                let list = data['results'].slice(0,6);

                list.forEach(function(item){

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
                    item['priceText'] =  numberToText(harga);
                    item['price'] = harga;

                    self.recomends.push(item);
                })
            }else{
                fetch('https://api.themoviedb.org/3/movie/top_rated?api_key='+self.apiKey+'&language=en-US&page=1&region=id')
                .then(function(response){
                    return response.json()
                }).then(function(data){
                    let list = data['results'].slice(0,6);

                    list.forEach(function(item){
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
                        item['priceText'] =  numberToText(harga);
                        item['price'] = harga;

                        self.recomends.push(item);
                    })
                })
            }
            
        })

        fetch('https://api.themoviedb.org/3/movie/'+self.id+'/similar?api_key='+self.apiKey+'&language=en&page=1')
        .then(function(response){
            return response.json();
        }).then(function(data){

            if(data['results'].length > 0){
                let list = data['results'].slice(0,6);
                
                list.forEach(function(item){

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
                    item['priceText'] =  numberToText(harga);
                    item['price'] = harga;

                    self.similars.push(item);
                })
            }else{
                let genreStr = self.genres[0]['id'];

                for(let i = 1; i < self.genres.length; i++){
                    genreStr = genreStr +'%2C'+ self.genres[0]['id']
                }

                fetch('https://api.themoviedb.org/3/discover/movie?api_key='+self.apiKey+'&language=en-US&region=id&sort_by=release_date.desc&page=1&release_date.gte=2018-10-1&vote_average.gte=1&with_genres='+genreStr)
                .then(function(response){
                    return response.json();
                }).then(function(data){

                    let list = data['results'].slice(0,6);
                    list.forEach(function(item){

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
                        item['priceText'] =  numberToText(harga);
                        item['price'] = harga;

                        self.similars.push(item);
                    })
                })
            }
        })
       
      }).catch( err => {
        throw err;
      })
  },methods:{
      beli: function(){
          localStorage.setItem('harga-beli',this.price);
      }
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Lato');
 @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    div{
        box-sizing: border-box;
    }

    /* mobile */
    
    .detail-container-mobile{
        padding: 0 1.5rem;
    }

    .title-mobile{
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-size: 2rem;
        font-weight: bolder;
        text-align: center;
        color: #343534; 
    }

    .tagline-mobile{
        margin: .3rem 0;
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
        font-weight: bolder;
        text-align: center;
        color: #343534; 
    }

    .poster-wrapper-mobile{
        width: 100%;
        margin-top: 1rem;
    }

    .poster-mobile{
        width: 100%;
    }

    .overview-mobile{
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: justify;
        color: #343534; 
    }

    .cast-wrapper-mobile{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: .7rem;
    }

    .cast-label-mobile{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .casts-mobile{
        margin: .2rem 0;
        margin-right: .6rem;
        font-family: 'Open Sans', sans-serif;
        font-size: .8rem;
    }

    .rating-label-mobile{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .rating-wrapper-mobile{
        display: flex;
        flex-wrap: wrap;
    }

    .star{
        width: 25px;
        height: 25px;
        display: block;
        margin-right: .3rem;
    }

    .rating-mobile{
        width: 10%;
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: .95rem;
        line-height: 1rem;
        color: #343534;
    }

    .durasi-label-mobile{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .durasi-mobile{
        margin: .5rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        color: #343534;
    }

    .harga-label-mobile{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .harga-mobile{
        margin: .5rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        font-weight: bolder;
        color:#45D554;
    }

    .indikator-mobile{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
    }

    .beli-btn-mobile{
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        border: 1px solid transparent;
        margin: 1rem 0;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
    }

    .same-label-mobile{
        margin: 1rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .same-wrapper-mobile{
        display: flex;
        flex-wrap: wrap;
    }

    .same-mobile{
        width: calc((100% - 1rem)/ 2);
        margin-right: 1rem;
        margin-bottom: 1.2rem;
        padding: .5rem;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
    }

    .same-mobile:nth-of-type(2n){
        margin-right: 0;
    }

    .poster-wrapper-mobile{
        width: 100%;
    }

    .poster-same-mobile{
        width: 100%;
        height: 40vh;
    }

    .title-same-mobile{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    } 

    .price-same-mobile{
        margin: .4rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: .9rem;
        color: rgb(255, 87, 34)
    }  

    .rating-same-mobile{
        display: flex;
        flex-wrap: wrap;
    }

    .rating-same-mobile{
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: .9rem;
        line-height: 1.5rem;
        color: #606060;
    }

    .recomend-label-mobile{
        margin: 1rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .recomend-wrapper-mobile{
        display: flex;
        flex-wrap: wrap;
    }

    .recomend-mobile{
        width: calc((100% - 1rem)/ 2);
        margin-right: 1rem;
        margin-bottom: 1.2rem;
        padding: .5rem;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
    }

    .recomend-mobile:nth-of-type(2n){
        margin-right: 0;
    }

    .poster-wrapper-mobile{
        width: 100%;
    }

    .poster-recomend-mobile{
        width: 100%;
        height: 40vh;
    }

    .title-recomend-mobile{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    } 

    .price-recomend-mobile{
        margin: .4rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: .9rem;
        color: rgb(255, 87, 34)
    }  

    .rating-wrapper-mobile{
        display: flex;
        flex-wrap: wrap;
    }

    .rating-recomend-mobile{
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: .9rem;
        line-height: 1.5rem;
        color: #606060;
    }

    /* tablet */

    .detail-container-tablet{
        padding: 0 2.5rem;
    }

    .title-tablet{
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-size: 2rem;
        font-weight: bolder;
        text-align: center;
        color: #343534; 
    }

    .tagline-tablet{
        margin: .3rem 0;
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
        font-weight: bolder;
        text-align: center;
        color: #343534; 
    }

    .poster-wrapper-tablet{
        width: 100%;
        margin-top: 1rem;
    }

    .poster-tablet{
        width: 100%;
    }

    .overview-tablet{
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: justify;
        color: #343534; 
    }

    .cast-wrapper-tablet{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: .7rem;
    }

    .cast-label-tablet{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .casts-tablet{
        margin: .2rem 0;
        margin-right: 1rem;
        font-family: 'Open Sans', sans-serif;
        font-size: .9rem;
    }

    .rating-label-tablet{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .rating-wrapper-tablet{
        display: flex;
        flex-wrap: wrap;
    }

    .star{
        width: 25px;
        height: 25px;
        display: block;
        margin-right: .3rem;
    }

    .rating-tablet{
        width: 10%;
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: .95rem;
        line-height: 1rem;
        color: #343534;
    }

    .durasi-label-tablet{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .durasi-tablet{
        margin: .5rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        color: #343534;
    }

    .harga-label-tablet{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .harga-tablet{
        margin: .5rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        font-weight: bolder;
        color:#45D554;
    }

    .indikator-tablet{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
    }

    .beli-btn-tablet{
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        border: 1px solid transparent;
        margin: 1rem 0;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
    }

    .same-label-tablet{
        margin: 1rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .same-wrapper-tablet{
        display: flex;
        flex-wrap: wrap;
    }

    .same-tablet{
        width: calc((100% - 1rem)/ 2);
        margin-right: 1rem;
        margin-bottom: 1.2rem;
        padding: .5rem;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
    }

    .same-tablet:nth-of-type(2n){
        margin-right: 0;
    }

    .poster-wrapper-tablet{
        width: 100%;
    }

    .poster-same-tablet{
        width: 100%;
        height: 50vh;
    }

    .title-same-tablet{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    } 

    .price-same-tablet{
        margin: .4rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: .9rem;
        color: rgb(255, 87, 34)
    }  

    .rating-same-tablet{
        display: flex;
        flex-wrap: wrap;
    }

    .rating-same-tablet{
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: .9rem;
        line-height: 1.5rem;
        color: #606060;
    }

    .recomend-label-tablet{
        margin: 1rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .recomend-wrapper-tablet{
        display: flex;
        flex-wrap: wrap;
    }

    .recomend-tablet{
        width: calc((100% - 1rem)/ 2);
        margin-right: 1rem;
        margin-bottom: 1.2rem;
        padding: .5rem;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
    }

    .recomend-tablet:nth-of-type(2n){
        margin-right: 0;
    }

    .poster-wrapper-tablet{
        width: 100%;
    }

    .poster-recomend-tablet{
        width: 100%;
        height: 50vh;
    }

    .title-recomend-tablet{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    } 

    .price-recomend-tablet{
        margin: .4rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: .9rem;
        color: rgb(255, 87, 34)
    }  

    .rating-wrapper-tablet{
        display: flex;
        flex-wrap: wrap;
    }

    .rating-recomend-tablet{
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: .9rem;
        line-height: 1.5rem;
        color: #606060;
    }

    /* desktop */

    .detail-container-desktop{
        margin-top: 5rem;
        padding: 0 2.5rem;
    }

    .title-desktop{
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-size: 2rem;
        font-weight: bolder;
        text-align: center;
        color: #343534; 
    }

    .tagline-desktop{
        margin: .3rem 0;
        font-family: 'Lato', sans-serif;
        font-size: 1.1rem;
        font-weight: bolder;
        text-align: center;
        color: #343534; 
    }

    .poster-wrapper-desktop{
        width: 100%;
        margin-top: 1rem;
    }

    .poster-desktop{
        width: 100%;
    }

    .overview-desktop{
        font-family: 'Lato', sans-serif;
        font-size: 1.1rem;
        line-height: 1.5rem;
        text-align: justify;
        color: #343534; 
    }

    .cast-wrapper-desktop{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: .9rem;
    }

    .cast-label-desktop{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
    }

    .casts-desktop{
        margin: .2rem 0;
        margin-right: 1rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
    }

    .rating-label-desktop{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
    }

    .rating-wrapper-desktop{
        display: flex;
        flex-wrap: wrap;
    }

    .star{
        width: 25px;
        height: 25px;
        display: block;
        margin-right: .3rem;
    }

    .rating-desktop{
        width: 10%;
        margin: .5rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        line-height: .7rem;
        color: #343534;
    }

    .durasi-label-desktop{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
    }

    .durasi-desktop{
        margin: .5rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
        color: #343534;
    }

    .harga-label-desktop{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
    }

    .harga-desktop{
        margin: .5rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: bolder;
        color:#45D554;
    }

    .indikator-desktop{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1rem;
    }

    .beli-btn-desktop{
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        border: 1px solid transparent;
        margin: 1rem 0;
        padding: .5rem 1rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
    }

    .same-label-desktop{
        margin: 1rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.4rem;
    }

    .same-wrapper-desktop{
        display: flex;
        flex-wrap: wrap;
    }

    .same-desktop{
        width: calc((100% - 2rem)/ 2);
        margin-right: 2rem;
        margin-bottom: 1.5rem;
        padding: .5rem;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
    }

    .same-desktop:nth-of-type(2n){
        margin-right: 0;
    }

    .poster-wrapper-desktop{
        width: 100%;
    }

    .poster-same-desktop{
        width: 100%;
        height: 70vh;
    }

    .title-same-desktop{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    } 

    .price-same-desktop{
        margin: .4rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: .9rem;
        color: rgb(255, 87, 34)
    }  

    .rating-same-desktop{
        display: flex;
        flex-wrap: wrap;
    }

    .rating-same-desktop{
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: .9rem;
        line-height: 1.5rem;
        color: #606060;
    }

    .recomend-label-desktop{
        margin: 1rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.4rem;
    }

    .recomend-wrapper-desktop{
        display: flex;
        flex-wrap: wrap;
    }

    .recomend-desktop{
        width: calc((100% - 2rem)/ 2);
        margin-right: 2rem;
        margin-bottom: 1.5rem;
        padding: .5rem;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
    }

    .recomend-desktop:nth-of-type(2n){
        margin-right: 0;
    }

    .poster-wrapper-desktop{
        width: 100%;
    }

    .poster-recomend-desktop{
        width: 100%;
        height: 70vh;
    }

    .title-recomend-desktop{
        margin: .3rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    } 

    .price-recomend-desktop{
        margin: .4rem 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: .9rem;
        color: rgb(255, 87, 34)
    }  

    .rating-wrapper-desktop{
        display: flex;
        flex-wrap: wrap;
    }

    .rating-recomend-desktop{
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: .9rem;
        line-height: 1.5rem;
        color: #606060;
    }


</style>
