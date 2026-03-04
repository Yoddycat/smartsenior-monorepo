import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as Y}from"./index-Dx_1l3Sb.js";import{c as Z}from"./index-CRGxjvZy.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function $(...m){return m.filter(Boolean).join(" ")}const ee=Z(["inline-flex items-center justify-center","rounded-full px-3 py-1","text-sm font-medium","transition-colors"],{variants:{variant:{default:"bg-[var(--primary)] text-[var(--primary-foreground)]",secondary:"bg-[var(--background-muted)] text-[var(--foreground)] border border-[var(--border)]",accent:"bg-[var(--accent)] text-[var(--accent-foreground)]",success:"bg-[var(--success)] text-[var(--success-foreground)]",warning:"bg-[var(--warning)] text-[var(--warning-foreground)]",error:"bg-[var(--error)] text-[var(--error-foreground)]",info:"bg-[var(--info)] text-[var(--info-foreground)]",outline:"bg-transparent text-[var(--foreground)] border border-[var(--border)]"},size:{sm:"text-xs px-2 py-0.5",md:"text-sm px-3 py-1",lg:"text-base px-4 py-1.5"}},defaultVariants:{variant:"default",size:"md"}}),r=Y.forwardRef(({className:m,variant:J,size:K,...Q},X)=>e.jsx("span",{ref:X,className:$(ee({variant:J,size:K}),m),...Q}));r.displayName="Badge";r.__docgenInfo={description:`Badge component following SmartSenior Design System

Used for status indicators, labels, and tags`,methods:[],displayName:"Badge",composes:["VariantProps"]};const ie={title:"Components/Badge",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","secondary","accent","success","warning","error","info","outline"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"Badge"}},s={args:{variant:"secondary",children:"Secundário"}},n={args:{variant:"accent",children:"Destaque"}},t={args:{variant:"success",children:"Sucesso"}},i={args:{variant:"warning",children:"Aviso"}},o={args:{variant:"error",children:"Erro"}},c={args:{variant:"info",children:"Info"}},d={args:{variant:"outline",children:"Outline"}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"accent",children:"Accent"}),e.jsx(r,{variant:"success",children:"Success"}),e.jsx(r,{variant:"warning",children:"Warning"}),e.jsx(r,{variant:"error",children:"Error"}),e.jsx(r,{variant:"info",children:"Info"}),e.jsx(r,{variant:"outline",children:"Outline"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsx(r,{variant:"success",children:"Ativo"}),e.jsx("span",{children:"Conta verificada e ativa"})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsx(r,{variant:"warning",children:"Pendente"}),e.jsx("span",{children:"Aguardando aprovação"})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsx(r,{variant:"error",children:"Bloqueado"}),e.jsx("span",{children:"Acesso suspenso"})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsx(r,{variant:"info",children:"Novo"}),e.jsx("span",{children:"Recurso recém-lançado"})]})]})};var u,v,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,y,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secundário'
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var B,S,j;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Destaque'
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,I,A;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Sucesso'
  }
}`,...(A=(I=t.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var w,z,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Aviso'
  }
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var D,O,W;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Erro'
  }
}`,...(W=(O=o.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var N,V,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info'
  }
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var R,_,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var P,L,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap'
  }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var k,T,U;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center'
  }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(U=(T=g.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var F,G,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div style={{
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    }}>
        <Badge variant="success">Ativo</Badge>
        <span>Conta verificada e ativa</span>
      </div>
      <div style={{
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    }}>
        <Badge variant="warning">Pendente</Badge>
        <span>Aguardando aprovação</span>
      </div>
      <div style={{
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    }}>
        <Badge variant="error">Bloqueado</Badge>
        <span>Acesso suspenso</span>
      </div>
      <div style={{
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    }}>
        <Badge variant="info">Novo</Badge>
        <span>Recurso recém-lançado</span>
      </div>
    </div>
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const oe=["Default","Secondary","Accent","Success","Warning","Error","Info","Outline","AllVariants","AllSizes","StatusExamples"];export{n as Accent,g as AllSizes,l as AllVariants,a as Default,o as Error,c as Info,d as Outline,s as Secondary,p as StatusExamples,t as Success,i as Warning,oe as __namedExportsOrder,ie as default};
