(window.webpackJsonppractice=window.webpackJsonppractice||[]).push([[0],{110:function(e,t){},113:function(e,t,a){},114:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(57),s=a.n(l),m=(a(70),a(71),a(20)),o=a(1),i=a(64),u=a(6),A=a(58),E=a.n(A),f=a(59),g=a.n(f),p=(a(113),a(114),a(19)),d=a.n(p),h=a(60),v=a.n(h),N=function(){return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:d.a,alt:"online icon"}),r.a.createElement("h3",null,w.room)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:v.a,alt:"close icon"}))))},b=a(61),j=a.n(b),C=(a(150),a(33)),O=a.n(C),I=function(e){var t=e.message,a=t.text,n=t.user,c=!1,l=e.name.trim().toLowerCase();return n===l&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},l),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},O.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},O.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},S=(a(151),function(e){var t=e.messages,a=e.name;return r.a.createElement(j.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(I,{message:e,name:a}))})))}),x=(a(152),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"\uc804\uc1a1\ud558\ub824\ub294 \uba54\uc138\uc9c0\ub97c \uc785\ub825\ud558\uc138\uc694.",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"\uc804\uc1a1"))}),y=(a(153),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"\uc2e4\uc2dc\uac04 \ucc44\ud305 \ud504\ub85c\uadf8\ub7a8"," ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),r.a.createElement("h2",null,"Created with React, Express, Node and Socket.IO"," ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),r.a.createElement("h2",null,"Try it out right now!"," ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f"))),t?r.a.createElement("div",null,r.a.createElement("h1",null,"\ud604\uc7ac \ucc44\ud305\uc911\uc778 \uc0ac\ub78c\ub4e4 : "),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map((function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:d.a}))}))))):null)}),w=function(e){var t=e.location,a=Object(c.useState)(""),l=Object(u.a)(a,2),s=l[0],m=l[1],o=Object(c.useState)(""),A=Object(u.a)(o,2),f=A[0],p=A[1],d=Object(c.useState)(""),h=Object(u.a)(d,2),v=h[0],b=h[1],j=Object(c.useState)(""),C=Object(u.a)(j,2),O=C[0],I=C[1],w=Object(c.useState)([]),B=Object(u.a)(w,2),k=B[0],M=B[1];Object(c.useEffect)((function(){var e=E.a.parse(t.search),a=e.name,c=e.room;n=g()("http://localhost:5000"),p(c),m(a),n.emit("join",{name:a,room:c},(function(e){e&&alert(e)}))}),["http://localhost:5000",t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){M((function(t){return[].concat(Object(i.a)(t),[e])}))})),n.on("roomData",(function(e){var t=e.users;b(t)}))}),[]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(N,{room:f}),r.a.createElement(S,{messages:k,name:s}),r.a.createElement(x,{message:O,setMessage:I,sendMessage:function(e){e.preventDefault(),O&&n.emit("sendMessage",O,(function(){return I("")}))}})),r.a.createElement(y,{users:v}))},B=(a(154),function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),s=Object(u.a)(l,2),o=s[0],i=s[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"}),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"\uc774\ub984",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"\ucc44\ud305\ubc29",className:"joinInput mt-20",type:"text",onChange:function(e){return i(e.target.value)}})),r.a.createElement(m.b,{onClick:function(e){return a&&o?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(o)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"\uac00\uc785"))))}),k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("body",null,r.a.createElement("div",{className:"chat"},r.a.createElement(m.a,null,r.a.createElement(o.a,{path:"/",component:B}),r.a.createElement(o.a,{path:"/chat",component:w})))))},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),M()},19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},65:function(e,t,a){e.exports=a(157)},70:function(e,t,a){},71:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.d41517dc.chunk.js.map