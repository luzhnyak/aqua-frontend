"use strict";(self.webpackChunkaqua_frontend=self.webpackChunkaqua_frontend||[]).push([[292],{5292:(s,a,e)=>{e.r(a),e.d(a,{default:()=>k});var o=e(1560),t=e(8432),r=e(3472),n=e(6480),d=e(8568),i=e(9060),c=e(2622),w=e(4568),p=e(4980),m=e(9560);const l="UpdatePasswordComponent_mainstr__NnnRk",u="UpdatePasswordComponent_form__mZ1yS",_="UpdatePasswordComponent_formControl__VlA3w",P="UpdatePasswordComponent_formTitle__7cfCF",h="UpdatePasswordComponent_formLabel__kt1iv",N="UpdatePasswordComponent_stack__0ChZG",x="UpdatePasswordComponent_inputBox__G0vxy",j="UpdatePasswordComponent_iconeye__jOzvf",C="UpdatePasswordComponent_inputpassword__n-rMD",v="UpdatePasswordComponent_button__BU71d",f="UpdatePasswordComponent_errormessage__ySVyv",y="UpdatePasswordComponent_errorBorder__DyS2Y",U="UpdatePasswordComponent_errorInput__CVkvW";var S=e(9204),b=e(2496);const z=s=>{let{onSubmit:a}=s;const{t:e}=(0,S.Gy)(),[o,t]=(0,i.useState)(!1),[r,n]=(0,i.useState)(!1),d=w.kt({newPassword:w.Qb().required("".concat(e("authorization.errors.passwordReq"))).min(8,"".concat(e("authorization.errors.passwordLeast"))).max(64,"".concat(e("authorization.errors.passwordLess"))),repeatNewPassword:w.Qb().oneOf([w.IL("newPassword")],"".concat(e("authorization.errors.passwordMatch"))).required("".concat(e("authorization.errors.repeatPasswordReq")))});return(0,b.jsx)("div",{className:l,children:(0,b.jsx)(c.QJ,{initialValues:{newPassword:"",repeatNewPassword:""},validationSchema:d,onSubmit:a,children:s=>{let{errors:a,touched:d}=s;return(0,b.jsxs)(c.QF,{className:u,children:[(0,b.jsx)("h1",{className:P,children:"Update password"}),(0,b.jsxs)("div",{className:_,children:[(0,b.jsxs)("div",{className:N,children:[(0,b.jsx)("label",{className:h,htmlFor:"update-password-id1",children:e("authorization.enterNewPass")}),(0,b.jsxs)("div",{className:"".concat(x," ").concat(a.newPassword&&d.newPassword?y:""),children:[(0,b.jsx)(c.IN,{id:"update-password-id1",className:"".concat(C,"  ").concat(a.newPassword&&d.newPassword?U:""),name:"newPassword",type:o?"text":"password",placeholder:e("authorization.enterNewPassText")}),(0,b.jsx)("div",{className:j,onClick:()=>t(!o),style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:o?(0,b.jsx)(m._,{}):(0,b.jsx)(p._,{})})]}),(0,b.jsx)(c.mS,{name:"newPassword",component:"div",className:f})]}),(0,b.jsxs)("div",{className:N,children:[(0,b.jsx)("label",{className:h,htmlFor:"update-password-id2",children:e("authorization.repeatNewPass")}),(0,b.jsxs)("div",{className:"".concat(x," ").concat(a.repeatNewPassword&&d.repeatNewPassword?y:""),children:[(0,b.jsx)(c.IN,{id:"update-password-id2",className:"".concat(C,"  ").concat(a.repeatNewPassword&&d.repeatNewPassword?U:""),name:"repeatNewPassword",type:r?"text":"password",placeholder:e("authorization.repeatNewPassText")}),(0,b.jsx)("div",{className:j,onClick:()=>n(!r),style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:r?(0,b.jsx)(m._,{}):(0,b.jsx)(p._,{})})]}),(0,b.jsx)(c.mS,{name:"repeatNewPassword",component:"div",className:f})]}),(0,b.jsx)("button",{type:"submit",className:v,children:e("authorization.send")})]})]})}})})},k=()=>{const{t:s}=(0,S.Gy)(),{token:a}=(0,o.W4)(),[e,c]=(0,i.useState)(!1);return(0,b.jsxs)("div",{className:r.c.container,children:[(0,b.jsx)(z,{onSubmit:async(e,o)=>{let{resetForm:r}=o;const{newPassword:d,repeatNewPassword:i}=e;if(d===i){c(!0);try{if(!a)return;await(0,t.IT)(a,{newPassword:i}),n.m4.success("".concat(s("authorization.notification.successPass"))),setTimeout((()=>window.location.replace("/aqua-frontend/signin")),3e3)}catch(w){c(!1),n.m4.error("".concat(s("authorization.notification.error")))}finally{c(!1)}r()}}}),e&&(0,b.jsx)(d.c,{})]})}},3472:(s,a,e)=>{e.d(a,{c:()=>o});const o={container:"SigninPage_container__jZtsy",mainstr:"SigninPage_mainstr__teBX0"}}}]);
//# sourceMappingURL=292.1515a601.chunk.js.map