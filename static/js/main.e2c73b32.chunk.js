(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){e.exports=n(37)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),c=n.n(i),l=n(8),o=(n(27),n(1)),u=(n(28),function(e){return r.a.createElement("header",{className:"main-header"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",exact:!0},"All Products")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/favorites"},"Favorites")))))}),s=(n(34),function(e){return r.a.createElement("div",{className:"card",style:e.style},e.children)}),m=n(20),d=n(6),p={},f=[],v={},E=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=Object(a.useState)(p)[1];return Object(a.useEffect)(function(){return e&&f.push(t),function(){e&&(f=f.filter(function(e){return e!==t}))}},[t,e]),[p,function(e,t){var n=v[e](p,t);p=Object(d.a)(Object(d.a)({},p),n);var a,r=Object(m.a)(f);try{for(r.s();!(a=r.n()).done;)(0,a.value)(p)}catch(i){r.e(i)}finally{r.f()}}]},b=(n(35),r.a.memo(function(e){console.log("RENDERING");var t=E(!1)[1];return r.a.createElement(s,{style:{marginBottom:"1rem"}},r.a.createElement("div",{className:"product-item"},r.a.createElement("h2",{className:e.isFav?"is-fav":""},e.title),r.a.createElement("p",null,e.description),r.a.createElement("button",{className:e.isFav?"":"button-outline",onClick:function(){t("TOGGLE_FAV",e.id)}},e.isFav?"Un-Favorite":"Favorite")))})),F=(n(17),function(e){var t=E()[0];return r.a.createElement("ul",{className:"products-list"},t.products.map(function(e){return r.a.createElement(b,{key:e.id,id:e.id,title:e.title,description:e.description,isFav:e.isFavorite})}))}),h=(n(36),function(e){return r.a.createElement(s,{style:{marginBottom:"1rem"}},r.a.createElement("div",{className:"favorite-item"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.description)))}),O=function(e){var t=E()[0].products.filter(function(e){return e.isFavorite}),n=r.a.createElement("p",{className:"placeholder"},"Got no favorites yet!");return t.length>0&&(n=r.a.createElement("ul",{className:"products-list"},t.map(function(e){return r.a.createElement(h,{key:e.id,id:e.id,title:e.title,description:e.description})}))),n},y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("main",null,r.a.createElement(o.a,{path:"/",component:F,exact:!0}),r.a.createElement(o.a,{path:"/favorites",component:O})))},j=n(21);(function(){var e,t;e={TOGGLE_FAV:function(e,t){var n=e.products.findIndex(function(e){return e.id===t}),a=!e.products[n].isFavorite,r=Object(j.a)(e.products);return r[n]=Object(d.a)(Object(d.a)({},e.products[n]),{},{isFavorite:a}),{products:r}}},(t={products:[{id:"p1",title:"Red Scarf",description:"A pretty red scarf.",isFavorite:!1},{id:"p2",title:"Blue T-Shirt",description:"A pretty blue t-shirt.",isFavorite:!1},{id:"p3",title:"Green Trousers",description:"A pair of lightly green trousers.",isFavorite:!1},{id:"p4",title:"Orange Hat",description:"Street style! An orange hat.",isFavorite:!1}]})&&(p=Object(d.a)(Object(d.a)({},p),t)),v=Object(d.a)(Object(d.a)({},v),e)})(),c.a.render(r.a.createElement(l.a,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e2c73b32.chunk.js.map