import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as G}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function N(...l){return l.filter(Boolean).join(" ")}const t=G.forwardRef(({className:l,error:c,disabled:p,children:A,placeholder:d,...E},k)=>e.jsxs("div",{className:"relative",children:[e.jsxs("select",{ref:k,disabled:p,className:N("w-full h-12 px-4 pr-10 appearance-none","rounded-md border border-[var(--border)]","bg-[var(--background)] text-[var(--foreground)]","text-base font-normal","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--background-muted)]","transition-all duration-200",c&&"border-[var(--error)] focus:ring-[var(--error)]",l),...E,children:[d&&e.jsx("option",{value:"",disabled:!0,children:d}),A]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:e.jsx("svg",{className:"w-5 h-5 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}));t.displayName="Select";const o=G.forwardRef(({className:l,...c},p)=>e.jsx("option",{ref:p,className:N("py-2",l),...c}));o.displayName="SelectOption";t.__docgenInfo={description:`Select component following SmartSenior Design System

Accessible select with large touch target for senior users`,methods:[],displayName:"Select",props:{error:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"SelectOption"};const V={title:"Components/Select",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},error:{control:"boolean"}}},a={render:()=>e.jsxs(t,{placeholder:"Selecione uma opção",style:{width:"250px"},children:[e.jsx(o,{value:"option1",children:"Opção 1"}),e.jsx(o,{value:"option2",children:"Opção 2"}),e.jsx(o,{value:"option3",children:"Opção 3"})]})},r={render:()=>e.jsxs(t,{defaultValue:"option2",style:{width:"250px"},children:[e.jsx(o,{value:"option1",children:"Opção 1"}),e.jsx(o,{value:"option2",children:"Opção 2"}),e.jsx(o,{value:"option3",children:"Opção 3"})]})},n={render:()=>e.jsxs(t,{disabled:!0,defaultValue:"option1",style:{width:"250px"},children:[e.jsx(o,{value:"option1",children:"Opção 1"}),e.jsx(o,{value:"option2",children:"Opção 2"})]})},i={render:()=>e.jsxs(t,{error:!0,placeholder:"Selecione um estado",style:{width:"250px"},children:[e.jsx(o,{value:"",children:"Selecione..."}),e.jsx(o,{value:"sp",children:"São Paulo"}),e.jsx(o,{value:"rj",children:"Rio de Janeiro"})]})},s={render:()=>e.jsxs("div",{style:{width:"250px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Estado"}),e.jsxs(t,{placeholder:"Selecione seu estado",children:[e.jsx(o,{value:"ac",children:"Acre"}),e.jsx(o,{value:"al",children:"Alagoas"}),e.jsx(o,{value:"ap",children:"Amapá"}),e.jsx(o,{value:"am",children:"Amazonas"}),e.jsx(o,{value:"ba",children:"Bahia"}),e.jsx(o,{value:"ce",children:"Ceará"}),e.jsx(o,{value:"df",children:"Distrito Federal"}),e.jsx(o,{value:"es",children:"Espírito Santo"}),e.jsx(o,{value:"go",children:"Goiás"}),e.jsx(o,{value:"ma",children:"Maranhão"}),e.jsx(o,{value:"mg",children:"Minas Gerais"}),e.jsx(o,{value:"ms",children:"Mato Grosso do Sul"}),e.jsx(o,{value:"mt",children:"Mato Grosso"}),e.jsx(o,{value:"pa",children:"Pará"}),e.jsx(o,{value:"pb",children:"Paraíba"}),e.jsx(o,{value:"pe",children:"Pernambuco"}),e.jsx(o,{value:"pi",children:"Piauí"}),e.jsx(o,{value:"pr",children:"Paraná"}),e.jsx(o,{value:"rj",children:"Rio de Janeiro"}),e.jsx(o,{value:"rn",children:"Rio Grande do Norte"}),e.jsx(o,{value:"ro",children:"Rondônia"}),e.jsx(o,{value:"rr",children:"Roraima"}),e.jsx(o,{value:"rs",children:"Rio Grande do Sul"}),e.jsx(o,{value:"sc",children:"Santa Catarina"}),e.jsx(o,{value:"se",children:"Sergipe"}),e.jsx(o,{value:"sp",children:"São Paulo"}),e.jsx(o,{value:"to",children:"Tocantins"})]})]})};var u,S,O;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Select placeholder="Selecione uma opção" style={{
    width: '250px'
  }}>
      <SelectOption value="option1">Opção 1</SelectOption>
      <SelectOption value="option2">Opção 2</SelectOption>
      <SelectOption value="option3">Opção 3</SelectOption>
    </Select>
}`,...(O=(S=a.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var v,h,m;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Select defaultValue="option2" style={{
    width: '250px'
  }}>
      <SelectOption value="option1">Opção 1</SelectOption>
      <SelectOption value="option2">Opção 2</SelectOption>
      <SelectOption value="option3">Opção 3</SelectOption>
    </Select>
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,j,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Select disabled defaultValue="option1" style={{
    width: '250px'
  }}>
      <SelectOption value="option1">Opção 1</SelectOption>
      <SelectOption value="option2">Opção 2</SelectOption>
    </Select>
}`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var g,b,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Select error placeholder="Selecione um estado" style={{
    width: '250px'
  }}>
      <SelectOption value="">Selecione...</SelectOption>
      <SelectOption value="sp">São Paulo</SelectOption>
      <SelectOption value="rj">Rio de Janeiro</SelectOption>
    </Select>
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,R,P;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <label style={{
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 500
    }}>
        Estado
      </label>
      <Select placeholder="Selecione seu estado">
        <SelectOption value="ac">Acre</SelectOption>
        <SelectOption value="al">Alagoas</SelectOption>
        <SelectOption value="ap">Amapá</SelectOption>
        <SelectOption value="am">Amazonas</SelectOption>
        <SelectOption value="ba">Bahia</SelectOption>
        <SelectOption value="ce">Ceará</SelectOption>
        <SelectOption value="df">Distrito Federal</SelectOption>
        <SelectOption value="es">Espírito Santo</SelectOption>
        <SelectOption value="go">Goiás</SelectOption>
        <SelectOption value="ma">Maranhão</SelectOption>
        <SelectOption value="mg">Minas Gerais</SelectOption>
        <SelectOption value="ms">Mato Grosso do Sul</SelectOption>
        <SelectOption value="mt">Mato Grosso</SelectOption>
        <SelectOption value="pa">Pará</SelectOption>
        <SelectOption value="pb">Paraíba</SelectOption>
        <SelectOption value="pe">Pernambuco</SelectOption>
        <SelectOption value="pi">Piauí</SelectOption>
        <SelectOption value="pr">Paraná</SelectOption>
        <SelectOption value="rj">Rio de Janeiro</SelectOption>
        <SelectOption value="rn">Rio Grande do Norte</SelectOption>
        <SelectOption value="ro">Rondônia</SelectOption>
        <SelectOption value="rr">Roraima</SelectOption>
        <SelectOption value="rs">Rio Grande do Sul</SelectOption>
        <SelectOption value="sc">Santa Catarina</SelectOption>
        <SelectOption value="se">Sergipe</SelectOption>
        <SelectOption value="sp">São Paulo</SelectOption>
        <SelectOption value="to">Tocantins</SelectOption>
      </Select>
    </div>
}`,...(P=(R=s.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};const _=["Default","WithValue","Disabled","Error","States"];export{a as Default,n as Disabled,i as Error,s as States,r as WithValue,_ as __namedExportsOrder,V as default};
