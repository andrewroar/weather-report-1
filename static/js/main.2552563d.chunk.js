(this["webpackJsonpweather-type-2"]=this["webpackJsonpweather-type-2"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(20),o=n.n(a),s=(n(30),n(4)),i=(n(31),Object(c.createContext)({target:"Hello World",countries:["Hello World"],setCountries:function(){},setTarget:function(){}})),u=function(){return Object(c.useContext)(i)},l=n(25),j=n(21),b=n(22),d=n(1),p=function(t){var e=u(),n=e.countries,r=e.setCountries,a=e.setTarget,o=Object(c.useState)(""),i=Object(s.a)(o,2),p=i[0],h=i[1],f=function(t){console.log(t.target.textContent),a(t.target.textContent)},O=function(t){console.log(t.target.parentElement.textContent);var e=n.filter((function(e){return e!==t.target.parentElement.textContent}));r(e)};return Object(d.jsxs)("div",{className:"border search-bar",children:[Object(d.jsx)("button",{onClick:function(){if(""!==p.replace(/ /g,"")){var t=!1;n.forEach((function(e){if(e==p)return t=!0})),console.log(t),t||r([].concat(Object(l.a)(n),[p]))}},children:"Add Country"}),Object(d.jsx)("input",{type:"text",onChange:function(t){t.preventDefault(),h(t.target.value)}}),n.map((function(t){return Object(d.jsx)("div",{className:"country-list",children:Object(d.jsxs)("p",{onClick:f,children:[t,Object(d.jsx)(j.a,{className:"cross-icon",onClick:O,icon:b.a})]})})}))]})},h=n(10),f=n.n(h),O=n(23),x=n(24),g=n.n(x),m=function(t){var e=u(),n=e.target,r=e.setTarget,a=Object(c.useState)({cloud:"",temp:"",icon:""}),o=Object(s.a)(a,2),i=o[0],l=o[1],j=Object(c.useState)(!1),b=Object(s.a)(j,2),p=b[0],h=b[1],x=function(){var t=Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g.a.request({url:"https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=73f1ba53d1d0aefb5577f5b2f9511294&units=metric")}).then((function(t){console.log(t.data),l({cloud:t.data.weather[0].main,temp:t.data.main.temp,icon:t.data.weather[0].icon}),h(!0)})).catch((function(t){console.log(t),h(!1)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[r,n]),Object(d.jsx)("div",{className:"weather-display border",children:p&&Object(d.jsxs)("div",{className:"weather-display-context",children:[Object(d.jsx)("h2",{children:n}),Object(d.jsxs)("p",{children:[i.temp," \xb0C"]}),Object(d.jsx)("p",{children:i.cloud}),Object(d.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(i.icon,"@2x.png"),alt:"Weather icon"})]})})};var v=function(){var t=Object(c.useState)(["London","York"]),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(n[0]),o=Object(s.a)(a,2),u=o[0],l=o[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("body",{children:Object(d.jsx)(i.Provider,{value:{countries:n,setCountries:r,target:u,setTarget:l},children:Object(d.jsxs)("div",{className:"weather-box",children:[Object(d.jsx)(p,{}),Object(d.jsx)(m,{})]})})})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),C()}},[[55,1,2]]]);
//# sourceMappingURL=main.2552563d.chunk.js.map