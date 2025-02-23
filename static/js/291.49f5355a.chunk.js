"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[291],{164:(e,t,i)=>{i.d(t,{A:()=>c});var r=i(9379),n=i(5043);const o={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var a=i(2172),s=function(e,t){return n.createElement(a.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:o}))};const c=n.forwardRef(s)},291:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var r=i(5043),n=i(7419),o=i(1645),a=i(3614),s=i(3910),c=i(7929),l=i(8156),d=i(5472),h=i(2387),p=i(164),g=i(9),u=i(579);const x=g.Ay.section`
  padding: 4rem 0;
  background: #fff;
`,f=g.Ay.h3`
  text-align: center;
  margin: 1rem 0;
  color: #18216d;
  font-size: 1.5rem;
`,m=g.Ay.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`,j=g.Ay.div`
  display: ${e=>e.active?"block":"none"};
  transition: all 0.3s ease-in-out;
`,y=g.Ay.button`
  position: absolute;
  top: 50%;
  ${e=>e.position}: 0;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`,b=g.Ay.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
`,w=g.Ay.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`,v=g.Ay.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 0 0 8px 8px;
  max-width: 800px;
  margin: 0 auto;
`,A=g.Ay.p`
  text-align: center;
  margin: 1rem auto;
  color: #18216d;
  font-size: 1.1rem;
  max-width: 90%;
  line-height: 1.6;
`,k=g.Ay.a`
  display: inline-block;
  text-align: center;
  margin-top: 0.5rem;
  color: #1890ff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,z=(0,g.Ay)(v)`
  height: 400px; // Match typical 16:9 video height
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  margin: 0;
  max-width: 100%;
`,C=e=>{let{title:t}=e;const[i,g]=(0,r.useState)(0),[C,S]=(0,r.useState)([]),[M,_]=(0,r.useState)(!0);(0,r.useEffect)((()=>{(async()=>{try{const e=(0,d.P)((0,d.rJ)(h.db,"news"),(0,d.My)("timestamp","desc")),t=(await(0,d.GG)(e)).docs.map((e=>({id:e.id,...e.data()})));S(t)}catch(e){console.error("Error fetching news:",e)}finally{_(!1)}})()}),[]);const E=e=>{switch(e.type){case"youtube":return(0,u.jsx)(w,{children:(0,u.jsx)("iframe",{src:e.url,title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})});case"facebook":case"instagram":return(0,u.jsxs)(z,{children:[(0,u.jsx)(f,{children:e.title}),e.description&&(0,u.jsx)(A,{children:e.description}),e.url&&(0,u.jsxs)(k,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:["View on ",e.type]})]});case"image":return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{src:(0,l.O)(e.url),alt:e.title,style:{width:"100%",height:"auto",maxHeight:"400px",objectFit:"cover"}}),(0,u.jsxs)(v,{children:[(0,u.jsx)(f,{children:e.title}),e.description&&(0,u.jsx)(A,{children:e.description}),e.url&&(0,u.jsx)(k,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"Read More"})]})]})}};return M?(0,u.jsx)(x,{children:(0,u.jsx)(n.A,{justify:"center",align:"middle",children:(0,u.jsx)(o.A,{children:(0,u.jsx)(p.A,{style:{fontSize:24}})})})}):(0,u.jsx)(x,{children:(0,u.jsx)(a.zW,{direction:"up",triggerOnce:!0,children:(0,u.jsx)(n.A,{justify:"center",align:"middle",children:(0,u.jsxs)(o.A,{span:24,children:[(0,u.jsx)(f,{children:t}),(0,u.jsxs)(m,{children:[(0,u.jsx)(y,{onClick:()=>{g((e=>0===e?C.length-1:e-1))},position:"left",children:(0,u.jsx)(s.g,{icon:c.Wzs})}),C.map(((e,t)=>(0,u.jsx)(j,{active:t===i,children:(0,u.jsx)(b,{children:E(e)})},t))),(0,u.jsx)(y,{onClick:()=>{g((e=>e===C.length-1?0:e+1))},position:"right",children:(0,u.jsx)(s.g,{icon:c.XkK})})]})]})})})})}}}]);
//# sourceMappingURL=291.49f5355a.chunk.js.map