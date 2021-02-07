(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(10),r=n.n(c),o=n(1),i=n.n(o),s=(n(19),n(13)),u=n(2),l=n(3),m=n(5),b=n(4),h=n(11),j=n.n(h),d=n(12),f=n(6),p=n.n(f),C=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:p.a.title,children:["Name",Object(a.jsx)("input",{className:p.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:p.a.title,children:["Number",Object(a.jsx)("input",{className:p.a.input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(o.Component),O=n(7),v=n.n(O),_=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)(o.Fragment,{children:Object(a.jsx)("ul",{className:v.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:v.a.listItem,children:[Object(a.jsxs)("span",{className:v.a.name,children:[c,":"]}),Object(a.jsx)("span",{className:v.a.num,children:r}),Object(a.jsx)("button",{className:v.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})}}]),n}(o.Component),x=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleChange=function(e){var n=e.currentTarget.value;t.props.onChange(n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.value;return Object(a.jsx)("input",{type:"text",value:t,onChange:this.handleChange})}}]),n}(o.Component),g=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleFilterChange=function(e){t.setState({filter:e})},t.formSubmitHandler=function(e){if(t.state.contacts.map((function(t){return t.name.toLocaleLowerCase()})).includes(e.name.toLocaleLowerCase()))alert("".concat(e.name," is already in contacts."));else{var n={id:j.a.generate(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))}},t.getVisibleContacts=function(){var e=t.state.filter.toLocaleLowerCase();return t.state.contacts.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(a.jsxs)(o.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(C,{onSubmit:this.formSubmitHandler}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(x,{value:this.state.filter,onChange:this.handleFilterChange}),Object(a.jsx)(_,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(o.Component);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.querySelector("#root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__M4FHI",title:"ContactForm_title__etUqG",input:"ContactForm_input__1m1vW",button:"ContactForm_button__3RQLQ"}},7:function(t,e,n){t.exports={list:"ContactList_list__2eTZi",listItem:"ContactList_listItem__5cfi0",name:"ContactList_name__3K7dY",num:"ContactList_num__2r2gB",button:"ContactList_button__83Ijn"}}},[[28,1,2]]]);
//# sourceMappingURL=main.d8b30551.chunk.js.map