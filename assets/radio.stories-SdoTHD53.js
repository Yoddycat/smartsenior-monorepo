import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function b(...t){return t.filter(Boolean).join(" ")}const a=o.forwardRef(({className:t,label:n,description:r,error:g,disabled:s,id:x,...R},h)=>{const d=x||o.useId();return e.jsxs("div",{className:b("flex items-start gap-3",t),children:[e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx("input",{type:"radio",ref:h,id:d,disabled:s,className:b("peer appearance-none shrink-0","w-6 h-6 rounded-full border-2","border-[var(--border)] bg-[var(--background)]","checked:border-[var(--primary)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50","transition-all duration-200",g&&"border-[var(--error)]"),...R}),e.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-[var(--primary)] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"})]}),(n||r)&&e.jsxs("div",{className:"flex flex-col gap-0.5",children:[n&&e.jsx("label",{htmlFor:d,className:b("text-base font-medium leading-tight cursor-pointer","text-[var(--foreground)]",s&&"cursor-not-allowed opacity-50"),children:n}),r&&e.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:r})]})]})});a.displayName="Radio";const l=o.forwardRef(({children:t,name:n,value:r,defaultValue:g,onChange:s,className:x,orientation:R="vertical"},h)=>{const[d,M]=o.useState(g||""),W=r!==void 0?r:d,A=i=>{const y=i.target.value;r===void 0&&M(y),s==null||s(y)};return e.jsx("div",{ref:h,role:"radiogroup",className:b("flex",R==="vertical"?"flex-col gap-3":"flex-row flex-wrap gap-6",x),children:o.Children.map(t,i=>o.isValidElement(i)?o.cloneElement(i,{name:n,checked:i.props.value===W,onChange:A}):i)})});l.displayName="RadioGroup";a.__docgenInfo={description:`Radio component following SmartSenior Design System

Accessible radio button with large touch target for senior users`,methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};l.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const K={title:"Components/Radio",component:a,tags:["autodocs"],parameters:{layout:"centered"}},c={args:{label:"Opção única",name:"example"}},u={args:{label:"Plano Premium",description:"Acesso completo a todos os recursos.",name:"plan",value:"premium"}},p={args:{label:"Opção desabilitada",disabled:!0,name:"disabled"}},m={render:()=>e.jsxs(l,{name:"plan",defaultValue:"basic",children:[e.jsx(a,{value:"basic",label:"Plano Básico",description:"Recursos essenciais"}),e.jsx(a,{value:"pro",label:"Plano Pro",description:"Recursos avançados"}),e.jsx(a,{value:"enterprise",label:"Plano Enterprise",description:"Soluções personalizadas"})]})},f={render:()=>e.jsxs(l,{name:"size",defaultValue:"md",orientation:"horizontal",children:[e.jsx(a,{value:"sm",label:"Pequeno"}),e.jsx(a,{value:"md",label:"Médio"}),e.jsx(a,{value:"lg",label:"Grande"})]})},v={render:()=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontWeight:600},children:"Forma de Pagamento"}),e.jsxs(l,{name:"payment",defaultValue:"pix",children:[e.jsx(a,{value:"pix",label:"PIX",description:"Pagamento instantâneo"}),e.jsx(a,{value:"credit",label:"Cartão de Crédito",description:"Parcele em até 12x"}),e.jsx(a,{value:"boleto",label:"Boleto",description:"Vencimento em 3 dias"})]})]})};var j,P,V;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Opção única',
    name: 'example'
  }
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var w,G,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Plano Premium',
    description: 'Acesso completo a todos os recursos.',
    name: 'plan',
    value: 'premium'
  }
}`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var q,S,z;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Opção desabilitada',
    disabled: true,
    name: 'disabled'
  }
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,B,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <RadioGroup name="plan" defaultValue="basic">
      <Radio value="basic" label="Plano Básico" description="Recursos essenciais" />
      <Radio value="pro" label="Plano Pro" description="Recursos avançados" />
      <Radio value="enterprise" label="Plano Enterprise" description="Soluções personalizadas" />
    </RadioGroup>
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,I,O;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <RadioGroup name="size" defaultValue="md" orientation="horizontal">
      <Radio value="sm" label="Pequeno" />
      <Radio value="md" label="Médio" />
      <Radio value="lg" label="Grande" />
    </RadioGroup>
}`,...(O=(I=f.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var _,k,C;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <h3 style={{
      marginBottom: '1rem',
      fontWeight: 600
    }}>Forma de Pagamento</h3>
      <RadioGroup name="payment" defaultValue="pix">
        <Radio value="pix" label="PIX" description="Pagamento instantâneo" />
        <Radio value="credit" label="Cartão de Crédito" description="Parcele em até 12x" />
        <Radio value="boleto" label="Boleto" description="Vencimento em 3 dias" />
      </RadioGroup>
    </div>
}`,...(C=(k=v.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const L=["Default","WithDescription","Disabled","RadioGroupVertical","RadioGroupHorizontal","PaymentMethods"];export{c as Default,p as Disabled,v as PaymentMethods,f as RadioGroupHorizontal,m as RadioGroupVertical,u as WithDescription,L as __namedExportsOrder,K as default};
