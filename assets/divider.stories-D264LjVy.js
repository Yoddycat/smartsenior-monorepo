import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as T}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function r(...t){return t.filter(Boolean).join(" ")}const a=T.forwardRef(({className:t,orientation:o="horizontal",variant:s="solid",label:u,...h},v)=>{const n={solid:"border-solid",dashed:"border-dashed",dotted:"border-dotted"};return u&&o==="horizontal"?e.jsxs("div",{ref:v,className:r("flex items-center gap-4 w-full",t),role:"separator","aria-orientation":o,...h,children:[e.jsx("div",{className:r("flex-1 border-t border-[var(--border)]",n[s])}),e.jsx("span",{className:"text-sm text-[var(--foreground-muted)] shrink-0",children:u}),e.jsx("div",{className:r("flex-1 border-t border-[var(--border)]",n[s])})]}):e.jsx("div",{ref:v,role:"separator","aria-orientation":o,className:r(r(o==="horizontal"?"w-full border-t border-[var(--border)]":"h-full border-l border-[var(--border)]",n[s]),t),...h})});a.displayName="Divider";a.__docgenInfo={description:`Divider component following SmartSenior Design System

Visual separator for content sections`,methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Components/Divider",component:a,tags:["autodocs"],parameters:{layout:"centered"}},d={args:{style:{width:"300px"}}},i={args:{label:"ou",style:{width:"300px"}}},l={args:{variant:"dashed",style:{width:"300px"}}},m={args:{variant:"dotted",style:{width:"300px"}}},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100px",gap:"1rem"},children:[e.jsx("span",{children:"Item 1"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{children:"Item 2"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{children:"Item 3"})]})},p={render:()=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Seção 1"}),e.jsx("p",{style:{marginBottom:"1rem",color:"var(--foreground-muted)"},children:"Conteúdo da primeira seção."}),e.jsx(a,{}),e.jsx("h3",{style:{margin:"1rem 0"},children:"Seção 2"}),e.jsx("p",{style:{color:"var(--foreground-muted)"},children:"Conteúdo da segunda seção."})]})};var x,g,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    style: {
      width: '300px'
    }
  }
}`,...(f=(g=d.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,j,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'ou',
    style: {
      width: '300px'
    }
  }
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,D,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'dashed',
    style: {
      width: '300px'
    }
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var I,z,C;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'dotted',
    style: {
      width: '300px'
    }
  }
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var N,B,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '100px',
    gap: '1rem'
  }}>
      <span>Item 1</span>
      <Divider orientation="vertical" />
      <span>Item 2</span>
      <Divider orientation="vertical" />
      <span>Item 3</span>
    </div>
}`,...(V=(B=c.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var _,q,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <h3 style={{
      marginBottom: '1rem'
    }}>Seção 1</h3>
      <p style={{
      marginBottom: '1rem',
      color: 'var(--foreground-muted)'
    }}>
        Conteúdo da primeira seção.
      </p>
      <Divider />
      <h3 style={{
      margin: '1rem 0'
    }}>Seção 2</h3>
      <p style={{
      color: 'var(--foreground-muted)'
    }}>
        Conteúdo da segunda seção.
      </p>
    </div>
}`,...(E=(q=p.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const O=["Horizontal","WithLabel","Dashed","Dotted","Vertical","InContent"];export{l as Dashed,m as Dotted,d as Horizontal,p as InContent,c as Vertical,i as WithLabel,O as __namedExportsOrder,k as default};
