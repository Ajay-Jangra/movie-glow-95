(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){},122:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),i=c(36),s=c.n(i),r=(c(68),c(14)),o=c(43),l=(c(70),c(127),{apiKey:"".concat("AIzaSyCS6wP3ra7V8X_n_I_pv4fjkyUokmesZgU"),authDomain:"".concat("movie-glow-95ead.firebaseapp.com"),projectId:"".concat("movie-glow-95ead"),storageBucket:"".concat("movie-glow-95ead.appspot.com"),messagingSenderId:"".concat("G-X782B6R9NZ"),appId:"".concat("1:777954712393:web:a8fdc78b24ab544cb51898"),measurementId:"".concat("777954712393")}),j=(o.a.initializeApp(l).firestore(),o.a.auth()),d=new o.a.auth.GoogleAuthProvider,u=function(e){e.preventDefault(),j.signInWithPopup(d).then((function(e){console.log(e.user)})).catch((function(e){console.log(e.message)}))},b=(c(72),c(0)),h=c.n(b),m=c(1),v=c(13),O=c(35),p=c.n(O),f=p.a.create({baseURL:"https://api.themoviedb.org/3"}),g=(c(90),c(27)),x="SET_PRODUCTS",N="SELECTED_PRODUCT",y="REMOVE_SELECTED_PRODUCT",_=function(e){return{type:x,payload:e}},w=c(4);var k=function(e){var t=e.title,c=e.fetchUrl,a=e.isLargeRow,i=Object(g.b)(),s=Object(n.useState)([]),o=Object(v.a)(s,2),l=o[0],j=o[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get(c);case 3:return null===(t=e.sent).data.results&&void 0===t.data.results||j(t.data.results),i(_(t.data)),e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,c]);var d=Object(r.f)();return Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("h1",{children:t}),Object(w.jsx)("div",{className:"row_posters",children:l.map((function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("img",{onClick:function(){return function(e){d("/movie/".concat(e.id))}(e)},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)})}))})]})},S="4d776e7feed1440b3cabc9dfa49e8acd",M={fetchTrending:"/trending/all/week?api_key=".concat(S,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(S,"&with_networks-213"),fetchTopRated:"/movie/top_rated?api_key=".concat(S,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(S,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(S,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(S,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(S,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(S,"&with_genres=99"),fetchgetupcoming:"/discover/movie?api_key=".concat(S,"&language=en-US&page=45"),fetchgetnowplaying:"/discover/movie?api_key=".concat(S,"&language=en-US&page=59"),fetchMystery:"/discover/movie?api_key=".concat(S,"&with_genres=9648"),fetchSciFi:"/discover/movie?api_key=".concat(S,"&with_genres=878"),fetchWestern:"/discover/movie?api_key=".concat(S,"&with_genres=37"),fetchAnimation:"/discover/movie?api_key=".concat(S,"&with_genres=16"),fetchTV:"/discover/movie?api_key=".concat(S,"&with_genres=10770")};c(97);var U=function(){var e,t,c=Object(n.useState)([]),a=Object(v.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(M.fetchActionMovies);case 2:return t=e.sent,s(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(w.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n                "https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'"\n            )'),backgroundPosition:"center center"},children:["   ",Object(w.jsxs)("div",{className:"banner_contents",children:[Object(w.jsx)("h1",{className:"banner_title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.orignal_name)}),Object(w.jsxs)("div",{className:"banner_buttons",children:[Object(w.jsx)("button",{className:" banner_button",children:"Play"}),Object(w.jsx)("button",{className:" banner_button",children:"My List"})]}),Object(w.jsx)("p",{className:"banner_description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(w.jsx)("div",{className:"banner--fadeBottom"})]})},E=c(25);c(98);var T=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),c=t[0],a=t[1],i=function(){window.scrollY>40?a(!0):a(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),[]),Object(w.jsxs)("div",{className:"nav ".concat(c&&"nav_black"),children:[Object(w.jsx)(E.b,{to:"/",children:Object(w.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"})}),Object(w.jsx)(E.b,{to:"/search",children:Object(w.jsx)("button",{className:"searchButton",type:"submit",children:Object(w.jsx)("i",{class:"fa fa-search"})})}),Object(w.jsx)(E.b,{to:"/profile",children:Object(w.jsx)("img",{className:"nav_avatar",src:"https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg",alt:"Netflix Logo"})})]})},I=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(T,{}),Object(w.jsx)(U,{}),Object(w.jsx)(k,{id:"1",title:"ORIGINALS MOVIES",fetchUrl:M.fetchNetflixOriginals,isLargeRow:!0}),Object(w.jsx)(k,{id:"2",title:"Trending Now",fetchUrl:M.fetchTrending}),Object(w.jsx)(k,{id:"3",title:"Up-Coming",fetchUrl:M.fetchgetupcoming}),Object(w.jsx)(k,{id:"4",title:"Top Rated",fetchUrl:M.fetchTopRated}),Object(w.jsx)(k,{id:"5",title:"Action Movies",fetchUrl:M.fetchActionMovies}),Object(w.jsx)(k,{id:"6",title:"Now Playing",fetchUrl:M.fetchgetnowplaying}),Object(w.jsx)(k,{id:"7",title:"Comedy Movies",fetchUrl:M.fetchComedyMovies}),Object(w.jsx)(k,{id:"8",title:"Romance Movies",fetchUrl:M.fetchRomanceMovies}),Object(w.jsx)(k,{id:"9",title:"Horror Movies",fetchUrl:M.fetchHorrorMovies}),Object(w.jsx)(k,{id:"10",title:"Mystery",fetchUrl:M.fetchMystery}),Object(w.jsx)(k,{id:"11",title:"SciFi",fetchUrl:M.fetchWestern}),Object(w.jsx)(k,{id:"12",title:"Animation",fetchUrl:M.fetchAnimation}),Object(w.jsx)(k,{id:"13",title:"TV",fetchUrl:M.fetchTV}),Object(w.jsx)(k,{id:"14",title:"Documentaries",fetchUrl:M.fetchDocumentaries}),Object(w.jsxs)("footer",{children:[Object(w.jsx)("h1",{children:"Footer"}),Object(w.jsxs)("div",{className:"footer-about-dev",children:[Object(w.jsx)("p",{children:"Devloper : Ajay Jangra"}),Object(w.jsx)("p",{children:"Devlope only for project perspective "}),Object(w.jsx)("p",{children:Object(w.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/ajay-jangra-376ba1202/",children:"Linked In"})})]})]})]})})},R=c(42),C=Object(R.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),D=C.actions,P=D.login,L=D.logout,A=function(e){return e.user.user},F=C.reducer;c(99);var B=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(w.jsx)("div",{className:"signUpScreen",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("h1",{children:"Sign In"}),Object(w.jsx)("input",{ref:e,placeholder:"Email",type:"email"}),Object(w.jsx)("input",{ref:t,placeholder:"Password",type:"password"}),Object(w.jsx)("button",{type:"submit",className:"signInButton",onClick:function(c){c.preventDefault(),j.signInWithEmailAndPassword(e.current.value,t.current.value).catch((function(e){alert(e.message)}))},children:"Log In"}),Object(w.jsx)("button",{type:"submit",className:"signInWithGoogle",onClick:u,children:"Sign In with Google"}),Object(w.jsxs)("h4",{children:[Object(w.jsx)("span",{className:"signUpScreen-gray",children:" New to Netflix? "}),Object(w.jsx)("span",{className:"signUpScreen_link",onClick:function(c){c.preventDefault(),j.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign up now."})]})]})})},V=(c(100),c(58)),H=c.n(V);c(101);var W=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){H.a.init({duration:2e3,easing:"ease-in-sine"})}),[]),Object(w.jsxs)("div",{className:"loginScreen",children:[Object(w.jsxs)("div",{className:"loginScreen_background",children:[Object(w.jsx)("img",{className:"loginScreen_logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"logo-img"}),Object(w.jsx)("button",{className:"loginScreen_button",onClick:function(){return a(!0)},children:"Login"}),Object(w.jsx)("div",{className:"loginScreen_gradient"})]}),Object(w.jsx)("div",{className:"loginScreen_body",children:c?Object(w.jsx)(B,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{"data-aos":"fade-down",children:"Ulitimated films,Tv programmes and more."}),Object(w.jsx)("h2",{"data-aos":"fade-left",children:"Watch anywhere. Cancel anytime."}),Object(w.jsx)("div",{"data-aos":"zoom-out-up",className:"loginScreen_input",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{type:"email",placeholder:"Email address"}),Object(w.jsx)("button",{onClick:function(){return a(!0)},className:"loginScreen_getStarted",children:"GET STARTED"})]})}),Object(w.jsx)("h3",{"data-aos":"fade-right",children:"Ready to watch? Enter your email to create or restart your membership."})]})})]})};c(102);var G=function(){var e=Object(g.c)(A),t=Object(r.f)();return Object(w.jsxs)("div",{className:"profileScreen",children:[Object(w.jsx)(T,{}),Object(w.jsxs)("div",{className:"profileScreen-body",children:[Object(w.jsx)("h1",{children:"Edit Profile"}),Object(w.jsxs)("div",{className:"profileScreen-info",children:[Object(w.jsx)("img",{src:"https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg",alt:"info"}),Object(w.jsxs)("div",{className:"profileScreen-details",children:[Object(w.jsx)("h2",{children:e.email}),Object(w.jsxs)("div",{className:"profileScreen-planes",children:[Object(w.jsx)("h3",{children:"Plans"}),Object(w.jsx)("p",{}),Object(w.jsxs)("div",{className:"back_signout_button",children:[Object(w.jsx)("button",{onClick:function(){return j.signOut()},className:"profileScreen-signOut",children:"Sign Out"}),Object(w.jsx)("button",{className:"profileScreen-signOut",onClick:function(){t("/")},children:"Back to Home"})]})]})]})]})]})]})},z=c(41),J=c.n(z),X=c(59),Z=c(62),q=c.n(Z),K=(c(122),"https://image.tmdb.org/t/p/original//"),Y=function(){var e=Object(r.g)().movieId,t=Object(g.b)(),c=Object(n.useState)(""),a=Object(v.a)(c,2),i=a[0],s=a[1],o=Object(n.useState)([]),l=Object(v.a)(o,2),j=l[0],d=l[1],u=Object(n.useState)(),b=Object(v.a)(u,2),O=b[0],f=b[1];Object(n.useEffect)((function(){return e&&""!==e&&function(){var c=Object(m.a)(h.a.mark((function c(){var n,a;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,p.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=").concat(S,"&language=en-US&page=1")).catch((function(e){console.log(e)}));case 3:return n=c.sent,f(n.data.results),c.next=7,p.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(S,"&language=en")).catch((function(e){console.log(e)}));case 7:a=c.sent,d(a.data),t((i=a.data,{type:N,payload:i})),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),console.log("go back");case 15:case"end":return c.stop()}var i}),c,null,[[0,12]])})));return function(){return c.apply(this,arguments)}}()(),function(){t({type:y})}}),[t,e]);var x=j.poster_path,_=j.tagline,k=j.budget,M=j.revenue,U=j.overview,E=j.status,I=j.title,R=j.vote_average,C=j.release_date,D=j.genres,P=Object(r.f)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(T,{}),0===Object.keys(j).length?Object(w.jsx)("div",{className:"Loader",children:Object(w.jsx)(J.a,{})}):Object(w.jsx)("div",{className:"movieDetailsPage",children:Object(w.jsxs)("div",{className:"main-div",children:[i&&Object(w.jsx)(X.a,{videoId:i,opts:{height:"420",width:"100%",playerVars:{autoplay:1}}}),Object(w.jsxs)("div",{className:"aboutMovieMainDiv",children:[Object(w.jsx)("div",{className:"selectedMoviePoster",children:Object(w.jsx)("img",{className:"selectedPoster",src:"".concat(K).concat(x),alt:I})}),Object(w.jsxs)("div",{className:"selectedMovieDetails",children:[Object(w.jsxs)("div",{className:"selectedMovieTitle",children:[Object(w.jsx)("h1",{children:I}),Object(w.jsxs)("p",{children:["\xa0 \xa0",D.map((function(e){return Object(w.jsxs)(w.Fragment,{children:[e.name,","]})})),"\xa0 \xa0 \xa0 \xa0 Release Data:- ",C]})]}),Object(w.jsxs)("div",{className:"selectedMovieTrailer",children:[Object(w.jsx)("div",{className:"selectedMovieReating",children:Object(w.jsxs)("p",{children:[R," \u2b50"]})}),Object(w.jsx)("div",{className:"selectedMovieBudget",children:Object(w.jsxs)("p",{children:[Math.round(k/1e7)," M "]})}),Object(w.jsx)("div",{className:"selectedMovieRevenue",children:Object(w.jsxs)("p",{children:[Math.round(M/1e7)," M"]})}),Object(w.jsx)("button",{className:"playTrailer",onClick:function(){i?s(""):q()(null,{tmdbId:j.id}).then((function(e){var t=new URLSearchParams(new URL(e).search);s(t.get("v"))})).catch((function(e){return console.log(e)}))},children:i?Object(w.jsx)(w.Fragment,{children:"Stop Trailer"}):Object(w.jsx)(w.Fragment,{children:"Play Trailer"})}),Object(w.jsx)("button",{className:"backToHome",onClick:function(){P("/")},children:"Back to Home"})]}),Object(w.jsxs)("div",{className:"sectectMovieDiscription",children:[Object(w.jsx)("p",{className:"tagline",children:_}),Object(w.jsx)("h3",{children:"Overview"}),Object(w.jsx)("p",{className:"selectedMovieOverView",children:U}),Object(w.jsxs)("p",{children:["STATUS:- ",E]})]})]})]}),Object(w.jsx)("h1",{className:"similarMovieHeading",children:"Similar Movies "}),Object(w.jsx)("div",{className:"similarMovieMainDiv",children:O.map((function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"similarMovieResult",children:[Object(w.jsx)("img",{src:"".concat(K).concat(e.poster_path),alt:"movie",className:"similarMovieImage",onClick:function(){return function(e){P("/movie/".concat(e.id))}(e)}}),Object(w.jsx)("h4",{children:e.title})]})})}))})]})})]})},Q=(c(125),function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)("tom"),s=Object(v.a)(i,2),o=s[0],l=s[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(t){var c,n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/search/movie?api_key=".concat(S,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,a(i.results);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(o)}),[o]);var j=Object(r.f)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(T,{}),0===Object.keys(c).length?Object(w.jsx)("div",{className:"Loader",children:Object(w.jsx)(J.a,{})}):Object(w.jsxs)("div",{className:"searchMainPage",children:[Object(w.jsx)("div",{className:"searchBar",children:Object(w.jsx)("input",{className:"searchInput",onChange:function(e){return l(e.target.value)},placeholder:"Type to search..."})}),Object(w.jsx)("div",{className:"searchMovieMainDiv",children:c?c.map((function(e,t){return Object(w.jsxs)("div",{className:"searchMovieResult",children:[Object(w.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original//").concat(e.poster_path),alt:"movie",className:"searchMovieImage",onClick:function(){return function(e){j("/movie/".concat(e.id))}(e)}}),Object(w.jsx)("h4",{children:e.title})]})})):Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"loader"})})})]})]})});function $(){return Object(w.jsx)("div",{className:"searchMovieMainDiv"})}var ee=function(){var e=Object(g.c)(A),t=Object(g.b)();return Object(n.useEffect)((function(){return j.onAuthStateChanged((function(e){t(e?P({uid:e.uid,email:e.email}):L())}))}),[t]),Object(w.jsx)("div",{children:e?Object(w.jsxs)(r.c,{children:[Object(w.jsx)(r.a,{exact:!0,path:"/",element:Object(w.jsx)(I,{})}),Object(w.jsx)(r.a,{path:"/profile",element:Object(w.jsx)(G,{})}),Object(w.jsx)(r.a,{path:"/movie/:movieId",element:Object(w.jsx)(Y,{})}),Object(w.jsx)(r.a,{path:"/search",element:Object(w.jsx)(Q,{})}),Object(w.jsx)(r.a,{path:"/fav",element:Object(w.jsx)($,{})}),Object(w.jsx)(r.a,{path:"*",element:Object(w.jsx)(I,{})})]}):Object(w.jsx)(W,{})})},te=c(26),ce=c(31),ne={products:[]},ae=Object(te.b)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case x:return Object(ce.a)(Object(ce.a)({},e),{},{products:n});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case N:return Object(ce.a)(Object(ce.a)({},e),n);case y:return{};default:return e}}}),ie=Object(R.a)({reducer:{user:F,reducer:ae}});s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(E.a,{children:Object(w.jsx)(g.a,{store:ie,children:Object(w.jsx)(ee,{})})})}),document.getElementById("root"))},68:function(e,t,c){},72:function(e,t,c){},90:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.8edf5bfd.chunk.js.map