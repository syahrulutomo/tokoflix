(function(t){function e(e){for(var s,o,l=e[0],n=e[1],c=e[2],d=0,v=[];d<l.length;d++)o=l[d],i[o]&&v.push(i[o][0]),i[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);p&&p(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var n=a[l];0!==i[n]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=n;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},"1d21":function(t,e,a){"use strict";var s=a("fe1e"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},["mobile"===t.$mq||"tablet"===t.$mq?a("div",{staticClass:"navbar-expanded",class:{open:t.isOpen}},[t._m(0)]):t._e(),a("div",{staticClass:"header"},[a("router-link",{attrs:{to:"/"}},["mobile"===t.$mq||"tablet"===t.$mq?a("a",{staticClass:"logo",attrs:{href:"#"}},[t._v("Tokoflix")]):t._e()]),a("router-link",{attrs:{to:"/"}},["desktop"===t.$mq?a("a",{staticClass:"logoBig",attrs:{href:"#"}},[t._v("Tokoflix")]):t._e()]),a("nav",{staticClass:"navbar"},["desktop"===t.$mq?a("ul",{staticClass:"menu"},[t._m(1),t._m(2),t._m(3)]):t._e()]),a("img",{staticClass:"user-icon",attrs:{src:t.images.userIcon}}),a("a",{attrs:{id:"drawer",href:"#"}},["mobile"===t.$mq||"tablet"===t.$mq?a("img",{attrs:{src:t.images.drawerImg},on:{click:t.showNavbarExpanded}}):t._e()])],1),a("router-view")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"menu-expanded"},[a("li",{staticClass:"menu-list-expanded"},[a("a",{staticClass:"menu-item-expanded",attrs:{href:"#"}},[t._v("Discover")])]),a("li",{staticClass:"menu-list-expanded"},[a("a",{staticClass:"menu-item-expanded",attrs:{href:"#"}},[t._v("Genres")])]),a("li",{staticClass:"menu-list-expanded"},[a("a",{staticClass:"menu-item-expanded",attrs:{href:"#"}},[t._v("Companies")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-list"},[a("a",{staticClass:"menu-item",attrs:{href:"#"}},[t._v("Discover")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-list"},[a("a",{staticClass:"menu-item",attrs:{href:"#"}},[t._v("Genres")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-list"},[a("a",{staticClass:"menu-item",attrs:{href:"#"}},[t._v("Companies")])])}],o=a("660e");s["a"].use(o["a"],{breakpoints:{mobile:500,tablet:800,desktop:1200}});var l={name:"app",components:{},data:function(){return{images:{drawerImg:a("afa9"),userIcon:a("c121")},isOpen:!1}},methods:{showNavbarExpanded:function(){!1===this.isOpen?this.isOpen=!0:this.isOpen=!1}}},n=l,c=(a("034f"),a("2877")),p=Object(c["a"])(n,i,r,!1,null,null,null);p.options.__file="App.vue";var d=p.exports,v=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"mobile"===t.$mq?a("div",{staticClass:"container home-container"},[a("p",{staticClass:"saldo-mobile"},[t._v(t._s(t.saldoText))]),t._l(t.filteredData,function(e){return a("div",{key:e.orderNumber,staticClass:"movie-mobile"},[a("div",{staticClass:"poster-wrapper-mobile"},[a("router-link",{attrs:{to:e.path}},[a("img",{staticClass:"poster-mobile",attrs:{src:e.poster_mobile,"data-id":e.id,"data-punya":e.indikator},on:{click:function(e){t.sendData(e)}}})])],1),a("p",{staticClass:"title-mobile"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-mobile"},[t._v(" "+t._s(e.priceText))]),a("div",{staticClass:"rating-wrapper-mobile"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-mobile"},[t._v(" "+t._s(e.vote_average)+" ")])]),!0===e.indikator?a("p",{staticClass:"indikator-mobile punya"},[a("img",{staticClass:"check",attrs:{src:t.images.check}}),t._v(" \n     sudah punya ")]):!1===e.indikator?a("p",{staticClass:"indikator-mobile"},[t._v(" belum punya ")]):t._e()])}),a("div",{staticClass:"page-wrapper-mobile"},[a("router-link",{attrs:{to:"/?page="+this.prevPage}},[a("button",{staticClass:"page-prev-mobile",on:{click:function(e){t.decreasePage()}}},[t._v("Previous")])]),a("router-link",{attrs:{to:"/?page="+this.nextPage}},[a("button",{staticClass:"page-next-mobile",on:{click:function(e){t.increasePage()}}},[t._v("Next")])])],1)],2):"tablet"===t.$mq?a("div",{staticClass:"container home-container-tablet"},[a("p",{staticClass:"saldo-tablet"},[t._v(t._s(t.saldoText))]),t._l(t.filteredData,function(e){return a("div",{key:e.orderNumber,staticClass:"movie-tablet"},[a("div",{staticClass:"poster-wrapper-tablet"},[a("router-link",{attrs:{to:e.path}},[a("img",{staticClass:"poster-tablet",attrs:{src:e.poster_mobile,"data-id":e.id,"data-punya":e.indikator},on:{click:function(e){t.sendData(e)}}})])],1),a("p",{staticClass:"title-tablet"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-tablet"},[t._v(" "+t._s(e.priceText)+" ")]),a("div",{staticClass:"rating-wrapper-tablet"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-tablet"},[t._v(" "+t._s(e.vote_average)+" ")])]),!0===e.indikator?a("p",{staticClass:"indikator-tablet punya"},[a("img",{staticClass:"check",attrs:{src:t.images.check}}),t._v(" \n     sudah punya ")]):!1===e.indikator?a("p",{staticClass:"indikator-tablet"},[t._v(" belum punya ")]):t._e()])}),a("div",{staticClass:"page-wrapper-tablet"},[a("router-link",{attrs:{to:"/?page="+this.pageParam}},[a("button",{staticClass:"page-prev-tablet",on:{click:function(e){t.decreasePage()}}},[t._v("Previous")])]),a("router-link",{attrs:{to:"/?page="+this.pageParam}},[a("button",{staticClass:"page-next-tablet",on:{click:function(e){t.increasePage()}}},[t._v("Next")])])],1)],2):"desktop"===t.$mq?a("div",{staticClass:"container home-container-desktop"},[a("p",{staticClass:"saldo-desktop"},[t._v(t._s(t.saldoText))]),t._l(t.filteredData,function(e){return a("div",{key:e.orderNumber,staticClass:"movie-desktop"},[a("div",{staticClass:"poster-wrapper-desktop"},[a("router-link",{attrs:{to:e.path}},[a("img",{staticClass:"poster-desktop",attrs:{src:e.poster_desktop,"data-id":e.id,"data-punya":e.indikator},on:{click:function(e){t.sendData(e)}}})])],1),a("p",{staticClass:"title-desktop"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-desktop"},[t._v(" "+t._s(e.priceText)+" ")]),a("div",{staticClass:"rating-wrapper-desktop"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-desktop"},[t._v(" "+t._s(e.vote_average)+" ")])]),!0===e.indikator?a("p",{staticClass:"indikator-desktop punya"},[a("img",{staticClass:"check",attrs:{src:t.images.check}}),t._v(" \n     sudah punya ")]):!1===e.indikator?a("p",{staticClass:"indikator-desktop"},[t._v(" belum punya ")]):t._e()])}),a("div",{staticClass:"page-wrapper-desktop"},[a("router-link",{attrs:{to:"/?page="+this.pageParam}},[a("button",{staticClass:"page-prev-desktop",on:{click:function(e){t.decreasePage()}}},[t._v("Previous")])]),a("router-link",{attrs:{to:"/?page="+this.pageParam}},[a("button",{staticClass:"page-next-desktop",on:{click:function(e){t.increasePage()}}},[t._v("Next")])])],1)],2):t._e()},m=[];a("ac6a"),a("c5f6"),a("a481"),a("6b54");s["a"].use(o["a"],{breakpoints:{mobile:500,tablet:800,desktop:1200}});var u={name:"Home",data:function(){return{apiKey:"c6d705fa0fcbcfbebd83c899a86bbcfb",movies:[],collection:[],images:{star:a("6c8d"),search:a("bbc5"),check:a("f0c8")},saldo:1e5,pageNumber:1,pageParam:1}},computed:{filteredData:function(){var t=4*this.pageNumber-1-3;return this.movies.slice(t,4*this.pageNumber)},saldoText:function(){var t=this.saldo.toString(),e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1.$2");return t="Rp. "+t,t},nextPage:function(){var t=this.pageNumber;return t+1},prevPage:function(){var t=this.pageNumber;return t-1}},mounted:function(){var t=this,e=0;if(null!==localStorage.getItem("harga-beli")){var a=Number(localStorage.getItem("harga-beli"));t.saldo-=a}if(null!==localStorage.getItem("movieId")){var s=Number(localStorage.getItem("movieId"));t.collection.push(s)}fetch("https://api.themoviedb.org/3/movie/now_playing?api_key="+t.apiKey+"&language=id&page=1&region=id").then(function(t){return t.json()}).then(function(a){var s=a["results"];s.forEach(function(a){var s=!1;-1!==t.collection.indexOf(a["id"])?s=!0:-1===t.collection.indexOf(a["id"])&&(s=!1),a["indikator"]=s,a["poster_mobile"]="https://image.tmdb.org/t/p/w500"+a["poster_path"],a["poster_desktop"]="https://image.tmdb.org/t/p/original"+a["poster_path"];var i=0;function r(t){t=t.toString();var e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1.$2");return t="Rp. "+t,t}a["vote_average"]>=0&&a["vote_average"]<=3?i=3500:a["vote_average"]>3&&a["vote_average"]<=6?i=8250:a["vote_average"]>6&&a["vote_average"]<=8?i=16350:a["vote_average"]>8&&a["vote_average"]<=10&&(i=21250);var o=a["title"].replace(" ","-");a["path"]=a["id"]+"-"+o,a["slug"]=o,e+=1,a["orderNumber"]=e,a["priceText"]=r(i),a["price"]=i,null!==a["poster_path"]&&t.movies.push(a)})}).catch(function(t){throw t})},methods:{increasePage:function(){++this.pageNumber},decreasePage:function(){--this.pageNumber},sendData:function(){var t=event.currentTarget.getAttribute("data-id");localStorage.setItem("movieId",t);var e=event.currentTarget.getAttribute("data-indikator");null===e?localStorage.setItem("indikator",!1):!0===e&&localStorage.setItem("indikator",!0)}}},A=u,b=(a("1d21"),Object(c["a"])(A,g,m,!1,null,"1a4c6ff8",null));b.options.__file="Home.vue";var C=b.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"mobile"===t.$mq?a("div",{staticClass:"detail-container-mobile"},[a("div",{staticClass:"movie-detail-mobile"},[a("p",{staticClass:"title-mobile"},[t._v(t._s(t.title))]),a("p",{staticClass:"tagline-mobile"},[t._v(t._s(t.tagline))]),a("div",{staticClass:"poster-wrapper-mobile"},[a("img",{staticClass:"poster-mobile",attrs:{src:t.posterMobile}})]),a("p",{staticClass:"overview-mobile"},[t._v(t._s(t.overview))]),a("p",{staticClass:"cast-label-mobile"},[t._v("Cast:")]),a("div",{staticClass:"cast-wrapper-mobile"},t._l(t.casts,function(e){return a("p",{key:e.id,staticClass:"casts-mobile"},[t._v(t._s(e.name))])}),0),a("p",{staticClass:"rating-label-mobile"},[t._v("Rating:")]),a("div",{staticClass:"rating-wrapper-mobile"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:t.title}}),a("p",{staticClass:"rating-mobile"},[t._v(t._s(t.rating))])]),a("p",{staticClass:"durasi-label-mobile"},[t._v("Durasi:")]),a("p",{staticClass:"durasi-mobile"},[t._v(t._s(t.durasi)+" menit")]),a("p",{staticClass:"harga-label-mobile"},[t._v("Harga:")]),a("p",{staticClass:"harga-mobile"},[t._v(t._s(t.priceText))]),a("p",{staticClass:"indikator-mobile"},[t._v("Status:  Anda "+t._s(t.indikator)+" film ini")])]),a("router-link",{attrs:{to:"/"}},[a("button",{staticClass:"beli-btn-mobile",on:{click:t.beli}},[t._v("Beli")])]),a("p",{staticClass:"same-label-mobile"},[t._v("Film Serupa")]),a("div",{staticClass:"same-wrapper-mobile"},t._l(t.similars,function(e){return a("div",{key:e.id,staticClass:"same-mobile"},[a("div",{staticClass:"poster-wrapper-mobile"},[a("img",{staticClass:"poster-same-mobile",attrs:{src:e.poster_mobile}})]),a("p",{staticClass:"title-same-mobile"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-same-mobile"},[t._v(" "+t._s(e.priceText)+" ")]),a("div",{staticClass:"rating-wrapper-mobile"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-same-mobile"},[t._v(" "+t._s(e.vote_average)+" ")])])])}),0),a("p",{staticClass:"recomend-label-mobile"},[t._v("Rekomendasi Film")]),a("div",{staticClass:"recomend-wrapper-mobile"},t._l(t.recomends,function(e){return a("div",{key:e.id,staticClass:"recomend-mobile"},[a("div",{staticClass:"poster-wrapper-mobile"},[a("img",{staticClass:"poster-recomend-mobile",attrs:{src:e.poster_mobile}})]),a("p",{staticClass:"title-recomend-mobile"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-recomend-mobile"},[t._v(" "+t._s(e.priceText)+" ")]),a("div",{staticClass:"rating-wrapper-mobile"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-recomend-mobile"},[t._v(" "+t._s(e.vote_average)+" ")])])])}),0)],1):"tablet"===t.$mq?a("div",{staticClass:"detail-container-tablet"},[a("div",{staticClass:"movie-detail-tablet"},[a("p",{staticClass:"title-tablet"},[t._v(t._s(t.title))]),a("p",{staticClass:"tagline-tablet"},[t._v(t._s(t.tagline))]),a("div",{staticClass:"poster-wrapper-tablet"},[a("img",{staticClass:"poster-tablet",attrs:{src:t.posterMobile}})]),a("p",{staticClass:"overview-tablet"},[t._v(t._s(t.overview))]),a("p",{staticClass:"cast-label-tablet"},[t._v("Cast:")]),a("div",{staticClass:"cast-wrapper-tablet"},t._l(t.casts,function(e){return a("p",{key:e.id,staticClass:"casts-tablet"},[t._v(t._s(e.name))])}),0),a("p",{staticClass:"rating-label-tablet"},[t._v("Rating:")]),a("div",{staticClass:"rating-wrapper-tablet"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:t.title}}),a("p",{staticClass:"rating-tablet"},[t._v(t._s(t.rating))])]),a("p",{staticClass:"durasi-label-tablet"},[t._v("Durasi:")]),a("p",{staticClass:"durasi-tablet"},[t._v(t._s(t.durasi)+" menit")]),a("p",{staticClass:"harga-label-tablet"},[t._v("Harga:")]),a("p",{staticClass:"harga-tablet"},[t._v(t._s(t.priceText))]),a("p",{staticClass:"indikator-tablet"},[t._v("Status:  Anda "+t._s(t.indikator)+" film ini")])]),a("router-link",{attrs:{to:"/"}},[a("button",{staticClass:"beli-btn-tablet",on:{click:t.beli}},[t._v("Beli")])]),a("p",{staticClass:"same-label-tablet"},[t._v("Film Serupa")]),a("div",{staticClass:"same-wrapper-tablet"},t._l(t.similars,function(e){return a("div",{key:e.id,staticClass:"same-tablet"},[a("div",{staticClass:"poster-wrapper-tablet"},[a("img",{staticClass:"poster-same-tablet",attrs:{src:e.poster_mobile}})]),a("p",{staticClass:"title-same-tablet"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-same-tablet"},[t._v(" "+t._s(e.priceText)+" ")]),a("div",{staticClass:"rating-wrapper-tablet"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-same-tablet"},[t._v(" "+t._s(e.vote_average)+" ")])])])}),0),a("p",{staticClass:"recomend-label-tablet"},[t._v("Rekomendasi Film")]),a("div",{staticClass:"recomend-wrapper-tablet"},t._l(t.recomends,function(e){return a("div",{key:e.id,staticClass:"recomend-tablet"},[a("div",{staticClass:"poster-wrapper-tablet"},[a("img",{staticClass:"poster-recomend-tablet",attrs:{src:e.poster_mobile}})]),a("p",{staticClass:"title-recomend-tablet"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-recomend-tablet"},[t._v(" "+t._s(e.priceText)+" ")]),a("div",{staticClass:"rating-wrapper-tablet"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-recomend-tablet"},[t._v(" "+t._s(e.vote_average)+" ")])])])}),0)],1):"desktop"===t.$mq?a("div",{staticClass:"detail-container-desktop"},[a("div",{staticClass:"movie-detail-desktop"},[a("p",{staticClass:"title-desktop"},[t._v(t._s(t.title))]),a("p",{staticClass:"tagline-desktop"},[t._v(t._s(t.tagline))]),a("div",{staticClass:"poster-wrapper-desktop"},[a("img",{staticClass:"poster-desktop",attrs:{src:t.posterOriginal}})]),a("p",{staticClass:"overview-desktop"},[t._v(t._s(t.overview))]),a("p",{staticClass:"cast-label-desktop"},[t._v("Cast:")]),a("div",{staticClass:"cast-wrapper-desktop"},t._l(t.casts,function(e){return a("p",{key:e.id,staticClass:"casts-desktop"},[t._v(t._s(e.name))])}),0),a("p",{staticClass:"rating-label-desktop"},[t._v("Rating:")]),a("div",{staticClass:"rating-wrapper-desktop"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:t.title}}),a("p",{staticClass:"rating-desktop"},[t._v(t._s(t.rating))])]),a("p",{staticClass:"durasi-label-desktop"},[t._v("Durasi:")]),a("p",{staticClass:"durasi-desktop"},[t._v(t._s(t.durasi)+" menit")]),a("p",{staticClass:"harga-label-desktop"},[t._v("Harga:")]),a("p",{staticClass:"harga-desktop"},[t._v(t._s(t.priceText))]),a("p",{staticClass:"indikator-desktop"},[t._v("Status:  Anda "+t._s(t.indikator)+" film ini")])]),a("router-link",{attrs:{to:"/"}},[a("button",{staticClass:"beli-btn-desktop",on:{click:t.beli}},[t._v("Beli")])]),a("p",{staticClass:"same-label-desktop"},[t._v("Film Serupa")]),a("div",{staticClass:"same-wrapper-desktop"},t._l(t.similars,function(e){return a("div",{key:e.id,staticClass:"same-desktop"},[a("div",{staticClass:"poster-wrapper-desktop"},[a("img",{staticClass:"poster-same-desktop",attrs:{src:e.poster_desktop}})]),a("p",{staticClass:"title-same-desktop"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-same-desktop"},[t._v(" "+t._s(e.priceText)+" ")]),a("div",{staticClass:"rating-wrapper-desktop"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-same-desktop"},[t._v(" "+t._s(e.vote_average)+" ")])])])}),0),a("p",{staticClass:"recomend-label-desktop"},[t._v("Rekomendasi Film")]),a("div",{staticClass:"recomend-wrapper-desktop"},t._l(t.recomends,function(e){return a("div",{key:e.id,staticClass:"recomend-desktop"},[a("div",{staticClass:"poster-wrapper-desktop"},[a("img",{staticClass:"poster-recomend-desktop",attrs:{src:e.poster_desktop}})]),a("p",{staticClass:"title-recomend-desktop"},[t._v(t._s(e.title))]),a("p",{staticClass:"price-recomend-desktop"},[t._v(" "+t._s(e.priceText)+" ")]),a("div",{staticClass:"rating-wrapper-desktop"},[a("img",{staticClass:"star",attrs:{src:t.images.star,alt:e.title}}),a("p",{staticClass:"rating-recomend-desktop"},[t._v(" "+t._s(e.vote_average)+" ")])])])}),0)],1):t._e()},h=[];s["a"].use(o["a"],{breakpoints:{mobile:500,tablet:800,desktop:1200}});var f={name:"Detail",data:function(){return{apiKey:"c6d705fa0fcbcfbebd83c899a86bbcfb",id:0,title:"",tagline:"",posterMobile:"",overview:"",posterOriginal:"",rating:0,images:{star:a("6c8d"),check:a("f0c8")},casts:[],companies:[],genres:[],similars:[],recomends:[],durasi:0,price:0,priceText:"",indikator:""}},created:function(){var t=this,e=localStorage.getItem("movieId");t.id=e;var a=localStorage.getItem("indikator"),s="";"true"===a?s="sudah punya":"false"===a&&(s="belum punya"),t.indikator=s},mounted:function(){var t=this;fetch("https://api.themoviedb.org/3/movie/"+t.id+"?api_key="+t.apiKey+"&language=en").then(function(t){return t.json()}).then(function(e){t.title=e["title"],t.posterMobile="https://image.tmdb.org/t/p/w500"+e["poster_path"],t.posterOriginal="https://image.tmdb.org/t/p/original"+e["poster_path"],t.rating=e["vote_average"],t.durasi=e["runtime"],t.tagline=e["tagline"],t.overview=e["overview"];var a=0;function s(t){t=t.toString();var e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1.$2");return t="Rp. "+t,t}e["vote_average"]>=0&&e["vote_average"]<=3?a=3500:e["vote_average"]>3&&e["vote_average"]<=6?a=8250:e["vote_average"]>6&&e["vote_average"]<=8?a=16350:e["vote_average"]>8&&e["vote_average"]<=10&&(a=21250),t.price=a,t.priceText=s(t.price),e["genres"].forEach(function(e){t.genres.push(e)}),e["production_companies"].forEach(function(e){t.companies.push(e)}),fetch("https://api.themoviedb.org/3/movie/"+t.id+"/credits?api_key="+t.apiKey).then(function(t){return t.json()}).then(function(e){e["cast"].forEach(function(e){t.casts.push(e)})}),fetch("https://api.themoviedb.org/3/movie/"+t.id+"/recommendations?api_key="+t.apiKey+"&language=id&page=1").then(function(t){return t.json()}).then(function(e){e["results"].length>0?e["results"].forEach(function(e){e["poster_mobile"]="https://image.tmdb.org/t/p/w500"+e["poster_path"],e["poster_desktop"]="https://image.tmdb.org/t/p/original"+e["poster_path"];var a=0;function s(t){t=t.toString();var e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1.$2");return t="Rp. "+t,t}e["vote_average"]>=0&&e["vote_average"]<=3?a=3500:e["vote_average"]>3&&e["vote_average"]<=6?a=8250:e["vote_average"]>6&&e["vote_average"]<=8?a=16350:e["vote_average"]>8&&e["vote_average"]<=10&&(a=21250),e["priceText"]=s(a),e["price"]=a,t.recomends.push(e)}):fetch("https://api.themoviedb.org/3/movie/top_rated?api_key="+t.apiKey+"&language=en-US&page=1&region=id").then(function(t){return t.json()}).then(function(e){var a=e["results"].slice(0,6);a.forEach(function(e){e["poster_mobile"]="https://image.tmdb.org/t/p/w500"+e["poster_path"],e["poster_desktop"]="https://image.tmdb.org/t/p/original"+e["poster_path"];var a=0;function s(t){t=t.toString();var e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1.$2");return t="Rp. "+t,t}e["vote_average"]>=0&&e["vote_average"]<=3?a=3500:e["vote_average"]>3&&e["vote_average"]<=6?a=8250:e["vote_average"]>6&&e["vote_average"]<=8?a=16350:e["vote_average"]>8&&e["vote_average"]<=10&&(a=21250),e["priceText"]=s(a),e["price"]=a,t.recomends.push(e)})})}),fetch("https://api.themoviedb.org/3/movie/"+t.id+"/similar?api_key="+t.apiKey+"&language=en&page=1").then(function(t){return t.json()}).then(function(e){if(e["results"].length>0)e["results"].forEach(function(e){e["poster_mobile"]="https://image.tmdb.org/t/p/w500"+e["poster_path"],e["poster_desktop"]="https://image.tmdb.org/t/p/original"+e["poster_path"];var a=0;function s(t){t=t.toString();var e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1.$2");return t="Rp. "+t,t}e["vote_average"]>=0&&e["vote_average"]<=3?a=3500:e["vote_average"]>3&&e["vote_average"]<=6?a=8250:e["vote_average"]>6&&e["vote_average"]<=8?a=16350:e["vote_average"]>8&&e["vote_average"]<=10&&(a=21250),e["priceText"]=s(a),e["price"]=a,t.similars.push(e)});else{for(var a=t.genres[0]["id"],s=1;s<t.genres.length;s++)a=a+"%2C"+t.genres[0]["id"];fetch("https://api.themoviedb.org/3/discover/movie?api_key="+t.apiKey+"&language=en-US&region=id&sort_by=release_date.desc&page=1&release_date.gte=2018-10-1&vote_average.gte=1&with_genres="+a).then(function(t){return t.json()}).then(function(e){var a=e["results"].slice(0,6);a.forEach(function(e){e["poster_mobile"]="https://image.tmdb.org/t/p/w500"+e["poster_path"],e["poster_desktop"]="https://image.tmdb.org/t/p/original"+e["poster_path"];var a=0;function s(t){t=t.toString();var e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1.$2");return t="Rp. "+t,t}e["vote_average"]>=0&&e["vote_average"]<=3?a=3500:e["vote_average"]>3&&e["vote_average"]<=6?a=8250:e["vote_average"]>6&&e["vote_average"]<=8?a=16350:e["vote_average"]>8&&e["vote_average"]<=10&&(a=21250),e["priceText"]=s(a),e["price"]=a,t.similars.push(e)})})}})}).catch(function(t){throw t})},methods:{beli:function(){localStorage.setItem("harga-beli",this.price)}}},k=f,w=(a("6d33"),Object(c["a"])(k,_,h,!1,null,null,null));w.options.__file="Detail.vue";var E=w.exports;s["a"].use(v["a"]);var R=new v["a"]({routes:[{path:"/",component:C,props:!0},{path:"/:id-:slug",component:E}]});s["a"].config.productionTip=!1,new s["a"]({router:R,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,a){},"6c8d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA51BMVEVEREBEREBEREBEREBEREBEREBEREBEREBEREBEREBEREBEREBEREBEREACAgIICAcICAcJCQgODg0AAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQBAQEEBAQgIB4EBAQBAQEGBgUAAAAVFRQGBgYiIiAHBwcJCQgFBQQICAgKCgkEBAQAAAABAQELCwsFBQUNDQwBAQEAAAAFBQUCAgEXFxYAAAAKCgoAAAARERAAAAAQEA8CAgIGBgYBAQEFBQUBAQEGBgUHBwcBAQEBAQEFBQUEBAMEBAQAAAABAQGbkw0lAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjAQYCGTmDjkCeAAAA0ElEQVRIx+2WyRWDMAxEKSIpgZcKkh7sUf/1hMXBSyRbE3JEnHj4MyMhGU/TFUrcEVgEApKYBYFkwkJEnuAY7MwPKgQjYJ29NoXIMMkV4eyWCS8TCpXIrV6u9V4guv31CY5KtQy2qAGgSyQGNeJQqXQcq1tn6XsPmO8pJIm9vt48PvEg8siFs5nZ7Ed/HkOm2/daHv2+jDRDVavIhVNRFDDYajVX1oj9XQUcMXDWzHke7u5/SMqqHsxQpX6JQ0Xb0p+dHR9GS9gqVutdJ5RT8QZvfd+WhdZr7AAAAABJRU5ErkJggg=="},"6d33":function(t,e,a){"use strict";var s=a("7b13"),i=a.n(s);i.a},"7b13":function(t,e,a){},afa9:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAclBMVEV0d3h0d3lzdnhzd3lzd3dzdXh0d3l0d3hzeHh0d3h0d3lxeHx1d3h0dnh0d3lzdnh0dnhzd3lzdXl0d3l0d3hzd3lzdnhzdnlzdnh0d3lzdnl0dnhzd3lzdnhvb3Jzdnlzdnl0dnlzd3hzdnh0dnl0d3mRmNM6AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjAQUWAA/erthdAAAAPUlEQVRIx2NgGAWjYHADVTIAJXrhukeiZopCmwzto8l7NEOTkkpGCwO65meKyoJRMJqfR/PzaH4eBSMCAACAt7ZnhaVwlAAAAABJRU5ErkJggg=="},bbc5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wEGAjUPdQW+qQAAA75JREFUaN7VmVuITHEcxz8zu9isXbvGslZI2SXkUu5ZSy5PthXhaUPkgVK8KJEH2rx4cCuKFFYJeUBekLsN5VJYu3K/rAittfbGeJj/1G9/ndk5Z/bMzDm/+tf5z5nf5XvO7/xu/wCJUxYwAygDxgElwCAgGwgATcAXoB54AlwHbgPNeISmAEeAn0DY4foFHANK0wlgKnA1AeNjrVvALLeMC9j4Tw6wG1gNBNW9duC+MaoWeA/8MPfygMHAKGCmeZO9FH8YqAY2CL6k0ASgzuJpPgXWASEHsvKANcBDC3lvgGnJAjEfaLRQuNTizTj1gnKLB9QMLHIbxAKgVSk6CPR2UUcv47L/hI4OYIlbCiaZ0BkV3gasSKL7Lgb+CH0tJqR3i/KB1wpEeQoi4mzjWlG9n4HC7gisVu5UmcLwXgH8FbovJCpongKxPw25aoeyYXEiQu6p6JSdBiCZKjzXARlOo5R8EhVprCDKlC3LnTCfEYyPbGb8ZNI1Yc9lJxm3RTCu9UBhukzY8xcoshstZLjN8wCQLFVVxM1jQRPD5Qf/0wNAWoAbKs/EBTJG7O/iHbojrsfaAVIs9rUeAiJtKbYDpJ/YN3gIiLQlN14+CaqK9reHgDSp0r9PPCDtYt/TQ0B0N9kaD0ijyileIWlLm4lkXQJ55+SjSiGViOs3dj52GR3GewiItOWFHSA1Yj+nm/24mzQ3Rk6JSSNVtTnHAyAmKpsm22V8LJiOewDIPmHPKyfV+EbB2A4MTyOIgSafRe3Z7oQ5F/gumE+lEcghYcdvoL9TAVuVXy5MA4hSNYCoSrQHqBdCvgFDUwhiAPBB6P9AZO6ccL/cQecZbygFIHLU8OMfkZFtt2iLcrFHRA5wkkUhIgdAUudONwQHiBzkSMFvgelJAGE17X/mZlLOMPkkrPr5KtyZd2UB2+g885Vrt5tPKwDsovO0PAx8BDaZkO2UsoH1pgjUxuujvD24PJYqB75aKG42+WYVMCJGBxc0ybUSOEHkDFHL+WR0DDNZXN474DaYkElUHcQ+E2wxhjww62UXrhM9CzmqWu0hKgVEz2VcHxgWA4dVCeF0NQF7uyiDBpuyXfIcTlZVnmPcpdq4RjzjG4Czxg3zbcgvAp4rGUe7GkC49coKzNsqMkOCDNNCNxh3+5iAzELgCjBa/HYCWGnKGF9RgWoxogVtJj6kfCJn+RLMaaCHH8HkqVosDJy3GBn5BkyNAnPRVAm+o75EBu0SzCW/gsm1qJZP4lPKAW4KII34mPoA5wyIzf8BOOmNd4mO4wQAAAAASUVORK5CYII="},c121:function(t,e,a){t.exports=a.p+"img/user.68c73e6e.png"},f0c8:function(t,e){t.exports="data:image/png;base64,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"},fe1e:function(t,e,a){}});
//# sourceMappingURL=app.7f696a41.js.map