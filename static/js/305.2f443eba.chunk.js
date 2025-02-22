"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[305],{6305:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var i=a(5043),r=a(1688),n=a(289),d=a(5627),l=a(8174),t=a(1774),p=a(9),c=a(8213),h=a(579);const o=p.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding-top: 100px;
`,m=(0,p.Ay)(n.A)`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
`,u=()=>{const[e,s]=(0,i.useState)(!1),{signIn:a}=(0,c.D)(),p=(0,r.W6)();return(0,h.jsx)(o,{children:(0,h.jsxs)(m,{onFinish:async e=>{s(!0);try{await a(e.email,e.password),p.push("/admin")}catch(i){d.Ay.error("Invalid credentials")}finally{s(!1)}},children:[(0,h.jsx)(n.A.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"}],children:(0,h.jsx)(l.A,{placeholder:"Email"})}),(0,h.jsx)(n.A.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,h.jsx)(l.A.Password,{placeholder:"Password"})}),(0,h.jsx)(n.A.Item,{children:(0,h.jsx)(t.A,{type:"primary",htmlType:"submit",loading:e,block:!0,children:"Login"})})]})})}}}]);
//# sourceMappingURL=305.2f443eba.chunk.js.map