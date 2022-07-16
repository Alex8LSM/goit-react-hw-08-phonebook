"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[535],{847:function(e,a,t){t.d(a,{Z:function(){return z}});var s=t(885),l=t(2791),r=t(9434),n=t(6871),c=t(4509),o=t(8499),m=(0,o.Z)(l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle"),i=(0,o.Z)(l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}),"AlternateEmail"),u=(0,o.Z)(l.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),h=(0,o.Z)(l.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),d=t(5822),f=t(7111),p="AuthForm_form__N+Fyz",_="AuthForm_formTitle__0PyEt",x="AuthForm_formLabel__F52GG",N="AuthForm_formInput__Wtm5c",j="AuthForm_ariaLabel__ClDIJ",C="AuthForm_formIcons__WEQli",b=t(3329);function z(e){var a=e.titleForm,t=e.nameBtn,o=e.matchRoute,z=void 0===o?"/register":o,v=(0,l.useState)(""),w=(0,s.Z)(v,2),Z=w[0],k=w[1],E=(0,l.useState)(""),g=(0,s.Z)(E,2),F=g[0],y=g[1],A=(0,l.useState)(""),I=(0,s.Z)(A,2),M=I[0],L=I[1],S=(0,l.useState)(!1),P=(0,s.Z)(S,2),V=P[0],q=P[1],B=(0,r.I0)(),D=(0,n.TH)().pathname===z,G=function(){q((function(e){return!e}))},T=function(e){var a=e.target,t=a.name,s=a.value;switch(t){case"userName":D&&k(s);break;case"userEmail":y(s);break;case"userPassword":L(s);break;default:return}},W=function(){D&&k(""),y(""),L(""),q(!1)};return(0,b.jsx)(f.Z,{children:(0,b.jsxs)("form",{className:p,onSubmit:function(e){if(e.preventDefault(),D)return B((0,d.z2)({name:Z,email:F,password:M})),W();B((0,d.Ib)({email:F,password:M})),W()},autoComplete:"off",children:[(0,b.jsx)("h2",{className:_,children:a}),D&&(0,b.jsxs)("label",{title:"Name",className:x,children:[(0,b.jsx)(m,{className:C}),(0,b.jsx)("input",{type:"text",name:"userName",value:Z,className:N,onChange:T,autoComplete:"off",placeholder:" ",required:!0}),(0,b.jsx)("span",{className:j,children:"Name"})]}),(0,b.jsxs)("label",{title:"E-mail",className:x,children:[(0,b.jsx)(i,{className:C}),(0,b.jsx)("input",{type:"email",name:"userEmail",value:F,className:N,onChange:T,autoComplete:"off",placeholder:" ",required:!0}),(0,b.jsx)("span",{className:j,children:"E-mail"})]}),(0,b.jsxs)("label",{title:"Password",className:x,children:[V?(0,b.jsx)(u,{onClick:G,className:C}):(0,b.jsx)(h,{onClick:G,className:C}),(0,b.jsx)("input",{type:V?"text":"password",name:"userPassword",value:M,className:N,onChange:T,minLength:7,autoComplete:"off",placeholder:" ",required:!0}),(0,b.jsx)("span",{className:j,children:"Password"})]}),(0,b.jsx)(c.Z,{color:"primary",variant:"contained",type:"submit",children:t})]})})}},7456:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var s=t(847),l=t(3329);function r(){return(0,l.jsx)(s.Z,{titleForm:"Log In",nameBtn:"LogIn"})}}}]);
//# sourceMappingURL=login.7bac09f5.chunk.js.map