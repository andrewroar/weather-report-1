(this["webpackJsonpweather-type-2"]=this["webpackJsonpweather-type-2"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(16),o=n.n(a),s=(n(24),n(3)),i=(n(25),Object(c.createContext)({target:"Hello World",countries:["Hello World"],setCountries:function(){},setTarget:function(){}})),u=function(){return Object(c.useContext)(i)},j=n(19),l=n(0),b=function(t){var e=u(),n=e.countries,r=e.setCountries,a=e.setTarget,o=Object(c.useState)(""),i=Object(s.a)(o,2),b=i[0],d=i[1],p=function(t){console.log(t.target.textContent),a(t.target.textContent)};return Object(l.jsxs)("div",{className:"border search-bar",children:[Object(l.jsx)("button",{onClick:function(){""!==b.replace(/ /g,"")?r([].concat(Object(j.a)(n),[b])):alert("Input is empty")},children:"Add Country"}),Object(l.jsx)("input",{type:"text",onChange:function(t){t.preventDefault(),d(t.target.value)}}),n.map((function(t){return Object(l.jsx)("p",{onClick:p,children:t})}))]})},d=n(7),p=n.n(d),h=n(17),O=n(18),f=n.n(O),x=function(t){var e=u(),n=e.target,r=e.setTarget,a=Object(c.useState)({cloud:"",temp:"",icon:""}),o=Object(s.a)(a,2),i=o[0],j=o[1],b=Object(c.useState)(!1),d=Object(s.a)(b,2),O=d[0],x=d[1],g=function(){var t=Object(h.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.a.request({url:"https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=73f1ba53d1d0aefb5577f5b2f9511294&units=metric")}).then((function(t){console.log(t.data),j({cloud:t.data.weather[0].main,temp:t.data.main.temp,icon:t.data.weather[0].icon}),x(!0)})).catch((function(t){console.log(t),x(!1)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){g()}),[r,n]),Object(l.jsx)("div",{className:"weather-display border",children:O&&Object(l.jsxs)("div",{className:"weather-display-context",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:i.temp}),Object(l.jsx)("p",{children:i.cloud}),Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(i.icon,"@2x.png"),alt:"Weather icon"})]})})};var g=function(){var t=Object(c.useState)(["London","York"]),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(n[0]),o=Object(s.a)(a,2),u=o[0],j=o[1];return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("body",{children:Object(l.jsx)(i.Provider,{value:{countries:n,setCountries:r,target:u,setTarget:j},children:Object(l.jsxs)("div",{className:"weather-box",children:[Object(l.jsx)(b,{}),Object(l.jsx)(x,{})]})})})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.90aeb084.chunk.js.map