(this["webpackJsonprocket-chat-front"]=this["webpackJsonprocket-chat-front"]||[]).push([[0],{101:function(e,t,a){e.exports=a(129)},106:function(e,t,a){},109:function(e,t,a){},114:function(e,t,a){},119:function(e,t,a){},123:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),o=(a(106),a(107),a(66)),s=a.n(o),i=a(9),m=(a(109),a(12));var u=function(e){var t=e.friends,a=e.clickFriend;return l.a.createElement(m.m,null,l.a.createElement(m.c,null,t.map((function(e,t){return l.a.createElement("div",{onClick:function(){return a(t)},key:t},l.a.createElement(m.d,{className:"friend"},l.a.createElement(m.b,{letter:e.name.charAt(0)}),l.a.createElement(m.e,null,l.a.createElement(m.h,{justify:!0},l.a.createElement(m.n,{ellipsis:!0},e.name)),l.a.createElement(m.j,{ellipsis:!0},e.msg[e.msg.length-1].message))))}))))},d=a(43),E=a(49),g=a(98),f=a(48);var h=function(e){var t=e.show,a=e.handleClose,r=e.updateAudio,c=Object(n.useState)(0),o=Object(i.a)(c,2),s=o[0],m=o[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{show:t,onHide:a},l.a.createElement(E.a.Header,{closeButton:!0},l.a.createElement(E.a.Title,null,"Audio settings")),l.a.createElement(E.a.Body,null,l.a.createElement("h4",null," EarGasm "),l.a.createElement(g.a,{type:"radio",name:"options",value:s,onChange:function(e){m(e),r(1===e)}},l.a.createElement(f.a,{value:1},"On"),l.a.createElement(f.a,{variant:"secondary",value:2},"Off")))))},p=["Audio"];var v=function(e){var t=e.updateAudio,a=Object(n.useState)({type:"",seen:!1}),r=Object(i.a)(a,2),c=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(d.a.Toggle,{variant:"secondary",size:"sm",id:"dropdown-basic"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),l.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))),l.a.createElement(d.a.Menu,null,l.a.createElement(d.a.Item,{onClick:function(){return e=p[0],o({type:e,seen:!0});var e}},p[0]),l.a.createElement(d.a.Item,null,p[1]))),"Audio"===c.type?l.a.createElement(h,{show:c.seen,handleClose:function(){return o({type:"",seen:!1})},updateAudio:t}):l.a.createElement("div",null))};a(72);var b=function(e){var t=e.onSendClick,a=e.showEmoji,r=e.emojiSeen,c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1],d=Object(n.useState)(null),E=Object(i.a)(d,2);return E[0],E[1],l.a.createElement(l.a.Fragment,null,l.a.createElement(m.m,null,l.a.createElement(m.k,{onSend:function(){return t(s)},onChange:function(e){"change"===e.type&&u(e.target.value),console.log(s)}},l.a.createElement(m.h,{align:"center"},l.a.createElement(m.g,{fit:!0},l.a.createElement(m.a,null)),l.a.createElement(m.l,{fill:"true"}),l.a.createElement(m.i,{fit:!0})),l.a.createElement(m.h,{verticalAlign:"center",justify:"left"},l.a.createElement(m.g,{fit:!0},l.a.createElement(m.f,{onClick:function(){return a(!r)}}))))))},j=(a(114),a(32));var w=function(e){var t=e.chatData,a=e.onSend,r=Object(n.useState)(!1),c=Object(i.a)(r,2),o=c[0],s=c[1];return l.a.createElement("div",null,l.a.createElement(j.ChatFeed,{ClassName:"feed",showSenderName:!0,messages:t.msg}),l.a.createElement("footer",{className:"footer"},l.a.createElement(b,{onSendClick:a,showEmoji:s,emojiSeen:o})))},y=a(91),O=a.n(y),S=(a(119),a(97)),N=a(50),k=a(63),C=a(133),I=a(134),x=a(57),F=(a(77),a(38)),A=a(34);function B(e){var t=e.signIn,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),u=m[0],d=m[1];function E(){return c.length>0&&u.length>0}return l.a.createElement(A.a,{className:"Login"},l.a.createElement(A.a.Header,null," Sign In "),l.a.createElement(A.a.Body,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c,u)}},l.a.createElement(C.a,{controlId:"email"},l.a.createElement(F.a,null,"Email"),l.a.createElement(I.a,{autoFocus:!0,type:"email",value:c,onChange:function(e){return o(e.target.value)}})),l.a.createElement(C.a,{controlId:"password"},l.a.createElement(F.a,null,"Password"),l.a.createElement(I.a,{value:u,onChange:function(e){return d(e.target.value)},type:"password"})),l.a.createElement(C.a,{className:"tc"},l.a.createElement("a",{className:"tc",href:"/register"},"Not signed up yet?")),l.a.createElement(x.a,{block:!0,variant:E()?"primary":"secondary",disabled:!E(),type:"submit"},"Login"))))}function H(e){var t=e.registerUser,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),u=m[0],d=m[1],E=Object(n.useState)(""),g=Object(i.a)(E,2),f=g[0],h=g[1];function p(){return c.length>0&&f.length>0&&u.length}return l.a.createElement(A.a,{className:"Login"},l.a.createElement(A.a.Header,null," Register "),l.a.createElement(A.a.Body,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({username:u,email:c,password:f})}},l.a.createElement(C.a,{controlId:"name"},l.a.createElement(F.a,null,"Name"),l.a.createElement(I.a,{autoFocus:!0,type:"text",value:u,onChange:function(e){return d(e.target.value)}})),l.a.createElement(C.a,{controlId:"email"},l.a.createElement(F.a,null,"Email"),l.a.createElement(I.a,{autoFocus:!0,type:"email",value:c,onChange:function(e){return o(e.target.value)}})),l.a.createElement(C.a,{controlId:"password"},l.a.createElement(F.a,null,"Password"),l.a.createElement(I.a,{value:f,onChange:function(e){return h(e.target.value)},type:"password"})),l.a.createElement(x.a,{block:!0,variant:p()?"primary":"secondary",disabled:!p(),type:"submit"},"Register"))))}a(123);var M=a(94),D=a(31);var J=function(e){var t=e.signIn,a=e.registerUser;return l.a.createElement("div",null,l.a.createElement(M.a,{className:"rocket"},l.a.createElement(N.a,{bg:"dark",variant:"dark",expand:"lg"},l.a.createElement(N.a.Brand,null,"Rocket-Chat"),l.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(k.a,{className:"mr-auto"},l.a.createElement(k.a.Link,{href:"/login"},"Sign in"),l.a.createElement(k.a.Link,{href:"/register"},"Register")))),l.a.createElement(D.c,null,l.a.createElement(D.a,{path:"/login"},l.a.createElement(B,{signIn:t})),l.a.createElement(D.a,{path:"/register"},l.a.createElement(H,{registerUser:a})),l.a.createElement(D.a,{path:"/"},l.a.createElement(B,{signIn:t})),l.a.createElement(D.a,null,l.a.createElement("div",{className:"tc pa3"},l.a.createElement("h3",null,"Sorry, page not found!"))))),l.a.createElement("img",{src:"https://dramarocket.com/wp-content/uploads/2018/01/icon-redrocket-2.png",alt:"logo",className:"center"}))};var z=function(){var e=Object(n.useState)([{name:"John",msg:[new j.Message({id:0,message:"lol"}),new j.Message({id:1,message:"lol!",senderName:"John"})]},{name:"Donn",msg:[new j.Message({id:0,message:"lol"}),new j.Message({id:1,message:"KEK!",senderName:"Donn"})]}]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(-1),o=Object(i.a)(c,2),m=o[0],d=o[1],E=Object(n.useState)(!1),g=Object(i.a)(E,2),f=g[0],h=g[1],p=Object(n.useState)(null),b=Object(i.a)(p,2),y=(b[0],b[1]),N=Object(n.useState)(null),k=Object(i.a)(N,2),C=(k[0],k[1]);return Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(new S.a).withUrl("https://localhost:5001/chat").build(),t.prev=1,t.next=4,s.a.awrap(e.start());case 4:console.log("Connection successful!"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert(t.t0);case 10:C(e);case 11:case"end":return t.stop()}}),null,null,[[1,7]])}()}),[]),l.a.createElement(l.a.Fragment,null,f?l.a.createElement("div",{className:"row"},l.a.createElement("audio",{src:O.a,preload:!0,loop:!0}),l.a.createElement("div",{className:"left-side col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2"},l.a.createElement(v,{updateAudio:function(e){var t=document.getElementsByTagName("audio")[0];e?t.play():t.pause()}}),l.a.createElement("div",{className:"left-content"},l.a.createElement(u,{friends:a,clickFriend:d}))),l.a.createElement("div",{className:"right-side col-8 col-sm-8 col-md-8 col-lg-10 col-xl-10 "},l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},-1===m?l.a.createElement("div",{className:"tc center col align-self-center",id:"idle-msg"},"Chat is being developed,stay tuned."):l.a.createElement("div",{className:"col"},l.a.createElement(w,{chatData:a[m],onSend:function(e){r((function(t){var a=Object.assign([],t[m]);return a.msg.push(new j.Message({id:0,message:e})),Object.assign([],t,a)}))}}))))))):l.a.createElement(J,{signIn:function(e,t){fetch("https://localhost:5001/api/login",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){console.log(e[0]),e&&(h(!0),y(e[0]))})).catch((function(e){return console.log(e)}))},registerUser:function(e){fetch("https://localhost:5001/api/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e[0]),e&&(h(!0),y(e[0]))})).catch((function(e){return console.log(e)}))}}))};a(128),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/lol.f8b7a2e4.mp3"}},[[101,1,2]]]);
//# sourceMappingURL=main.5d93249e.chunk.js.map