(this.webpackJsonpobpull=this.webpackJsonpobpull||[]).push([[0],{223:function(e,t,a){},224:function(e,t,a){},474:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(53),o=a.n(r),i=(a(223),a(224),a(486)),s=a(479),l=a(483),u=a(72),d=a(210),p=a(211),b=a(98),j=a(213),f=a(17),O=a(25),g=a(73),h=a(477),v=a(478),x=a(484),y="yyyy/MM";var m,w=a(59),k=a.n(w),L=a(192),D=a(23),_=a(193),F=a.n(_);!function(e){e.Start="LOAD_START",e.Next="LOAD_NEXT",e.Error="LOAD_ERROR",e.Load="LOAD_PULLS",e.Finished="LOAD_FINISHED"}(m||(m={}));var S={loaded:!1,loading:!1,page:1,pulls:[]};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.Start:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case m.Next:return Object(O.a)(Object(O.a)({},e),{},{page:t.value});case m.Finished:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,loaded:!0});case m.Load:return Object(O.a)(Object(O.a)({},e),{},{pulls:[].concat(Object(g.a)(e.pulls),Object(g.a)(t.value))});default:throw new Error("Unknown action type")}}var P="https://api.github.com";function T(e){return["id","created_at","closed_at"].reduce((function(t,a){return a in e&&(t[a]=e[a]),t}),{})}var A=a(19),I=function(e){return"gap"!==e&&Object(A.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.6)",fontWeight:"bold"},children:e})},N=function(e){var t=e.width,a=e.height,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{repo:"downshift-js/downshift",state:"all",perPage:50},t=e.repo,a=e.state,c=e.perPage,r=Object(n.useReducer)(E,S),o=Object(D.a)(r,2),i=o[0],s=i.loaded,l=i.loading,u=i.pulls,d=i.page,p=o[1],b=function(){return p({type:m.Finished})};if(Object(n.useEffect)((function(){function e(){return(e=Object(L.a)(k.a.mark((function e(){var n,r,o,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p({type:m.Start}),e.next=4,fetch("".concat(P,"/repos/").concat(t,"/pulls?state=").concat(a,"&page=").concat(d,"&per_page=").concat(c));case 4:return n=e.sent,r=F()(n.headers.get("link")),e.next=8,n.json();case 8:o=e.sent,i=o.map(T),p({type:m.Load,value:i}),(null===r||void 0===r?void 0:r.next)?p({type:m.Next,value:Number(r.next.page)}):b(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),b();case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}s||function(){e.apply(this,arguments)}()}),[d,s,c,t,a]),Number(c)>100)throw new Error("useGithubPulls: Maximum number of items per page is 100");return{loading:l,pulls:u}}().pulls,r=Object(n.useMemo)((function(){return function(e){var t,a=Object(g.a)(e).reduce((function(e,t){var a=new Date(t.created_at);return Object(h.a)(a,e.start)?Object(O.a)(Object(O.a)({},e),{},{start:a}):e}),{end:new Date,start:new Date}),n=Object(v.a)(a).reduce((function(e,t){return e[Object(x.a)(new Date(t),y)]={opened:0,closed:0},e}),{}),c=Object(f.a)(e);try{for(c.s();!(t=c.n()).done;){var r=t.value,o=Object(x.a)(new Date(r.created_at),y),i=(null===r||void 0===r?void 0:r.closed_at)&&Object(x.a)(new Date(r.closed_at),y);n[o].opened+=1,i&&n[i]&&(n[i].closed+=1)}}catch(s){c.e(s)}finally{c.f()}return Object.keys(n).map((function(e){var t=n[e];return{date:e,opened:t.opened,closed:t.closed,gap:.5}}))}(c)}),[c]);return Object(A.jsx)(i.a,{width:t||"100%",height:a||"100%",minHeight:500,minWidth:120,children:Object(A.jsxs)(s.a,{data:r,margin:{top:8,bottom:8},children:[Object(A.jsx)(l.a,{stroke:"#cecece",vertical:!1}),Object(A.jsx)(u.a,{width:240,verticalAlign:"top",align:"left",layout:"vertical",formatter:I}),Object(A.jsx)(d.a,{height:80,dy:12,dataKey:"date",interval:12,tickLine:!1,tickFormatter:function(e){return e.split("/")[0]},tick:{fill:"rgba(0, 0, 0, 0.4)"},stroke:"transparent"}),Object(A.jsx)(p.a,{width:24,dx:-16,type:"number",tickLine:!1,tickCount:25,tick:{fill:"rgba(0, 0, 0, 0.4)"},stroke:"transparent"}),Object(A.jsx)(b.a,{}),Object(A.jsx)(j.a,{name:"PRs opened",stackId:"x",dataKey:"opened",fill:"rgb(241,160,70)",radius:2,legendType:"circle"}),Object(A.jsx)(j.a,{stackId:"x",dataKey:"gap",barSize:1,fill:"transparent",tooltipType:"none"}),Object(A.jsx)(j.a,{name:"PRs closed",stackId:"x",dataKey:"closed",fill:"rgb(117, 250, 139)",radius:2,legendType:"circle"})]})})};var R=function(){return Object(A.jsx)(N,{})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,487)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(R,{})}),document.getElementById("root")),M()}},[[474,1,2]]]);
//# sourceMappingURL=main.86b02f79.chunk.js.map