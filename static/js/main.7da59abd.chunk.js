(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__3rt68",label:"ContactForm_label__3F1cG",input:"ContactForm_input__1Z1Q3",button:"ContactForm_button__13J-W"}},function(t,e,n){t.exports={list:"ContactList_list__2yrJd",listItem:"ContactList_listItem__1SBCT",button:"ContactList_button__17LtF",name:"ContactList_name__1CiBo"}},,,,,,,,,function(t,e,n){t.exports={input:"ContactFilter_input__2l7gj"}},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n(10),i=n.n(s),r=(n(18),n(9)),o=n(4),l=n(5),u=n(7),b=n(6),d=n(11),m=n(2),j=n.n(m),h=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target.name;t.setState(Object(d.a)({},n,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact({name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.form,children:[Object(a.jsxs)("label",{className:j.a.label,children:["Name",Object(a.jsx)("input",{className:j.a.input,name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:j.a.label,children:["Number",Object(a.jsx)("input",{className:j.a.input,name:"number",type:"tel",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),f=n(22),p=n(3),C=n.n(p),O=function(t){var e=t.contacts,n=t.deleteContact;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("ul",{className:C.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:C.a.listItem,children:[Object(a.jsx)("span",{className:C.a.name,children:t.name}),": ",Object(a.jsx)("span",{children:t.number}),Object(a.jsx)("button",{className:C.a.button,type:"button","data-id":t.id,onClick:n,children:"Delete"})]},t.id)}))})]})},x=n(12),_=n.n(x),v=function(t){var e=t.filter,n=t.onHandleFilter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)("input",{className:_.a.input,tyype:"text",value:e,onChange:n})]})},g=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n={id:Object(f.a)(),name:e.name,number:e.number};t.setState((function(t){return t.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts.")):{contacts:[].concat(Object(r.a)(t.contacts),[n])}}))},t.deleteContact=function(e){var n=e.target.dataset.id;t.setState({contacts:Object(r.a)(t.state.contacts.filter((function(t){return t.id!==n})))})},t.onHandleFilter=function(e){t.setState({filter:e.target.value})},t.getFiltredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(h,{addContact:this.addContact}),Object(a.jsx)(v,{filter:this.state.filter,onHandleFilter:this.onHandleFilter}),Object(a.jsx)(O,{contacts:this.getFiltredContacts(),deleteContact:this.deleteContact})]})}}]),n}(c.Component),y=function(){return Object(a.jsx)(g,{})};n(19);i.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.7da59abd.chunk.js.map