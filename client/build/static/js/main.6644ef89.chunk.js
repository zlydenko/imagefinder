(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){e.exports=t(143)},111:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),o=t.n(i),l=(t(111),t(25)),c=t.n(l),s=t(34),u=t(78),m=t(79),g=t(97),d=t(80),p=t(98),f=t(27),h=t.n(f),E=t(206),v=t(3),b=t(144),k=t(213),w=t(190),y=t(85),O=t.n(y),j=t(191),x=t(81),S=t.n(x),C=Object(b.a)(function(e){return{error:{backgroundColor:e.palette.error.dark},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});function N(e){var a=C();return r.a.createElement(k.a,{autoHideDuration:800,open:e.errorVisible,anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(w.a,{className:a.error,"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(S.a,{className:Object(v.a)(a.icon,a.iconVariant)}),e.message),action:[r.a.createElement(j.a,{key:"close","aria-label":"Close",color:"inherit",onClick:e.closeError},r.a.createElement(O.a,{className:a.icon}))]}))}var F=t(14),I=t(33),B=t(52),T=t(37),H=t(212),W=t(192),L=t(193),M=t(194),P=t(200),V=t(40),_=t(195),R=t(86),z=t.n(R),J=t(198),A=t(89),D=t.n(A),G=t(90),K=t.n(G),U=t(87),$=t.n(U),q=t(88),Q=t.n(q),X=t(196),Y=t(197),Z=t(199),ee=Object(b.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(B.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}});function ae(e){var a=ee(),t=Object(T.a)(),n=r.a.useState(!1),i=Object(F.a)(n,2),o=i[0],l=i[1];return r.a.createElement("div",{className:a.root},r.a.createElement(W.a,null),r.a.createElement(L.a,{position:"fixed",className:Object(v.a)(a.appBar,Object(I.a)({},a.appBarShift,o))},r.a.createElement(M.a,null,r.a.createElement(j.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){l(!0)},edge:"start",className:Object(v.a)(a.menuButton,o&&a.hide)},r.a.createElement(z.a,null)),r.a.createElement(V.a,{variant:"h6",noWrap:!0},e.activePageTitle))),r.a.createElement(H.a,{className:a.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(j.a,{onClick:function(){l(!1)}},"ltr"===t.direction?r.a.createElement($.a,null):r.a.createElement(Q.a,null))),r.a.createElement(_.a,null),r.a.createElement(X.a,null,r.a.createElement(Y.a,null,r.a.createElement(J.a,null,"people")),r.a.createElement(Z.a,{primary:e.username})),r.a.createElement(_.a,null),r.a.createElement(P.a,null,["Home","History"].map(function(a,t){return r.a.createElement(X.a,{button:!0,key:a,onClick:"home"===e.currentPage?e.goToHistory:e.goToMain,disabled:e.currentPage===a.toLowerCase()},r.a.createElement(Y.a,null,t%2===0?r.a.createElement(D.a,null):r.a.createElement(K.a,null)),r.a.createElement(Z.a,{primary:a}))})),r.a.createElement(_.a,null),r.a.createElement(X.a,{button:!0,onClick:function(){e.logOutFn()}},r.a.createElement(Y.a,null,r.a.createElement(J.a,null,"exit_to_app")),r.a.createElement(Z.a,{primary:"logout"}))),r.a.createElement("main",{className:Object(v.a)(a.content,Object(I.a)({},a.contentShift,o))},r.a.createElement("div",{className:a.drawerHeader}),e.children))}var te=t(210),ne=t(91),re=t.n(ne),ie=t(201),oe=t(202),le=Object(b.a)(function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:19},button:{margin:e.spacing(1)}}});function ce(e){var a=le(),t=r.a.useState(e.value),n=Object(F.a)(t,2),i=n[0],o=n[1],l=function(){e.searchFn(i)};return r.a.createElement(te.a,{label:"Search",fullWidth:!0,variant:"outlined",className:a.textField,value:i,onChange:function(e){o(e.target.value)},onKeyDownCapture:function(e){"Enter"===e.key&&l()},margin:"normal",InputProps:{startAdornment:r.a.createElement(ie.a,{position:"start"},r.a.createElement(re.a,null)),endAdornment:r.a.createElement(ie.a,{position:"end"},r.a.createElement(oe.a,{variant:"contained",color:"primary",className:a.button,onClick:l},"Go",r.a.createElement(J.a,null,"send")))}})}var se=t(203),ue=t(204),me=t(205),ge=t(93),de=t.n(ge),pe=t(92),fe=t.n(pe),he=Object(b.a)(function(e){return{root:{width:"100%",marginRight:"8px",marginLeft:"8px",display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"red"}}});function Ee(e){var a=he();return r.a.createElement("div",{className:a.root},r.a.createElement(se.a,{cellHeight:200,className:a.gridList,cols:3},e.images.map(function(t){return r.a.createElement(ue.a,{key:t.url,cols:t.cols||1},r.a.createElement("img",{src:t.images.fixed_width.url,alt:t.title}),r.a.createElement(me.a,{classes:{root:a.titleBar,title:a.title},actionIcon:r.a.createElement(j.a,{"aria-label":"star ".concat(t.title),onClick:function(){return a=t.url,n=t.liked,e.likeFn(a,!n),void e.refetchFn();var a,n}},t.liked?r.a.createElement(fe.a,{className:a.icon}):r.a.createElement(de.a,{className:a.icon}))}),")")})))}var ve=t(214),be=t(95),ke=t.n(be),we=t(94),ye=t.n(we);function Oe(e){var a=r.a.useState(0),t=Object(F.a)(a,2),n=t[0],i=t[1],o=e.pagesCounter;return r.a.createElement(ve.a,{steps:o,position:"static",variant:"text",activeStep:n,nextButton:r.a.createElement(oe.a,{size:"small",onClick:function(){i(function(e){return e+1}),e.goto(n)},disabled:n===o-1},"Next",r.a.createElement(ye.a,null)),backButton:r.a.createElement(oe.a,{size:"small",onClick:function(){i(function(e){return e-1}),e.goto(n)},disabled:0===n},r.a.createElement(ke.a,null),"Back")})}var je=t(207),xe=t(96),Se=t.n(xe);function Ce(e){return e.loading?r.a.createElement(E.a,null):r.a.createElement(P.a,{dense:!0},e.history.map(function(a){var t=a.id,n=a.text;return r.a.createElement(X.a,{button:!0,key:t,onClick:function(){return e.goToHistory(n)}},r.a.createElement(Z.a,{primary:n}),r.a.createElement(je.a,null,r.a.createElement(j.a,{"aria-label":"Delete",onClick:function(){return e.deleteHistory(t)}},r.a.createElement(Se.a,null))))}))}var Ne="http://10.10.10.150:9001/api";function Fe(e){var a=r.a.useState(""),t=Object(F.a)(a,2),n=t[0],i=t[1],o=r.a.useState([]),l=Object(F.a)(o,2),c=l[0],s=l[1],u=r.a.useState(null),m=Object(F.a)(u,2),g=m[0],d=m[1],p=r.a.useState(!1),f=Object(F.a)(p,2),v=f[0],b=f[1],k=r.a.useState("main"),w=Object(F.a)(k,2),y=w[0],O=w[1],j=r.a.useState([]),x=Object(F.a)(j,2),S=x[0],C=x[1],N=r.a.useState(!1),I=Object(F.a)(N,2),B=I[0],T=I[1],H=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&b(!0);var r={username:e.username,input:a};t&&(r.page=t),i(a),h.a.post("".concat(Ne,"/search"),r).then(function(e){var a=e.data,t=a.data,n=a.total;0===t.length&&d(null),s(t),d(n)}).finally(function(){n&&b(!1)})},W=function(){T(!0),h.a.get("".concat(Ne,"/history"),{params:{username:e.username}}).then(function(e){var a=e.data;if(a.message)throw a.message;console.log(a),C(a)}).catch(function(e){return console.log(e)}).finally(function(){T(!1)})};return r.a.createElement("div",null,r.a.createElement(ae,{currentPage:"main"===y?"home":"history",activePageTitle:"main"===y?"Image finder":"Image finder / History",goToMain:function(){O("main")},goToHistory:function(){i(""),d(null),s([]),W(),O("history")},logOutFn:e.logOutFn,authenticated:!0,username:e.username},"main"===y?r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{searchFn:H,value:n}),v?r.a.createElement(E.a,null):!!g&&r.a.createElement(Ee,{images:c,likeFn:function(a,t){h.a.post("".concat(Ne,"/like"),{username:e.username,imageUrl:a,state:t})},refetchFn:function(){return H(n,void 0,!1)}})):r.a.createElement(Ce,{deleteHistory:function(a){h.a.delete("".concat(Ne,"/history"),{data:{username:e.username,id:a}}).then(function(e){var a=e.data;if("OK"!==a.message)throw a.message}).catch(function(e){console.log(e)}).finally(function(){W()})},goToHistory:function(e){O("main"),i(e),H(e)},history:S,loading:B})),!!g&&"main"===y&&r.a.createElement(Oe,{pagesCounter:Math.ceil(g/24),goto:function(e){H(n,e+2)}}))}var Ie=t(209),Be=t(208),Te=Object(b.a)(function(e){return{input:{marginBottom:"1em"},heading:{marginBottom:"2em"}}});function He(e){var a=Te(),t=r.a.useState("login"),n=Object(F.a)(t,2),i=n[0],o=n[1],l=r.a.useState({login:"",password:""}),u=Object(F.a)(l,2),m=u[0],g=u[1],d=function(e){return function(a){g(Object(B.a)({},m,Object(I.a)({},e,a.target.value)))}},p=function(){var a=Object(s.a)(c.a.mark(function a(){var t,n;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=m.login,n=m.password,a.next=3,e.registerFn(t,n);case 3:a.sent&&(g({login:"",password:""}),o("login"));case 5:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return r.a.createElement(Be.a,{maxWidth:"sm",style:{marginTop:"8em"}},r.a.createElement(Ie.a,{style:{padding:"2em"}},r.a.createElement(V.a,{variant:"h4",gutterBottom:!0,className:a.heading},"login"===i?"Login":"Register"),r.a.createElement(te.a,{className:a.input,label:"Login",value:m.login,onChange:d("login"),variant:"outlined",fullWidth:!0}),r.a.createElement(te.a,{className:a.input,label:"Password",type:"password",value:m.password,onChange:d("password"),variant:"outlined",fullWidth:!0}),"login"===i?r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{className:a.input,fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var a=m.login,t=m.password;console.log("login",a,t),console.log(e.logInFn),e.logInFn(a,t)}},"Go",r.a.createElement(J.a,null,"send")),r.a.createElement(oe.a,{className:a.input,fullWidth:!0,variant:"contained",color:"default",onClick:function(){return o("register")}},"register",r.a.createElement(J.a,null,"pan_tool"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{className:a.input,fullWidth:!0,variant:"contained",color:"primary",onClick:p},"Create",r.a.createElement(J.a,null,"send")),r.a.createElement(oe.a,{className:a.input,fullWidth:!0,variant:"contained",color:"default",onClick:function(){return o("login")}},r.a.createElement(J.a,null,"arrow_back"),"back"))))}function We(e){return r.a.createElement(He,{logInFn:e.logInFn,registerFn:e.registerFn})}var Le=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(g.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,auth:null,user:null,errorMessage:"",errorVisible:!1},t.checkToken=function(){var e=Object(s.a)(c.a.mark(function e(a){var n,r,i,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat("http://10.10.10.150:9001/api","/check_token"),{token:a});case 2:return n=e.sent,r=n.data,i=r.auth,o=r.userLogin,t.setState({user:o}),e.abrupt("return",i);case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.saveToken=function(e){localStorage.setItem("session",JSON.stringify({token:e}))},t.deleteToken=function(){localStorage.removeItem("session")},t.logIn=function(){var e=Object(s.a)(c.a.mark(function e(a,n){var r,i,o,l,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat("http://10.10.10.150:9001/api","/login"),{login:a,password:n});case 3:if(r=e.sent,i=r.data,o=i.login,l=i.token,s=i.message,o&&l){e.next=8;break}throw s;case 8:t.setState({user:o,auth:!0}),t.saveToken(l),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.setState({errorMessage:e.t0,errorVisible:!0});case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(a,t){return e.apply(this,arguments)}}(),t.logOut=function(){t.deleteToken(),t.setState({auth:!1,user:null})},t.register=function(){var e=Object(s.a)(c.a.mark(function e(a,n){var r,i,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat("http://10.10.10.150:9001/api","/register"),{login:a,password:n});case 3:if(r=e.sent,i=r.data,"OK"===(o=i.message)){e.next=8;break}throw o;case 8:return e.abrupt("return",!0);case 11:e.prev=11,e.t0=e.catch(0),t.setState({errorMessage:e.t0,errorVisible:!0});case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(a,t){return e.apply(this,arguments)}}(),t.closeError=function(){t.setState({errorMessage:"",errorVisible:!1})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=Object(s.a)(c.a.mark(function e(){var a,t,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("session")){e.next=5;break}this.setState({auth:!1,loading:!1}),e.next=10;break;case 5:return t=JSON.parse(a),n=t.token,e.next=8,this.checkToken(n);case 8:r=e.sent,this.setState({auth:r,loading:!1});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.auth,t=e.loading,n=e.errorMessage,i=e.errorVisible,o=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{message:n,errorVisible:i,closeError:this.closeError}),t?r.a.createElement(E.a,null):a?r.a.createElement(Fe,{username:o,logOutFn:this.logOut}):r.a.createElement(We,{registerFn:this.register,logInFn:this.logIn}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[106,1,2]]]);
//# sourceMappingURL=main.6644ef89.chunk.js.map