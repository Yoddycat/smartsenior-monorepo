import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function h(...i){return i.filter(Boolean).join(" ")}const r=C.forwardRef(({className:i,size:x="lg",centered:v=!0,padding:f=!0,...b},k)=>{const y={sm:"max-w-screen-sm",md:"max-w-screen-md",lg:"max-w-screen-lg",xl:"max-w-screen-xl",full:"max-w-full"};return e.jsx("div",{ref:k,className:h("w-full",y[x],v&&"mx-auto",f&&"px-4 sm:px-6 lg:px-8",i),...b})});r.displayName="Container";r.__docgenInfo={description:`Container component following SmartSenior Design System

Responsive container for page content`,methods:[],displayName:"Container",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const D={title:"Components/Container",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}},a={args:{children:e.jsx("div",{style:{padding:"2rem",background:"var(--background-muted)"},children:"Container padrão (lg - 1024px)"})}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{size:"sm",children:e.jsx("div",{style:{padding:"1rem",background:"var(--background-muted)"},children:"sm (640px)"})}),e.jsx(r,{size:"md",children:e.jsx("div",{style:{padding:"1rem",background:"var(--background-muted)"},children:"md (768px)"})}),e.jsx(r,{size:"lg",children:e.jsx("div",{style:{padding:"1rem",background:"var(--background-muted)"},children:"lg (1024px)"})}),e.jsx(r,{size:"xl",children:e.jsx("div",{style:{padding:"1rem",background:"var(--background-muted)"},children:"xl (1280px)"})}),e.jsx(r,{size:"full",children:e.jsx("div",{style:{padding:"1rem",background:"var(--background-muted)"},children:"full (100%)"})})]})},d={args:{padding:!1,children:e.jsx("div",{style:{padding:"2rem",background:"var(--background-muted)"},children:"Container sem padding"})}};var s,l,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      padding: '2rem',
      background: 'var(--background-muted)'
    }}>
        Container padrão (lg - 1024px)
      </div>
  }
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var t,m,u;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Container size="sm">
        <div style={{
        padding: '1rem',
        background: 'var(--background-muted)'
      }}>
          sm (640px)
        </div>
      </Container>
      <Container size="md">
        <div style={{
        padding: '1rem',
        background: 'var(--background-muted)'
      }}>
          md (768px)
        </div>
      </Container>
      <Container size="lg">
        <div style={{
        padding: '1rem',
        background: 'var(--background-muted)'
      }}>
          lg (1024px)
        </div>
      </Container>
      <Container size="xl">
        <div style={{
        padding: '1rem',
        background: 'var(--background-muted)'
      }}>
          xl (1280px)
        </div>
      </Container>
      <Container size="full">
        <div style={{
        padding: '1rem',
        background: 'var(--background-muted)'
      }}>
          full (100%)
        </div>
      </Container>
    </div>
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,g;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    padding: false,
    children: <div style={{
      padding: '2rem',
      background: 'var(--background-muted)'
    }}>
        Container sem padding
      </div>
  }
}`,...(g=(p=d.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const N=["Default","AllSizes","NoPadding"];export{n as AllSizes,a as Default,d as NoPadding,N as __namedExportsOrder,D as default};
