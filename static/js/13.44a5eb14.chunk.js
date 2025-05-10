"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[13],{7013:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var n=i(5043),s=i(9281),o=i(5639),r=i(9);const a=r.Ay.div`
  position: relative;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding-top: 0;
  box-sizing: border-box;
`,d=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,c=r.Ay.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
`,l=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Adjust opacity here
`,f=r.Ay.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 60px 20px 0;
  max-width: 800px;
  margin: 0 auto;
`,m=r.Ay.h1`
  font-family: "ML TT Thunchan", "Manjari", "Noto Sans Malayalam", system-ui;
  color: #ffffff;
  font-size: 4rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`,h=r.Ay.p`
  font-family: "ML TT Thunchan", "Manjari", "Noto Sans Malayalam", system-ui;
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`,x=r.Ay.p`
  font-family: "ML TT Thunchan", "Manjari", "Noto Sans Malayalam", system-ui;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`,p=r.Ay.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  button {
    color: #fff;
    border: ${e=>"transparent"===e.color?"2px solid #fff":"none"};
    
    &:hover {
      color: #fff;
      opacity: 0.9;
    }
  }
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    
    button {
      width: 200px;
    }
  }
`,u=r.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1.5rem 0;
  
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`,y=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  min-width: 80px;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    min-width: 60px;
  }
`,g=r.Ay.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.25rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`,w=r.Ay.div`
  font-size: 0.875rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;var j=i(8156),b=i(579);const v=(0,s.C)()((e=>{let{title:t,subtitle:i,description:s,buttons:r,backgroundImages:v}=e;const[z,A]=(0,n.useState)(0),[M,T]=(0,n.useState)({days:0,hours:0,minutes:0,seconds:0});(0,n.useEffect)((()=>{const e=setInterval((()=>{A((e=>e===v.length-1?0:e+1))}),3e3);return()=>clearInterval(e)}),[v.length]),(0,n.useEffect)((()=>{const e=new Date("2025-05-11T10:30:00Z"),t=setInterval((()=>{const i=new Date,n=e.getTime()-i.getTime();if(n<=0)return T({days:0,hours:0,minutes:0,seconds:0}),void clearInterval(t);T({days:Math.floor(n/864e5),hours:Math.floor(n%864e5/36e5),minutes:Math.floor(n%36e5/6e4),seconds:Math.floor(n%6e4/1e3)})}),1e3);return()=>clearInterval(t)}),[]);return(0,b.jsxs)(a,{id:"hero",children:[(0,b.jsx)(d,{children:v.map(((e,t)=>(0,b.jsx)(c,{src:(0,j.O)(e),style:{opacity:t===z?1:0,transition:"opacity 1s ease-in-out"}},t)))}),(0,b.jsx)(l,{}),(0,b.jsxs)(f,{children:[(0,b.jsx)(m,{children:t}),i&&(0,b.jsx)(x,{children:i}),s&&(0,b.jsx)(h,{children:s}),(0!==M.days||0!==M.hours||0!==M.minutes||0!==M.seconds)&&(0,b.jsxs)(u,{children:[(0,b.jsxs)(y,{children:[(0,b.jsx)(g,{children:M.days}),(0,b.jsx)(w,{children:"Days"})]}),(0,b.jsxs)(y,{children:[(0,b.jsx)(g,{children:M.hours}),(0,b.jsx)(w,{children:"Hours"})]}),(0,b.jsxs)(y,{children:[(0,b.jsx)(g,{children:M.minutes}),(0,b.jsx)(w,{children:"Minutes"})]}),(0,b.jsxs)(y,{children:[(0,b.jsx)(g,{children:M.seconds}),(0,b.jsx)(w,{children:"Seconds"})]})]}),(0,b.jsx)(p,{children:r.map(((e,t)=>(0,b.jsx)(o.$,{color:e.color,onClick:()=>(e=>{if(e.startsWith("/"))window.location.hash=e;else if(e.startsWith("#")){const t=document.getElementById(e.substring(1));if(t){const e=80,i=t.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:i,behavior:"smooth"})}}})(e.link),children:e.title},t)))})]})]})}))}}]);
//# sourceMappingURL=13.44a5eb14.chunk.js.map