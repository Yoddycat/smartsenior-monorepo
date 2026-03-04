import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as ae}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function P(...t){return t.filter(Boolean).join(" ")}const r=ae.forwardRef(({className:t,value:u=0,max:c=100,variant:s="default",size:i="md",showLabel:m=!1,label:l,...C},z)=>{const o=Math.min(Math.max(u/c*100,0),100),n={sm:"h-1.5",md:"h-2.5",lg:"h-4"},d={default:"bg-[var(--primary)]",success:"bg-[var(--success)]",warning:"bg-[var(--warning)]",error:"bg-[var(--error)]",info:"bg-[var(--info)]"};return e.jsxs("div",{className:P("w-full",t),children:[(m||l)&&e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l&&e.jsx("span",{className:"text-sm font-medium text-[var(--foreground)]",children:l}),m&&e.jsxs("span",{className:"text-sm font-medium text-[var(--foreground-muted)]",children:[Math.round(o),"%"]})]}),e.jsx("div",{ref:z,role:"progressbar","aria-valuemin":0,"aria-valuemax":c,"aria-valuenow":u,"aria-label":l||`${Math.round(o)}% completo`,className:P("w-full overflow-hidden rounded-full","bg-[var(--background-muted)]",n[i]),...C,children:e.jsx("div",{className:P("h-full rounded-full transition-all duration-300 ease-out",d[s]),style:{width:`${o}%`}})})]})});r.displayName="Progress";const a=ae.forwardRef(({className:t,value:u=0,max:c=100,size:s=80,strokeWidth:i=8,variant:m="default",showLabel:l=!0,...C},z)=>{const o=Math.min(Math.max(u/c*100,0),100),n=(s-i)/2,d=n*2*Math.PI,se=d-o/100*d,le={default:"var(--primary)",success:"var(--success)",warning:"var(--warning)",error:"var(--error)",info:"var(--info)"};return e.jsxs("div",{className:P("relative inline-flex items-center justify-center",t),children:[e.jsxs("svg",{ref:z,width:s,height:s,className:"transform -rotate-90",...C,children:[e.jsx("circle",{cx:s/2,cy:s/2,r:n,fill:"none",stroke:"var(--background-muted)",strokeWidth:i}),e.jsx("circle",{cx:s/2,cy:s/2,r:n,fill:"none",stroke:le[m],strokeWidth:i,strokeLinecap:"round",strokeDasharray:d,strokeDashoffset:se,className:"transition-all duration-300 ease-out"})]}),l&&e.jsxs("span",{className:"absolute text-base font-semibold text-[var(--foreground)]",children:[Math.round(o),"%"]})]})});a.displayName="CircularProgress";r.__docgenInfo={description:`Progress component following SmartSenior Design System

Accessible progress bar with visual indicators`,methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"CircularProgress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const de={title:"Components/Progress",component:r,tags:["autodocs"],parameters:{layout:"centered"}},p={args:{value:60,style:{width:"300px"}}},v={args:{value:75,showLabel:!0,label:"Progresso",style:{width:"300px"}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"300px"},children:[e.jsx(r,{value:60,label:"Default",showLabel:!0}),e.jsx(r,{value:100,variant:"success",label:"Sucesso",showLabel:!0}),e.jsx(r,{value:45,variant:"warning",label:"Aviso",showLabel:!0}),e.jsx(r,{value:20,variant:"error",label:"Erro",showLabel:!0}),e.jsx(r,{value:80,variant:"info",label:"Info",showLabel:!0})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Pequeno (sm)"}),e.jsx(r,{value:60,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Médio (md)"}),e.jsx(r,{value:60,size:"md"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Grande (lg)"}),e.jsx(r,{value:60,size:"lg"})]})]})},x={render:()=>e.jsx(a,{value:75})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[e.jsx(a,{value:60,variant:"default"}),e.jsx(a,{value:100,variant:"success"}),e.jsx(a,{value:45,variant:"warning"}),e.jsx(a,{value:20,variant:"error"}),e.jsx(a,{value:80,variant:"info"})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx(a,{value:75,size:60,strokeWidth:6}),e.jsx(a,{value:75,size:80,strokeWidth:8}),e.jsx(a,{value:75,size:100,strokeWidth:10}),e.jsx(a,{value:75,size:120,strokeWidth:12})]})},b={render:()=>e.jsxs("div",{style:{width:"350px",padding:"1.5rem",border:"1px solid var(--border)",borderRadius:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsx("span",{style:{fontWeight:500},children:"Baixando arquivo..."}),e.jsx("span",{style:{color:"var(--foreground-muted)",fontSize:"0.875rem"},children:"2.4 MB / 5.0 MB"})]}),e.jsx(r,{value:48,size:"md"})]})},j={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem",padding:"1.5rem",border:"1px solid var(--border)",borderRadius:"12px"},children:[e.jsx(a,{value:65,variant:"info",size:80}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 0.5rem",fontWeight:600},children:"Complete seu perfil"}),e.jsx("p",{style:{margin:0,color:"var(--foreground-muted)",fontSize:"0.875rem"},children:"Adicione mais informações para completar seu perfil."})]})]})},w={render:()=>e.jsxs("div",{style:{width:"400px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontWeight:500},children:"Etapa 2 de 4"}),e.jsx("span",{style:{color:"var(--foreground-muted)"},children:"50%"})]}),e.jsx(r,{value:50,variant:"info",size:"lg"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.75rem",fontSize:"0.875rem",color:"var(--foreground-muted)"},children:[e.jsx("span",{children:"Dados"}),e.jsx("span",{children:"Endereço"}),e.jsx("span",{children:"Pagamento"}),e.jsx("span",{children:"Revisão"})]})]})};var S,k,B;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 60,
    style: {
      width: '300px'
    }
  }
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var W,q,L;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 75,
    showLabel: true,
    label: 'Progresso',
    style: {
      width: '300px'
    }
  }
}`,...(L=(q=v.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var D,V,M;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '300px'
  }}>
      <Progress value={60} label="Default" showLabel />
      <Progress value={100} variant="success" label="Sucesso" showLabel />
      <Progress value={45} variant="warning" label="Aviso" showLabel />
      <Progress value={20} variant="error" label="Erro" showLabel />
      <Progress value={80} variant="info" label="Info" showLabel />
    </div>
}`,...(M=(V=f.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var N,T,A;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '300px'
  }}>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Pequeno (sm)
        </span>
        <Progress value={60} size="sm" />
      </div>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Médio (md)
        </span>
        <Progress value={60} size="md" />
      </div>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Grande (lg)
        </span>
        <Progress value={60} size="lg" />
      </div>
    </div>
}`,...(A=(T=g.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var E,I,R;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <CircularProgress value={75} />
}`,...(R=(I=x.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var _,G,$;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>
      <CircularProgress value={60} variant="default" />
      <CircularProgress value={100} variant="success" />
      <CircularProgress value={45} variant="warning" />
      <CircularProgress value={20} variant="error" />
      <CircularProgress value={80} variant="info" />
    </div>
}`,...($=(G=h.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var O,F,H;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  }}>
      <CircularProgress value={75} size={60} strokeWidth={6} />
      <CircularProgress value={75} size={80} strokeWidth={8} />
      <CircularProgress value={75} size={100} strokeWidth={10} />
      <CircularProgress value={75} size={120} strokeWidth={12} />
    </div>
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '350px',
    padding: '1.5rem',
    border: '1px solid var(--border)',
    borderRadius: '12px'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem'
    }}>
        <span style={{
        fontWeight: 500
      }}>Baixando arquivo...</span>
        <span style={{
        color: 'var(--foreground-muted)',
        fontSize: '0.875rem'
      }}>2.4 MB / 5.0 MB</span>
      </div>
      <Progress value={48} size="md" />
    </div>
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.5rem',
    border: '1px solid var(--border)',
    borderRadius: '12px'
  }}>
      <CircularProgress value={65} variant="info" size={80} />
      <div>
        <h3 style={{
        margin: '0 0 0.5rem',
        fontWeight: 600
      }}>Complete seu perfil</h3>
        <p style={{
        margin: 0,
        color: 'var(--foreground-muted)',
        fontSize: '0.875rem'
      }}>
          Adicione mais informações para completar seu perfil.
        </p>
      </div>
    </div>
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    }}>
        <span style={{
        fontWeight: 500
      }}>Etapa 2 de 4</span>
        <span style={{
        color: 'var(--foreground-muted)'
      }}>50%</span>
      </div>
      <Progress value={50} variant="info" size="lg" />
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '0.75rem',
      fontSize: '0.875rem',
      color: 'var(--foreground-muted)'
    }}>
        <span>Dados</span>
        <span>Endereço</span>
        <span>Pagamento</span>
        <span>Revisão</span>
      </div>
    </div>
}`,...(re=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ue=["Default","WithLabel","AllVariants","AllSizes","Circular","CircularAllVariants","CircularSizes","DownloadProgress","ProfileCompletion","StepProgress"];export{g as AllSizes,f as AllVariants,x as Circular,h as CircularAllVariants,y as CircularSizes,p as Default,b as DownloadProgress,j as ProfileCompletion,w as StepProgress,v as WithLabel,ue as __namedExportsOrder,de as default};
