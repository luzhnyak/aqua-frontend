"use strict";(self.webpackChunkaqua_frontend=self.webpackChunkaqua_frontend||[]).push([[584],{8584:(s,a,e)=>{e.r(a),e.d(a,{default:()=>k});var o=e(1560),t=e(8432),r=e(9252),n=e(6480),d=e(8568),c=e(9060),i=e(2622),w=e(4568),p=e(4980),m=e(9560);const l="UpdatePasswordComponent_mainstr__NnnRk",u="UpdatePasswordComponent_form__mZ1yS",_="UpdatePasswordComponent_formControl__VlA3w",h="UpdatePasswordComponent_formTitle__7cfCF",P="UpdatePasswordComponent_formLabel__kt1iv",N="UpdatePasswordComponent_stack__0ChZG",x="UpdatePasswordComponent_inputBox__G0vxy",j="UpdatePasswordComponent_iconeye__jOzvf",C="UpdatePasswordComponent_inputpassword__n-rMD",v="UpdatePasswordComponent_button__BU71d",f="UpdatePasswordComponent_errormessage__ySVyv",y="UpdatePasswordComponent_errorBorder__DyS2Y",U="UpdatePasswordComponent_errorInput__CVkvW";var b=e(9204),z=e(2496);const S=s=>{let{onSubmit:a}=s;const{t:e}=(0,b.Gy)(),[o,t]=(0,c.useState)(!1),[r,n]=(0,c.useState)(!1),d=w.kt({newPassword:w.Qb().required("".concat(e("authorization.errors.passwordReq"))).min(8,"".concat(e("authorization.errors.passwordLeast"))).max(64,"".concat(e("authorization.errors.passwordLess"))),repeatNewPassword:w.Qb().oneOf([w.IL("newPassword")],"".concat(e("authorization.errors.passwordMatch"))).required("".concat(e("authorization.errors.repeatPasswordReq")))});return(0,z.jsx)("div",{className:l,children:(0,z.jsx)(i.QJ,{initialValues:{newPassword:"",repeatNewPassword:""},validationSchema:d,onSubmit:a,children:s=>{let{errors:a,touched:d}=s;return(0,z.jsxs)(i.QF,{className:u,children:[(0,z.jsx)("h1",{className:h,children:"Update password"}),(0,z.jsxs)("div",{className:_,children:[(0,z.jsxs)("div",{className:N,children:[(0,z.jsx)("label",{className:P,htmlFor:"update-password-id1",children:e("authorization.enterNewPass")}),(0,z.jsxs)("div",{className:"".concat(x," ").concat(a.newPassword&&d.newPassword?y:""),children:[(0,z.jsx)(i.IN,{id:"update-password-id1",className:"".concat(C,"  ").concat(a.newPassword&&d.newPassword?U:""),name:"newPassword",type:o?"text":"password",placeholder:e("authorization.enterNewPassText")}),(0,z.jsx)("div",{className:j,onClick:()=>t(!o),style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:o?(0,z.jsx)(m._,{}):(0,z.jsx)(p._,{})})]}),(0,z.jsx)(i.mS,{name:"newPassword",component:"div",className:f})]}),(0,z.jsxs)("div",{className:N,children:[(0,z.jsx)("label",{className:P,htmlFor:"update-password-id2",children:e("authorization.repeatNewPass")}),(0,z.jsxs)("div",{className:"".concat(x," ").concat(a.repeatNewPassword&&d.repeatNewPassword?y:""),children:[(0,z.jsx)(i.IN,{id:"update-password-id2",className:"".concat(C,"  ").concat(a.repeatNewPassword&&d.repeatNewPassword?U:""),name:"repeatNewPassword",type:r?"text":"password",placeholder:e("authorization.repeatNewPassText")}),(0,z.jsx)("div",{className:j,onClick:()=>n(!r),style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:r?(0,z.jsx)(m._,{}):(0,z.jsx)(p._,{})})]}),(0,z.jsx)(i.mS,{name:"repeatNewPassword",component:"div",className:f})]}),(0,z.jsx)("button",{type:"submit",className:v,children:e("authorization.send")})]})]})}})})},k=()=>{const{t:s}=(0,b.Gy)(),{token:a}=(0,o.W4)(),[e,i]=(0,c.useState)(!1);return(0,z.jsxs)("div",{className:r.c.container,children:[(0,z.jsx)(S,{onSubmit:async(e,o)=>{let{resetForm:r}=o;const{newPassword:d,repeatNewPassword:c}=e;if(d===c){i(!0);try{if(!a)return;await(0,t.IT)(a,{newPassword:c}),n.m4.success("".concat(s("authorization.notification.successPass"))),setTimeout((()=>window.location.replace("/aqua-frontend/signin")),3e3)}catch(w){i(!1),n.m4.error("".concat(s("authorization.notification.error")))}finally{i(!1)}r()}}}),e&&(0,z.jsx)(d.c,{})]})}},9252:(s,a,e)=>{e.d(a,{c:()=>o});const o={container:"AuthPage_container__YIM88",mainstr:"AuthPage_mainstr__D49SA"}}}]);
//# sourceMappingURL=584.117ca228.chunk.js.map