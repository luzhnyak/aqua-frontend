"use strict";(self.webpackChunkaqua_frontend=self.webpackChunkaqua_frontend||[]).push([[638],{638:function(e,r,a){a.r(r),a.d(r,{default:function(){return x}});var s=a(4925),n=a(9439),o=a(2791),i=a(1087),t=a(4420),c=a(5705),l=a(8007),d=a(888),u=a(801),p=a(9273),m={container:"SignupPage_container__r3EgE",mainstr:"SignupPage_mainstr__KRJyF",formControl:"SignupPage_formControl__Xc2Fg",formTitle:"SignupPage_formTitle__t-ejR",formLabel:"SignupPage_formLabel__8fzJS",stack:"SignupPage_stack__t73w8",input:"SignupPage_input__-zMrt",inputBox:"SignupPage_inputBox__9uh2R",inputBoxRep:"SignupPage_inputBoxRep__mo2Ls",iconeye:"SignupPage_iconeye__7z13K",inputpassword:"SignupPage_inputpassword__2gacp",button:"SignupPage_button__JhlSk",errormessage:"SignupPage_errormessage__Fiw-A",errorBorder:"SignupPage_errorBorder__9u7oD",errorInput:"SignupPage_errorInput__E2HXP"},g=a(184),_=["repeatPassword"],x=function(){var e=(0,t.I0)(),r=(0,o.useState)(!1),a=(0,n.Z)(r,2),x=a[0],w=a[1],h=(0,o.useState)(!1),P=(0,n.Z)(h,2),j=P[0],N=P[1],f=l.Ry({email:l.Z_().email().required("Email is required."),password:l.Z_().required("Password is required.").min(7,"Password must be at least 8 characters.").max(55,"Password must be less than 55 characters."),repeatPassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match").required("Repeat password is required.")});return(0,g.jsx)("div",{className:m.container,children:(0,g.jsx)("div",{className:m.mainstr,children:(0,g.jsx)(c.J9,{initialValues:{email:"",password:"",repeatPassword:""},validationSchema:f,onSubmit:function(r,a){var n=a.resetForm,o=(r.repeatPassword,(0,s.Z)(r,_));e((0,p.rv)(o)),n()},children:function(e){var r=e.errors,a=e.touched;return(0,g.jsxs)(c.l0,{className:m.form,children:[(0,g.jsx)("h1",{className:m.formTitle,children:"Sign Up"}),(0,g.jsxs)("div",{className:m.formControl,children:[(0,g.jsxs)("div",{className:m.stack,children:[(0,g.jsx)("label",{className:m.formLabel,htmlFor:"unique-id1",children:"Enter your email"}),(0,g.jsx)(c.gN,{id:"unique-id1",className:"".concat(m.input," ").concat(r.email&&a.email?m.errorBorder:""," ").concat(r.email&&a.email?m.errorInput:""),name:"email",type:"email",placeholder:"Email"}),(0,g.jsx)(c.Bc,{name:"email",component:"div",className:m.errormessage})]}),(0,g.jsxs)("div",{className:m.stack,children:[(0,g.jsx)("label",{className:m.formLabel,htmlFor:"unique-id2",children:"Enter your password"}),(0,g.jsxs)("div",{className:"".concat(m.inputBox," ").concat(r.password&&a.password?m.errorBorder:""),children:[(0,g.jsx)(c.gN,{id:"unique-id2",className:"".concat(m.inputpassword,"  ").concat(r.password&&a.password?m.errorInput:""),name:"password",type:x?"text":"password",placeholder:"Password"}),(0,g.jsx)("div",{className:m.iconeye,onClick:function(){return w(!x)},style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:x?(0,g.jsx)(u.r,{}):(0,g.jsx)(d.r,{})})]}),(0,g.jsx)(c.Bc,{name:"password",component:"div",className:m.errormessage})]}),(0,g.jsxs)("div",{className:m.stack,children:[(0,g.jsx)("label",{className:m.formLabel,htmlFor:"unique-id3",children:"Repeat your password"}),(0,g.jsxs)("div",{className:"".concat(m.inputBoxRep," ").concat(r.repeatPassword&&a.repeatPassword?m.errorBorder:""),children:[(0,g.jsx)(c.gN,{id:"unique-id3",className:"".concat(m.inputpassword,"  ").concat(r.repeatPassword&&a.repeatPassword?m.errorInput:""),name:"repeatPassword",type:j?"text":"password",placeholder:"Repeat password"}),(0,g.jsx)("div",{className:m.iconeye,onClick:function(){return N(!j)},style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:j?(0,g.jsx)(u.r,{}):(0,g.jsx)(d.r,{})})]}),(0,g.jsx)(c.Bc,{name:"repeatPassword",component:"div",className:m.errormessage})]}),(0,g.jsx)("button",{className:m.button,type:"submit",children:"Sign Up"}),(0,g.jsx)(i.rU,{to:"/signin",className:m.signin,children:(0,g.jsx)("p",{className:m.signinText,children:"Sign in"})})]})]})}})})})}}}]);
//# sourceMappingURL=638.ef7901f2.chunk.js.map