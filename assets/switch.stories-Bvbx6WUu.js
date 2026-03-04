import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function o(...r){return r.filter(Boolean).join(" ")}const s=x.forwardRef(({className:r,label:a,description:t,size:u="md",disabled:p,id:B,...h},G)=>{const g=B||x.useId(),f={sm:{track:"w-9 h-5",thumb:"w-4 h-4",translate:"translate-x-4"},md:{track:"w-11 h-6",thumb:"w-5 h-5",translate:"translate-x-5"},lg:{track:"w-14 h-8",thumb:"w-7 h-7",translate:"translate-x-6"}}[u];return e.jsxs("div",{className:o("flex items-start gap-3",r),children:[e.jsxs("div",{className:"relative inline-flex items-center",children:[e.jsx("input",{type:"checkbox",ref:G,id:g,disabled:p,className:"peer sr-only",...h}),e.jsx("div",{className:o("rounded-full transition-colors duration-200 cursor-pointer","bg-[var(--background-muted)] peer-checked:bg-[var(--primary)]","peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--focus-ring)] peer-focus-visible:ring-offset-2","peer-disabled:cursor-not-allowed peer-disabled:opacity-50",f.track),onClick:()=>{const b=document.getElementById(g);b&&!p&&b.click()},children:e.jsx("div",{className:o("absolute top-0.5 left-0.5 rounded-full bg-white shadow-sm transition-transform duration-200","peer-checked:bg-white",f.thumb,"peer-checked:"+f.translate),style:{transform:h.checked||h.defaultChecked?`translateX(${u==="sm"?"16px":u==="md"?"20px":"24px"})`:"translateX(0)"}})})]}),(a||t)&&e.jsxs("div",{className:"flex flex-col gap-0.5",children:[a&&e.jsx("label",{htmlFor:g,className:o("text-base font-medium leading-tight cursor-pointer","text-[var(--foreground)]",p&&"cursor-not-allowed opacity-50"),children:a}),t&&e.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:t})]})]})});s.displayName="Switch";s.__docgenInfo={description:`Switch component following SmartSenior Design System

Toggle switch with large touch target for senior users`,methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const V={title:"Components/Switch",component:s,tags:["autodocs"],parameters:{layout:"centered"}},l={args:{label:"Ativar notificações"}},i={args:{label:"Modo escuro",description:"Alterna entre temas claro e escuro"}},c={args:{label:"Ativado",defaultChecked:!0}},n={args:{label:"Opção desabilitada",disabled:!0}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(s,{size:"sm",label:"Pequeno"}),e.jsx(s,{size:"md",label:"Médio"}),e.jsx(s,{size:"lg",label:"Grande"})]})},m={render:()=>{const[r,a]=x.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{label:"Modo avião",checked:r,onChange:t=>a(t.target.checked)}),e.jsxs("p",{children:["Estado: ",r?"Ativado":"Desativado"]})]})}};var v,k,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Ativar notificações'
  }
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var y,S,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Modo escuro',
    description: 'Alterna entre temas claro e escuro'
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,D,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Ativado',
    defaultChecked: true
  }
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,N,E;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Opção desabilitada',
    disabled: true
  }
}`,...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var M,q,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <Switch size="sm" label="Pequeno" />
      <Switch size="md" label="Médio" />
      <Switch size="lg" label="Grande" />
    </div>
}`,...(I=(q=d.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var O,T,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Switch label="Modo avião" checked={checked} onChange={e => setChecked(e.target.checked)} />
        <p>Estado: {checked ? 'Ativado' : 'Desativado'}</p>
      </div>;
  }
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const $=["Default","WithDescription","Checked","Disabled","AllSizes","Controlled"];export{d as AllSizes,c as Checked,m as Controlled,l as Default,n as Disabled,i as WithDescription,$ as __namedExportsOrder,V as default};
