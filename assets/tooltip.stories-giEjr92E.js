import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-Dx_1l3Sb.js";import{B as s}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function ie(...y){return y.filter(Boolean).join(" ")}const n=({content:y,children:te,side:T="top",align:B="center",delayDuration:w=300,className:oe})=>{const[d,E]=i.useState(!1),[R,re]=i.useState({top:0,left:0}),j=i.useRef(null),k=i.useRef(null),a=i.useRef(null),C=i.useCallback(()=>{if(!j.current||!k.current)return;const t=j.current.getBoundingClientRect(),o=k.current.getBoundingClientRect(),r=8;let p=0,l=0;switch(T){case"top":p=t.top-o.height-r;break;case"bottom":p=t.bottom+r;break;case"left":case"right":p=t.top+(t.height-o.height)/2;break}switch(T){case"left":l=t.left-o.width-r;break;case"right":l=t.right+r;break;case"top":case"bottom":switch(B){case"start":l=t.left;break;case"end":l=t.right-o.width;break;case"center":default:l=t.left+(t.width-o.width)/2;break}break}re({top:p,left:l})},[T,B]),q=i.useCallback(()=>{a.current=setTimeout(()=>{E(!0)},w)},[w]),P=i.useCallback(()=>{a.current&&(clearTimeout(a.current),a.current=null),E(!1)},[]);i.useEffect(()=>{d&&C()},[d,C]),i.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]);const c=i.Children.only(te),ne=i.cloneElement(c,{ref:j,onMouseEnter:t=>{var o,r;q(),(r=(o=c.props).onMouseEnter)==null||r.call(o,t)},onMouseLeave:t=>{var o,r;P(),(r=(o=c.props).onMouseLeave)==null||r.call(o,t)},onFocus:t=>{var o,r;q(),(r=(o=c.props).onFocus)==null||r.call(o,t)},onBlur:t=>{var o,r;P(),(r=(o=c.props).onBlur)==null||r.call(o,t)},"aria-describedby":d?"tooltip":void 0});return e.jsxs(e.Fragment,{children:[ne,d&&e.jsx("div",{ref:k,id:"tooltip",role:"tooltip",className:ie("fixed z-50 px-3 py-2 max-w-xs","bg-[var(--foreground)] text-[var(--background)]","text-sm font-medium rounded-md shadow-lg","animate-in fade-in-50 zoom-in-95 duration-150",oe),style:{top:R.top,left:R.left},children:y})]})};n.displayName="Tooltip";n.__docgenInfo={description:`Tooltip component following SmartSenior Design System

Accessible tooltip with keyboard support`,methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ue={title:"Components/Tooltip",component:n,tags:["autodocs"],parameters:{layout:"centered"}},u={render:()=>e.jsx(n,{content:"Esta é uma dica de ferramenta",children:e.jsx(s,{children:"Passe o mouse aqui"})})},m={render:()=>e.jsx(n,{content:"Tooltip no topo",side:"top",children:e.jsx(s,{children:"Topo"})})},h={render:()=>e.jsx(n,{content:"Tooltip à direita",side:"right",children:e.jsx(s,{children:"Direita"})})},x={render:()=>e.jsx(n,{content:"Tooltip embaixo",side:"bottom",children:e.jsx(s,{children:"Embaixo"})})},g={render:()=>e.jsx(n,{content:"Tooltip à esquerda",side:"left",children:e.jsx(s,{children:"Esquerda"})})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"3rem",padding:"4rem"},children:[e.jsx(n,{content:"Posição: Topo",side:"top",children:e.jsx(s,{variant:"outline",children:"Topo"})}),e.jsxs("div",{style:{display:"flex",gap:"6rem"},children:[e.jsx(n,{content:"Posição: Esquerda",side:"left",children:e.jsx(s,{variant:"outline",children:"Esquerda"})}),e.jsx(n,{content:"Posição: Direita",side:"right",children:e.jsx(s,{variant:"outline",children:"Direita"})})]}),e.jsx(n,{content:"Posição: Embaixo",side:"bottom",children:e.jsx(s,{variant:"outline",children:"Embaixo"})})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{content:"Editar item",children:e.jsx("button",{style:{width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--background)",cursor:"pointer"},children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})})})}),e.jsx(n,{content:"Excluir item",children:e.jsx("button",{style:{width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--background)",cursor:"pointer"},children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})})})}),e.jsx(n,{content:"Compartilhar",children:e.jsx("button",{style:{width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border)",borderRadius:"8px",background:"var(--background)",cursor:"pointer"},children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"18",cy:"5",r:"3"}),e.jsx("circle",{cx:"6",cy:"12",r:"3"}),e.jsx("circle",{cx:"18",cy:"19",r:"3"}),e.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),e.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})})})]})},v={render:()=>e.jsx(n,{content:"Este é um tooltip com conteúdo mais longo que explica algo em detalhes. Ele pode ter várias linhas de texto.",children:e.jsx(s,{children:"Hover para mais informações"})})};var S,I,M;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Tooltip content="Esta é uma dica de ferramenta">
      <Button>Passe o mouse aqui</Button>
    </Tooltip>
}`,...(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var D,L,W;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Tooltip content="Tooltip no topo" side="top">
      <Button>Topo</Button>
    </Tooltip>
}`,...(W=(L=m.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var V,N,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Tooltip content="Tooltip à direita" side="right">
      <Button>Direita</Button>
    </Tooltip>
}`,...(H=(N=h.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var _,A,F;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Tooltip content="Tooltip embaixo" side="bottom">
      <Button>Embaixo</Button>
    </Tooltip>
}`,...(F=(A=x.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var O,z,Z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Tooltip content="Tooltip à esquerda" side="left">
      <Button>Esquerda</Button>
    </Tooltip>
}`,...(Z=(z=g.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    padding: '4rem'
  }}>
      <Tooltip content="Posição: Topo" side="top">
        <Button variant="outline">Topo</Button>
      </Tooltip>
      <div style={{
      display: 'flex',
      gap: '6rem'
    }}>
        <Tooltip content="Posição: Esquerda" side="left">
          <Button variant="outline">Esquerda</Button>
        </Tooltip>
        <Tooltip content="Posição: Direita" side="right">
          <Button variant="outline">Direita</Button>
        </Tooltip>
      </div>
      <Tooltip content="Posição: Embaixo" side="bottom">
        <Button variant="outline">Embaixo</Button>
      </Tooltip>
    </div>
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Tooltip content="Editar item">
        <button style={{
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        background: 'var(--background)',
        cursor: 'pointer'
      }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip content="Excluir item">
        <button style={{
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        background: 'var(--background)',
        cursor: 'pointer'
      }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip content="Compartilhar">
        <button style={{
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        background: 'var(--background)',
        cursor: 'pointer'
      }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      </Tooltip>
    </div>
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,$,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Tooltip content="Este é um tooltip com conteúdo mais longo que explica algo em detalhes. Ele pode ter várias linhas de texto.">
      <Button>Hover para mais informações</Button>
    </Tooltip>
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const me=["Default","Top","Right","Bottom","Left","AllPositions","WithIcon","LongContent"];export{f as AllPositions,x as Bottom,u as Default,g as Left,v as LongContent,h as Right,m as Top,b as WithIcon,me as __namedExportsOrder,ue as default};
