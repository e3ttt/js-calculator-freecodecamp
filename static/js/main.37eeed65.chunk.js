(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{53:function(e,a,t){},54:function(e,a,t){},62:function(e,a){},63:function(e,a,t){"use strict";t.r(a);var c=t(12),n=t(21),i=t.n(n),d=t(32),l=t.n(d),r=(t(53),t(19)),s=t(2),u=t(65);t(54);var j=function(){var e=Object(n.useState)("0"),a=Object(r.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)((function(){document.querySelectorAll(".calculator > div:not(#display)").forEach((function(e){"number"===e.className&&e.addEventListener("click",(function(e){i((function(a){var t=a+e.target.dataset.value;return(t=t.replace(/^0+/,"").replace(/(?<=\.\d*?)\./,""))||"0"}))})),"clear"===e.id&&e.addEventListener("click",(function(){i("0")})),"operation"===e.className&&e.addEventListener("click",(function(e){i((function(a){return(a+e.target.dataset.value).replace(/[\+\-x\/]+?([\+x\/])/g,"$1")}))}))})),document.getElementById("del").addEventListener("click",(function(){i((function(e){return e.substring(0,e.length-1)}))}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"JavaScript Calculator"}),Object(c.jsxs)("div",{className:"calculator",children:[Object(c.jsx)("div",{id:"display",children:0===t.length?"0":t}),Object(c.jsx)("div",{id:"clear",children:"AC"}),Object(c.jsx)("div",{className:"number",id:"one","data-value":"1",children:"1"}),Object(c.jsx)("div",{className:"number",id:"two","data-value":"2",children:"2"}),Object(c.jsx)("div",{className:"number",id:"three","data-value":"3",children:"3"}),Object(c.jsx)("div",{className:"number",id:"four","data-value":"4",children:"4"}),Object(c.jsx)("div",{className:"number",id:"five","data-value":"5",children:"5"}),Object(c.jsx)("div",{className:"number",id:"six","data-value":"6",children:"6"}),Object(c.jsx)("div",{className:"number",id:"seven","data-value":"7",children:"7"}),Object(c.jsx)("div",{className:"number",id:"eight","data-value":"8",children:"8"}),Object(c.jsx)("div",{className:"number",id:"nine","data-value":"9",children:"9"}),Object(c.jsx)("div",{className:"number",id:"decimal","data-value":".",children:"."}),Object(c.jsx)("div",{className:"number",id:"zero","data-value":"0",children:"0"}),Object(c.jsx)("div",{id:"equals",onClick:function(){i((function(e){try{return Object(s.kc)(Object(u.a)(e.replace("x","*")),10).toString()}catch(a){return"0"}}))},children:"="}),Object(c.jsx)("div",{className:"operation",id:"add","data-value":"+",children:"+"}),Object(c.jsx)("div",{className:"operation",id:"subtract","data-value":"-",children:"-"}),Object(c.jsx)("div",{className:"operation",id:"multiply","data-value":"x",children:"x"}),Object(c.jsx)("div",{className:"operation",id:"divide","data-value":"/",children:"/"}),Object(c.jsx)("div",{id:"del",children:"DEL"})]})]})},o=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,i=a.getLCP,d=a.getTTFB;t(e),c(e),n(e),i(e),d(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),o()}},[[63,1,2]]]);
//# sourceMappingURL=main.37eeed65.chunk.js.map