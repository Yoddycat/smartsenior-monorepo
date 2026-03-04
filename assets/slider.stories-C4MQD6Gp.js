import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function u(...t){return t.filter(Boolean).join(" ")}const r=f.forwardRef(({className:t,label:c,showValue:g=!1,formatValue:$=l=>String(l),size:a="md",min:s=0,max:w=100,value:b,defaultValue:A,onChange:p,disabled:G,id:L,...M},O)=>{const l=L||f.useId(),[P,W]=f.useState(Number(A)||Number(s)),h=b!==void 0?Number(b):P,B=(h-Number(s))/(Number(w)-Number(s))*100,F=V=>{const H=Number(V.target.value);b===void 0&&W(H),p==null||p(V)},x={sm:{track:"h-1",thumb:"h-4 w-4"},md:{track:"h-2",thumb:"h-5 w-5"},lg:{track:"h-3",thumb:"h-6 w-6"}}[a];return e.jsxs("div",{className:u("w-full",t),children:[(c||g)&&e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c&&e.jsx("label",{htmlFor:l,className:"text-base font-medium text-[var(--foreground)]",children:c}),g&&e.jsx("span",{className:"text-base font-medium text-[var(--foreground-muted)]",children:$(h)})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:u("absolute top-1/2 -translate-y-1/2 w-full rounded-full","bg-[var(--background-muted)]",x.track)}),e.jsx("div",{className:u("absolute top-1/2 -translate-y-1/2 rounded-full","bg-[var(--primary)]",x.track),style:{width:`${B}%`}}),e.jsx("input",{type:"range",ref:O,id:l,min:s,max:w,value:h,onChange:F,disabled:G,className:u("relative w-full appearance-none bg-transparent cursor-pointer","focus-visible:outline-none","[&::-webkit-slider-thumb]:appearance-none","[&::-webkit-slider-thumb]:rounded-full","[&::-webkit-slider-thumb]:bg-[var(--primary)]","[&::-webkit-slider-thumb]:border-2","[&::-webkit-slider-thumb]:border-white","[&::-webkit-slider-thumb]:shadow-md","[&::-webkit-slider-thumb]:cursor-pointer","[&::-webkit-slider-thumb]:transition-transform","[&::-webkit-slider-thumb]:hover:scale-110","[&::-moz-range-thumb]:rounded-full","[&::-moz-range-thumb]:bg-[var(--primary)]","[&::-moz-range-thumb]:border-2","[&::-moz-range-thumb]:border-white","[&::-moz-range-thumb]:shadow-md","[&::-moz-range-thumb]:cursor-pointer","disabled:cursor-not-allowed disabled:opacity-50",a==="sm"&&"[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4",a==="md"&&"[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5",a==="lg"&&"[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6"),style:{height:a==="sm"?"16px":a==="md"?"20px":"24px"},...M})]})]})});r.displayName="Slider";r.__docgenInfo={description:`Slider component following SmartSenior Design System

Range input with large touch target for senior users`,methods:[],displayName:"Slider",props:{label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},formatValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"",defaultValue:{value:"(v) => String(v)",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1}},composes:["Omit"]};const Y={title:"Components/Slider",component:r,tags:["autodocs"],parameters:{layout:"centered"}},n={args:{defaultValue:50,style:{width:"300px"}}},o={args:{label:"Volume",showValue:!0,defaultValue:75,style:{width:"300px"}}},i={args:{label:"Temperatura",min:16,max:30,defaultValue:22,showValue:!0,formatValue:t=>`${t}°C`,style:{width:"300px"}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"300px"},children:[e.jsx(r,{size:"sm",label:"Pequeno",showValue:!0,defaultValue:30}),e.jsx(r,{size:"md",label:"Médio",showValue:!0,defaultValue:50}),e.jsx(r,{size:"lg",label:"Grande",showValue:!0,defaultValue:70})]})},m={args:{label:"Desabilitado",defaultValue:50,disabled:!0,style:{width:"300px"}}};var v,y,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    style: {
      width: '300px'
    }
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,z,N;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    showValue: true,
    defaultValue: 75,
    style: {
      width: '300px'
    }
  }
}`,...(N=(z=o.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var j,D,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Temperatura',
    min: 16,
    max: 30,
    defaultValue: 22,
    showValue: true,
    formatValue: v => \`\${v}°C\`,
    style: {
      width: '300px'
    }
  }
}`,...(q=(D=i.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var T,C,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '300px'
  }}>
      <Slider size="sm" label="Pequeno" showValue defaultValue={30} />
      <Slider size="md" label="Médio" showValue defaultValue={50} />
      <Slider size="lg" label="Grande" showValue defaultValue={70} />
    </div>
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var I,_,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Desabilitado',
    defaultValue: 50,
    disabled: true,
    style: {
      width: '300px'
    }
  }
}`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Z=["Default","WithLabel","CustomRange","AllSizes","Disabled"];export{d as AllSizes,i as CustomRange,n as Default,m as Disabled,o as WithLabel,Z as __namedExportsOrder,Y as default};
