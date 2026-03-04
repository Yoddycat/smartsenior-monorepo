import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function x(...r){return r.filter(Boolean).join(" ")}const b=({data:r,height:B=200,showValues:v=!0,showLabels:n=!0,horizontal:f=!1,animated:y=!0,className:j})=>{const w=Math.max(...r.map(a=>a.value));f||100/r.length;const o=f?r.length*40:B,c=["var(--primary)","var(--accent)","var(--success)","var(--warning)","var(--info)","var(--error)"];return f?e.jsx("div",{className:x("w-full",j),children:e.jsx("div",{className:"space-y-3",children:r.map((a,t)=>{const s=a.value/w*100,l=a.color||c[t%c.length];return e.jsxs("div",{className:"flex items-center gap-3",children:[n&&e.jsx("span",{className:"w-20 text-sm text-[var(--foreground-muted)] truncate",children:a.label}),e.jsx("div",{className:"flex-1 h-8 bg-[var(--background-muted)] rounded-md overflow-hidden",children:e.jsx("div",{className:x("h-full rounded-md flex items-center justify-end pr-2",y&&"transition-all duration-500 ease-out"),style:{width:`${s}%`,backgroundColor:l},children:v&&s>15&&e.jsx("span",{className:"text-sm font-medium text-white",children:a.value})})}),v&&s<=15&&e.jsx("span",{className:"text-sm font-medium text-[var(--foreground)]",children:a.value})]},t)})})}):e.jsx("div",{className:x("w-full",j),children:e.jsx("svg",{width:"100%",height:o+(n?40:0),viewBox:`0 0 100 ${o+(n?20:0)}`,preserveAspectRatio:"none",children:r.map((a,t)=>{const s=a.value/w*o,l=t*100/r.length+100/r.length/4,C=o-s,g=100/r.length/2,J=a.color||c[t%c.length];return e.jsxs("g",{children:[e.jsx("rect",{x:`${l}%`,y:C,width:`${g}%`,height:s,fill:J,rx:"2",className:y?"transition-all duration-500 ease-out":""}),v&&e.jsx("text",{x:`${l+g/2}%`,y:C-5,textAnchor:"middle",className:"text-[3px] fill-[var(--foreground)]",children:a.value}),n&&e.jsx("text",{x:`${l+g/2}%`,y:o+12,textAnchor:"middle",className:"text-[3px] fill-[var(--foreground-muted)]",children:a.label})]},t)})})})};b.displayName="BarChart";b.__docgenInfo={description:`BarChart component following SmartSenior Design System

Simple bar chart with SVG`,methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"BarChartDataPoint"}],raw:"BarChartDataPoint[]"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},showValues:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Charts/BarChart",component:b,parameters:{layout:"padded"},tags:["autodocs"]},h=[{label:"Jan",value:120},{label:"Fev",value:180},{label:"Mar",value:150},{label:"Abr",value:220},{label:"Mai",value:190},{label:"Jun",value:250}],u={args:{data:h}},d={args:{data:h,horizontal:!0}},i={args:{data:h,animated:!1}},m={args:{data:[{label:"Produto A",value:320,color:"var(--success)"},{label:"Produto B",value:180,color:"var(--warning)"},{label:"Produto C",value:250,color:"var(--error)"},{label:"Produto D",value:400,color:"var(--info)"}],height:250}},p={args:{data:h,showValues:!1,showLabels:!1}};var N,D,P;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: barData
  }
}`,...(P=(D=u.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var S,A,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: barData,
    horizontal: true
  }
}`,...(V=(A=d.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var q,T,M;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: barData,
    animated: false
  }
}`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var $,H,_;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'Produto A',
      value: 320,
      color: 'var(--success)'
    }, {
      label: 'Produto B',
      value: 180,
      color: 'var(--warning)'
    }, {
      label: 'Produto C',
      value: 250,
      color: 'var(--error)'
    }, {
      label: 'Produto D',
      value: 400,
      color: 'var(--info)'
    }],
    height: 250
  }
}`,...(_=(H=m.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var z,k,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: barData,
    showValues: false,
    showLabels: false
  }
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const I=["BarDefault","BarHorizontal","BarNoAnimation","BarCustomColors","BarMinimal"];export{m as BarCustomColors,u as BarDefault,d as BarHorizontal,p as BarMinimal,i as BarNoAnimation,I as __namedExportsOrder,G as default};
