import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function c(...s){return s.filter(Boolean).join(" ")}const Y={default:null,info:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),success:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})}),warning:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),error:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]})},n=l.forwardRef(({className:s,variant:a="default",dismissible:t,onDismiss:o,icon:A,children:Z,...G},H)=>{const[J,K]=l.useState(!0);if(!J)return null;const P={default:"bg-[var(--background-muted)] text-[var(--foreground)] border-[var(--border)]",info:"bg-[var(--info)]/10 text-[var(--info)] border-[var(--info)]/30",success:"bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/30",warning:"bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/30",error:"bg-[var(--error)]/10 text-[var(--error)] border-[var(--error)]/30"},Q=()=>{K(!1),o==null||o()},y=A!==void 0?A:Y[a];return e.jsxs("div",{ref:H,role:"alert",className:c("relative flex items-start gap-3 p-4","border rounded-lg",P[a],s),...G,children:[y&&e.jsx("div",{className:"shrink-0 mt-0.5",children:y}),e.jsx("div",{className:"flex-1 min-w-0",children:Z}),t&&e.jsx("button",{onClick:Q,className:c("shrink-0 p-1 rounded-md","hover:bg-black/10 dark:hover:bg-white/10","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]","transition-colors"),"aria-label":"Fechar",children:e.jsxs("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})});n.displayName="Alert";const i=l.forwardRef(({className:s,...a},t)=>e.jsx("h5",{ref:t,className:c("font-semibold text-base mb-1",s),...a}));i.displayName="AlertTitle";const r=l.forwardRef(({className:s,...a},t)=>e.jsx("p",{ref:t,className:c("text-base opacity-90",s),...a}));r.displayName="AlertDescription";const g=l.forwardRef(({className:s,position:a="top",...t},o)=>e.jsx(n,{ref:o,className:c("rounded-none border-x-0",a==="top"&&"border-t-0",a==="bottom"&&"border-b-0",s),...t}));g.displayName="Banner";n.__docgenInfo={description:`Alert component following SmartSenior Design System

Inline notification with semantic variants`,methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};r.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};g.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}}}};const ae={title:"Components/Alert",component:n,tags:["autodocs"],parameters:{layout:"centered"}},d={args:{children:"Esta é uma mensagem de alerta padrão.",style:{width:"400px"}}},m={args:{variant:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Informação"}),e.jsx(r,{children:"Uma nova atualização está disponível."})]}),style:{width:"400px"}}},p={args:{variant:"success",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Sucesso!"}),e.jsx(r,{children:"Suas alterações foram salvas com sucesso."})]}),style:{width:"400px"}}},u={args:{variant:"warning",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Atenção"}),e.jsx(r,{children:"Sua sessão expira em 5 minutos."})]}),style:{width:"400px"}}},x={args:{variant:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Erro"}),e.jsx(r,{children:"Não foi possível processar sua solicitação."})]}),style:{width:"400px"}}},f={args:{variant:"info",dismissible:!0,onDismiss:()=>console.log("Alert dismissed"),children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Dica"}),e.jsx(r,{children:"Você pode fechar este alerta clicando no X."})]}),style:{width:"400px"}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e.jsx(n,{variant:"default",children:e.jsx(r,{children:"Default alert"})}),e.jsx(n,{variant:"info",children:e.jsx(r,{children:"Info alert"})}),e.jsx(n,{variant:"success",children:e.jsx(r,{children:"Success alert"})}),e.jsx(n,{variant:"warning",children:e.jsx(r,{children:"Warning alert"})}),e.jsx(n,{variant:"error",children:e.jsx(r,{children:"Error alert"})})]})},v={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(g,{variant:"info",dismissible:!0,children:e.jsx(r,{children:"Estamos em manutenção programada das 02:00 às 04:00."})})}),parameters:{layout:"fullscreen"}};var j,w,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Esta é uma mensagem de alerta padrão.',
    style: {
      width: '400px'
    }
  }
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var D,N,S;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: <>
        <AlertTitle>Informação</AlertTitle>
        <AlertDescription>Uma nova atualização está disponível.</AlertDescription>
      </>,
    style: {
      width: '400px'
    }
  }
}`,...(S=(N=m.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var T,k,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: <>
        <AlertTitle>Sucesso!</AlertTitle>
        <AlertDescription>Suas alterações foram salvas com sucesso.</AlertDescription>
      </>,
    style: {
      width: '400px'
    }
  }
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var I,B,R;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: <>
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>Sua sessão expira em 5 minutos.</AlertDescription>
      </>,
    style: {
      width: '400px'
    }
  }
}`,...(R=(B=u.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var _,q,W;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: <>
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>Não foi possível processar sua solicitação.</AlertDescription>
      </>,
    style: {
      width: '400px'
    }
  }
}`,...(W=(q=x.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var C,V,F;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    dismissible: true,
    onDismiss: () => console.log('Alert dismissed'),
    children: <>
        <AlertTitle>Dica</AlertTitle>
        <AlertDescription>Você pode fechar este alerta clicando no X.</AlertDescription>
      </>,
    style: {
      width: '400px'
    }
  }
}`,...(F=(V=f.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var M,z,U;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '400px'
  }}>
      <Alert variant="default"><AlertDescription>Default alert</AlertDescription></Alert>
      <Alert variant="info"><AlertDescription>Info alert</AlertDescription></Alert>
      <Alert variant="success"><AlertDescription>Success alert</AlertDescription></Alert>
      <Alert variant="warning"><AlertDescription>Warning alert</AlertDescription></Alert>
      <Alert variant="error"><AlertDescription>Error alert</AlertDescription></Alert>
    </div>
}`,...(U=(z=h.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var X,L,O;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%'
  }}>
      <Banner variant="info" dismissible>
        <AlertDescription>
          Estamos em manutenção programada das 02:00 às 04:00.
        </AlertDescription>
      </Banner>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(O=(L=v.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const ne=["Default","Info","Success","Warning","Error","Dismissible","AllVariants","BannerExample"];export{h as AllVariants,v as BannerExample,d as Default,f as Dismissible,x as Error,m as Info,p as Success,u as Warning,ne as __namedExportsOrder,ae as default};
