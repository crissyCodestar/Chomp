(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){e.exports=a(300)},183:function(e,t,a){},185:function(e,t,a){},188:function(e,t,a){},190:function(e,t,a){},192:function(e,t,a){},197:function(e,t,a){},297:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a.n(s),c=(a(183),a(15)),o=a(16),l=a(19),m=a(17),u=a(18),d=a(7),h=a(302),v=a(306),f=a(303),p=(a(185),a(188),a(190),a(192),a(305)),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={term:"",location:"",sortBy:"best_match",searched:!1},a.handleTermChange=a.handleTermChange.bind(Object(d.a)(Object(d.a)(a))),a.handleLocationChange=a.handleLocationChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSearch=a.handleSearch.bind(Object(d.a)(Object(d.a)(a))),a.handleSortByChange=a.handleSortByChange.bind(Object(d.a)(Object(d.a)(a))),a.getSortByClass=a.getSortByClass.bind(Object(d.a)(Object(d.a)(a))),a.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getSortByClass",value:function(e){return console.log("ClassSort",e),this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e}),console.log("Change",this.state.sortBy),this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),this.setState({searched:!0}),e.preventDefault(),this.props.history.push("/businesses")}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map(function(t,a){var n=e.sortByOptions[t];return r.a.createElement("li",{className:e.getSortByClass(n),onClick:function(){return e.handleSortByChange(n)},value:n,key:a},console.log("sortByOptionValue",e.sortByOptions[t]),t)})}},{key:"render",value:function(){var e=this.state,t=(e.searched,e.handleSearch,e.handleTermChange,e.handleLocationChange,this.props),a=this.props.location.pathname;return r.a.createElement("div",{className:t.match.isExact?"SearchBar":"SearchBarSearched"},console.log("Location",this.props),r.a.createElement("div",{className:"SearchBar-sort-options"},r.a.createElement("ul",null,"/businesses"==a&this.state.searched?this.renderSortByOptions():"")),r.a.createElement("div",{className:"SearchBar-fields"},r.a.createElement("input",{placeholder:"Find   Pizza, Parade, Mover...",onChange:this.handleTermChange}),r.a.createElement("input",{placeholder:"Near   Brooklyn, Chicago, NOLA...",onChange:this.handleLocationChange}),r.a.createElement("div",{className:"SearchBar-submit"},r.a.createElement("a",{onClick:this.handleSearch},"Go"))))}}]),t}(r.a.Component),E=Object(p.a)(g),b="d22VAAFnffpCl8jh9z2KhwG2rtqoKlpGdactYnGvHSwq1b-3KPci5QSB6ufj9544xuhWAr2sbH0PlRgABBseVA7_xR0mdJXqRxZ5oXwyQ4A7DUE2PJrI-uFvBR9wWnYx";console.log(b);var y={search:function(e,t,a){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat(b)}}).then(function(e){return e.json()}).then(function(e){if(e.businesses)return e.businesses.map(function(e){return{id:e.id,name:e.name,address:e.location.address1,imageSrc:e.image_url,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}})})},events:function(){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?location=11201",{headers:{Authorization:"Bearer ".concat(b)}}).then(function(e){return e.json()}).then(function(e){if(console.log("Event",e.events),e.events)return e.events})},hotAndNew:function(){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=11201&attribute=hot_and_new&limit=3",{headers:{Authorization:"Bearer ".concat(b)}}).then(function(e){return e.json()}).then(function(e){if(e.businesses)return e.businesses})},businessLink:function(e){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/".concat(e),{headers:{Authorization:"Bearer ".concat(b)}}).then(function(e){return e.json()}).then(function(e){if(e)return e})},businessReviews:function(e){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/".concat(e,"/reviews"),{headers:{Authorization:"Bearer ".concat(b)}}).then(function(e){return e.json()}).then(function(e){if(e.reviews)return e.reviews})}},w=(a(197),function(e){for(var t=e.reviewCount,a=e.rating,n=e.review,s=[],i=1;i<=5;i++){var c="star_rating";a>=i&&null!==a&&(c+="star_rating full_star"),s.push(r.a.createElement("label",{className:c,key:i},"\u2605"))}return r.a.createElement("div",null,s," ",t," ",n?"Reviews":"")}),j=function(e){var t=e.categories;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("span",{key:t},e.title)}).reduce(function(e,t){return null===e?[t]:[e,", ",t]}))},_=a(5),N=a(2),O=Object(_.withStyles)(function(e){return{root:{flexGrow:1},container:{justifyContent:"center"}}})(function(e){var t=e.businessInfo,a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(N.e,{container:!0,className:a.container},console.log(t),console.log(t.categories.map(function(e){return e.title}).join(", ")),r.a.createElement(N.e,{item:!0,xs:10},r.a.createElement(N.i,{variant:"h3"},t.name)),r.a.createElement(N.e,{item:!0,xs:10},r.a.createElement(N.i,{variant:"h6"},r.a.createElement(w,{rating:t.rating,reviewCount:t.review_count,review:!0}))),r.a.createElement(N.e,{item:!0,xs:10},r.a.createElement(N.i,{variant:"h6"},t.price," \u30fb ",t.categories.map(function(e){return e.title}).join(", ")))))}),k=Object(_.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},img:{height:"100%",width:"20rem",objectFit:"cover",borderRadius:"5px"}}})(function(e){var t=e.ImagesInfo,a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(N.f,{className:a.gridList,cols:1.5},t.photos.map(function(e,t){return r.a.createElement(N.g,{key:t},r.a.createElement("img",{src:e,className:a.img}))})))}),C=Object(_.withStyles)(function(e){return{root:{flexGrow:1},alignment:{justifyContent:"center",padding:2*e.spacing.unit}}})(function(e){var t=e.bodyInfo,a=e.classes;return r.a.createElement("div",{className:a.root},console.log("loc",t),r.a.createElement(N.e,{container:!0,className:a.alignment},r.a.createElement(N.e,{item:!0,xs:9},t.location.display_address.map(function(e,t){return r.a.createElement(N.i,{key:t,variant:"title"},e)}),r.a.createElement(N.i,{variant:"subheading"},t.location.cross_streets?"b/t ".concat(t.location.cross_streets):"N/A"),r.a.createElement(N.i,{variant:"subheading"},r.a.createElement("a",{href:t.phone},t.phone?"".concat(t.display_phone):"N/A"))),r.a.createElement(N.e,{item:!0,xs:9},r.a.createElement(N.i,{variant:"subheading"},r.a.createElement("a",{href:t.url,target:"blank"},"yelp.",t.alias,".com")))))}),S=Object(_.withStyles)(function(e){return{root:{flexGrow:1},content:{padding:2*e.spacing.unit}}})(function(e){var t=e.review,a=e.date,n=e.classes;return r.a.createElement("div",{className:n.root,key:t.id},r.a.createElement(N.e,{container:!0,spacing:16,justify:"center",alignItems:"center",className:n.content},r.a.createElement(N.e,{item:!0},r.a.createElement("img",{src:t.user.image_url,alt:""}),r.a.createElement(N.i,{variant:"subheading"},t.user.name)),r.a.createElement(N.e,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(N.e,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},r.a.createElement(N.e,{item:!0,xs:!0},r.a.createElement(N.i,null,r.a.createElement(w,{rating:t.rating})),r.a.createElement(N.i,{variant:"h6"},new Date(a).toLocaleString().length<=22?new Date(a).toLocaleString().slice(0,9):new Date(a).toLocaleString().slice(0,10)),r.a.createElement(N.i,{variant:"subheading"},t.text))))))}),B=Object(_.withStyles)(function(e){return{root:{flexGrow:1}}})(function(e){var t=e.miscInfo,a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(N.e,{container:!0},r.a.createElement(N.e,{item:!0},console.log(t))))}),x=Object(_.withStyles)(function(e){return{root:{display:"flex"},content:{justifyContent:"center",padding:2*e.spacing.unit},images:{justifyContent:"center"},header:{justifyItem:"left",width:"80%",padding:"2rem"},img:{borderRadius:"5px"},body:{borderBottom:"#cca353 2px solid",width:"80%"},padding:{padding:2*e.spacing.unit}}})(function(e){var t=e.businessInfo,a=e.reviewsList,n=e.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(N.e,{container:!0,spacing:32,className:n.content},r.a.createElement(N.e,{item:!0,xs:12,className:n.padding},r.a.createElement(O,{businessInfo:t})),r.a.createElement(N.e,{container:!0,justify:"center",alignItems:"center",spacing:32,className:n.padding},r.a.createElement(N.e,{className:n.body}),r.a.createElement(N.e,{item:!0,md:5,xs:10,className:n.img},r.a.createElement(k,{ImagesInfo:t})),r.a.createElement(N.e,{item:!0,md:5,xs:12},r.a.createElement(C,{bodyInfo:t})),r.a.createElement(N.e,{className:n.body})),r.a.createElement(N.e,{item:!0,xs:12},r.a.createElement(N.e,{container:!0,spacing:24,className:n.images},r.a.createElement(N.i,{variant:"h4",className:n.header},"Reviews"),a.map(function(e){return r.a.createElement(N.e,{item:!0,xs:12},r.a.createElement(N.h,null,r.a.createElement(S,{key:e.id,review:e,date:Date.parse(e.time_created)})))}),r.a.createElement(N.e,{item:!0,xs:8},r.a.createElement(N.h,null,r.a.createElement(B,{miscInfo:t})))))))}),I=(a(297),function(){return r.a.createElement("div",{className:"loading_container"},r.a.createElement("div",{className:"loading_box"}))}),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={businessInfo:[],reviews:[],businessLoading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;y.businessLink(t).then(function(t){e.setState({businessInfo:t,businessLoading:!1})}),y.businessReviews(t).then(function(t){e.setState({reviews:t})})}},{key:"render",value:function(){return this.state.businessLoading?r.a.createElement("div",null,r.a.createElement(I,null)):r.a.createElement("div",null,r.a.createElement(x,{businessInfo:this.state.businessInfo,reviewsList:this.state.reviews}))}}]),t}(r.a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=(e.theme,this.props.business),n=a.id,s=a.imageSrc,i=a.name,c=a.address,o=a.city,l=a.state,m=a.zipCode,u=a.category,d=a.rating,v=a.reviewCount;return r.a.createElement(N.a,{className:t.card},r.a.createElement(N.d,{className:t.media,image:s,title:"businesses"}),r.a.createElement("div",{className:t.details},r.a.createElement(N.c,{className:t.content},r.a.createElement(N.i,{component:"h5",variant:"h5"},r.a.createElement(h.a,{to:"/businesses/".concat(n)},i)),r.a.createElement(N.i,{component:"h6"},u.toUpperCase()),r.a.createElement(w,{rating:d,reviewCount:v}),r.a.createElement(N.i,{component:"h3"},v," reviews"),r.a.createElement(N.i,{component:"p"},c,", ",o,", ",l," ",m))))}}]),t}(r.a.Component),R=Object(_.withStyles)(function(e){return{card:{display:"flex",maxWidth:600},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto",width:300,alignItems:"center"},media:{width:300,height:200}}})(A),W=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(N.e,{container:!0,spacing:40,alignItems:"center",direction:"column",justify:"center"},this.props.businesses.map(function(e){return r.a.createElement(N.e,{item:!0,xs:12},r.a.createElement(R,{key:e.id,business:e}))})))}}]),t}(r.a.Component),z=Object(_.withStyles)(function(e){return{root:{flexGrow:1},content:{width:600}}})(W),G=(a(79),function(e){var t=e.event;e.description,e.id,e.image_url,e.name,e.category,e.is_free;return r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:t.id},r.a.createElement("a",{href:t.event_site_url,target:"blank"},r.a.createElement("div",{className:"card__img"},r.a.createElement("img",{src:t.image_url}))),r.a.createElement("div",{className:"card_info"},r.a.createElement("div",{className:"card__header"},r.a.createElement("a",{href:t.event_site_url,target:"blank"},t.name)),r.a.createElement("div",{className:"card_info_cat"},t.is_free?"FREE event":"$".concat(t.cost)),r.a.createElement("div",{className:"card_info__rating"},r.a.createElement("p",null,t.interested_count," Interested ",t.attending_count," Going")),r.a.createElement("div",{className:"card_info__rating"},r.a.createElement("p",null,t.is_official?"Official Yelp Event":null)))))}),Y=function(e){var t=e.hotEvent;e.description,e.id,e.image_url,e.name,e.category,e.distance;return r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:t.id},r.a.createElement(h.a,{to:"/businesses/".concat(t.id)},r.a.createElement("div",{className:"card__img"},r.a.createElement("img",{src:t.image_url}))),r.a.createElement("div",{className:"card_info"},r.a.createElement("div",{className:"card__header"},r.a.createElement(h.a,{to:"/businesses/".concat(t.id)},t.name)),r.a.createElement("div",{className:"card_info__rating"},r.a.createElement(w,{rating:t.rating,ratings:t.review_count})),r.a.createElement("div",null),r.a.createElement("div",{className:"card_info_cat"},r.a.createElement(j,{categories:t.categories})),r.a.createElement("div",null))))},D=Object(_.withStyles)({card:{maxWidth:345},media:{height:200}})(function(e){var t=e.img,a=e.mediaTitle,n=e.title,s=e.classes,i=e.content,c=e.url;return r.a.createElement(N.a,{className:s.card},r.a.createElement(N.b,null,r.a.createElement("a",{href:c,target:"blank"},r.a.createElement(N.d,{className:s.media,image:t,title:a})),r.a.createElement(N.c,null,r.a.createElement(N.i,{gutterBottom:!0,variant:"h6",component:"h6"},n),r.a.createElement(N.i,{component:"p"},i))))}),T=a(30),F=a.n(T),H=Object(_.withStyles)(function(e){return{root:{flexGrow:1,justifyContent:"center"}}})(function(e){var t=e.events,a=e.hotEvents,n=e.classes;return r.a.createElement("section",{className:"container"},console.log(a),r.a.createElement("div",{className:"featured__cards"},r.a.createElement("div",{className:"h2"},r.a.createElement("h1",null,"Hot And New")),r.a.createElement("div",{className:"card__container"},a.map(function(e){return r.a.createElement(Y,{key:e.id,hotEvent:e})}))),r.a.createElement("div",{className:"featured__cards"},r.a.createElement("div",{className:"h2"},r.a.createElement("h1",null,"Featured Events")),r.a.createElement("div",{className:"card__container"},t.map(function(e){return r.a.createElement(G,{key:e.id,event:e})}))),r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:"h2"},r.a.createElement("h1",null,"Featured Events")),r.a.createElement(F.a,{container:!0,spacing:24,className:"card__container"},t.map(function(e){return r.a.createElement(F.a,{item:!0,lg:4,xs:12},r.a.createElement(D,{key:e.id,img:e.image_url,mediaTitle:e.id,title:e.name,url:e.event_site_url,content:e.is_free?"FREE event":"$".concat(e.cost)}))}))))}),M=function(e){var t=e.events,a=e.hotEvents;return console.log(t),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(H,{events:t,hotEvents:a})))},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={businesses:[],events:[],hotEvents:[],loading:!0,eventLoading:!0},a.searchYelp=a.searchYelp.bind(Object(d.a)(Object(d.a)(a))),a.renderHome=a.renderHome.bind(Object(d.a)(Object(d.a)(a))),a.renderBusinesses=a.renderBusinesses.bind(Object(d.a)(Object(d.a)(a))),a.renderBackgroundImage=a.renderBackgroundImage.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.events().then(function(t){e.setState({events:t,eventLoading:!1})}),y.hotAndNew().then(function(t){e.setState({hotEvents:t,eventLoading:!1})})}},{key:"searchYelp",value:function(e,t,a){var n=this;console.log("searchYELP",a),y.search(e,t,a).then(function(e){n.setState({businesses:e,loading:!1})})}},{key:"componentWillReceiveProps",value:function(e){this.setState({businesses:e})}},{key:"renderBusinesses",value:function(){return this.state.loading?r.a.createElement(I,null):0===this.state.businesses?r.a.createElement("div",null," Doesnt exist, try your search again"):r.a.createElement(z,{businesses:this.state.businesses})}},{key:"renderHome",value:function(){return this.state.eventLoading?r.a.createElement(I,null):r.a.createElement("div",null,r.a.createElement(M,{events:this.state.events,hotEvents:this.state.hotEvents}))}},{key:"renderBackgroundImage",value:function(){var e=this.state.hotEvents.map(function(e){return e.image_url}),t=Math.floor(Math.random()*e.length);return"/"!==window.location.pathname?"":r.a.createElement("div",{className:"img_container"},r.a.createElement("img",{src:e[t],alt:""}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App_container"},this.renderBackgroundImage(),r.a.createElement("div",{className:"searchContainer"},r.a.createElement(h.a,{to:"/"},r.a.createElement("h1",{className:"header"},"Chomp")),r.a.createElement(E,{searchYelp:this.searchYelp})),r.a.createElement("div",{className:"container"},r.a.createElement(v.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:this.renderHome}),r.a.createElement(f.a,{exact:!0,path:"/businesses",render:this.renderBusinesses}),r.a.createElement(f.a,{path:"/businesses/:id",component:L})))))}}]),t}(n.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var K=a(304);i.a.render(r.a.createElement(K.a,{basename:"/Chomp"},r.a.createElement(P,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Chomp",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Chomp","/service-worker.js");J?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):q(e)})}}()},79:function(e,t,a){}},[[178,2,1]]]);
//# sourceMappingURL=main.c2b263be.chunk.js.map