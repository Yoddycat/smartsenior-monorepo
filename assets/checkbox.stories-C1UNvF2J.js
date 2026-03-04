import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function u(...d){return d.filter(Boolean).join(" ")}const r=g.forwardRef(({className:d,label:l,description:p,error:z,disabled:m,id:B,...G},L)=>{const b=B||g.useId();return e.jsxs("div",{className:u("flex items-start gap-3",d),children:[e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx("input",{type:"checkbox",ref:L,id:b,disabled:m,className:u("peer appearance-none shrink-0","w-6 h-6 rounded-md border-2","border-[var(--border)] bg-[var(--background)]","checked:bg-[var(--primary)] checked:border-[var(--primary)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50","transition-all duration-200",z&&"border-[var(--error)]"),...G}),e.jsx("svg",{className:"absolute w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-[var(--primary-foreground)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})]}),(l||p)&&e.jsxs("div",{className:"flex flex-col gap-0.5",children:[l&&e.jsx("label",{htmlFor:b,className:u("text-base font-medium leading-tight cursor-pointer","text-[var(--foreground)]",m&&"cursor-not-allowed opacity-50"),children:l}),p&&e.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:p})]})]})});r.displayName="Checkbox";r.__docgenInfo={description:`Checkbox component following SmartSenior Design System

Accessible checkbox with large touch target for senior users`,methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const M={title:"Components/Checkbox",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},error:{control:"boolean"}}},o={args:{label:"Aceito os termos de uso"}},a={args:{label:"Receber notificações",description:"Receba atualizações por email sobre novidades e ofertas."}},s={args:{label:"Item selecionado",defaultChecked:!0}},t={args:{label:"Opção desabilitada",disabled:!0}},i={args:{label:"Opção desabilitada marcada",disabled:!0,defaultChecked:!0}},c={args:{label:"Campo obrigatório",error:!0}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{label:"Opção 1",description:"Descrição da primeira opção"}),e.jsx(r,{label:"Opção 2",description:"Descrição da segunda opção",defaultChecked:!0}),e.jsx(r,{label:"Opção 3",description:"Descrição da terceira opção"})]})};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Aceito os termos de uso'
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,v,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Receber notificações',
    description: 'Receba atualizações por email sobre novidades e ofertas.'
  }
}`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var y,j,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Item selecionado',
    defaultChecked: true
  }
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var O,S,N;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Opção desabilitada',
    disabled: true
  }
}`,...(N=(S=t.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,R,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Opção desabilitada marcada',
    disabled: true,
    defaultChecked: true
  }
}`,...(E=(R=i.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var I,T,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Campo obrigatório',
    error: true
  }
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var q,A,W;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Checkbox label="Opção 1" description="Descrição da primeira opção" />
      <Checkbox label="Opção 2" description="Descrição da segunda opção" defaultChecked />
      <Checkbox label="Opção 3" description="Descrição da terceira opção" />
    </div>
}`,...(W=(A=n.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const P=["Default","WithDescription","Checked","Disabled","DisabledChecked","Error","CheckboxGroup"];export{n as CheckboxGroup,s as Checked,o as Default,t as Disabled,i as DisabledChecked,c as Error,a as WithDescription,P as __namedExportsOrder,M as default};
