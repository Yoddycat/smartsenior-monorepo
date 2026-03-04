import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function ye(...n){return n.filter(Boolean).join(" ")}const C=({series:n,height:ne=200,showDots:ie=!0,showArea:ce=!1,showGrid:ue=!0,showLabels:N=!0,showLegend:de=!0,curved:pe=!0,animated:M=!0,className:me})=>{const V=n.flatMap(a=>a.data.map(r=>r.value)),T=Math.max(...V),he=Math.min(...V,0),ge=T-he||1,h=["var(--primary)","var(--accent)","var(--success)","var(--warning)","var(--info)"],o={top:10,right:10,bottom:N?30:10,left:10},$=100,i=ne,j=(a,r,e)=>{const d=o.left+a/(e-1)*($-o.left-o.right),t=o.top+(T-r)/ge*(i-o.top-o.bottom);return{x:d,y:t}},D=(a,r=!1)=>{if(a.length===0)return"";const e=a.map((t,s)=>j(s,t.value,a.length));if(pe&&a.length>2){let t=`M ${e[0].x} ${e[0].y}`;for(let s=0;s<e.length-1;s++){const c=e[Math.max(0,s-1)],u=e[s],p=e[s+1],q=e[Math.min(e.length-1,s+2)],fe=u.x+(p.x-c.x)/6,ve=u.y+(p.y-c.y)/6,xe=p.x-(q.x-u.x)/6,be=p.y-(q.y-u.y)/6;t+=` C ${fe} ${ve}, ${xe} ${be}, ${p.x} ${p.y}`}if(r){const s=e[e.length-1],c=e[0],u=i-o.bottom;t+=` L ${s.x} ${u} L ${c.x} ${u} Z`}return t}let d=e.map((t,s)=>`${s===0?"M":"L"} ${t.x} ${t.y}`).join(" ");if(r){const t=e[e.length-1],s=e[0],c=i-o.bottom;d+=` L ${t.x} ${c} L ${s.x} ${c} Z`}return d};return l.jsxs("div",{className:ye("w-full",me),children:[l.jsxs("svg",{width:"100%",height:i,viewBox:`0 0 ${$} ${i}`,preserveAspectRatio:"none",children:[ue&&l.jsx("g",{className:"text-[var(--border)]",children:[0,.25,.5,.75,1].map((a,r)=>{const e=o.top+a*(i-o.top-o.bottom);return l.jsx("line",{x1:o.left,y1:e,x2:$-o.right,y2:e,stroke:"currentColor",strokeWidth:"0.2",strokeDasharray:"2,2"},r)})}),n.map((a,r)=>{const e=a.color||h[r%h.length];return l.jsxs("g",{children:[ce&&l.jsx("path",{d:D(a.data,!0),fill:e,fillOpacity:"0.1",className:M?"transition-all duration-500":""}),l.jsx("path",{d:D(a.data),fill:"none",stroke:e,strokeWidth:"0.5",strokeLinecap:"round",strokeLinejoin:"round",className:M?"transition-all duration-500":""}),ie&&a.data.map((d,t)=>{const s=j(t,d.value,a.data.length);return l.jsx("circle",{cx:s.x,cy:s.y,r:"1",fill:e,className:M?"transition-all duration-500":""},t)})]},r)}),N&&n[0]&&l.jsx("g",{children:n[0].data.map((a,r)=>{const e=j(r,a.value,n[0].data.length);return l.jsx("text",{x:e.x,y:i-5,textAnchor:"middle",className:"text-[3px] fill-[var(--foreground-muted)]",children:a.label},r)})})]}),de&&n.length>1&&l.jsx("div",{className:"flex items-center justify-center gap-4 mt-4",children:n.map((a,r)=>{const e=a.color||h[r%h.length];return l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:e}}),l.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:a.name})]},r)})})]})};C.displayName="LineChart";C.__docgenInfo={description:`LineChart component following SmartSenior Design System

Line/Area chart with SVG`,methods:[],displayName:"LineChart",props:{series:{required:!0,tsType:{name:"Array",elements:[{name:"LineChartSeries"}],raw:"LineChartSeries[]"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showArea:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showGrid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},curved:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Le={title:"Charts/LineChart",component:C,parameters:{layout:"padded"},tags:["autodocs"]},m=[{name:"Vendas",data:[{label:"Jan",value:120},{label:"Fev",value:180},{label:"Mar",value:150},{label:"Abr",value:220},{label:"Mai",value:190},{label:"Jun",value:280}]}],A=[{name:"Vendas",data:[{label:"Jan",value:120},{label:"Fev",value:180},{label:"Mar",value:150},{label:"Abr",value:220},{label:"Mai",value:190},{label:"Jun",value:280}],color:"var(--primary)"},{name:"Custos",data:[{label:"Jan",value:80},{label:"Fev",value:100},{label:"Mar",value:90},{label:"Abr",value:120},{label:"Mai",value:110},{label:"Jun",value:140}],color:"var(--error)"},{name:"Lucro",data:[{label:"Jan",value:40},{label:"Fev",value:80},{label:"Mar",value:60},{label:"Abr",value:100},{label:"Mai",value:80},{label:"Jun",value:140}],color:"var(--success)"}],g={args:{series:m}},f={args:{series:A}},v={args:{series:m,showArea:!0}},x={args:{series:A,showArea:!0}},b={args:{series:m,curved:!1}},y={args:{series:m,showDots:!1}},w={args:{series:m,showGrid:!1}},S={args:{series:m,showGrid:!1,showDots:!1,showLabels:!1,showLegend:!1}},L={args:{series:A,height:400,showArea:!0}};var k,G,J;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    series: singleSeries
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var P,F,_;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    series: multipleSeries
  }
}`,...(_=(F=f.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var R,W,B;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    series: singleSeries,
    showArea: true
  }
}`,...(B=(W=v.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,O,Z;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    series: multipleSeries,
    showArea: true
  }
}`,...(Z=(O=x.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var H,z,I;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    series: singleSeries,
    curved: false
  }
}`,...(I=(z=b.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    series: singleSeries,
    showDots: false
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    series: singleSeries,
    showGrid: false
  }
}`,...(ee=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,re,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    series: singleSeries,
    showGrid: false,
    showDots: false,
    showLabels: false,
    showLegend: false
  }
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,le,oe;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    series: multipleSeries,
    height: 400,
    showArea: true
  }
}`,...(oe=(le=L.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const Me=["Default","MultipleSeries","AreaChart","MultipleAreaChart","StraightLines","NoDots","NoGrid","Minimal","TallChart"];export{v as AreaChart,g as Default,S as Minimal,x as MultipleAreaChart,f as MultipleSeries,y as NoDots,w as NoGrid,b as StraightLines,L as TallChart,Me as __namedExportsOrder,Le as default};
