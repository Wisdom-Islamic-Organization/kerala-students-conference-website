"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[269],{164:(e,r,t)=>{t.d(r,{A:()=>c});var o=t(9379),n=t(5043);const i={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var a=t(2172),l=function(e,r){return n.createElement(a.A,(0,o.A)((0,o.A)({},e),{},{ref:r,icon:i}))};const c=n.forwardRef(l)},7063:(e,r,t)=>{t.d(r,{A:()=>a,c:()=>i});var o=t(5043),n=o.createContext(void 0),i=function(e){var r=e.children,t=e.size;return o.createElement(n.Consumer,null,(function(e){return o.createElement(n.Provider,{value:t||e},r)}))};const a=n},8440:(e,r,t)=>{t.d(r,{A:()=>a,X:()=>i});var o=t(5043),n=o.createContext(!1),i=function(e){var r=e.children,t=e.disabled,i=o.useContext(n);return o.createElement(n.Provider,{value:null!==t&&void 0!==t?t:i},r)};const a=n},8611:(e,r,t)=>{t.r(r),t.d(r,{default:()=>x});var o=t(5043),n=t(9),i=t(1688),a=t(1802),l=t(8156);const c=JSON.parse('{"alif":{"logo":"/img/icons/alifexam.png","formUrl":"https://forms.gle/HCmT8CetiX1piTBaA","alt":"Alif Logo"},"alif-exam":{"logo":"/img/icons/alifexam.png","formUrl":"https://docs.google.com/forms/d/e/1FAIpQLScyD2ns5kcJtB4BdUCGzrXuPOabYE1LN-hjPpIp-RJ7y8xFXg/viewform?embedded=true","alt":"Alif Logo"},"cre":{"logo":"/img/icons/cre.png","formUrl":"https://forms.gle/YZefd8K4nHGuy8x48","alt":"CRE Logo"}}');var d=t(579);const m=(0,o.lazy)((()=>Promise.resolve().then(t.bind(t,1766)))),s=n.Ay.div`
  padding: 7rem 0 5rem;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
`,h=n.Ay.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 2rem;
`,g=n.Ay.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
`,f=n.Ay.iframe`
  width: 100%;
  height: 100%;
  border: none;
`,p=n.Ay.div`
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
`,x=()=>{const[e,r]=(0,o.useState)(!1),{examId:t}=(0,i.g)(),n=c[t];return n?(0,d.jsx)(m,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(h,{src:(0,l.O)(n.logo),alt:n.alt}),e?(0,d.jsxs)(p,{children:[(0,d.jsx)("h3",{children:"Unable to load the form"}),(0,d.jsx)("p",{children:"Please click the button below to open the form in a new tab"}),(0,d.jsx)(a.A,{type:"primary",href:n.formUrl,target:"_blank",rel:"noopener noreferrer",children:"Open Form"})]}):(0,d.jsx)(g,{children:(0,d.jsx)(f,{src:n.formUrl,frameBorder:"0",marginHeight:0,marginWidth:0,onError:()=>r(!0),children:"Loading\u2026"})})]})}):(0,d.jsx)(m,{children:(0,d.jsx)(s,{children:(0,d.jsx)("h1",{children:"Exam not found"})})})}}}]);
//# sourceMappingURL=269.1c0c4e12.chunk.js.map