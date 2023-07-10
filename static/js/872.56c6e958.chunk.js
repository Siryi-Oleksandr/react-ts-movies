"use strict";(self.webpackChunkreact_ts_movies=self.webpackChunkreact_ts_movies||[]).push([[872],{9262:function(n,e,r){r(2791);var t=r(184);e.Z=function(n){var e=n.error;return(0,t.jsxs)("div",{style:{textAlign:"center"},children:[(0,t.jsx)("h1",{children:"Something went wrong!"}),(0,t.jsx)("p",{children:e})]})}},5782:function(n,e,r){r.d(e,{Z:function(){return m}});var t,a,i,o,s=r(7689),c=r(1087),u=r(168),d=r(5867),l=d.ZP.ul(t||(t=(0,u.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px;\n"]))),p=d.ZP.li(a||(a=(0,u.Z)(["\n  padding: 5px;\n  border-radius: 10px;\n  width: 100%;\n\n  &:not(:last-child) {\n    @media screen and (max-width: 767px) {\n      margin: 0 auto;\n      margin-bottom: 20px;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 394px;\n  }\n\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px 10px,\n      rgba(0, 0, 0, 0.3) 0px 10px 7px -2px;\n    transform: scale(1.03);\n  }\n"]))),v=d.ZP.div(i||(i=(0,u.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n\n  > img {\n    object-fit: cover;\n  }\n"]))),h=d.ZP.div(o||(o=(0,u.Z)(["\n  padding-top: 10px;\n  overflow: hidden;\n"]))),g=r(9093),f=r(184),m=function(n){var e=(0,s.TH)();return(0,f.jsx)(l,{children:n.movies.map((function(n){var r=n.id,t=n.poster_path,a=n.original_title,i=n.name,o=n.vote_average,s=n.vote_count;return(0,f.jsx)(p,{children:(0,f.jsxs)(c.OL,{to:"/movies/".concat(r),state:{from:e},children:[(0,f.jsx)(v,{children:(0,f.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500"+t:g,alt:i})}),(0,f.jsxs)(h,{children:[(0,f.jsx)("h2",{children:null!==a&&void 0!==a?a:i}),(0,f.jsxs)("p",{children:["Rating: ",o]}),(0,f.jsxs)("p",{children:["Votes: ",s," "]})]})]})},r)}))})}},8238:function(n,e,r){r.d(e,{V:function(){return l}});var t=r(4165),a=r(5861),i=r(5671),o=r(3144),s=r(1243),c=r(9014),u=s.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d03712107dcdd723f1173c5ee2c0d8c1"}}),d=function(){function n(){(0,i.Z)(this,n)}return(0,o.Z)(n,[{key:"getTrendingMovies",value:function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e,r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("trending/movie/day",{params:{language:"en-US"}});case 3:if(204!==(r=n.sent).status){n.next=6;break}throw new Error("no movies");case 6:return n.abrupt("return",null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.results);case 9:n.prev=9,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}()},{key:"getMoviesByQuery",value:function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("search/movie",{params:{query:e,signal:r.signal}});case 3:return i=n.sent,n.abrupt("return",null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.results);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}()},{key:"getMoviesDetailsById",value:function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("movie/".concat(e),{params:{signal:r.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a?void 0:a.data);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("movie/".concat(e,"/credits"),{params:{signal:r.signal}});case 3:return i=n.sent,n.abrupt("return",null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.cast);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("movie/".concat(e,"/reviews"),{params:{signal:r.signal}});case 3:return i=n.sent,n.abrupt("return",null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.results);case 7:n.prev=7,n.t0=n.catch(0),c.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}()}]),n}(),l=new d},8872:function(n,e,r){r.r(e);var t=r(9439),a=r(2791),i=r(8238),o=r(5782),s=r(5802),c=r(9262),u=r(184);e.default=function(){var n=(0,a.useState)([]),e=(0,t.Z)(n,2),r=e[0],d=e[1],l=(0,a.useState)("idle"),p=(0,t.Z)(l,2),v=p[0],h=p[1],g=(0,a.useState)(null),f=(0,t.Z)(g,2),m=f[0],x=f[1];return(0,a.useEffect)((function(){h("pending"),i.V.getTrendingMovies().then((function(n){h("resolved"),null!==n&&void 0!==n&&n.length&&d(n)})).catch((function(n){x(n),h("rejected")}))}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Tranding movies"}),"pending"===v&&(0,u.jsx)(s.Z,{}),"rejected"!==v&&(0,u.jsx)(o.Z,{movies:r}),"rejected"===v&&(0,u.jsx)(c.Z,{error:m.message})]})}},9093:function(n,e,r){n.exports=r.p+"static/media/movie-pic.a6cacd9a63a2acf7a0e9.jpg"}}]);
//# sourceMappingURL=872.56c6e958.chunk.js.map