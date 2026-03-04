import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as L}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function b(...a){return a.filter(Boolean).join(" ")}const r=L.forwardRef(({className:a,type:m="text",error:H,leftElement:o,rightElement:s,...f},g)=>{const h=["flex h-12 w-full rounded-md border bg-[var(--background)]","px-4 py-3 text-base text-[var(--foreground)]","placeholder:text-[var(--foreground-subtle)]","transition-colors duration-150","focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)]","focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--focus-ring-offset)]","disabled:cursor-not-allowed disabled:opacity-50","file:border-0 file:bg-transparent file:text-sm file:font-medium"],x=H?"border-[var(--error)] focus-visible:ring-[var(--error)]":"border-[var(--border)] focus-visible:border-[var(--primary)]";return o||s?e.jsxs("div",{className:"relative flex items-center w-full",children:[o&&e.jsx("div",{className:"absolute left-3 flex items-center pointer-events-none text-[var(--foreground-muted)]",children:o}),e.jsx("input",{type:m,className:b(...h,x,o&&"pl-10",s&&"pr-10",a),ref:g,...f}),s&&e.jsx("div",{className:"absolute right-3 flex items-center text-[var(--foreground-muted)]",children:s})]}):e.jsx("input",{type:m,className:b(...h,x,a),ref:g,...f})});r.displayName="Input";r.__docgenInfo={description:`Input component following SmartSenior Design System

Features:
- Senior-optimized sizing (larger height, bigger text)
- High contrast focus states
- Error state support
- Optional left/right elements`,methods:[],displayName:"Input",props:{error:{required:!1,tsType:{name:"boolean"},description:"Error state"},leftElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Left icon/element"},rightElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right icon/element"},type:{defaultValue:{value:'"text"',computed:!1},required:!1}}};const U={title:"Components/Input",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["text","email","password","number","tel","search"]},error:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"}}},t={args:{placeholder:"Digite seu nome..."}},l={args:{defaultValue:"João da Silva"}},i={args:{type:"email",placeholder:"seu@email.com"}},n={args:{type:"password",placeholder:"Sua senha"}},d={args:{error:!0,defaultValue:"email-invalido",placeholder:"Digite seu email"}},c={args:{disabled:!0,defaultValue:"Campo desabilitado"}},u={render:()=>e.jsx(r,{placeholder:"Buscar...",leftElement:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]})})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{placeholder:"Normal"}),e.jsx(r,{placeholder:"Com valor",defaultValue:"Texto digitado"}),e.jsx(r,{placeholder:"Com erro",error:!0,defaultValue:"Valor inválido"}),e.jsx(r,{placeholder:"Desabilitado",disabled:!0})]})};var v,y,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Digite seu nome...'
  }
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,j,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultValue: 'João da Silva'
  }
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var D,I,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'seu@email.com'
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var C,R,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Sua senha'
  }
}`,...(E=(R=n.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var T,W,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    error: true,
    defaultValue: 'email-invalido',
    placeholder: 'Digite seu email'
  }
}`,...(k=(W=d.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var B,q,_;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Campo desabilitado'
  }
}`,...(_=(q=c.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var z,A,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Input placeholder="Buscar..." leftElement={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>} />
}`,...(J=(A=u.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var O,P,F;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Input placeholder="Normal" />
      <Input placeholder="Com valor" defaultValue="Texto digitado" />
      <Input placeholder="Com erro" error defaultValue="Valor inválido" />
      <Input placeholder="Desabilitado" disabled />
    </div>
}`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const X=["Default","WithValue","Email","Password","Error","Disabled","WithIcon","AllStates"];export{p as AllStates,t as Default,c as Disabled,i as Email,d as Error,n as Password,u as WithIcon,l as WithValue,X as __namedExportsOrder,U as default};
