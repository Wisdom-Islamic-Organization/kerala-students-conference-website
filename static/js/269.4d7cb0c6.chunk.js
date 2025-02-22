"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[269],{164:(e,r,n)=>{n.d(r,{A:()=>c});var t=n(9379),a=n(5043);const o={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var i=n(2172),l=function(e,r){return a.createElement(i.A,(0,t.A)((0,t.A)({},e),{},{ref:r,icon:o}))};const c=a.forwardRef(l)},7063:(e,r,n)=>{n.d(r,{A:()=>i,c:()=>o});var t=n(5043),a=t.createContext(void 0),o=function(e){var r=e.children,n=e.size;return t.createElement(a.Consumer,null,(function(e){return t.createElement(a.Provider,{value:n||e},r)}))};const i=a},8440:(e,r,n)=>{n.d(r,{A:()=>i,X:()=>o});var t=n(5043),a=t.createContext(!1),o=function(e){var r=e.children,n=e.disabled,o=t.useContext(a);return t.createElement(a.Provider,{value:null!==n&&void 0!==n?n:o},r)};const i=a},8611:(e,r,n)=>{n.r(r),n.d(r,{default:()=>x});var t=n(5043),a=n(9),o=n(1688),i=n(1774),l=n(8156);const c=JSON.parse('{"alif":{"logo":"/img/icons/alifexam.png","formUrl":"https://forms.gle/HCmT8CetiX1piTBaA","alt":"Alif Logo"},"albayan":{"logo":"/img/icons/albayan.png","formUrl":"https://forms.gle/D65MiRPXa1v5bwcEA","alt":"Albayan Logo"}}');var d=n(579);const s=(0,t.lazy)((()=>Promise.resolve().then(n.bind(n,1766)))),m=a.Ay.div`
  padding: 7rem 0 5rem;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
`,h=a.Ay.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 2rem;
`,g=a.Ay.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
`,f=a.Ay.iframe`
  width: 100%;
  height: 100%;
  border: none;
`,p=a.Ay.div`
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
`,x=()=>{const[e,r]=(0,t.useState)(!1),{examId:n}=(0,o.g)(),a=c[n];return a?(0,d.jsx)(s,{children:(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{src:(0,l.O)(a.logo),alt:a.alt}),e?(0,d.jsxs)(p,{children:[(0,d.jsx)("h3",{children:"Unable to load the form"}),(0,d.jsx)("p",{children:"Please click the button below to open the form in a new tab"}),(0,d.jsx)(i.A,{type:"primary",href:a.formUrl,target:"_blank",rel:"noopener noreferrer",children:"Open Form"})]}):(0,d.jsx)(g,{children:(0,d.jsx)(f,{src:a.formUrl,frameBorder:"0",marginHeight:0,marginWidth:0,onError:()=>r(!0),children:"Loading\u2026"})})]})}):(0,d.jsx)(s,{children:(0,d.jsx)(m,{children:(0,d.jsx)("h1",{children:"Exam not found"})})})}}}]);
//# sourceMappingURL=269.4d7cb0c6.chunk.js.map