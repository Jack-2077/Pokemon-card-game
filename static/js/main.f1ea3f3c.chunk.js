(this["webpackJsonppokemon-card-game"]=this["webpackJsonppokemon-card-game"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(7),c=t.n(a),s=(t(13),t(2)),i=t(3),o=t(5),p=t(4),d=t(8),j=(t(14),t(0)),b=function(e){Object(o.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return Object(j.jsxs)("div",{className:"Pokecard",children:[Object(j.jsx)("h1",{className:"Pokecard-title",children:this.props.name}),Object(j.jsx)("div",{className:"Pokecard-image",children:Object(j.jsx)("img",{src:n,alt:this.props.name})}),Object(j.jsxs)("div",{className:"Pokecard-data",children:["Type: ",this.props.type]}),Object(j.jsxs)("div",{className:"Pokecard-data",children:["EXP: ",this.props.exp," "]})]})}}]),t}(r.Component),u=(t(16),function(e){Object(o.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e;return e=this.props.isWinner?Object(j.jsx)("h1",{className:"Pokedex-winner",children:"Winning Hand!"}):Object(j.jsx)("h1",{className:"Pokedex-loser",children:"Losing Hand!"}),Object(j.jsxs)("div",{className:"Pokedex",children:[Object(j.jsxs)("h4",{children:["Total exp: ",this.props.exp]}),e,Object(j.jsx)("div",{className:"Pokedex-cards",children:this.props.pokemon.map((function(e){return Object(j.jsx)(b,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))})]})}}]),t}(r.Component)),l=function(e){Object(o.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){for(var e=[],n=Object(d.a)(this.props.pokemon);e.length<n.length;){var t=Math.floor(Math.random()*n.length),r=n.splice(t,1)[0];e.push(r)}var a=e.reduce((function(e,n){return e+n.base_experience}),0),c=n.reduce((function(e,n){return e+n.base_experience}),0);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{pokemon:e,exp:a,isWinner:a>c}),Object(j.jsx)(u,{pokemon:n,exp:c,isWinner:c>a})]})}}]),t}(r.Component);l.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var m=l,h=function(e){Object(o.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(m,{})})}}]),t}(r.Component),x=document.getElementById("root");c.a.render(Object(j.jsx)(r.StrictMode,{children:Object(j.jsx)(h,{})}),x)}},[[17,1,2]]]);
//# sourceMappingURL=main.f1ea3f3c.chunk.js.map