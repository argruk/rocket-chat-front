(this["webpackJsonprocket-chat-front"]=this["webpackJsonprocket-chat-front"]||[]).push([[0],{112:function(e,t,a){e.exports=a(139)},117:function(e,t,a){},128:function(e,t,a){},131:function(e,t,a){},134:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=(a(117),a(118),a(9)),s=a.n(l),u=a(8),i=a(39),m=a(34),d=a(33);function h(e){var t=e.setIsMobile,a=Object(n.useState)(!0),c=Object(u.a)(a,2),o=c[0],l=c[1],s=function(e){console.log(e),t(e),l(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{show:o,onHide:function(){return l(!1)},centered:!0},r.a.createElement(m.a.Body,{closebutton:"true",className:"tc"},r.a.createElement("h3",null,"Swtich to mobile version"),r.a.createElement("div",null,r.a.createElement(d.a,{variant:"primary",onClick:function(){return s(!0)}},"Yes"),r.a.createElement(d.a,{style:{marginLeft:"10%"},variant:"secondary",onClick:function(){return s(!0)}},"No")))))}a(79);var g=a(89),f=a.n(g),p=a(90),v=a.n(p),E=a(109),b=a(29),w="https://rocket-chat-api.azurewebsites.net",j=["Audio","Add Contact","Logout"],O=["witcher","drStone"];function x(e){var t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,s.a.awrap(fetch("".concat(w,"/api/getallchats?userId=").concat(e)));case 3:return t=a.sent,a.next=6,s.a.awrap(t.json());case 6:return t=a.sent,a.abrupt("return",t);case 10:throw a.prev=10,a.t0=a.catch(0),a.t0;case 13:case"end":return a.stop()}}),null,null,[[0,10]])}function y(e,t,a){var n,r;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=[],c.prev=1,c.next=4,s.a.awrap(fetch("".concat(w,"/api/getlastmessages?chatId=").concat(e,"&totalMessagesLoaded=").concat(a)));case 4:return r=c.sent,c.next=7,s.a.awrap(r.json());case 7:return r=c.sent,c.next=10,s.a.awrap(r.forEach((function(e){var a=e.userId===t.userId?0:1;n.push(new b.Message({id:a,message:e.messageText}))})));case 10:return c.abrupt("return",n);case 13:throw c.prev=13,c.t0=c.catch(1),c.t0;case 16:case"end":return c.stop()}}),null,null,[[1,13]])}function C(e,t){var a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,console.log("".concat(w,"/api/").concat(t)),r.next=4,s.a.awrap(fetch("".concat(w,"/api/").concat(t),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}));case 4:return a=r.sent,n=a.status,r.next=8,s.a.awrap(a.json());case 8:return a=r.sent,S(n,a.text),r.abrupt("return",a);case 13:throw r.prev=13,r.t0=r.catch(0),r.t0;case 16:case"end":return r.stop()}}),null,null,[[0,13]])}function S(e,t){switch(e){case 400:throw t;case 500:case 404:throw"Server error,try again later"}}function k(e,t){var a=[];return e.forEach((function(e){var n,r;e.lastMessage?(n=e.lastMessage.userId===t?0:1,r={id:e.chatId,lastMessagesAreFetched:!1,name:e.friendUserName,msg:[new b.Message({id:n,message:e.lastMessage.messageText})]}):r={id:e.chatId,lastMessagesAreFetched:!1,name:e.friendUserName,msg:[]},a.push(r)})),a}var N=function(e,t){var a=0,n=!0,r=!1,c=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){if(o.value.id===e)return a;a++}}catch(s){r=!0,c=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return-1},I=a(91),M=a.n(I),F=a(27),A=a(110),B=a(53);var T=function(e){var t=e.show,a=e.handleClose,c=e.updateAudio,o=e.chooseSong,l=Object(n.useState)(0),s=Object(u.a)(l,2),i=s[0],d=s[1],h=Object(n.useState)(""),g=Object(u.a)(h,2),f=g[0],p=g[1],v=function(e){return e?"primary":"secondary"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{show:t,onHide:a,centered:!0},r.a.createElement(m.a.Body,null,r.a.createElement("h3",null,"Audio settings"),r.a.createElement("h5",null,"Current song"),r.a.createElement(F.a,null,r.a.createElement(F.a.Toggle,{variant:"success",id:"dropdown-basic"},f?r.a.createElement(r.a.Fragment,null,f):r.a.createElement(r.a.Fragment,null,"Choose song ")),r.a.createElement(F.a.Menu,null,O.map((function(e){return r.a.createElement(F.a.Item,{key:e,onClick:function(){return function(e){d(0),o(e),p(e)}(e)}},e)})))),r.a.createElement("h4",null," Playback "),r.a.createElement(A.a,{type:"radio",name:"options",value:i,onChange:function(e){d(e),e&&f?c(!0):e||c(!1)}},r.a.createElement(B.a,{variant:v(Boolean(i)),value:1},"On"),r.a.createElement(B.a,{variant:v(!Boolean(i)),value:0},"Off")))))},L=a(48),H=a(95);var R=function(e){var t=e.show,a=e.handleClose,c=e.createNewChat,o=Object(n.useState)(""),l=Object(u.a)(o,2),i=l[0],h=l[1],g=Object(n.useState)(""),f=Object(u.a)(g,2),p=f[0],v=f[1],E=Object(n.useContext)(oe).user,b=E?E.userId:0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{show:t,onHide:a,centered:!0},r.a.createElement(m.a.Body,null,r.a.createElement("h3",null,"Add contact "),r.a.createElement(L.a,{onSubmit:function(e){e.preventDefault(),function(e,t){var a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.a.awrap(fetch("".concat(w,"/api/addchat?curUserId=").concat(e,"&emailToAdd=").concat(t)));case 3:return a=r.sent,n=a.status,r.next=7,s.a.awrap(a.json());case 7:return a=r.sent,S(n,a.text),r.abrupt("return",a);case 12:throw r.prev=12,r.t0=r.catch(0),r.t0;case 15:case"end":return r.stop()}}),null,null,[[0,12]])}(b,i).then((function(e){e&&(c(e.chatId,e.userName,e.email),a())})).catch((function(e){e.toString().includes("Failed to fetch")?v("No response from the server"):v(e)}))}},r.a.createElement(L.a.Group,{controlId:"formBasicEmail"},r.a.createElement(L.a.Label,null,"Email address"),r.a.createElement(L.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return h(e.target.value)}}),r.a.createElement(L.a.Text,{className:"text-muted"},"Add bohdan@rocket.chat / artem@rocket.chat to provide feedback or just to chat.")),p?r.a.createElement(H.a,null,r.a.createElement("div",{className:"dark-red"},p)):r.a.createElement(r.a.Fragment,null),r.a.createElement(d.a,{variant:"primary",type:"submit",disabled:!(i.length>0)},"Add friend")))))};var z=function(e){var t=e.updateAudio,a=e.logout,c=e.chooseSong,o=e.createNewChat,l=Object(n.useState)({type:"",seen:!1}),s=Object(u.a)(l,2),i=s[0],m=s[1],d=function(){return m({type:"",seen:!1})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,r.a.createElement(F.a.Toggle,{variant:"secondary",size:"sm",id:"dropdown-basic"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))),r.a.createElement(F.a.Menu,null,j.map((function(e,t){return"Logout"===e?r.a.createElement(F.a.Item,{key:e,onClick:a},j[t]):r.a.createElement(F.a.Item,{key:e,onClick:function(){return e=j[t],m({type:e,seen:!0});var e}},j[t]," ")})))),{"Add Contact":r.a.createElement(R,{show:i.seen,handleClose:d,createNewChat:o}),Audio:r.a.createElement(T,{show:i.seen,handleClose:d,updateAudio:t,chooseSong:c}),Logout:r.a.createElement(r.a.Fragment,null)}[i.type])},D=(a(128),a(14));var P=function(e){var t=e.clickOnChat,a=e.setChatIndex,c=Object(n.useContext)(oe).chats,o=Object(n.useContext)(_),l=o.chatIndex,s=o.isMobile,u={margin:"2px",backgroundColor:"#383838",color:"white"},i={margin:"0px ",marginBottom:"5px ",marginTop:"5px ",backgroundColor:"black",color:"white"};return r.a.createElement(D.l,null,r.a.createElement(D.c,null,c.map((function(e,n){return r.a.createElement("div",{onClick:function(){return function(e,n){t(e,n,!0),a(n)}(e.id,n)},key:e.id},r.a.createElement(D.d,{style:n!==l||s?u:i},r.a.createElement(D.b,{letter:e.name.charAt(0),style:{color:"black !important"}}),r.a.createElement(D.e,null,r.a.createElement(D.g,{justify:!0},r.a.createElement(D.m,{ellipsis:!0},e.name)),r.a.createElement(D.i,{ellipsis:!0},e.msg.length>0?e.msg[e.msg.length-1].message:"Say something "))))}))))};function G(e){var t=e.createNewChat,a=e.LoadTenMessages,c=e.updAudio,o=e.setSong,l=e.logout,s=e.setChatIndex,u=Object(n.useContext)(_).isMobile;return r.a.createElement("div",{className:u?"left-side col-12":"left-side col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2"},r.a.createElement(z,{createNewChat:t,updateAudio:c,chooseSong:o,logout:function(){return l()}}),r.a.createElement("div",{className:"left-content"},r.a.createElement(P,{clickOnChat:a,setChatIndex:s})))}var U=a(65);a(130);var W=function(e){var t=e.onSendClick,a=(e.showEmoji,e.emojiSeen,Object(n.useState)("")),c=Object(u.a)(a,2),o=c[0],l=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.l,null,r.a.createElement(D.j,{onSend:function(){return function(e){t(e)}(o)},onChange:function(e){"change"===e.type&&l(e.target.value)}},r.a.createElement(D.g,{align:"center"},r.a.createElement(D.f,{fit:!0},r.a.createElement(D.a,null)),r.a.createElement(D.k,{fill:"true"}),r.a.createElement(D.h,{fit:!0})),r.a.createElement(D.g,{verticalAlign:"center",justify:"left"},r.a.createElement(D.f,{fit:!0})))))};a(131);var J=function(e){var t=e.chatData,a=e.onSend,c=e.loadTen,o=e.GoBack,l=Object(n.useState)(!1),s=Object(u.a)(l,2),i=s[0],m=s[1],d=Object(n.useContext)(_),h=d.chatId,g=d.chatIndex,f=Object(n.useContext)(_).isMobile,p=function(e){c(h,g,!1)};return r.a.createElement("div",{id:"chat-side"},f?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{maxHeight:"5vh"}},r.a.createElement("div",{className:"col-1 arrow-back ",onClick:function(){return o("left")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))),r.a.createElement("h4",{className:"white tc hover-bg-white-40 pointer col-11",onClick:p},"Load more"))):r.a.createElement("h4",{className:"white tc hover-bg-white-40 pointer col-10",onClick:p},"Load more"),r.a.createElement(b.ChatFeed,{ClassName:"feed",showSenderName:!0,messages:t.msg}),r.a.createElement("footer",{className:"footer"},r.a.createElement(W,{onSendClick:a,showEmoji:m,emojiSeen:i})))};function V(e){var t=e.setNotification,a=e.LoadTenMessages,c=e.SendMessage,o=e.GoBack,l=Object(n.useContext)(oe).chats,s=Object(n.useContext)(le),u=s.notificationBody,i=s.notificationHeader,m=Object(n.useContext)(_),d=m.chatIndex,h=m.isMobile;return r.a.createElement("div",{className:h?"left-side col-12":"right-side col-8 col-sm-8 col-md-8 col-lg-10 col-xl-10 "},r.a.createElement("div",null,r.a.createElement("div",{className:"container"},i?r.a.createElement(U.a,{variant:"dark",onClose:function(){return t({})},dismissible:!0},"".concat(i,"!  ").concat(u)):r.a.createElement("div",null),r.a.createElement("div",{className:"row"},-1===d?r.a.createElement("div",{className:"tc center col align-self-center",id:"idle-msg"},"Click on a chat to start messaging!"):r.a.createElement("div",{className:"col"},r.a.createElement(J,{loadTen:a,chatData:l[d],onSend:c(l[d].id,d),GoBack:o}))))))}var _=r.a.createContext({chatId:null,chatIndex:null,isMobile:!1});var Y=function(e){var t=e.setChats,a=e.SendMessage,c=e.logout,o=e.createNewChat,l=e.setNotification,m=Object(n.useContext)(oe),d=m.user,g=m.chats,p=M()(),b=Object(n.useState)(-1),w=Object(u.a)(b,2),j=w[0],O=w[1],x=Object(n.useState)(-1),C=Object(u.a)(x,2),S=C[0],k=C[1],N=Object(n.useState)(null),I=Object(u.a)(N,2),F=I[0],A=I[1],B=Object(n.useState)(!1),T=Object(u.a)(B,2),L=T[0],H=T[1],R=Object(n.useState)(!1),z=Object(u.a)(R,2),D=z[0],P=z[1],U=Object(n.useState)("left"),W=Object(u.a)(U,2),J=W[0],Y=W[1],$=function(e,a,n){n&&O(e);var r=Object.assign([],g),c=r[a];!c.lastMessagesAreFetched&&c.msg.length>=10&&(c.lastMessagesAreFetched=!0),(!c.lastMessagesAreFetched||!n&&c.msg.length>10)&&function(e,t,a){var n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.a.awrap(y(e,t,a.msg.length));case 3:return n=r.sent,a.msg.forEach((function(e,t){n.push(e)})),a.lastMessagesAreFetched=!0,a.msg=[],a.msg=Object(E.a)(n),r.abrupt("return",a);case 11:throw r.prev=11,r.t0=r.catch(0),r.t0;case 14:case"end":return r.stop()}}),null,null,[[0,11]])}(e,d,c).then((function(e){c=e,t(r)})).then((function(e){document.getElementsByClassName("chat-history")[0].scrollTop=0})).catch((function(e){console.log(e),alert("error loading messages")}))},q=function(e){var t=document.getElementsByTagName("audio")[0];e?t.play():t.pause()};return Object(n.useEffect)((function(){d||H(!0)}),[p,d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_.Provider,{value:{chatId:j,chatIndex:S,isMobile:D}},p.isMobile()?r.a.createElement(h,{setIsMobile:P}):r.a.createElement("div",null),L?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:"row"},r.a.createElement("audio",{src:function(e){switch(e){case"witcher":return f.a;case"drStone":return v.a;default:return}}(F),preload:"true",loop:!0}),D?"left"===J?r.a.createElement(G,{LoadTenMessages:$,createNewChat:o,logout:c,setChatIndex:function(e){k(e),Y("right")},setSong:A,updAudio:q}):r.a.createElement(V,{setNotification:l,LoadTenMessages:$,SendMessage:a,GoBack:Y}):r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{LoadTenMessages:$,createNewChat:o,logout:c,setChatIndex:k,setSong:A,updAudio:q}),r.a.createElement(V,{setNotification:l,LoadTenMessages:$,SendMessage:a})))))},$=a(49),q=a(55),K=a(70),Q=a(96),X=(a(85),a(35)),Z=a(41),ee=a(67);function te(e){var t=e.loginOrRegister,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(""),h=Object(u.a)(m,2),g=h[0],f=h[1],p=Object(n.useState)(""),v=Object(u.a)(p,2),E=v[0],b=v[1],w=Object(n.useState)(!1),j=Object(u.a)(w,2),O=j[0],x=j[1],y=Object(n.useState)(!1),C=Object(u.a)(y,2),S=C[0],k=C[1];function N(){return o.length>0&&E.length>0}return r.a.createElement(r.a.Fragment,null,S?r.a.createElement(i.a,{to:"/app"}):r.a.createElement(Z.a,{className:"Login"},r.a.createElement(Z.a.Header,null," Sign In "),r.a.createElement(Z.a.Body,null,r.a.createElement("form",{onSubmit:function(e){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),x(!0),setTimeout((function(){return console.log()}),1e3),a.prev=3,a.next=6,s.a.awrap(t({email:o,password:E},"login"));case 6:return a.next=8,s.a.awrap(k(!0));case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),setTimeout((function(){x(!1),a.t0.toString().includes("Failed to fetch")?f("No response from the server"):f(a.t0)}),1e3);case 13:case"end":return a.stop()}}),null,null,[[3,10]])}},r.a.createElement(H.a,{controlId:"email"},r.a.createElement(X.a,null,"Email"),r.a.createElement(Q.a,{autoFocus:!0,type:"email",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement(H.a,{controlId:"password"},r.a.createElement(X.a,null,"Password"),r.a.createElement(Q.a,{value:E,onChange:function(e){return b(e.target.value)},type:"password"})),g?r.a.createElement(H.a,null,r.a.createElement("div",{className:"tc dark-red"},g)):r.a.createElement(r.a.Fragment,null),r.a.createElement(H.a,{className:"tc"},r.a.createElement("a",{className:"tc",href:"/rocket-chat-front/#/register"},"Not signed up yet?")),r.a.createElement(d.a,{block:!0,variant:N()?"primary":"secondary",disabled:!N()||O,type:"submit"},O?r.a.createElement(ee.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Login")))))}function ae(e){var t=e.loginOrRegister,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(""),h=Object(u.a)(m,2),g=h[0],f=h[1],p=Object(n.useState)(""),v=Object(u.a)(p,2),E=v[0],b=v[1],w=Object(n.useState)(!1),j=Object(u.a)(w,2),O=j[0],x=j[1],y=Object(n.useState)(""),C=Object(u.a)(y,2),S=C[0],k=C[1],N=Object(n.useState)(!1),I=Object(u.a)(N,2),M=I[0],F=I[1];function A(){return o.length>0&&E.length>0&&g.length}return r.a.createElement(r.a.Fragment,null,M?r.a.createElement(i.a,{to:"/app"}):r.a.createElement(Z.a,{className:"Login"},r.a.createElement(Z.a.Header,null," Register "),r.a.createElement(Z.a.Body,null,r.a.createElement("form",{onSubmit:function(e){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),x(!0),setTimeout((function(){return console.log()}),1e3),a.prev=3,a.next=6,s.a.awrap(t({username:g,email:o,password:E},"register"));case 6:return a.next=8,s.a.awrap(F(!0));case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),setTimeout((function(){x(!1),a.t0.toString().includes("Failed to fetch")?k("No response from the server"):k(a.t0)}),1e3);case 13:case"end":return a.stop()}}),null,null,[[3,10]])}},r.a.createElement(H.a,{controlId:"name"},r.a.createElement(X.a,null,"Name"),r.a.createElement(Q.a,{autoFocus:!0,type:"text",value:g,onChange:function(e){return f(e.target.value)}})),r.a.createElement(H.a,{controlId:"email"},r.a.createElement(X.a,null,"Email"),r.a.createElement(Q.a,{autoFocus:!0,type:"email",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement(H.a,{controlId:"password"},r.a.createElement(X.a,null,"Password"),r.a.createElement(Q.a,{value:E,onChange:function(e){return b(e.target.value)},type:"password"})),S?r.a.createElement(H.a,null,r.a.createElement("div",{className:"tc dark-red"},S)):r.a.createElement(r.a.Fragment,null),r.a.createElement(d.a,{block:!0,variant:A()?"primary":"secondary",disabled:!A()||O,type:"submit"},O?r.a.createElement(ee.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Register")))))}a(134);var ne=function(e){var t=e.loginOrRegister,a=e.path;return r.a.createElement("div",null,r.a.createElement(q.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(q.a.Brand,null,"Rocket-Chat v0.1 BETA"),r.a.createElement(q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(K.a,{className:"mr-auto"},r.a.createElement(K.a.Link,{href:"/rocket-chat-front/#/login"},"Sign in"),r.a.createElement(K.a.Link,{href:"/rocket-chat-front/#/register"},"Register")))),r.a.createElement(U.a,{variant:"warning",className:"tc"},"During the beta, please don't use your real email and don't send important messages over the chat!"),"/login"===a?r.a.createElement(te,{loginOrRegister:t}):r.a.createElement(ae,{loginOrRegister:t}),r.a.createElement("img",{src:"https://dramarocket.com/wp-content/uploads/2018/01/icon-redrocket-2.png",alt:"logo",className:"center"}))},re=a(108);function ce(e,t,a){var n,r;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=(new re.a).withUrl("".concat(w,"/chat")).build(),c.prev=1,c.next=4,s.a.awrap(n.start());case 4:console.log("Connection successful!"),e((function(e){return r=e,e})),n.onclose((function(){return console.log("I have lef!!")})),n.on("getChat",(function(e,n){r.userId===e&&(t((function(e){var t=Object.assign([],e);return t.push({id:n.chatId,name:n.chatName,msg:[]}),Object.assign([],t)})),a({notificationHeader:"New Chat",notificationBody:"".concat(n.chatName," created a chat with you!")}))})),n.on("sendToAll",(function(e,a,n){t((function(t){var c=N(a,t);if(console.log(c,t),-1!==c&&r.userId!==e){console.log("updating state");var o=Object.assign([],t);return o[c].msg.push(new b.Message({id:1,message:n})),o}return t}))})),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(1),alert(c.t0);case 14:return c.abrupt("return",n);case 15:case"end":return c.stop()}}),null,null,[[1,11]])}var oe=r.a.createContext({user:{},chats:[]}),le=r.a.createContext({notificationBody:null,notificationHeader:null});var se=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),l=Object(u.a)(o,2),m=l[0],d=l[1],h=Object(n.useState)({notificationBody:null,notificationHeader:null}),g=Object(u.a)(h,2),f=g[0],p=g[1],v=Object(n.useState)([]),E=Object(u.a)(v,2),w=E[0],j=E[1];function O(e){var t,a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.awrap(x(e));case 3:return t=n.sent,a=k(t,e),j(a),n.abrupt("return","ok");case 9:n.prev=9,n.t0=n.catch(0),alert("error loading chats");case 12:case"end":return n.stop()}}),null,null,[[0,9]])}function y(e,t){var a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.awrap(C(e,t));case 3:if(!(a=n.sent)){n.next=10;break}return c("login"===t?a[0]:a),n.next=8,s.a.awrap(O("login"===t?a[0].userId:a.userId));case 8:return n.next=10,s.a.awrap(S());case 10:return n.abrupt("return","ok");case 13:throw n.prev=13,n.t0=n.catch(0),console.log(n.t0),n.t0;case 17:case"end":return n.stop()}}),null,null,[[0,13]])}var S=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(ce(c,j,p));case 2:e=t.sent,d(e);case 4:case"end":return t.stop()}}))};return r.a.createElement($.a,{className:"rocket"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/app"},r.a.createElement(oe.Provider,{value:{user:a,chats:w}},r.a.createElement(le.Provider,{value:f},r.a.createElement(Y,{setNotification:p,setChats:j,SendMessage:function(e,t){var n=t,r=e;return function(e){m.invoke("SendDirectMessage",a.userId,r,e).catch((function(e){return console.log(e)})),j((function(t){var a=Object.assign([],t[n]);return a.msg.push(new b.Message({id:0,message:e})),Object.assign([],t,a)}))}},logout:function(){return c(null),m.stop(),void d(null)},createNewChat:function(e,t){m.invoke("ChatWithUserWasCreated",a.userId,e,{chatId:e,chatName:a.userName}),j((function(a){var n=Object.assign([],a);return n.push({id:e,name:t,msg:[]}),Object.assign([],n)}))}})))),r.a.createElement(i.b,{path:"/register"},r.a.createElement(ne,{path:"/register",loginOrRegister:y})),r.a.createElement(i.b,null,r.a.createElement(ne,{path:"/login",loginOrRegister:y}))))};a(138),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,t,a){},85:function(e,t,a){},89:function(e,t,a){e.exports=a.p+"static/media/lol.f8b7a2e4.mp3"},90:function(e,t,a){e.exports=a.p+"static/media/dr_stone_ending.470614e2.mp3"}},[[112,1,2]]]);
//# sourceMappingURL=main.e8cc5498.chunk.js.map