(this["webpackJsonptexas2010.github.io"]=this["webpackJsonptexas2010.github.io"]||[]).push([[0],{51:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),s=a(13),i=a.n(s),o=(a(49),a(50),a(51),a(7)),l=a(8),j=a(10),b=a(9),d=a(74),h=a(76),u=a(78),m=a(79),x=a(16),O=a(18),p=a(20),f=a(24),v=a(73),k=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).state={isDark:!0},c.handleSubmit=c.handleSubmit.bind(Object(f.a)(c)),c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("themeMode");e&&(document.documentElement.classList.add(e),this.setState({isDark:"dark"===e}))}},{key:"handleSubmit",value:function(){var e=this;this.setState((function(e){return{isDark:!e.isDark}}),(function(){localStorage.setItem("themeMode",e.state.isDark?"dark":"light"),document.documentElement.classList.contains("dark")?document.documentElement.classList.replace("dark","light"):document.documentElement.classList.contains("light")&&document.documentElement.classList.replace("light","dark")}))}},{key:"render",value:function(){var e=this.state.isDark;return Object(c.jsxs)(v.a,{onClick:this.handleSubmit,variant:"link",type:"button",className:this.props.className,children:[Object(c.jsxs)("span",{children:[e?"Dark":"Light"," Mode "]}),Object(c.jsx)(x.a,{icon:e?O.b:O.c,className:"text-white"})]})}}]),a}(n.Component),N=(a(64),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)(u.a,{expand:"lg",className:"nav-bg text-white mb-4",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(u.a.Brand,{href:"/",className:"text-white",children:"Lance"}),Object(c.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"border-white",children:Object(c.jsx)(x.a,{icon:O.a,className:"text-white"})}),Object(c.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(m.a,{className:"ml-auto",children:[Object(c.jsx)(p.Link,{href:"/",className:"nav-link text-white hvr-underline-reveal",children:"Home"}),Object(c.jsx)(p.Link,{href:"#about",to:"about",smooth:!0,className:"nav-link text-white hvr-underline-reveal",children:"About"}),Object(c.jsx)(p.Link,{href:"#projects",to:"projects",smooth:!0,duration:600,className:"nav-link text-white hvr-underline-reveal",children:"Projects"}),Object(c.jsx)(p.Link,{href:"#contact",to:"contact",smooth:!0,duration:1e3,className:"nav-link text-white hvr-underline-reveal",children:"Contact"}),Object(c.jsx)(k,{className:"nav-link text-white hvr-underline-reveal"})]})})]})})}}]),a}(n.Component)),y=a(75),g=(a(68),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={aboutList:[{title:"Languages",body:["HTML","CSS","JavaScript"]},{title:"Libraries/Frameworks",body:["React","Node.js","Express.js"]},{title:"Tools",body:["Visual Studio Code","Git","Terminal"]}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.aboutList.map((function(e){var t=e.title,a=e.body;return Object(c.jsxs)(y.a,{children:[Object(c.jsx)("hr",{className:"border d-md-none"}),Object(c.jsx)("p",{className:"h4 text-color text-center",children:t}),Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsx)("ul",{className:"about-list",children:a.map((function(e){return Object(c.jsx)("li",{className:"text-color",children:e},e)}))})})]},t)}));return Object(c.jsxs)(d.a,{children:[Object(c.jsx)(h.a,{className:"justify-content-center mb-1",children:Object(c.jsx)(y.a,{children:Object(c.jsx)("h1",{id:"about",className:"text-center text-primary",children:"About"})})}),Object(c.jsx)(h.a,{className:"justify-content-center mb-2",children:Object(c.jsx)(y.a,{md:8,children:Object(c.jsx)("p",{className:"text-center lead text-color",children:"I am a junior front-end developer seeking a position that utilizes my skills with React, among other JavaScript libraries. I'm always looking for ways to innovate and help companies succeed by creating user-friendly interfaces with a strong focus on features and intuitive layouts."})})}),Object(c.jsx)(h.a,{className:"d-block d-md-flex justify-content-center",children:e}),Object(c.jsx)("hr",{className:"border-primary border-bottom"})]})}}]),a}(n.Component)),w=a(36),L=a.n(w),C=a(43),S=a(77),D=a(80),E=(a(70),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.project,t=e.title,a=e.body,n=e.imgLink,r=e.projectLink,s=e.skills;return Object(c.jsx)(D.a,{style:{flex:"none"},bg:"dark",text:"white",className:"mb-4 project-card",children:Object(c.jsxs)("a",{href:r,className:"hvr-sweep-to-right",children:[Object(c.jsx)(D.a.Img,{variant:"top",src:"/images/".concat(n),alt:t}),Object(c.jsxs)(D.a.Body,{className:"",children:[Object(c.jsx)(D.a.Title,{className:"text-white",children:t}),Object(c.jsx)(D.a.Text,{className:"text-white",children:a}),Object(c.jsx)(D.a.Text,{className:"text-white",children:s})]})]})})}}]),a}(n.Component)),M=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).state={projects:null},c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(C.a)(L.a.mark((function e(){var t,a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/data/projects.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c=a.projects,this.setState({projects:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.projects;return Object(c.jsxs)(d.a,{children:[Object(c.jsx)(h.a,{className:"justify-content-center mb-2",children:Object(c.jsx)(y.a,{children:Object(c.jsx)("h1",{id:"projects",className:"text-center text-primary",children:"Projects"})})}),Object(c.jsx)(h.a,{className:"d-flex flex-wrap justify-content-center",children:Object(c.jsx)(S.a,{className:"justify-content-center",children:e?e.map((function(e,t){return Object(c.jsx)(E,{project:e},t)})):"Loading"})}),Object(c.jsx)("hr",{className:"border-primary border-bottom"})]})}}]),a}(n.Component),T=a(37),I=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(d.a,{className:"mb-5",children:[Object(c.jsx)(h.a,{className:"justify-content-center mb-3",children:Object(c.jsx)(y.a,{children:Object(c.jsx)("h1",{id:"contact",className:"text-center text-primary",children:"Contact"})})}),Object(c.jsxs)(h.a,{className:"justify-content-center",children:[Object(c.jsx)(y.a,{xs:12,md:!0,className:"text-center mb-2",children:Object(c.jsxs)("a",{className:"btn text-color border rounded-pill hvr-underline-from-center",target:"_blank",rel:"noreferrer",href:"https://github.com/texas2010",children:[Object(c.jsx)(x.a,{icon:T.b})," Github/texas2010"]})}),Object(c.jsx)(y.a,{xs:12,md:!0,className:"text-center mb-2",children:Object(c.jsxs)("a",{className:"btn text-color border rounded-pill hvr-underline-from-center",target:"_blank",rel:"noreferrer",href:"https://www.freecodecamp.org/texas2010",children:[Object(c.jsx)(x.a,{icon:T.a})," freeCodeCamp/texas2010"]})})]})]})}}]),a}(n.Component),J=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(N,{}),Object(c.jsx)(g,{}),Object(c.jsx)(M,{}),Object(c.jsx)(I,{}),Object(c.jsx)(d.a,{className:"mb-5",children:Object(c.jsx)(h.a,{children:Object(c.jsxs)("p",{className:"mx-auto text-color",children:["\xa9 ",(new Date).getFullYear()," texas2010"]})})})]})}}]),a}(n.Component);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.fd075e7f.chunk.js.map