import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function s(...l){return l.filter(Boolean).join(" ")}const a=c.forwardRef(({className:l,orientation:n="vertical",children:m,...h},d)=>e.jsx("div",{ref:d,className:s(n==="vertical"?"flex flex-col":"flex flex-row overflow-x-auto",l),...h,children:m}));a.displayName="Timeline";const i=c.forwardRef(({className:l,status:n="upcoming",icon:m,orientation:h="vertical",children:d,...j},v)=>{const g={completed:"bg-[var(--success)] text-[var(--success-foreground)]",current:"bg-[var(--primary)] text-[var(--primary-foreground)]",upcoming:"bg-[var(--background-muted)] text-[var(--foreground-muted)]"},f={completed:"bg-[var(--success)]",current:"bg-[var(--primary)]",upcoming:"bg-[var(--border)]"},I=n==="completed"?e.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}):null;return h==="horizontal"?e.jsxs("div",{ref:v,className:s("flex flex-col items-center min-w-[150px]",l),...j,children:[e.jsxs("div",{className:"flex items-center w-full",children:[e.jsx("div",{className:s("flex-1 h-0.5",f[n])}),e.jsx("div",{className:s("shrink-0 w-8 h-8 rounded-full flex items-center justify-center",g[n]),children:m||I}),e.jsx("div",{className:s("flex-1 h-0.5",n==="upcoming"?"bg-[var(--border)]":f[n])})]}),e.jsx("div",{className:"mt-3 text-center",children:d})]}):e.jsxs("div",{ref:v,className:s("flex gap-4",l),...j,children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:s("shrink-0 w-8 h-8 rounded-full flex items-center justify-center",g[n]),children:m||I}),e.jsx("div",{className:s("flex-1 w-0.5 my-2",f[n])})]}),e.jsx("div",{className:"flex-1 pb-8",children:d})]})});i.displayName="TimelineItem";const t=c.forwardRef(({className:l,...n},m)=>e.jsx("h4",{ref:m,className:s("text-base font-semibold text-[var(--foreground)]",l),...n}));t.displayName="TimelineTitle";const r=c.forwardRef(({className:l,...n},m)=>e.jsx("p",{ref:m,className:s("text-sm text-[var(--foreground-muted)] mt-1",l),...n}));r.displayName="TimelineDescription";const o=c.forwardRef(({className:l,...n},m)=>e.jsx("time",{ref:m,className:s("text-xs text-[var(--foreground-muted)]",l),...n}));o.displayName="TimelineTime";a.__docgenInfo={description:`Timeline component following SmartSenior Design System

Chronological event display`,methods:[],displayName:"Timeline",props:{orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{status:{required:!1,tsType:{name:"union",raw:"'completed' | 'current' | 'upcoming'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'current'"},{name:"literal",value:"'upcoming'"}]},description:"",defaultValue:{value:"'upcoming'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"TimelineTitle"};r.__docgenInfo={description:"",methods:[],displayName:"TimelineDescription"};o.__docgenInfo={description:"",methods:[],displayName:"TimelineTime"};const W={title:"Components/Timeline",component:a,tags:["autodocs"],parameters:{layout:"centered"}},T={render:()=>e.jsxs(a,{style:{width:"400px"},children:[e.jsxs(i,{status:"completed",children:[e.jsx(t,{children:"Pedido Confirmado"}),e.jsx(r,{children:"Seu pedido foi recebido e confirmado."}),e.jsx(o,{children:"10/03/2024 às 14:30"})]}),e.jsxs(i,{status:"completed",children:[e.jsx(t,{children:"Em Preparação"}),e.jsx(r,{children:"Estamos preparando seu pedido."}),e.jsx(o,{children:"10/03/2024 às 15:00"})]}),e.jsxs(i,{status:"current",children:[e.jsx(t,{children:"Em Transporte"}),e.jsx(r,{children:"Seu pedido está a caminho."}),e.jsx(o,{children:"10/03/2024 às 16:30"})]}),e.jsxs(i,{status:"upcoming",children:[e.jsx(t,{children:"Entregue"}),e.jsx(r,{children:"Aguardando entrega."})]})]})},p={render:()=>e.jsxs(a,{style:{width:"400px"},children:[e.jsxs(i,{status:"completed",children:[e.jsx(t,{children:"Conta Criada"}),e.jsx(o,{children:"01/01/2024"})]}),e.jsxs(i,{status:"completed",children:[e.jsx(t,{children:"Email Verificado"}),e.jsx(o,{children:"01/01/2024"})]}),e.jsxs(i,{status:"completed",children:[e.jsx(t,{children:"Perfil Completo"}),e.jsx(o,{children:"02/01/2024"})]})]})},u={render:()=>e.jsxs(a,{style:{width:"400px"},children:[e.jsx(i,{status:"completed",icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),children:e.jsx(t,{children:"Aprovado"})}),e.jsx(i,{status:"current",icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),children:e.jsx(t,{children:"Em Processamento"})}),e.jsx(i,{status:"upcoming",children:e.jsx(t,{children:"Finalizado"})})]})},x={render:()=>e.jsxs(a,{style:{width:"450px"},children:[e.jsxs(i,{status:"completed",children:[e.jsx(t,{children:"Projeto Iniciado"}),e.jsx(r,{children:"Requisitos definidos e equipe formada."}),e.jsx(o,{children:"Janeiro 2024"})]}),e.jsxs(i,{status:"completed",children:[e.jsx(t,{children:"Design Aprovado"}),e.jsx(r,{children:"Protótipos revisados e aprovados pelo cliente."}),e.jsx(o,{children:"Fevereiro 2024"})]}),e.jsxs(i,{status:"current",children:[e.jsx(t,{children:"Desenvolvimento"}),e.jsx(r,{children:"Implementação das funcionalidades principais em andamento."}),e.jsx(o,{children:"Março 2024"})]}),e.jsxs(i,{status:"upcoming",children:[e.jsx(t,{children:"Testes"}),e.jsx(r,{children:"QA e testes de aceitação."})]}),e.jsxs(i,{status:"upcoming",children:[e.jsx(t,{children:"Lançamento"}),e.jsx(r,{children:"Deploy em produção."})]})]})};var y,w,D;T.parameters={...T.parameters,docs:{...(y=T.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Timeline style={{
    width: '400px'
  }}>
      <TimelineItem status="completed">
        <TimelineTitle>Pedido Confirmado</TimelineTitle>
        <TimelineDescription>Seu pedido foi recebido e confirmado.</TimelineDescription>
        <TimelineTime>10/03/2024 às 14:30</TimelineTime>
      </TimelineItem>
      <TimelineItem status="completed">
        <TimelineTitle>Em Preparação</TimelineTitle>
        <TimelineDescription>Estamos preparando seu pedido.</TimelineDescription>
        <TimelineTime>10/03/2024 às 15:00</TimelineTime>
      </TimelineItem>
      <TimelineItem status="current">
        <TimelineTitle>Em Transporte</TimelineTitle>
        <TimelineDescription>Seu pedido está a caminho.</TimelineDescription>
        <TimelineTime>10/03/2024 às 16:30</TimelineTime>
      </TimelineItem>
      <TimelineItem status="upcoming">
        <TimelineTitle>Entregue</TimelineTitle>
        <TimelineDescription>Aguardando entrega.</TimelineDescription>
      </TimelineItem>
    </Timeline>
}`,...(D=(w=T.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,C,b;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Timeline style={{
    width: '400px'
  }}>
      <TimelineItem status="completed">
        <TimelineTitle>Conta Criada</TimelineTitle>
        <TimelineTime>01/01/2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="completed">
        <TimelineTitle>Email Verificado</TimelineTitle>
        <TimelineTime>01/01/2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="completed">
        <TimelineTitle>Perfil Completo</TimelineTitle>
        <TimelineTime>02/01/2024</TimelineTime>
      </TimelineItem>
    </Timeline>
}`,...(b=(C=p.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var E,P,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Timeline style={{
    width: '400px'
  }}>
      <TimelineItem status="completed" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>}>
        <TimelineTitle>Aprovado</TimelineTitle>
      </TimelineItem>
      <TimelineItem status="current" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>}>
        <TimelineTitle>Em Processamento</TimelineTitle>
      </TimelineItem>
      <TimelineItem status="upcoming">
        <TimelineTitle>Finalizado</TimelineTitle>
      </TimelineItem>
    </Timeline>
}`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var R,_,S;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Timeline style={{
    width: '450px'
  }}>
      <TimelineItem status="completed">
        <TimelineTitle>Projeto Iniciado</TimelineTitle>
        <TimelineDescription>
          Requisitos definidos e equipe formada.
        </TimelineDescription>
        <TimelineTime>Janeiro 2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="completed">
        <TimelineTitle>Design Aprovado</TimelineTitle>
        <TimelineDescription>
          Protótipos revisados e aprovados pelo cliente.
        </TimelineDescription>
        <TimelineTime>Fevereiro 2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="current">
        <TimelineTitle>Desenvolvimento</TimelineTitle>
        <TimelineDescription>
          Implementação das funcionalidades principais em andamento.
        </TimelineDescription>
        <TimelineTime>Março 2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="upcoming">
        <TimelineTitle>Testes</TimelineTitle>
        <TimelineDescription>
          QA e testes de aceitação.
        </TimelineDescription>
      </TimelineItem>
      <TimelineItem status="upcoming">
        <TimelineTitle>Lançamento</TimelineTitle>
        <TimelineDescription>
          Deploy em produção.
        </TimelineDescription>
      </TimelineItem>
    </Timeline>
}`,...(S=(_=x.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const B=["Default","AllCompleted","WithCustomIcons","ProjectHistory"];export{p as AllCompleted,T as Default,x as ProjectHistory,u as WithCustomIcons,B as __namedExportsOrder,W as default};
