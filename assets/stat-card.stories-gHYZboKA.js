import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as A}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function x(...a){return a.filter(Boolean).join(" ")}const r=A.forwardRef(({className:a,title:g,value:h,description:s,icon:n,trend:t,variant:y="default",...K},L)=>{const O={default:"bg-[var(--background)]",primary:"bg-[var(--primary)]/10",success:"bg-[var(--success)]/10",warning:"bg-[var(--warning)]/10",error:"bg-[var(--error)]/10"},F={default:"text-[var(--foreground-muted)]",primary:"text-[var(--primary)]",success:"text-[var(--success)]",warning:"text-[var(--warning)]",error:"text-[var(--error)]"},G={up:"text-[var(--success)]",down:"text-[var(--error)]",neutral:"text-[var(--foreground-muted)]"},J={up:e.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"18 15 12 9 6 15"})}),down:e.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),neutral:e.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})};return e.jsx("div",{ref:L,className:x("p-6 rounded-lg border border-[var(--border)]",O[y],a),...K,children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-[var(--foreground-muted)] mb-1",children:g}),e.jsx("p",{className:"text-3xl font-bold text-[var(--foreground)]",children:h}),s&&e.jsx("p",{className:"text-sm text-[var(--foreground-muted)] mt-1",children:s}),t&&e.jsxs("div",{className:x("flex items-center gap-1 mt-2",G[t.direction]),children:[J[t.direction],e.jsxs("span",{className:"text-sm font-medium",children:[t.value>0?"+":"",t.value,"%"]}),t.label&&e.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:t.label})]})]}),n&&e.jsx("div",{className:x("shrink-0",F[y]),children:n})]})})});r.displayName="StatCard";const i=A.forwardRef(({className:a,label:g,value:h,icon:s,...n},t)=>e.jsxs("div",{ref:t,className:x("flex items-center gap-3 p-3 rounded-md bg-[var(--background-muted)]",a),...n,children:[s&&e.jsx("div",{className:"text-[var(--foreground-muted)]",children:s}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-[var(--foreground-muted)]",children:g}),e.jsx("p",{className:"text-lg font-semibold text-[var(--foreground)]",children:h})]})]}));i.displayName="MiniStat";r.__docgenInfo={description:`StatCard component following SmartSenior Design System

Dashboard statistic display card`,methods:[],displayName:"StatCard",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trend:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  value: number
  label?: string
  direction: 'up' | 'down' | 'neutral'
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"direction",value:{name:"union",raw:"'up' | 'down' | 'neutral'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'neutral'"}],required:!0}}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"MiniStat",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ee={title:"Components/StatCard",component:r,tags:["autodocs"],parameters:{layout:"centered"}},l={args:{title:"Total de Vendas",value:"R$ 45.231",style:{width:"280px"}}},o={args:{title:"Novos Usuários",value:"1.234",description:"Últimos 30 dias",style:{width:"280px"}}},d={args:{title:"Receita",value:"R$ 89.400",trend:{value:12.5,direction:"up",label:"vs mês anterior"},style:{width:"280px"}}},c={args:{title:"Taxa de Cancelamento",value:"2.4%",trend:{value:-.8,direction:"down",label:"vs mês anterior"},variant:"success",style:{width:"280px"}}},u={args:{title:"Pedidos",value:"342",trend:{value:8,direction:"up"},icon:e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),style:{width:"280px"}}},p={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",width:"600px"},children:[e.jsx(r,{title:"Default",value:"1.234",variant:"default"}),e.jsx(r,{title:"Primary",value:"5.678",variant:"primary"}),e.jsx(r,{title:"Success",value:"98%",variant:"success",trend:{value:5,direction:"up"}}),e.jsx(r,{title:"Warning",value:"23",variant:"warning",trend:{value:3,direction:"up"}}),e.jsx(r,{title:"Error",value:"12",variant:"error",trend:{value:-2,direction:"down"}})]})},m={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",width:"100%"},children:[e.jsx(r,{title:"Receita Total",value:"R$ 284.500",trend:{value:14.2,direction:"up",label:"vs mês anterior"},icon:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),variant:"primary"}),e.jsx(r,{title:"Clientes",value:"2.430",trend:{value:8.1,direction:"up"},icon:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),e.jsx(r,{title:"Conversão",value:"3.2%",trend:{value:.5,direction:"up"},variant:"success"}),e.jsx(r,{title:"Suporte",value:"12",description:"Tickets abertos",variant:"warning"})]}),parameters:{layout:"padded"}},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{label:"Visitantes",value:"1.2K"}),e.jsx(i,{label:"Páginas/Sessão",value:"4.3"}),e.jsx(i,{label:"Tempo Médio",value:"2m 30s"})]})};var f,w,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Total de Vendas',
    value: 'R$ 45.231',
    style: {
      width: '280px'
    }
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var b,S,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Novos Usuários',
    value: '1.234',
    description: 'Últimos 30 dias',
    style: {
      width: '280px'
    }
  }
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var N,T,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Receita',
    value: 'R$ 89.400',
    trend: {
      value: 12.5,
      direction: 'up',
      label: 'vs mês anterior'
    },
    style: {
      width: '280px'
    }
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var M,R,W;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Taxa de Cancelamento',
    value: '2.4%',
    trend: {
      value: -0.8,
      direction: 'down',
      label: 'vs mês anterior'
    },
    variant: 'success',
    style: {
      width: '280px'
    }
  }
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,D,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Pedidos',
    value: '342',
    trend: {
      value: 8,
      direction: 'up'
    },
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>,
    style: {
      width: '280px'
    }
  }
}`,...(B=(D=u.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var V,H,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    width: '600px'
  }}>
      <StatCard title="Default" value="1.234" variant="default" />
      <StatCard title="Primary" value="5.678" variant="primary" />
      <StatCard title="Success" value="98%" variant="success" trend={{
      value: 5,
      direction: 'up'
    }} />
      <StatCard title="Warning" value="23" variant="warning" trend={{
      value: 3,
      direction: 'up'
    }} />
      <StatCard title="Error" value="12" variant="error" trend={{
      value: -2,
      direction: 'down'
    }} />
    </div>
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var _,$,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    width: '100%'
  }}>
      <StatCard title="Receita Total" value="R$ 284.500" trend={{
      value: 14.2,
      direction: 'up',
      label: 'vs mês anterior'
    }} icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>} variant="primary" />
      <StatCard title="Clientes" value="2.430" trend={{
      value: 8.1,
      direction: 'up'
    }} icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>} />
      <StatCard title="Conversão" value="3.2%" trend={{
      value: 0.5,
      direction: 'up'
    }} variant="success" />
      <StatCard title="Suporte" value="12" description="Tickets abertos" variant="warning" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(E=($=m.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var I,U,z;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <MiniStat label="Visitantes" value="1.2K" />
      <MiniStat label="Páginas/Sessão" value="4.3" />
      <MiniStat label="Tempo Médio" value="2m 30s" />
    </div>
}`,...(z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const re=["Default","WithDescription","WithTrendUp","WithTrendDown","WithIcon","AllVariants","Dashboard","MiniStats"];export{p as AllVariants,m as Dashboard,l as Default,v as MiniStats,o as WithDescription,u as WithIcon,c as WithTrendDown,d as WithTrendUp,re as __namedExportsOrder,ee as default};
