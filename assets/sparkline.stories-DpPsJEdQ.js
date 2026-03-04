import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function $e(...s){return s.filter(Boolean).join(" ")}const l=({data:s,width:$=100,height:o=30,color:D="var(--primary)",showArea:ue=!0,showDot:ge=!0,curved:xe=!0,className:fe})=>{if(s.length===0)return null;const k=Math.max(...s),he=Math.min(...s),ve=k-he||1,t=2,Ne=$-t*2,we=o-t*2,a=s.map((i,m)=>({x:t+m/(s.length-1)*Ne,y:t+(k-i)/ve*we})),T=(i=!1)=>{if(xe&&s.length>2){let n=`M ${a[0].x} ${a[0].y}`;for(let r=0;r<a.length-1;r++){const p=a[Math.max(0,r-1)],u=a[r],d=a[r+1],V=a[Math.min(a.length-1,r+2)],ye=u.x+(d.x-p.x)/6,Se=u.y+(d.y-p.y)/6,je=d.x-(V.x-u.x)/6,be=d.y-(V.y-u.y)/6;n+=` C ${ye} ${Se}, ${je} ${be}, ${d.x} ${d.y}`}if(i){const r=a[a.length-1],p=a[0];n+=` L ${r.x} ${o-t} L ${p.x} ${o-t} Z`}return n}let m=a.map((n,r)=>`${r===0?"M":"L"} ${n.x} ${n.y}`).join(" ");if(i){const n=a[a.length-1],r=a[0];m+=` L ${n.x} ${o-t} L ${r.x} ${o-t} Z`}return m},U=a[a.length-1];return e.jsxs("svg",{width:$,height:o,viewBox:`0 0 ${$} ${o}`,className:$e("inline-block",fe),children:[ue&&e.jsx("path",{d:T(!0),fill:D,fillOpacity:"0.1"}),e.jsx("path",{d:T(),fill:"none",stroke:D,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),ge&&e.jsx("circle",{cx:U.x,cy:U.y,r:"2.5",fill:D})]})};l.displayName="Sparkline";l.__docgenInfo={description:`Sparkline component following SmartSenior Design System

Compact inline chart`,methods:[],displayName:"Sparkline",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"30",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--primary)'",computed:!1}},showArea:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},curved:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Te={title:"Charts/Sparkline",component:l,parameters:{layout:"centered"},tags:["autodocs"]},c=[10,15,12,18,22,20,28,32,30,38,42,45],ie=[45,42,38,30,32,28,20,22,18,12,15,10],me=[20,35,15,40,25,45,20,50,30,55,35,60],pe=[30,32,31,29,30,31,30,32,31,30,29,31],g={args:{data:c}},x={args:{data:c,color:"var(--success)"}},f={args:{data:ie,color:"var(--error)"}},h={args:{data:me,color:"var(--warning)"}},v={args:{data:pe,color:"var(--info)"}},N={args:{data:c,width:200,height:40}},w={args:{data:c,showArea:!1}},y={args:{data:c,showDot:!1}},S={args:{data:me,curved:!1}},j={args:{data:c,showArea:!1,showDot:!1,curved:!1}},b={render:()=>e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[var(--card)] rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:"Receita"}),e.jsx(l,{data:c,color:"var(--success)",width:80,height:24}),e.jsx("span",{className:"text-sm font-medium text-[var(--success)]",children:"+12%"})]}),e.jsx("div",{className:"w-px h-6 bg-[var(--border)]"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:"Custos"}),e.jsx(l,{data:pe,color:"var(--info)",width:80,height:24}),e.jsx("span",{className:"text-sm font-medium text-[var(--foreground)]",children:"0%"})]}),e.jsx("div",{className:"w-px h-6 bg-[var(--border)]"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:"Churn"}),e.jsx(l,{data:ie,color:"var(--error)",width:80,height:24}),e.jsx("span",{className:"text-sm font-medium text-[var(--error)]",children:"-8%"})]})]})};var L,q,M;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: trendUp
  }
}`,...(M=(q=g.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var A,C,P;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: trendUp,
    color: 'var(--success)'
  }
}`,...(P=(C=x.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var R,W,_;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    data: trendDown,
    color: 'var(--error)'
  }
}`,...(_=(W=f.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var I,B,E;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: volatile,
    color: 'var(--warning)'
  }
}`,...(E=(B=h.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var O,Z,H;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: stable,
    color: 'var(--info)'
  }
}`,...(H=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var z,F,G;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: trendUp,
    width: 200,
    height: 40
  }
}`,...(G=(F=N.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: trendUp,
    showArea: false
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data: trendUp,
    showDot: false
  }
}`,...(ee=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,re,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    data: volatile,
    curved: false
  }
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,oe;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    data: trendUp,
    showArea: false,
    showDot: false,
    curved: false
  }
}`,...(oe=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,de,le;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 p-4 bg-[var(--card)] rounded-lg">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--foreground-muted)]">Receita</span>
        <Sparkline data={trendUp} color="var(--success)" width={80} height={24} />
        <span className="text-sm font-medium text-[var(--success)]">+12%</span>
      </div>
      <div className="w-px h-6 bg-[var(--border)]" />
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--foreground-muted)]">Custos</span>
        <Sparkline data={stable} color="var(--info)" width={80} height={24} />
        <span className="text-sm font-medium text-[var(--foreground)]">0%</span>
      </div>
      <div className="w-px h-6 bg-[var(--border)]" />
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--foreground-muted)]">Churn</span>
        <Sparkline data={trendDown} color="var(--error)" width={80} height={24} />
        <span className="text-sm font-medium text-[var(--error)]">-8%</span>
      </div>
    </div>
}`,...(le=(de=b.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};const Ue=["Default","TrendingUp","TrendingDown","Volatile","Stable","Wider","NoArea","NoDot","StraightLines","Minimal","InlineUsage"];export{g as Default,b as InlineUsage,j as Minimal,w as NoArea,y as NoDot,v as Stable,S as StraightLines,f as TrendingDown,x as TrendingUp,h as Volatile,N as Wider,Ue as __namedExportsOrder,Te as default};
