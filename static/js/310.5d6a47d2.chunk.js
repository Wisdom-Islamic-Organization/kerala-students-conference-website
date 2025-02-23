"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[310],{389:(e,t,r)=>{r.d(t,{A:()=>d});var a=r(9281),n=r(9);const i=(0,n.Ay)("p")`
  margin-top: 1.5rem;
`,s=(0,n.Ay)("div")`
  position: relative;
  max-width: 700px;
`,o=(0,n.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var c=r(579);const d=(0,a.C)()((e=>{let{title:t,content:r,t:a}=e;return(0,c.jsxs)(s,{children:[(0,c.jsx)("h6",{children:a(t)}),(0,c.jsx)(o,{children:(0,c.jsx)(i,{children:a(r)})})]})}))},3310:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var a=r(7419),n=r(1645),i=r(9281),s=r(3614),o=r(7089),c=r(7662),d=r(5639),l=r(389),m=r(3984),u=r(9);const p=(0,u.Ay)("div")`
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
`,A=(0,u.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;var b=r(579);const y=(0,i.C)()((e=>{let{title:t,content:r,id:i,t:u}=e;const{values:y,errors:_,handleChange:x,handleContact:E}=(0,o.m)(c.D,"contact"),v=e=>{let{type:t}=e;const r=_[t];return(0,b.jsx)(g,{children:r})};return(0,b.jsx)(p,{id:i,children:(0,b.jsxs)(a.A,{justify:"space-between",align:"middle",children:[(0,b.jsx)(n.A,{lg:12,md:11,sm:24,xs:24,children:(0,b.jsx)(s.q7,{direction:"left",triggerOnce:!0,children:(0,b.jsx)(l.A,{title:t,content:r})})}),(0,b.jsx)(n.A,{lg:12,md:12,sm:24,xs:24,children:(0,b.jsx)(s.q7,{direction:"right",triggerOnce:!0,children:(0,b.jsxs)(h,{autoComplete:"off",onSubmit:E,children:[(0,b.jsxs)(n.A,{span:24,children:[(0,b.jsx)(m.A,{type:"text",name:"name",placeholder:"Your Name",value:y.name||"",onChange:x}),(0,b.jsx)(v,{type:"name"})]}),(0,b.jsxs)(n.A,{span:24,children:[(0,b.jsx)(m.A,{type:"tel",name:"contactNumber",placeholder:"Your Contact",value:y.contactNumber||"",onChange:x}),(0,b.jsx)(v,{type:"contactNumber"})]}),(0,b.jsx)(A,{children:(0,b.jsx)(d.$,{name:"submit",children:u("Submit")})})]})})})]})})}))},3984:(e,t,r)=>{r.d(t,{A:()=>d});var a=r(9281),n=r(9);const i=(0,n.Ay)("div")`
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
`);var c=r(579);const d=(0,a.C)()((e=>{let{name:t,placeholder:r,onChange:a,t:n}=e;return(0,c.jsxs)(i,{children:[(0,c.jsx)(o,{htmlFor:t,children:n(r)}),(0,c.jsx)(s,{placeholder:n(r),name:t,id:t,onChange:a})]})}))},7089:(e,t,r)=>{r.d(t,{m:()=>m});var a=r(5043),n=r(6904),i=r(2387),s=r(5472),o=r(1688);const c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"93730832178",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-43VT1LQE97",REACT_APP_FIREBASE_STORAGE_BUCKET:"kerala-students-conference.firebasestorage.app",REACT_APP_FIREBASE_AUTH_DOMAIN:"kerala-students-conference.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"kerala-students-conference",REACT_APP_FIREBASE_APP_ID:"1:93730832178:web:e2cba01e8d356201fde12b",REACT_APP_FIREBASE_API_KEY:"AIzaSyAsFWymdJpYHMHcHgDk1_h4xEkDxXAvF1A"}.REACT_APP_GUIDE_API_TOKEN,d={name:"",email:"",age:"",standard:"",gender:"",subject:"",institution:"",yearOfStudy:"",yearOfCompletion:"",district:"",otherDistrict:"",localBody:"",contactNumber:"",whatsappNumber:"",isDifferentWhatsApp:"no"},l={name:"",contactNumber:""},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"registration";const r=(0,o.W6)(),[m,u]=(0,a.useState)({values:"registration"===t?d:l,errors:"registration"===t?d:l});return{handleChange:e=>{const{name:t,value:r}=e.target;u((e=>({...e,values:{...e.values,[t]:r},errors:{...e.errors,[t]:""}})))},handleSubmit:async a=>{a.preventDefault();const o=m.values,p=e(o);u((e=>({...e,errors:p})));try{if(Object.values(p).every((e=>""===e))){const e=(0,s.rJ)(i.db,"registrations");await(0,s.gS)(e,{...o,timestamp:(0,s.O5)()}),"registration"===t&&await(async e=>{try{const t=await fetch("https://guideportal.wisdomislam.org/api/p/event-registration",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify(e)});if(!t.ok)throw new Error("API submission failed");return await t.json()}catch(t){throw console.error("API Error:",t),t}})({event_id:84,mobile:o.contactNumber||"",name:o.name||"",age:o.age||"",sex:"male"===o.gender?"Male":"Female",whatsapp:o.whatsappNumber||o.contactNumber||"",email:o.email||"",class:o.standard||"",subject:o.subject||"",institution:o.institution||"",year_of_study:o.yearOfStudy||"",year_of_completion:o.yearOfCompletion||"",district_name:o.district||"",district_name_other:o.otherDistrict||"",local_body:o.localBody||""}),u({values:"registration"===t?{...d}:{...l},errors:"registration"===t?{...d}:{...l}}),window.scrollTo({top:0,behavior:"smooth"}),setTimeout((()=>{n.A.success({message:"Registration Successful",description:"Thank you for registering! We'll contact you soon.",duration:3})}),500),setTimeout((()=>{r.push("/")}),2500)}}catch(h){console.error("Registration error:",h),n.A.error({message:"Error",description:"Failed to submit registration. Please try again later."})}},handleContact:async t=>{t.preventDefault();const r=m.values,a=e(r);u((e=>({...e,errors:a})));try{if(Object.values(a).every((e=>""===e))){const e=(0,s.rJ)(i.db,"contacts");await(0,s.gS)(e,{name:r.name,contactNumber:r.contactNumber,timestamp:(0,s.O5)()}),u({values:{...l},errors:{...l}}),n.A.success({message:"Message Sent",description:"Thank you for contacting us! We'll get back to you soon.",duration:3})}}catch(o){console.error("Contact form error:",o),n.A.error({message:"Error",description:"Failed to send message. Please try again later."})}},values:m.values,errors:m.errors}}},7662:(e,t,r)=>{r.d(t,{A:()=>n,D:()=>a});const a=e=>{let t={};return e.name||(t.name="Name is required"),e.contactNumber||(t.contactNumber="Contact number is required"),t},n=e=>{let t={};return e.name||(t.name="Name is required"),e.gender||(t.gender="Gender is required"),e.age?(isNaN(Number(e.age))||Number(e.age)<0)&&(t.age="Please enter a valid age"):t.age="Age is required",e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email address is required",e.contactNumber?/^\d{10}$/.test(e.contactNumber)||(t.contactNumber="Please enter a valid 10-digit number"):t.contactNumber="Contact number is required",e.whatsappNumber&&!/^\d{10}$/.test(e.whatsappNumber)&&(t.whatsappNumber="Please enter a valid 10-digit number"),t}}}]);
//# sourceMappingURL=310.5d6a47d2.chunk.js.map