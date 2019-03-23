(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(57)},32:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"toggleForm",function(){return v}),n.d(r,"addWord",function(){return E}),n.d(r,"removeWord",function(){return O}),n.d(r,"toggleWord",function(){return g}),n.d(r,"changeFilterMode",function(){return w}),n.d(r,"setWords",function(){return y}),n.d(r,"toggleWordAsync",function(){return M}),n.d(r,"removeWordAsync",function(){return j}),n.d(r,"addWordAsync",function(){return W});var o=n(0),a=n.n(o),c=n(23),i=n.n(c),u=(n(32),n(2)),s=n(3),l=n(6),d=n(4),m=n(7),f=n(5),h=n(10),b=n.n(h),p="https://server2802.herokuapp.com/word";function v(){return{type:"TOGGLE_FORM"}}function E(e){return{type:"ADD_WORD",word:e}}function O(e){return{type:"REMOVE_WORD",id:e}}function g(e){return{type:"TOGGLE_WORD",id:e}}function w(e){return{type:"CHANGE_FILTER_MODE",filterMode:e}}function y(){return function(e){b.a.get(p).then(function(t){e({type:"SET_WORDS",words:t.data.words})})}}function M(e,t){return function(n){b.a.put(p,{id:e,isMemorized:t}).then(function(t){n({type:"TOGGLE_WORD",id:e})})}}function j(e){return function(t){b.a.delete(p+"/"+e).then(function(n){t({type:"REMOVE_WORD",id:e})})}}function W(e,t){return function(n){b.a.post(p,{en:e,vn:t}).then(function(e){n({type:"ADD_WORD",word:e.data.w})})}}var _=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getButton",value:function(){return this.props.wordInfo.isMemorized?a.a.createElement("button",{className:"btn btn-success"},"Forgot"):a.a.createElement("button",{className:"btn btn-danger"},"isMemorized")}},{key:"render",value:function(){var e=this.props,t=e.word,n=e.toggleWordAsync,r=e.removeWordAsync;return a.a.createElement("div",{className:"word",key:t._id},a.a.createElement("div",{className:"word-container"},a.a.createElement("h3",{className:"text-success"},t.en),a.a.createElement("h3",{className:"text-danger"},t.isMemorized?"----":t.vn)),a.a.createElement("div",{className:"btn-container"},a.a.createElement("button",{className:t.isMemorized?"btn btn-success":"btn btn-danger",onClick:function(){return n(t._id,!t.isMemorized)}},t.isMemorized?"Forgot":"Memorized"),a.a.createElement("button",{className:"btn btn-warning",onClick:function(){return r(t._id)}},"Remove")))}}]),t}(o.Component),D={removeWordAsync:j,toggleWordAsync:M},F=Object(f.b)(null,D)(_),R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={txtVn:"",txtEn:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.shoudShowForm,r=t.toggleForm,o=t.addWordAsync;return n?a.a.createElement("div",{className:"form-group word-from"},a.a.createElement("input",{placeholder:"English",className:"form-control",value:this.state.txtEn,onChange:function(t){return e.setState({txtEn:t.target.value})}}),a.a.createElement("br",null),a.a.createElement("input",{placeholder:"Vietnamese",className:"form-control",value:this.state.txtVn,onChange:function(t){return e.setState({txtVn:t.target.value})}}),a.a.createElement("br",null),a.a.createElement("div",{className:"btn-container"},a.a.createElement("button",{className:"btn btn-success",disabled:""===this.state.txtEn||""===this.state.txtVn,onClick:function(){o(e.state.txtEn,e.state.txtVn),e.setState({txtEn:"",txtVn:""})}},"Add word"),a.a.createElement("button",{className:"btn btn-danger",onClick:r},"Cancel"))):a.a.createElement("button",{className:"btn btn-success",style:{width:200,margin:10},onClick:r},"+")}}]),t}(o.Component),S=r,k=Object(f.b)(function(e){return{shoudShowForm:e.shoudShowForm}},S)(R),N=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filterMode,n=e.changeFilterMode;return a.a.createElement("div",null,a.a.createElement("select",{value:t,onChange:function(e){return n(e.target.value)},className:"word"},a.a.createElement("option",{value:"Show_All"},"Show All"),a.a.createElement("option",{value:"Show_Memorized"},"Show Memoried"),a.a.createElement("option",{value:"Show_Forgot"},"Show Forgot")))}}]),t}(o.Component),A={changeFilterMode:w},C=Object(f.b)(function(e){return{filterMode:e.filterMode}},A)(N),x=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.setWords()}},{key:"getFilterMode",value:function(){var e=this.props.filterMode;return this.props.words.filter(function(t){return("Show_Forgot"!==e||!t.isMemorized)&&!("Show_Memorized"===e&&!t.isMemorized)})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(k,null),a.a.createElement(C,null),this.getFilterMode().map(function(t){return a.a.createElement(F,{word:t,key:t._id,onToggleWord:e.onToggleWord,onRemoveWord:e.onRemoveWord})}))}}]),t}(o.Component),z=Object(f.b)(function(e){return{words:e.words,shouldShowForm:e.shouldShowForm,filterMode:e.filterMode}},r)(x),G=(n(56),n(9)),T=n(25),V=n(26);var L=Object(G.c)({words:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_WORD"===t.type?e.map(function(e){return e._id!==t.id?e:Object(V.a)({},e,{isMemorized:!e.isMemorized})}):"REMOVE_WORD"===t.type?e.filter(function(e){return e._id!==t.id}):"ADD_WORD"===t.type?e.concat(t.word):"SET_WORDS"===t.type?t.words:e},filterMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Show_All",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_FILTER_MODE"===t.type?t.filterMode:e},shoudShowForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_FORM"===t.type?!e:"ADD_WORD"===t.type?!e:e}}),I=Object(G.d)(L,Object(G.a)(T.a)),B=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f.a,{store:I},a.a.createElement(z,null)))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.966426bb.chunk.js.map