import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as W}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function o(...s){return s.filter(Boolean).join(" ")}const r=W.forwardRef(({className:s,size:a="md",variant:i="default",...x},t)=>{const y={sm:"w-4 h-4 border-2",md:"w-6 h-6 border-2",lg:"w-8 h-8 border-3",xl:"w-12 h-12 border-4"},v={default:"border-[var(--foreground-muted)] border-t-[var(--foreground)]",primary:"border-[var(--primary)]/30 border-t-[var(--primary)]",secondary:"border-[var(--background-muted)] border-t-[var(--foreground-muted)]"};return e.jsx("div",{ref:t,role:"status","aria-label":"Carregando",className:o("inline-block rounded-full animate-spin",y[a],v[i],s),...x,children:e.jsx("span",{className:"sr-only",children:"Carregando..."})})});r.displayName="Spinner";const n=W.forwardRef(({className:s,size:a="md",text:i="Carregando...",overlay:x,fullscreen:t,...y},v)=>{const b=e.jsxs("div",{ref:v,className:o("flex flex-col items-center justify-center gap-3",s),...y,children:[e.jsx(r,{size:a==="sm"?"md":a==="md"?"lg":"xl",variant:"primary"}),i&&e.jsx("p",{className:o("text-[var(--foreground-muted)]",a==="sm"&&"text-sm",a==="md"&&"text-base",a==="lg"&&"text-lg"),children:i})]});return x||t?e.jsx("div",{className:o("flex items-center justify-center","bg-[var(--background)]/80 backdrop-blur-sm",t?"fixed inset-0 z-50":"absolute inset-0 z-10"),children:b}):b});n.displayName="Loading";const f=({className:s})=>e.jsx("div",{className:o("flex items-center gap-1",s),children:[0,1,2].map(a=>e.jsx("div",{className:"w-2 h-2 rounded-full bg-[var(--primary)] animate-bounce",style:{animationDelay:`${a*.1}s`}},a))});f.displayName="LoadingDots";r.__docgenInfo={description:`Spinner component following SmartSenior Design System

Loading indicator with accessible announcement`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};n.__docgenInfo={description:"Loading component with text label",methods:[],displayName:"Loading",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Carregando...'",computed:!1}},overlay:{required:!1,tsType:{name:"boolean"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"LoadingDots",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/Spinner",component:r,tags:["autodocs"],parameters:{layout:"centered"}},d={args:{}},l={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"xl"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx(r,{variant:"default",size:"lg"}),e.jsx(r,{variant:"primary",size:"lg"}),e.jsx(r,{variant:"secondary",size:"lg"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(n,{size:"sm",text:"Carregando..."}),e.jsx(n,{size:"md",text:"Processando dados..."}),e.jsx(n,{size:"lg",text:"Aguarde um momento..."})]})},c={render:()=>e.jsxs("div",{style:{position:"relative",width:"300px",height:"200px",border:"1px solid var(--border)",borderRadius:"8px"},children:[e.jsx("p",{style:{padding:"1rem"},children:"Conteúdo abaixo do overlay"}),e.jsx(n,{overlay:!0,text:"Salvando..."})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{children:"Carregando"}),e.jsx(f,{})]})},g={render:()=>e.jsxs("button",{disabled:!0,style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1.5rem",background:"var(--primary)",color:"var(--primary-foreground)",border:"none",borderRadius:"8px",opacity:.7},children:[e.jsx(r,{size:"sm",variant:"secondary"}),"Processando..."]})};var j,h,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {}
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var z,L,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...(w=(L=l.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var N,C,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  }}>
      <Spinner variant="default" size="lg" />
      <Spinner variant="primary" size="lg" />
      <Spinner variant="secondary" size="lg" />
    </div>
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,T,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Loading size="sm" text="Carregando..." />
      <Loading size="md" text="Processando dados..." />
      <Loading size="lg" text="Aguarde um momento..." />
    </div>
}`,...(A=(T=p.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var _,q,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '300px',
    height: '200px',
    border: '1px solid var(--border)',
    borderRadius: '8px'
  }}>
      <p style={{
      padding: '1rem'
    }}>Conteúdo abaixo do overlay</p>
      <Loading overlay text="Salvando..." />
    </div>
}`,...(R=(q=c.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var k,V,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>
      <span>Carregando</span>
      <LoadingDots />
    </div>
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var B,E,O;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <button disabled style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
    border: 'none',
    borderRadius: '8px',
    opacity: 0.7
  }}>
      <Spinner size="sm" variant="secondary" />
      Processando...
    </button>
}`,...(O=(E=g.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const K=["Default","AllSizes","AllVariants","LoadingWithText","LoadingOverlay","DotsAnimation","ButtonLoading"];export{l as AllSizes,m as AllVariants,g as ButtonLoading,d as Default,u as DotsAnimation,c as LoadingOverlay,p as LoadingWithText,K as __namedExportsOrder,J as default};
