(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a.n(n),c=a(9),l=a.n(c),h=(a(15),a(3)),r=a(4),j=a(5),d=a(2),b=a(7),o=a(6),u=(a(16),function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={name:"",lastName:"",email:"",phone:""},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s}return Object(j.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,s=t.name;this.setState(Object(h.a)({},s,a))}},{key:"render",value:function(){var e="true"===this.props.canedit;return Object(s.jsx)("div",{className:"allContainer",children:e?Object(s.jsxs)("form",{className:"formContainer",children:[Object(s.jsxs)("label",{className:"inputLabel",children:["First Name:",Object(s.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name})]}),Object(s.jsxs)("label",{className:"inputLabel",children:["Last Name:",Object(s.jsx)("input",{type:"text",name:"lastName",onChange:this.handleChange,value:this.state.lastName})]}),Object(s.jsxs)("label",{className:"inputLabel",children:["Email:",Object(s.jsx)("input",{type:"email",name:"email",onChange:this.handleChange,value:this.state.email,required:!0})]}),Object(s.jsxs)("label",{className:"inputLabel",children:["Phone:",Object(s.jsx)("input",{type:"phone",name:"phone",onChange:this.handleChange,value:this.state.phone})]})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Name: ",this.state.name," ",this.state.lastName," "]}),Object(s.jsxs)("p",{children:["Email: ",this.state.email," "]}),Object(s.jsxs)("p",{children:["Phone: ",this.state.phone," "]})]})})}}]),a}(i.a.Component)),m=function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={schoolName:"",title:"",started:"",finished:""},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s}return Object(j.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,s=t.name;this.setState(Object(h.a)({},s,a))}},{key:"render",value:function(){var e="true"===this.props.canedit;return Object(s.jsx)("div",{children:e?Object(s.jsxs)("form",{className:"formContainerEducational",children:[Object(s.jsxs)("label",{className:"inputLarge",children:["School:",Object(s.jsx)("input",{type:"text",size:"50",name:"schoolName",onChange:this.handleChange,value:this.state.schoolName})]}),Object(s.jsxs)("label",{className:"inputLarge",children:["Title:",Object(s.jsx)("input",{type:"text",size:"50",name:"title",onChange:this.handleChange,value:this.state.title})]}),Object(s.jsxs)("label",{className:"inputLabel",children:["Started:",Object(s.jsx)("input",{type:"date",name:"started",onChange:this.handleChange,value:this.state.started})]}),Object(s.jsxs)("label",{className:"inputLabel",children:["Finished:",Object(s.jsx)("input",{type:"date",name:"finished",onChange:this.handleChange,value:this.state.finished})]})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["School Name: ",this.state.schoolName," "]}),Object(s.jsxs)("p",{children:["Title: ",this.state.title," "]}),Object(s.jsxs)("p",{children:["Course date : ",this.state.started," until ",this.state.finished," "]})]})})}}]),a}(i.a.Component),p=function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={companyName:"",position:"",mainTasks:"",started:"",finished:""},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s}return Object(j.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,s=t.name;this.setState(Object(h.a)({},s,a))}},{key:"render",value:function(){var e="true"===this.props.canedit;return Object(s.jsx)("div",{children:e?Object(s.jsxs)("form",{className:"formWorkExperience",children:[Object(s.jsxs)("label",{className:"inputLarge",children:["Company:",Object(s.jsx)("input",{type:"text",size:"50",name:"companyName",onChange:this.handleChange,value:this.state.companyName})]}),Object(s.jsxs)("label",{className:"inputLarge",children:["Position:",Object(s.jsx)("input",{type:"text",size:"50",name:"position",onChange:this.handleChange,value:this.state.position})]}),Object(s.jsxs)("label",{className:"inputLarge",children:["Main Tasks:",Object(s.jsx)("textarea",{cols:"50",rows:"3",name:"mainTasks",onChange:this.handleChange,value:this.state.mainTasks})]}),Object(s.jsxs)("label",{className:"inputLabel",children:["Started:",Object(s.jsx)("input",{type:"date",name:"started",onChange:this.handleChange,value:this.state.started})]}),Object(s.jsxs)("label",{className:"inputLabel",children:["Until:",Object(s.jsx)("input",{type:"date",name:"finished",onChange:this.handleChange,value:this.state.finished})]})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Company Name: ",this.state.name," ",this.state.lastName," "]}),Object(s.jsxs)("p",{children:["Position: ",this.state.email," "]}),Object(s.jsxs)("p",{children:["Main task: ",this.state.phone," "]}),Object(s.jsxs)("p",{children:["From: ",this.state.started," until ",this.state.finished," "]})]})})}}]),a}(i.a.Component),O=function(e){Object(b.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={isEditable:!0},e.handleButtons=e.handleButtons.bind(Object(d.a)(e)),e}return Object(j.a)(a,[{key:"handleButtons",value:function(e){var t=e.target,a=t.name,s=t.value;this.setState(Object(h.a)({},a,s))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h3",{className:"titles",children:"General"}),Object(s.jsx)(u,{canedit:this.state.isEditable.toString()}),Object(s.jsx)("h3",{className:"titles",children:"Education"}),Object(s.jsx)(m,{canedit:this.state.isEditable.toString()}),Object(s.jsx)("h3",{className:"titles",children:"Work Experience"}),Object(s.jsx)(p,{canedit:this.state.isEditable.toString()}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{className:"button",name:"isEditable",value:!1,onClick:this.handleButtons,children:"Preview"}),Object(s.jsx)("button",{className:"button",name:"isEditable",value:!0,onClick:this.handleButtons,children:"Edit"})]})]})}}]),a}(i.a.Component);l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ce1afb60.chunk.js.map