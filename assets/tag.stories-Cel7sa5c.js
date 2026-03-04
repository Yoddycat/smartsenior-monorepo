import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as D}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function p(...s){return s.filter(Boolean).join(" ")}const r=D.forwardRef(({className:s,variant:g="default",size:a="md",removable:v,onRemove:n,icon:x,children:V,..._},L)=>{const J={default:"bg-[var(--background-muted)] text-[var(--foreground)] border-[var(--border)]",primary:"bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/30",secondary:"bg-[var(--background-muted)] text-[var(--foreground-muted)] border-[var(--border)]",success:"bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/30",warning:"bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/30",error:"bg-[var(--error)]/10 text-[var(--error)] border-[var(--error)]/30",info:"bg-[var(--info)]/10 text-[var(--info)] border-[var(--info)]/30"},M={sm:"text-xs px-2 py-0.5 gap-1",md:"text-sm px-2.5 py-1 gap-1.5",lg:"text-base px-3 py-1.5 gap-2"};return e.jsxs("span",{ref:L,className:p("inline-flex items-center font-medium rounded-full border",J[g],M[a],s),..._,children:[x&&e.jsx("span",{className:"shrink-0",children:x}),V,v&&e.jsx("button",{onClick:Q=>{Q.stopPropagation(),n==null||n()},className:p("shrink-0 rounded-full hover:bg-black/10 dark:hover:bg-white/10","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]","transition-colors",a==="sm"&&"p-0.5 -mr-1",a==="md"&&"p-0.5 -mr-1",a==="lg"&&"p-1 -mr-1"),"aria-label":"Remover",children:e.jsxs("svg",{className:p(a==="sm"&&"w-3 h-3",a==="md"&&"w-3.5 h-3.5",a==="lg"&&"w-4 h-4"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})});r.displayName="Tag";const u=D.forwardRef(({className:s,gap:g="sm",...a},v)=>{const n={sm:"gap-1",md:"gap-2",lg:"gap-3"};return e.jsx("div",{ref:v,className:p("flex flex-wrap",n[g],s),...a})});u.displayName="TagGroup";r.__docgenInfo={description:`Tag/Chip component following SmartSenior Design System

Label tag with optional remove action`,methods:[],displayName:"Tag",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},removable:{required:!1,tsType:{name:"boolean"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"TagGroup",props:{gap:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}}}};const U={title:"Components/Tag",component:r,tags:["autodocs"],parameters:{layout:"centered"}},i={args:{children:"Tag"}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"success",children:"Success"}),e.jsx(r,{variant:"warning",children:"Warning"}),e.jsx(r,{variant:"error",children:"Error"}),e.jsx(r,{variant:"info",children:"Info"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{size:"sm",children:"Pequena"}),e.jsx(r,{size:"md",children:"Média"}),e.jsx(r,{size:"lg",children:"Grande"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{removable:!0,onRemove:()=>alert("Removido: React"),children:"React"}),e.jsx(r,{removable:!0,onRemove:()=>alert("Removido: TypeScript"),children:"TypeScript"}),e.jsx(r,{removable:!0,onRemove:()=>alert("Removido: Tailwind"),children:"Tailwind"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{variant:"success",icon:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),children:"Verificado"}),e.jsx(r,{variant:"warning",icon:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),children:"Pendente"}),e.jsx(r,{variant:"error",icon:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),children:"Erro"})]})},c={render:()=>e.jsxs(u,{gap:"sm",children:[e.jsx(r,{variant:"primary",removable:!0,children:"JavaScript"}),e.jsx(r,{variant:"primary",removable:!0,children:"React"}),e.jsx(r,{variant:"primary",removable:!0,children:"Node.js"}),e.jsx(r,{variant:"primary",removable:!0,children:"TypeScript"}),e.jsx(r,{variant:"primary",removable:!0,children:"GraphQL"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(r,{variant:"success",size:"sm",children:"Ativo"}),e.jsx("span",{children:"Conta verificada e funcionando"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(r,{variant:"warning",size:"sm",children:"Pendente"}),e.jsx("span",{children:"Aguardando aprovação"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(r,{variant:"error",size:"sm",children:"Bloqueado"}),e.jsx("span",{children:"Acesso suspenso"})]})]})};var y,f,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,j,b;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  }}>
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </div>
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,S,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
      <Tag size="sm">Pequena</Tag>
      <Tag size="md">Média</Tag>
      <Tag size="lg">Grande</Tag>
    </div>
}`,...(R=(S=o.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var k,C,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <Tag removable onRemove={() => alert('Removido: React')}>React</Tag>
      <Tag removable onRemove={() => alert('Removido: TypeScript')}>TypeScript</Tag>
      <Tag removable onRemove={() => alert('Removido: Tailwind')}>Tailwind</Tag>
    </div>
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var N,W,G;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <Tag variant="success" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>}>
        Verificado
      </Tag>
      <Tag variant="warning" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>}>
        Pendente
      </Tag>
      <Tag variant="error" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>}>
        Erro
      </Tag>
    </div>
}`,...(G=(W=d.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var q,z,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <TagGroup gap="sm">
      <Tag variant="primary" removable>JavaScript</Tag>
      <Tag variant="primary" removable>React</Tag>
      <Tag variant="primary" removable>Node.js</Tag>
      <Tag variant="primary" removable>TypeScript</Tag>
      <Tag variant="primary" removable>GraphQL</Tag>
    </TagGroup>
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,E,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <Tag variant="success" size="sm">Ativo</Tag>
        <span>Conta verificada e funcionando</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <Tag variant="warning" size="sm">Pendente</Tag>
        <span>Aguardando aprovação</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <Tag variant="error" size="sm">Bloqueado</Tag>
        <span>Acesso suspenso</span>
      </div>
    </div>
}`,...(P=(E=m.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const X=["Default","AllVariants","AllSizes","Removable","WithIcons","TagGroupExample","StatusTags"];export{o as AllSizes,t as AllVariants,i as Default,l as Removable,m as StatusTags,c as TagGroupExample,d as WithIcons,X as __namedExportsOrder,U as default};
