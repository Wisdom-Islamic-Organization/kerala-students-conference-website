"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[291],{164:(e,t,i)=>{i.d(t,{A:()=>c});var r=i(9379),n=i(5043);const a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var o=i(2172),s=function(e,t){return n.createElement(o.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:a}))};const c=n.forwardRef(s)},291:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var r=i(5043),n=i(7419),a=i(1645),o=i(3614),s=i(3910),c=i(7929),l=i(8156),d=i(5472),p=i(2387),h=i(164),u=i(9),g=i(579);const x=u.Ay.section`
  padding: 4rem 0;
  background: #fff;
`,m=u.Ay.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #18216d;
`,f=u.Ay.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`,y=u.Ay.div`
  display: ${e=>e.active?"block":"none"};
  transition: all 0.3s ease-in-out;
`,b=u.Ay.button`
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
`,j=u.Ay.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,w=u.Ay.div`
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
`,v=u.Ay.p`
  text-align: center;
  margin-top: 1rem;
  color: #18216d;
  font-size: 1.1rem;
`,A=e=>{let{title:t}=e;const[i,u]=(0,r.useState)(0),[A,k]=(0,r.useState)([]),[z,C]=(0,r.useState)(!0);(0,r.useEffect)((()=>{(async()=>{try{const e=(0,d.P)((0,d.rJ)(p.db,"news"),(0,d.My)("timestamp","desc")),t=(await(0,d.GG)(e)).docs.map((e=>({id:e.id,...e.data()})));k(t)}catch(e){console.error("Error fetching news:",e)}finally{C(!1)}})()}),[]);const S=e=>{switch(e.type){case"youtube":return(0,g.jsx)(w,{children:(0,g.jsx)("iframe",{src:e.url,title:e.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})});case"image":return(0,g.jsx)("img",{src:(0,l.O)(e.url),alt:e.title,style:{width:"100%",height:"auto",maxHeight:"400px",objectFit:"cover"}});case"facebook":case"instagram":return(0,g.jsx)(w,{children:(0,g.jsx)("iframe",{src:e.url,title:e.title,allowTransparency:!0,allow:"encrypted-media"})})}};return z?(0,g.jsx)(x,{children:(0,g.jsx)(n.A,{justify:"center",align:"middle",children:(0,g.jsx)(a.A,{children:(0,g.jsx)(h.A,{style:{fontSize:24}})})})}):(0,g.jsx)(x,{children:(0,g.jsx)(o.zW,{direction:"up",triggerOnce:!0,children:(0,g.jsx)(n.A,{justify:"center",align:"middle",children:(0,g.jsxs)(a.A,{span:24,children:[(0,g.jsx)(m,{children:t}),(0,g.jsxs)(f,{children:[(0,g.jsx)(b,{onClick:()=>{u((e=>0===e?A.length-1:e-1))},position:"left",children:(0,g.jsx)(s.g,{icon:c.Wzs})}),A.map(((e,t)=>(0,g.jsxs)(y,{active:t===i,children:[(0,g.jsx)(j,{children:S(e)}),"image"===e.type&&e.description&&(0,g.jsx)(v,{children:e.description})]},t))),(0,g.jsx)(b,{onClick:()=>{u((e=>e===A.length-1?0:e+1))},position:"right",children:(0,g.jsx)(s.g,{icon:c.XkK})})]})]})})})})}}}]);
//# sourceMappingURL=291.f7a0bdd6.chunk.js.map