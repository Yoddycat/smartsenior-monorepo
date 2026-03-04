import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function s(...t){return t.filter(Boolean).join(" ")}const b=({steps:t,currentStep:v,orientation:r="horizontal",onStepClick:x,className:I})=>e.jsx("div",{className:s(r==="horizontal"?"w-full":"flex flex-col",I),children:e.jsx("ol",{className:s("flex",r==="horizontal"?"items-center w-full":"flex-col"),children:t.map((o,l)=>{const c=l+1,a=c<v,i=c===v,p=x&&(a||i);return e.jsxs("li",{className:s(r==="horizontal"?"flex-1 flex items-center":"flex items-start",l!==t.length-1&&r==="vertical"&&"pb-8"),children:[e.jsxs("div",{className:s("flex items-center",r==="vertical"&&"flex-col items-start"),children:[e.jsx("button",{onClick:()=>p&&x(c),disabled:!p,className:s("relative flex items-center justify-center","w-10 h-10 rounded-full border-2","text-base font-semibold","transition-all duration-200","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2",a&&"bg-[var(--primary)] border-[var(--primary)] text-[var(--primary-foreground)]",i&&"border-[var(--primary)] text-[var(--primary)] bg-[var(--background)]",!a&&!i&&"border-[var(--border)] text-[var(--foreground-muted)] bg-[var(--background)]",p&&"cursor-pointer hover:scale-105",!p&&"cursor-default"),children:a?e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}):o.icon?o.icon:c}),e.jsxs("div",{className:s(r==="horizontal"?"ml-3 hidden sm:block":"ml-4"),children:[e.jsx("p",{className:s("text-base font-medium",i||a?"text-[var(--foreground)]":"text-[var(--foreground-muted)]"),children:o.label}),o.description&&e.jsx("p",{className:"text-sm text-[var(--foreground-muted)]",children:o.description})]})]}),l!==t.length-1&&e.jsx("div",{className:s(r==="horizontal"?"flex-1 mx-4 h-0.5":"absolute left-5 top-10 w-0.5 h-full -translate-x-1/2",a?"bg-[var(--primary)]":"bg-[var(--border)]"),style:r==="vertical"?{height:"calc(100% - 2.5rem)"}:void 0})]},l)})})});b.displayName="Stepper";b.__docgenInfo={description:`Stepper component following SmartSenior Design System

Multi-step progress indicator`,methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepperStep"}],raw:"StepperStep[]"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(step: number) => void",signature:{arguments:[{type:{name:"number"},name:"step"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Components/Stepper",component:b,tags:["autodocs"],parameters:{layout:"padded"}},n=[{label:"Dados Pessoais",description:"Informações básicas"},{label:"Endereço",description:"Local de entrega"},{label:"Pagamento",description:"Forma de pagamento"},{label:"Confirmação",description:"Revisar pedido"}],m={args:{steps:n,currentStep:1}},d={args:{steps:n,currentStep:2}},u={args:{steps:n,currentStep:4}},g={args:{steps:n,currentStep:5}},f={args:{steps:n,currentStep:3,onStepClick:t=>alert(`Clicou no passo ${t}`)}},S={args:{steps:[{label:"Passo 1"},{label:"Passo 2"},{label:"Passo 3"}],currentStep:2}};var h,y,j;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1
  }
}`,...(j=(y=m.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,N,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 2
  }
}`,...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var w,z,P;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 4
  }
}`,...(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var q,T,_;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 5
  }
}`,...(_=(T=g.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,F,L;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 3,
    onStepClick: step => alert(\`Clicou no passo \${step}\`)
  }
}`,...(L=(F=f.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,B,D;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Passo 1'
    }, {
      label: 'Passo 2'
    }, {
      label: 'Passo 3'
    }],
    currentStep: 2
  }
}`,...(D=(B=S.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const O=["FirstStep","MiddleStep","LastStep","Completed","Clickable","SimpleSteps"];export{f as Clickable,g as Completed,m as FirstStep,u as LastStep,d as MiddleStep,S as SimpleSteps,O as __namedExportsOrder,A as default};
