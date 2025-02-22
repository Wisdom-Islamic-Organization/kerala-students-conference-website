"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[310],{389:(e,t,r)=>{r.d(t,{A:()=>c});var a=r(9281),n=r(9);const i=(0,n.Ay)("p")`
  margin-top: 1.5rem;
`,s=(0,n.Ay)("div")`
  position: relative;
  max-width: 700px;
`,o=(0,n.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var d=r(579);const c=(0,a.C)()((e=>{let{title:t,content:r,t:a}=e;return(0,d.jsxs)(s,{children:[(0,d.jsx)("h6",{children:a(t)}),(0,d.jsx)(o,{children:(0,d.jsx)(i,{children:a(r)})})]})}))},3310:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var a=r(7419),n=r(1645),i=r(9281),s=r(3614),o=r(9515),d=r(7662),c=r(5639),l=r(389),m=r(3984),u=r(9);const p=(0,u.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,h=(0,u.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,g=(0,u.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgba(36,182,200,255);
  height: 0.775rem;
  padding: 0 0.675rem;
`,x=(0,u.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;var b=r(579);const y=(0,i.C)()((e=>{let{title:t,content:r,id:i,t:u}=e;const{values:y,errors:v,handleChange:A,handleContact:j}=(0,o.m)(d.D,"contact"),f=e=>{let{type:t}=e;const r=v[t];return(0,b.jsx)(g,{children:r})};return(0,b.jsx)(p,{id:i,children:(0,b.jsxs)(a.A,{justify:"space-between",align:"middle",children:[(0,b.jsx)(n.A,{lg:12,md:11,sm:24,xs:24,children:(0,b.jsx)(s.q7,{direction:"left",triggerOnce:!0,children:(0,b.jsx)(l.A,{title:t,content:r})})}),(0,b.jsx)(n.A,{lg:12,md:12,sm:24,xs:24,children:(0,b.jsx)(s.q7,{direction:"right",triggerOnce:!0,children:(0,b.jsxs)(h,{autoComplete:"off",onSubmit:j,children:[(0,b.jsxs)(n.A,{span:24,children:[(0,b.jsx)(m.A,{type:"text",name:"name",placeholder:"Your Name",value:y.name||"",onChange:A}),(0,b.jsx)(f,{type:"name"})]}),(0,b.jsxs)(n.A,{span:24,children:[(0,b.jsx)(m.A,{type:"tel",name:"contactNumber",placeholder:"Your Contact",value:y.contactNumber||"",onChange:A}),(0,b.jsx)(f,{type:"contactNumber"})]}),(0,b.jsx)(x,{children:(0,b.jsx)(c.$,{name:"submit",children:u("Submit")})})]})})})]})})}))},3984:(e,t,r)=>{r.d(t,{A:()=>c});var a=r(9281),n=r(9);const i=(0,n.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,s=(0,n.Ay)("input")`
  font-size: 0.875rem;
`,o=((0,n.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,(0,n.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,(0,n.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`);var d=r(579);const c=(0,a.C)()((e=>{let{name:t,placeholder:r,onChange:a,t:n}=e;return(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{htmlFor:t,children:n(r)}),(0,d.jsx)(s,{placeholder:n(r),name:t,id:t,onChange:a})]})}))},7662:(e,t,r)=>{r.d(t,{A:()=>n,D:()=>a});const a=e=>{let t={};return e.name||(t.name="Name is required"),e.contactNumber||(t.contactNumber="Contact number is required"),t},n=e=>{let t={};return e.name||(t.name="Name is required"),e.gender||(t.gender="Gender is required"),e.age?(isNaN(Number(e.age))||Number(e.age)<0)&&(t.age="Please enter a valid age"):t.age="Age is required",e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email address is required",e.contactNumber?/^\d{10}$/.test(e.contactNumber)||(t.contactNumber="Please enter a valid 10-digit number"):t.contactNumber="Contact number is required",e.whatsappNumber&&!/^\d{10}$/.test(e.whatsappNumber)&&(t.whatsappNumber="Please enter a valid 10-digit number"),t}},9515:(e,t,r)=>{r.d(t,{m:()=>l});var a=r(5043),n=r(6009),i=r(2387),s=r(5472),o=r(1688);const d={name:"",email:"",age:"",standard:"",gender:"",subject:"",institution:"",yearOfStudy:"",yearOfCompletion:"",district:"",otherDistrict:"",localBody:"",contactNumber:"",whatsappNumber:"",isDifferentWhatsApp:"no"},c={name:"",contactNumber:""},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"registration";const r=(0,o.W6)(),[l,m]=(0,a.useState)({values:"registration"===t?d:c,errors:"registration"===t?d:c});return{handleChange:e=>{const{name:t,value:r}=e.target;m((e=>({...e,values:{...e.values,[t]:r},errors:{...e.errors,[t]:""}})))},handleSubmit:async a=>{a.preventDefault();const o=l.values,u=e(o);m((e=>({...e,errors:u})));try{if(Object.values(u).every((e=>""===e))){const e=(0,s.rJ)(i.db,"registrations");await(0,s.gS)(e,{...o,timestamp:(0,s.O5)()}),m({values:"registration"===t?{...d}:{...c},errors:"registration"===t?{...d}:{...c}}),window.scrollTo({top:0,behavior:"smooth"}),setTimeout((()=>{n.A.success({message:"Registration Successful",description:"Thank you for registering! We'll contact you soon.",duration:3})}),500),setTimeout((()=>{r.push("/")}),2500)}}catch(p){console.error("Registration error:",p),n.A.error({message:"Error",description:"Failed to submit registration. Please try again later."})}},handleContact:async t=>{t.preventDefault();const r=l.values,a=e(r);m((e=>({...e,errors:a})));try{if(Object.values(a).every((e=>""===e))){const e=(0,s.rJ)(i.db,"contacts");await(0,s.gS)(e,{name:r.name,contactNumber:r.contactNumber,timestamp:(0,s.O5)()}),m({values:{...c},errors:{...c}}),n.A.success({message:"Message Sent",description:"Thank you for contacting us! We'll get back to you soon.",duration:3})}}catch(o){console.error("Contact form error:",o),n.A.error({message:"Error",description:"Failed to send message. Please try again later."})}},values:l.values,errors:l.errors}}}}]);
//# sourceMappingURL=310.20314e7b.chunk.js.map