(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{25:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(16),a=c(17),s=c(20),r=c(19),j=c(1),i=c.n(j),l=c(18),o=c.n(l),u=c(3),b=(c(25),c(7)),d=c.n(b),O=(c(44),c(0));var h=function(){return Object(O.jsxs)(O.Fragment,{children:["]",Object(O.jsx)("header",{children:Object(O.jsx)("h1",{children:"RESTy "})})]})};c(46);var x=function(e){var t=Object(j.useState)(""),c=Object(u.a)(t,2),n=(c[0],c[1]),a=Object(j.useState)({}),s=Object(u.a)(a,2),r=(s[0],s[1]),i=Object(j.useState)("get"),l=Object(u.a)(i,2);return l[0],l[1],Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={reqBody:t.target.text.value,method:t.target.select.value,url:t.target.url.value};e.handleApiCall(c)},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"URL: "}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{name:"url",onChange:function(e){n(e.target.value)},id:"url",type:"text"}),Object(O.jsx)("button",{"data-testid":"button-test",type:"submit",children:"Try \u2757"})]}),Object(O.jsx)("label",{className:"methods",for:"select",children:" select the method \ud83d\ude04 "}),Object(O.jsxs)("select",{id:"select",name:"select",children:[Object(O.jsx)("option",{children:"choose"}),Object(O.jsx)("option",{id:"get",value:"get",children:"GET \ud83d\udcda"}),Object(O.jsx)("option",{id:"delete",value:"delete",children:"DELETE\u274e"}),Object(O.jsx)("option",{id:"put",value:"put",children:"PUT \ud83d\udcd3"}),Object(O.jsx)("option",{id:"post",value:"post",children:"POST \ud83d\udcd1"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{id:"text",name:"text",onChange:function(e){r(e.target.value)}})]})})};var f=function(e){return Object(O.jsx)("section",{children:Object(O.jsx)("pre",{"data-testid":"resultTest",children:e.data?JSON.stringify(e.data,void 0,2):null})})};c(47);var p=function(){return Object(O.jsx)("footer",{children:"\xa9Dima Alabsi 2021"})};function v(){var e=Object(j.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(j.useState)({}),s=Object(u.a)(a,2),r=s[0],l=s[1],o=Object(j.useState)([]),b=Object(u.a)(o,2),v=b[0],m=b[1];Object(j.useEffect)((function(){n("Method ---\x3e ".concat(r.method,"/  url--\x3e ").concat(r.url))}));return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsxs)("div",{children:["Request Method: ",r.method]}),Object(O.jsxs)("div",{children:["URL: ",r.url]}),Object(O.jsxs)("section",{children:[" Hello from useEffect HOOK \u270c\ufe0f",c]}),Object(O.jsx)(x,{handleApiCall:function(e){var t=e.url,c=e.reqBody,n=e.method;"post"==n||"put"==n?d.a[n](t,c).then((function(t){m(t.data),l(e)})):d.a[n](t).then((function(t){m(t.data),l(e)}))}}),Object(O.jsx)(f,{data:v}),Object(O.jsx)(p,{})]})}var m=function(e){Object(s.a)(c,e);var t=Object(r.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(O.jsx)(v,{})}}]),c}(i.a.Component),g=document.getElementById("root");o.a.render(Object(O.jsx)(m,{}),g)}},[[48,1,2]]]);
//# sourceMappingURL=main.2fb7e35f.chunk.js.map