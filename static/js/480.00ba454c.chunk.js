"use strict";(self.webpackChunkaqua_frontend=self.webpackChunkaqua_frontend||[]).push([[480],{480:(s,a,e)=>{e.r(a),e.d(a,{default:()=>g});var o=e(1560),t=e(8432);const r="UpdatePasswordPage_container__vQNxa";var n=e(6480),d=e(3226),c=e(8568),i=e(9060),w=e(2622),p=e(4568),l=e(4980),m=e(9560);const u="UpdatePasswordComponent_mainstr__NnnRk",_="UpdatePasswordComponent_form__mZ1yS",h="UpdatePasswordComponent_formControl__VlA3w",P="UpdatePasswordComponent_formTitle__7cfCF",N="UpdatePasswordComponent_formLabel__kt1iv",x="UpdatePasswordComponent_stack__0ChZG",j="UpdatePasswordComponent_inputBox__G0vxy",v="UpdatePasswordComponent_iconeye__jOzvf",C="UpdatePasswordComponent_inputpassword__n-rMD",f="UpdatePasswordComponent_button__BU71d",y="UpdatePasswordComponent_errormessage__ySVyv",U="UpdatePasswordComponent_errorBorder__DyS2Y",b="UpdatePasswordComponent_errorInput__CVkvW";var z=e(9204),k=e(2496);const S=s=>{let{onSubmit:a}=s;const{t:e}=(0,z.Gy)(),[o,t]=(0,i.useState)(!1),[r,n]=(0,i.useState)(!1),d=p.kt({newPassword:p.Qb().required("".concat(e("authorization.errors.passwordReq"))).min(8,"".concat(e("authorization.errors.passwordLeast"))).max(64,"".concat(e("authorization.errors.passwordLess"))),repeatNewPassword:p.Qb().oneOf([p.IL("newPassword")],"".concat(e("authorization.errors.passwordMatch"))).required("".concat(e("authorization.errors.repeatPasswordReq")))});return(0,k.jsx)("div",{className:u,children:(0,k.jsx)(w.QJ,{initialValues:{newPassword:"",repeatNewPassword:""},validationSchema:d,onSubmit:a,children:s=>{let{errors:a,touched:d}=s;return(0,k.jsxs)(w.QF,{className:_,children:[(0,k.jsx)("h1",{className:P,children:"Update password"}),(0,k.jsxs)("div",{className:h,children:[(0,k.jsxs)("div",{className:x,children:[(0,k.jsx)("label",{className:N,htmlFor:"update-password-id1",children:e("authorization.enterNewPass")}),(0,k.jsxs)("div",{className:"".concat(j," ").concat(a.newPassword&&d.newPassword?U:""),children:[(0,k.jsx)(w.IN,{id:"update-password-id1",className:"".concat(C,"  ").concat(a.newPassword&&d.newPassword?b:""),name:"newPassword",type:o?"text":"password",placeholder:e("authorization.enterNewPassText")}),(0,k.jsx)("div",{className:v,onClick:()=>t(!o),style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:o?(0,k.jsx)(m._,{}):(0,k.jsx)(l._,{})})]}),(0,k.jsx)(w.mS,{name:"newPassword",component:"div",className:y})]}),(0,k.jsxs)("div",{className:x,children:[(0,k.jsx)("label",{className:N,htmlFor:"update-password-id2",children:e("authorization.repeatNewPass")}),(0,k.jsxs)("div",{className:"".concat(j," ").concat(a.repeatNewPassword&&d.repeatNewPassword?U:""),children:[(0,k.jsx)(w.IN,{id:"update-password-id2",className:"".concat(C,"  ").concat(a.repeatNewPassword&&d.repeatNewPassword?b:""),name:"repeatNewPassword",type:r?"text":"password",placeholder:e("authorization.repeatNewPassText")}),(0,k.jsx)("div",{className:v,onClick:()=>n(!r),style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:r?(0,k.jsx)(m._,{}):(0,k.jsx)(l._,{})})]}),(0,k.jsx)(w.mS,{name:"repeatNewPassword",component:"div",className:y})]}),(0,k.jsx)("button",{type:"submit",className:f,children:e("authorization.send")})]})]})}})})},g=()=>{const{t:s}=(0,z.Gy)(),{token:a}=(0,o.W4)(),[e,w]=(0,i.useState)(!1);return(0,k.jsxs)("div",{className:r,children:[(0,k.jsx)(S,{onSubmit:async(e,o)=>{let{resetForm:r}=o;const{newPassword:d,repeatNewPassword:c}=e;if(d===c){w(!0);try{if(!a)return;await(0,t.IT)(a,{newPassword:c}),n.m4.success("".concat(s("authorization.notification.successPass"))),setTimeout((()=>window.location.replace("/aqua-frontend/signin")),3e3)}catch(i){w(!1),n.m4.error("".concat(s("authorization.notification.error")))}finally{w(!1)}r()}}}),e&&(0,k.jsx)(d.c,{children:(0,k.jsx)(c.c,{})})]})}}}]);
//# sourceMappingURL=480.00ba454c.chunk.js.map