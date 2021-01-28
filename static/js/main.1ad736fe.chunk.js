(this["webpackJsonptexas2010.github.io"]=this["webpackJsonptexas2010.github.io"]||[]).push([[0],{38:function(e,t,c){},44:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(15),i=c.n(s),j=(c(37),c(38),c(8)),o=c(9),l=c(11),b=c(10),h=c(57),d=c(53),x=c(58),u=c(26),m=c(29),O=(c(44),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(a.jsx)(h.a,{expand:"lg",className:"nav-bg text-white mb-4",children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(h.a.Brand,{href:"/",className:"text-white",children:"Lance"}),Object(a.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"border-white",children:Object(a.jsx)(u.a,{icon:m.a,className:"text-white"})}),Object(a.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(x.a,{className:"ml-auto",children:[Object(a.jsx)(x.a.Link,{href:"/",className:"text-white",children:"Home"}),Object(a.jsx)(x.a.Link,{href:"#about",className:"text-white",children:"About"}),Object(a.jsx)(x.a.Link,{href:"#projects",className:"text-white",children:"Projects"}),Object(a.jsx)(x.a.Link,{href:"#contact",className:"text-white",children:"Contact"})]})})]})})}}]),c}(n.Component)),p=c(54),f=c(55),N=(c(48),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).state={aboutList:[{title:"Languages",body:["HTML","CSS","JavaScript","PHP","MySQL"]},{title:"Libraries/Frameworks",body:["Bootstrap","React","Node.js","Express.js"]},{title:"Tools",body:["Visual Studio Code","Git","Terminal","Gulp.js"]}]},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.aboutList.map((function(e){var t=e.title,c=e.body;return Object(a.jsxs)(p.a,{children:[Object(a.jsx)("hr",{className:"border d-md-none"}),Object(a.jsx)("p",{className:"h4 text-white text-center",children:t}),Object(a.jsx)("div",{className:"d-flex justify-content-center",children:Object(a.jsx)("ul",{className:"about-list",children:c.map((function(e){return Object(a.jsx)("li",{className:"text-white",children:e},e)}))})})]},t)}));return Object(a.jsxs)(d.a,{children:[Object(a.jsx)(f.a,{className:"justify-content-center mb-1",children:Object(a.jsx)(p.a,{children:Object(a.jsx)("h1",{id:"about",className:"text-center text-primary",children:"About"})})}),Object(a.jsx)(f.a,{className:"justify-content-center mb-2",children:Object(a.jsx)(p.a,{md:8,children:Object(a.jsx)("p",{className:"text-center lead text-white",children:"I am self-taught programmer who loves to teach programming whose aim is to become a front end or back end web developer."})})}),Object(a.jsx)(f.a,{className:"d-block d-md-flex justify-content-center",children:e}),Object(a.jsx)("hr",{className:"border-primary border-bottom"})]})}}]),c}(n.Component)),v=c(25),y=c.n(v),w=c(30),g=(c(31),c(56)),k=c(59),L=(c(50),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.project,t=e.title,c=e.body,n=e.imgLink,r=e.projectLink,s=e.skills;return Object(a.jsx)(k.a,{style:{flex:"none"},bg:"dark",text:"white",className:"mb-4 project-card",border:"primary",children:Object(a.jsxs)("a",{href:r,children:[Object(a.jsx)(k.a.Img,{variant:"top",src:"/images/".concat(n),alt:t}),Object(a.jsxs)(k.a.Body,{children:[Object(a.jsx)(k.a.Title,{className:"text-white",children:t}),Object(a.jsx)(k.a.Text,{className:"text-white",children:c}),Object(a.jsx)(k.a.Text,{className:"text-white",children:s})]})]})})}}]),c}(n.Component)),C=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(e){var a;return Object(j.a)(this,c),(a=t.call(this,e)).state={projects:null},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t,c,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/data/projects.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a=c.projects,this.setState({projects:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.projects;return Object(a.jsxs)(d.a,{children:[Object(a.jsx)(f.a,{className:"justify-content-center mb-2",children:Object(a.jsx)(p.a,{children:Object(a.jsx)("h1",{id:"projects",className:"text-center text-primary",children:"Projects"})})}),Object(a.jsx)(f.a,{className:"d-flex flex-wrap justify-content-center",children:Object(a.jsx)(g.a,{className:"justify-content-center",children:e?e.map((function(e,t){return Object(a.jsx)(L,{project:e},t)})):"Loading"})}),Object(a.jsx)("hr",{className:"border-primary border-bottom"})]})}}]),c}(n.Component),S=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(a.jsxs)(d.a,{className:"mb-5",children:[Object(a.jsx)(f.a,{className:"justify-content-center mb-3",children:Object(a.jsx)(p.a,{children:Object(a.jsx)("h1",{id:"contact",className:"text-center text-primary",children:"Contact"})})}),Object(a.jsxs)(f.a,{className:"justify-content-center",children:[Object(a.jsx)(p.a,{xs:12,md:!0,className:"text-center mb-2",children:Object(a.jsx)("a",{className:"btn btn-outline-light",target:"_blank",rel:"noreferrer",href:"https://github.com/texas2010",children:"Github/texas2010"})}),Object(a.jsx)(p.a,{xs:12,md:!0,className:"text-center mb-2",children:Object(a.jsx)("a",{className:"btn btn-outline-light",target:"_blank",rel:"noreferrer",href:"https://www.freecodecamp.org/texas2010",children:"freeCodeCamp/texas2010"})})]})]})}}]),c}(n.Component),T=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{}),Object(a.jsx)(N,{}),Object(a.jsx)(C,{}),Object(a.jsx)(S,{})]})}}]),c}(n.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1ad736fe.chunk.js.map