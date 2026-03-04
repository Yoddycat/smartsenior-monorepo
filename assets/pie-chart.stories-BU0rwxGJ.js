import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function V(...c){return c.filter(Boolean).join(" ")}const w=({data:c,size:u=200,donut:P=!1,donutWidth:fe=40,showLabels:xe=!1,showLegend:ve=!0,showValues:z=!0,animated:De=!0,className:be})=>{const L=c.reduce((e,t)=>e+t.value,0),N=u/2,ye=P?N-fe:0,o=u/2,q=["var(--primary)","var(--accent)","var(--success)","var(--warning)","var(--info)","var(--error)"],i=(e,t)=>{const r=(e-90)*Math.PI/180;return{x:o+t*Math.cos(r),y:o+t*Math.sin(r)}},Ce=(e,t,r,n)=>{const l=i(e,r),d=i(t,r),p=i(t,n),g=i(e,n),A=t-e>180?1:0;return n===0?`
        M ${o} ${o}
        L ${l.x} ${l.y}
        A ${r} ${r} 0 ${A} 1 ${d.x} ${d.y}
        Z
      `:`
      M ${l.x} ${l.y}
      A ${r} ${r} 0 ${A} 1 ${d.x} ${d.y}
      L ${p.x} ${p.y}
      A ${n} ${n} 0 ${A} 0 ${g.x} ${g.y}
      Z
    `};let T=0;const W=c.map((e,t)=>{const r=e.value/L*360,n=T,l=T+r;T=l;const d=(n+l)/2,p=N*.7,g=i(d,p);return{...e,startAngle:n,endAngle:l,midAngle:d,labelPos:g,percentage:(e.value/L*100).toFixed(1),color:e.color||q[t%q.length]}});return a.jsxs("div",{className:V("flex flex-col items-center",be),children:[a.jsxs("svg",{width:u,height:u,viewBox:`0 0 ${u} ${u}`,children:[W.map((e,t)=>a.jsxs("g",{children:[a.jsx("path",{d:Ce(e.startAngle,e.endAngle,N-2,ye),fill:e.color,className:V("hover:opacity-80 transition-opacity cursor-pointer",De&&"transition-all duration-500")}),xe&&e.endAngle-e.startAngle>20&&a.jsxs("text",{x:e.labelPos.x,y:e.labelPos.y,textAnchor:"middle",dominantBaseline:"middle",className:"text-[10px] font-medium fill-white pointer-events-none",children:[e.percentage,"%"]})]},t)),P&&z&&a.jsxs("g",{children:[a.jsx("text",{x:o,y:o-8,textAnchor:"middle",className:"text-[24px] font-bold fill-[var(--foreground)]",children:L}),a.jsx("text",{x:o,y:o+12,textAnchor:"middle",className:"text-[10px] fill-[var(--foreground-muted)]",children:"Total"})]})]}),ve&&a.jsx("div",{className:"flex flex-wrap justify-center gap-4 mt-4",children:W.map((e,t)=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-3 h-3 rounded-full shrink-0",style:{backgroundColor:e.color}}),a.jsx("span",{className:"text-sm text-[var(--foreground)]",children:e.label}),z&&a.jsxs("span",{className:"text-sm text-[var(--foreground-muted)]",children:["(",e.percentage,"%)"]})]},t))})]})};w.displayName="PieChart";const m=c=>a.jsx(w,{...c,donut:!0});m.displayName="DonutChart";w.__docgenInfo={description:`PieChart component following SmartSenior Design System

Pie/Donut chart with SVG`,methods:[],displayName:"PieChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"PieChartDataPoint"}],raw:"PieChartDataPoint[]"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},donut:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},donutWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showValues:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"DonutChart"};const Se={title:"Charts/PieChart",component:w,parameters:{layout:"centered"},tags:["autodocs"]},s=[{label:"Desktop",value:45},{label:"Mobile",value:35},{label:"Tablet",value:15},{label:"Outros",value:5}],he=[{label:"Marketing",value:3e4,color:"var(--primary)"},{label:"Desenvolvimento",value:5e4,color:"var(--success)"},{label:"Operações",value:25e3,color:"var(--warning)"},{label:"Suporte",value:15e3,color:"var(--info)"}],h={args:{data:s}},f={args:{data:s,donut:!0}},x={args:{data:s,size:300}},v={args:{data:s,showLabels:!0,size:250}},D={args:{data:s,showLegend:!1}},b={args:{data:he,size:250}},y={args:{data:s,donut:!0,donutWidth:20,size:200}},C={args:{data:s,donut:!0,donutWidth:60,size:250}},$={render:()=>a.jsx(m,{data:s})},j={render:()=>a.jsx(m,{data:s,showLabels:!0,size:250})},S={render:()=>a.jsx(m,{data:he,size:280})};var M,k,_;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: defaultData
  }
}`,...(_=(k=h.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var B,E,I;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    donut: true
  }
}`,...(I=(E=f.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var O,F,Z;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    size: 300
  }
}`,...(Z=(F=x.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var G,H,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    showLabels: true,
    size: 250
  }
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    showLegend: false
  }
}`,...(U=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,R;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data: budgetData,
    size: 250
  }
}`,...(R=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:R.source}}};var ee,ae,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    donut: true,
    donutWidth: 20,
    size: 200
  }
}`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,oe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    donut: true,
    donutWidth: 60,
    size: 250
  }
}`,...(oe=(se=C.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,le,de;$.parameters={...$.parameters,docs:{...(ne=$.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <DonutChart data={defaultData} />
}`,...(de=(le=$.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,ie;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <DonutChart data={defaultData} showLabels size={250} />
}`,...(ie=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var me,pe,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <DonutChart data={budgetData} size={280} />
}`,...(ge=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const we=["Default","Donut","LargeSize","WithLabels","NoLegend","CustomColors","ThinDonut","ThickDonut","DonutChartDefault","DonutChartWithLabels","DonutChartBudget"];export{b as CustomColors,h as Default,f as Donut,S as DonutChartBudget,$ as DonutChartDefault,j as DonutChartWithLabels,x as LargeSize,D as NoLegend,C as ThickDonut,y as ThinDonut,v as WithLabels,we as __namedExportsOrder,Se as default};
