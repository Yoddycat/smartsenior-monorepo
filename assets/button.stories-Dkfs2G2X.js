import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{B as a}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";const P={title:"Components/Button",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","accent","secondary","destructive","outline","ghost","link"]},size:{control:"select",options:["sm","md","lg","icon"]},disabled:{control:"boolean"}}},t={args:{children:"Botão Primário",variant:"primary",size:"md"}},e={args:{children:"Chamada para Ação",variant:"accent",size:"lg"}},n={args:{children:"Secundário",variant:"secondary"}},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"accent",children:"Accent"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"destructive",children:"Destructive"}),r.jsx(a,{variant:"outline",children:"Outline"}),r.jsx(a,{variant:"ghost",children:"Ghost"}),r.jsx(a,{variant:"link",children:"Link"})]})};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Botão Primário',
    variant: 'primary',
    size: 'md'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Chamada para Ação',
    variant: 'accent',
    size: 'lg'
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Secundário',
    variant: 'secondary'
  }
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var y,h,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const k=["Primary","Accent","Secondary","AllVariants"];export{e as Accent,o as AllVariants,t as Primary,n as Secondary,k as __namedExportsOrder,P as default};
