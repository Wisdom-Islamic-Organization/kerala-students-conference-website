"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[310],{389:(e,t,r)=>{r.d(t,{A:()=>d});var a=r(9281),i=r(9);const n=(0,i.Ay)("p")`
  margin-top: 1.5rem;
`,s=(0,i.Ay)("div")`
  position: relative;
  max-width: 700px;
`,o=(0,i.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var c=r(579);const d=(0,a.C)()((e=>{let{title:t,content:r,t:a}=e;return(0,c.jsxs)(s,{children:[(0,c.jsx)("h6",{children:a(t)}),(0,c.jsx)(o,{children:(0,c.jsx)(n,{children:a(r)})})]})}))},3310:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var a=r(7419),i=r(1645),n=r(9281),s=r(3614),o=r(7089),c=r(7662),d=r(5639),l=r(389),m=r(3984),u=r(9);const p=(0,u.Ay)("div")`
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
`,y=(0,u.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;var b=r(579);const x=(0,n.C)()((e=>{let{title:t,content:r,id:n,t:u}=e;const{values:x,errors:v,handleChange:j,handleContact:N}=(0,o.m)(c.D,"contact"),w=e=>{let{type:t}=e;const r=v[t];return(0,b.jsx)(g,{children:r})};return(0,b.jsx)(p,{id:n,children:(0,b.jsxs)(a.A,{justify:"space-between",align:"middle",children:[(0,b.jsx)(i.A,{lg:12,md:11,sm:24,xs:24,children:(0,b.jsx)(s.q7,{direction:"left",triggerOnce:!0,children:(0,b.jsx)(l.A,{title:t,content:r})})}),(0,b.jsx)(i.A,{lg:12,md:12,sm:24,xs:24,children:(0,b.jsx)(s.q7,{direction:"right",triggerOnce:!0,children:(0,b.jsxs)(h,{autoComplete:"off",onSubmit:N,children:[(0,b.jsxs)(i.A,{span:24,children:[(0,b.jsx)(m.A,{type:"text",name:"name",placeholder:"Your Name",value:x.name||"",onChange:j}),(0,b.jsx)(w,{type:"name"})]}),(0,b.jsxs)(i.A,{span:24,children:[(0,b.jsx)(m.A,{type:"tel",name:"contactNumber",placeholder:"Your Contact",value:x.contactNumber||"",onChange:j}),(0,b.jsx)(w,{type:"contactNumber"})]}),(0,b.jsx)(y,{children:(0,b.jsx)(d.$,{name:"submit",children:u("Submit")})})]})})})]})})}))},3984:(e,t,r)=>{r.d(t,{A:()=>d});var a=r(9281),i=r(9);const n=(0,i.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,s=(0,i.Ay)("input")`
  font-size: 0.875rem;
`,o=((0,i.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,(0,i.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,(0,i.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`);var c=r(579);const d=(0,a.C)()((e=>{let{name:t,placeholder:r,onChange:a,t:i}=e;return(0,c.jsxs)(n,{children:[(0,c.jsx)(o,{htmlFor:t,children:i(r)}),(0,c.jsx)(s,{placeholder:i(r),name:t,id:t,onChange:a})]})}))},7089:(e,t,r)=>{r.d(t,{m:()=>l});var a=r(5043),i=r(6904),n=r(2387),s=r(5472),o=r(1688);const c={name:"",email:"",age:"",standard:"",gender:"",subject:"",institution:"",yearOfStudy:"",yearOfCompletion:"",district:"",otherDistrict:"",localBody:"",contactNumber:"",whatsappNumber:"",isDifferentWhatsApp:"no"},d={name:"",contactNumber:""},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"registration";const r=(0,o.W6)(),[l,m]=(0,a.useState)({values:"registration"===t?c:d,errors:"registration"===t?c:d});return{handleChange:e=>{const{name:t,value:r}=e.target;m((e=>({...e,values:{...e.values,[t]:r},errors:{...e.errors,[t]:""}})))},handleSubmit:async a=>{a.preventDefault();const o=l.values,u=e(o);m((e=>({...e,errors:u})));try{if(Object.values(u).every((e=>""===e))){const e=(0,s.rJ)(n.db,"registrations");await(0,s.gS)(e,{...o,timestamp:(0,s.O5)()}),"registration"===t&&await(async e=>{try{const t=await fetch("https://guideportal.wisdomislam.org/api/p/event-registration",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2d1aWRlcG9ydGFsLndpc2RvbWlzbGFtLm9yZy9hcGkvdXNlckxvZ2luIiwiaWF0IjoxNzI2ODI5MjQ1LCJleHAiOjE3Mjk0MjEyNDUsIm5iZiI6MTcyNjgyOTI0NSwianRpIjoiREZURzhCTWJKUVNhQmMxcSIsInN1YiI6IjM5MzkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.4DWWguWflfup5WBzteaM3GaC7IsJ0axobrhzUvlJSUY"},body:JSON.stringify(e)});if(!t.ok)throw new Error("API submission failed");return await t.json()}catch(t){throw console.error("API Error:",t),t}})({event_id:84,mobile:o.contactNumber||"",name:o.name||"",age:o.age||"",sex:"male"===o.gender?"Male":"Female",whatsapp:o.whatsappNumber||o.contactNumber||"",email:o.email||"",class:o.standard||"",subject:o.subject||"",institution:o.institution||"",year_of_study:o.yearOfStudy||"",year_of_completion:o.yearOfCompletion||"",district_name:o.district||"",district_name_other:o.otherDistrict||"",local_body:o.localBody||""}),m({values:"registration"===t?{...c}:{...d},errors:"registration"===t?{...c}:{...d}}),window.scrollTo({top:0,behavior:"smooth"}),setTimeout((()=>{i.A.success({message:"Registration Successful",description:"Thank you for registering! We'll contact you soon.",duration:3})}),500),setTimeout((()=>{r.push("/")}),2500)}}catch(p){console.error("Registration error:",p),i.A.error({message:"Error",description:"Failed to submit registration. Please try again later."})}},handleContact:async t=>{t.preventDefault();const r=l.values,a=e(r);m((e=>({...e,errors:a})));try{if(Object.values(a).every((e=>""===e))){const e=(0,s.rJ)(n.db,"contacts");await(0,s.gS)(e,{name:r.name,contactNumber:r.contactNumber,timestamp:(0,s.O5)()}),m({values:{...d},errors:{...d}}),i.A.success({message:"Message Sent",description:"Thank you for contacting us! We'll get back to you soon.",duration:3})}}catch(o){console.error("Contact form error:",o),i.A.error({message:"Error",description:"Failed to send message. Please try again later."})}},values:l.values,errors:l.errors}}},7662:(e,t,r)=>{r.d(t,{A:()=>i,D:()=>a});const a=e=>{let t={};return e.name||(t.name="Name is required"),e.contactNumber||(t.contactNumber="Contact number is required"),t},i=e=>{let t={};return e.name||(t.name="Name is required"),e.gender||(t.gender="Gender is required"),e.age?(isNaN(Number(e.age))||Number(e.age)<0)&&(t.age="Please enter a valid age"):t.age="Age is required",e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email address is required",e.contactNumber?/^\d{10}$/.test(e.contactNumber)||(t.contactNumber="Please enter a valid 10-digit number"):t.contactNumber="Contact number is required",e.whatsappNumber&&!/^\d{10}$/.test(e.whatsappNumber)&&(t.whatsappNumber="Please enter a valid 10-digit number"),t}}}]);
//# sourceMappingURL=310.15fb742f.chunk.js.map