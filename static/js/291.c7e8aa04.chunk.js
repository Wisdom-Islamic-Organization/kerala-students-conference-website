"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[291],{291:(e,i,t)=>{t.r(i),t.d(i,{default:()=>w});var r=t(5043),o=t(7419),n=t(1645),a=t(3614),s=t(3910),l=t(7929),c=t(8156),d=t(9),p=t(579);const h=d.Ay.section`
  padding: 4rem 0;
  background: #fff;
`,u=d.Ay.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #18216d;
`,g=d.Ay.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`,x=d.Ay.div`
  display: ${e=>e.active?"block":"none"};
  transition: all 0.3s ease-in-out;
`,m=d.Ay.button`
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
`,b=d.Ay.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,y=d.Ay.div`
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
`,j=d.Ay.p`
  text-align: center;
  margin-top: 1rem;
  color: #18216d;
  font-size: 1.1rem;
`,w=e=>{let{title:i,news:t}=e;const[d,w]=(0,r.useState)(0),f=e=>{switch(e.type){case"youtube":return(0,p.jsx)(y,{children:(0,p.jsx)("iframe",{src:e.url,title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})});case"image":return(0,p.jsx)("img",{src:(0,c.O)(e.url),alt:e.title,style:{width:"100%",height:"auto",maxHeight:"400px",objectFit:"cover"}});case"facebook":case"instagram":return(0,p.jsx)(y,{children:(0,p.jsx)("iframe",{src:e.url,title:e.title,allowTransparency:!0,allow:"encrypted-media"})})}};return(0,p.jsx)(h,{children:(0,p.jsx)(a.zW,{direction:"up",triggerOnce:!0,children:(0,p.jsx)(o.A,{justify:"center",align:"middle",children:(0,p.jsxs)(n.A,{span:24,children:[(0,p.jsx)(u,{children:i}),(0,p.jsxs)(g,{children:[(0,p.jsx)(m,{onClick:()=>{w((e=>0===e?t.length-1:e-1))},position:"left",children:(0,p.jsx)(s.g,{icon:l.Wzs})}),t.map(((e,i)=>(0,p.jsxs)(x,{active:i===d,children:[(0,p.jsx)(b,{children:f(e)}),"image"===e.type&&e.description&&(0,p.jsx)(j,{children:e.description})]},i))),(0,p.jsx)(m,{onClick:()=>{w((e=>e===t.length-1?0:e+1))},position:"right",children:(0,p.jsx)(s.g,{icon:l.XkK})})]})]})})})})}}}]);
//# sourceMappingURL=291.c7e8aa04.chunk.js.map