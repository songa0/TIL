(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(15),n(10)),o=n(6),h=n(2),l=n(3),b=n(5),u=n(4),d=(n(16),n(0)),j=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:t}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),m=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.habits;return Object(d.jsx)("ul",{children:t.map((function(t){return Object(d.jsx)(j,{habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},t.id)}))})}}]),n}(a.Component),f=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log("habitHeader"),Object(d.jsxs)("header",{className:"habit-header",children:[Object(d.jsx)("i",{className:"fas fa-leaf habit-logo"}),Object(d.jsx)("span",{className:"habit-title",children:"Habit Tracker"}),Object(d.jsx)("span",{className:"habit-total-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),p=Object(a.memo)((function(e){var t=c.a.createRef(),n=c.a.createRef(),a=function(a){a.preventDefault();var c=t.current.value;c&&e.onAdd(c),n.current.reset()};return Object(d.jsxs)("form",{ref:n,action:"",className:"add-form",onSubmit:a,children:[Object(d.jsx)("input",{ref:t,type:"text",placeholder:"Habit",className:"habit-input"}),Object(d.jsx)("button",{className:"habit-add",onClick:a,children:"Add"})]})})),O=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Eating",count:0}]},e.handleIncrement=function(t){var n=e.state.habits.map((function(e){return t.id===e.id?Object(o.a)(Object(o.a)({},t),{},{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){if(t.id===e.id){var n=t.count-1;return Object(o.a)(Object(o.a)({},t),{},{count:n<0?0:n})}return e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(i.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return e.count>0?Object(o.a)(Object(o.a)({},e),{},{count:0}):e}));e.setState({habits:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(d.jsx)(p,{onAdd:this.handleAdd}),Object(d.jsx)(m,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete}),Object(d.jsx)("button",{className:"habit-reset",onClick:this.handleReset,children:"Reset All"})]})}}]),n}(a.PureComponent);n(18);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3fff726b.chunk.js.map