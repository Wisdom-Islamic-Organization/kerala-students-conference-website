"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[269],{164:(e,r,t)=>{t.d(r,{A:()=>c});var n=t(9379),o=t(5043);const a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var i=t(2172),l=function(e,r){return o.createElement(i.A,(0,n.A)((0,n.A)({},e),{},{ref:r,icon:a}))};const c=o.forwardRef(l)},7063:(e,r,t)=>{t.d(r,{A:()=>i,c:()=>a});var n=t(5043),o=n.createContext(void 0),a=function(e){var r=e.children,t=e.size;return n.createElement(o.Consumer,null,(function(e){return n.createElement(o.Provider,{value:t||e},r)}))};const i=o},8440:(e,r,t)=>{t.d(r,{A:()=>i,X:()=>a});var n=t(5043),o=n.createContext(!1),a=function(e){var r=e.children,t=e.disabled,a=n.useContext(o);return n.createElement(o.Provider,{value:null!==t&&void 0!==t?t:a},r)};const i=o},8611:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var n=t(5043),o=t(9),a=t(1688),i=t(1802),l=t(8156);const c=JSON.parse('{"alif":{"logo":"/img/icons/alifexam.png","formUrl":"https://docs.google.com/forms/d/e/1FAIpQLScyD2ns5kcJtB4BdUCGzrXuPOabYE1LN-hjPpIp-RJ7y8xFXg/viewform?embedded=true","alt":"Alif Logo"}}');var d=t(579);const s=(0,n.lazy)((()=>Promise.resolve().then(t.bind(t,1766)))),m=o.Ay.div`
  padding: 7rem 0 5rem;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
`,h=o.Ay.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 2rem;
`,g=o.Ay.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
`,f=o.Ay.iframe`
  width: 100%;
  height: 100%;
  border: none;
`,p=o.Ay.div`
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 2rem;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
  }
`,u=()=>{const[e,r]=(0,n.useState)(!1),{examId:t}=(0,a.g)(),o=c[t];return o?(0,d.jsx)(s,{children:(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{src:(0,l.O)(o.logo),alt:o.alt}),e?(0,d.jsxs)(p,{children:[(0,d.jsx)("h3",{children:"Unable to load the form"}),(0,d.jsx)("p",{children:"Please click the button below to open the form in a new tab"}),(0,d.jsx)(i.A,{type:"primary",href:o.formUrl,target:"_blank",rel:"noopener noreferrer",children:"Open Form"})]}):(0,d.jsx)(g,{children:(0,d.jsx)(f,{src:o.formUrl,frameBorder:"0",marginHeight:0,marginWidth:0,onError:()=>r(!0),children:"Loading\u2026"})})]})}):(0,d.jsx)(s,{children:(0,d.jsx)(m,{children:(0,d.jsx)("h1",{children:"Exam not found"})})})}}}]);
//# sourceMappingURL=269.f03b0331.chunk.js.map