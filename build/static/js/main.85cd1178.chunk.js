(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(2),r=n(3),c=n(5),a=n(4),i=n(1),j=n.n(i),l=n(7),u=n.n(l),h=(n(12),n(0));var d=function(){return Object(h.jsxs)(h.Fragment,{children:["]",Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"RESTy "})})]})};var o=function(){return Object(h.jsx)("footer",{children:"\xa9 2021"})};n(14);var b=function(t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();t.handleApiCall({method:"GET",url:"https://pokeapi.co/api/v2/pokemon"})},children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"URL: "}),Object(h.jsx)("input",{name:"url",type:"text"}),Object(h.jsx)("button",{type:"submit",children:"GO!"})]}),Object(h.jsxs)("label",{className:"methods",children:[Object(h.jsx)("span",{id:"get",children:"GET"}),Object(h.jsx)("span",{id:"post",children:"POST"}),Object(h.jsx)("span",{id:"put",children:"PUT"}),Object(h.jsx)("span",{id:"delete",children:"DELETE"})]})]})})};var O=function(t){return Object(h.jsx)("section",{children:Object(h.jsx)("pre",{children:this.props.data?JSON.stringify(this.props.data,void 0,2):null})})},p=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).callApi=function(t){r.setState({data:{count:2,results:[{name:"fake thing 1",url:"http://fakethings.com/1"},{name:"fake thing 2",url:"http://fakethings.com/2"}]},requestParams:t})},r.state={data:null,requestParams:{}},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(j.a.Fragment,{children:[Object(h.jsx)(d,{}),Object(h.jsxs)("div",{children:["Request Method: ",this.state.requestParams.method]}),Object(h.jsxs)("div",{children:["URL: ",this.state.requestParams.url]}),Object(h.jsx)(b,{handleApiCall:this.callApi}),Object(h.jsx)(O,{data:this.state.data}),Object(h.jsx)(o,{})]})}}]),n}(j.a.Component),x=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)(p,{})}}]),n}(j.a.Component),m=document.getElementById("root");u.a.render(Object(h.jsx)(x,{}),m)}},[[15,1,2]]]);
//# sourceMappingURL=main.85cd1178.chunk.js.map