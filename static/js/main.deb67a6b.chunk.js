(this.webpackJsonp2=this.webpackJsonp2||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),o=n(12),i=n.n(o),s=n(19),d=n(6),u=n(9),l=n(13),b=n(14),j=n(21),f=n(18),h=n(3),O=n(4);function x(){var e=Object(h.a)(["\n  margin-top: 20px;\n  ","\n"]);return x=function(){return e},e}function v(){var e=Object(h.a)(["\n  ","\n"]);return v=function(){return e},e}function g(){var e=Object(h.a)(["\n  width: 100px;\n  background-color: #fff5ee;\n  height: 30px;\n  margin-right: 10px;\n  border: 1px solid #dcdcdc;\n  border-radius: 6px;\n  font-weight: 600;\n  box-shadow: 1px 1px 2px #c0c0c0;\n  transition: all 0.2s linear;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #da70d6;\n  }\n\n  &:focus {\n    outline: none;\n    border: 1px dotted #bc8f8f;\n    background-color: #fff0f5;\n    width: 110px;\n  }\n"]);return g=function(){return e},e}function p(){var e=Object(h.a)(["\n  ","\n"]);return p=function(){return e},e}var k='\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n',F="\n  ".concat("\n  font-size: 20px;\n","\n  ").concat(k,"\n"),m=O.a.h2(p(),k),P=O.a.button(g()),w=O.a.div(v(),F),C=O.a.div(x(),F),T=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(w,{children:["Good: ",t]}),Object(r.jsxs)(w,{children:["Neutral: ",n]}),Object(r.jsxs)(w,{children:["Bad: ",c]}),Object(r.jsxs)(w,{children:["Total: ",a()]}),a()>0&&Object(r.jsxs)(w,{children:["Positive feedback: ",o()," %"]})]})};T.defaultProps={good:0,neutral:0,bad:0};var y=T,S=n(20),B=function(e){var t=e.options,n=e.onLeaveFeedback,c=Object(S.a)(t,3),a=c[0],o=c[1],i=c[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(P,{onClick:function(){return n(a)},children:"Good"}),Object(r.jsx)(P,{onClick:function(){return n(o)},children:"Neutral"}),Object(r.jsx)(P,{onClick:function(){return n(i)},children:"Bad"})]})};B.defaultProps={options:["good","neutral","bad"]};var G=B,N=function(e){var t=e.title,n=e.children;return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m,{children:t})}),n]})},M=function(e){var t=e.message;return Object(r.jsx)(C,{children:t})};M.defaultProps={message:"No data"};var J=M,L=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedbackButtonClick=function(t){return e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},t,e[t]+1))}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return(e.state.good/e.countTotalFeedback()*100).toFixed(0)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{title:"Please leave feedback",children:Object(r.jsx)(G,{options:Object(s.a)(Object.keys(this.state)),onLeaveFeedback:this.handleFeedbackButtonClick})}),0===this.countTotalFeedback()?Object(r.jsx)(J,{message:"No feedback given"}):Object(r.jsx)(N,{title:"Statistics",children:Object(r.jsx)(y,{good:t,neutral:n,bad:c,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})})]})}}]),n}(c.Component);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.deb67a6b.chunk.js.map