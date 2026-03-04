import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as F}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function b(...s){return s.filter(Boolean).join(" ")}const a=F.forwardRef(({className:s,cols:n=1,gap:i="md",responsive:l=!0,...p},u)=>{const g={1:"grid-cols-1",2:l?"grid-cols-1 sm:grid-cols-2":"grid-cols-2",3:l?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3":"grid-cols-3",4:l?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-4":"grid-cols-4",5:l?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5":"grid-cols-5",6:l?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6":"grid-cols-6",12:l?"grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12":"grid-cols-12"},R={none:"gap-0",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"};return e.jsx("div",{ref:u,className:b("grid",g[n],R[i],s),...p})});a.displayName="Grid";const o=F.forwardRef(({className:s,colSpan:n,rowSpan:i,...l},p)=>{const u={1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",12:"col-span-12",full:"col-span-full"},g={1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6"};return e.jsx("div",{ref:p,className:b(n&&u[n],i&&g[i],s),...l})});o.displayName="GridItem";a.__docgenInfo={description:`Grid component following SmartSenior Design System

CSS Grid layout helper`,methods:[],displayName:"Grid",props:{cols:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"1",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"GridItem",props:{colSpan:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"},{name:"literal",value:"'full'"}]},description:""},rowSpan:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:""}}};const k={title:"Components/Grid",component:a,tags:["autodocs"],parameters:{layout:"padded"}},r=({children:s})=>e.jsx("div",{style:{padding:"1rem",background:"var(--background-muted)",borderRadius:"8px",textAlign:"center"},children:s}),d={args:{cols:2,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"})]})}},c={args:{cols:3,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"}),e.jsx(r,{children:"6"})]})}},t={args:{cols:4,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"})]})}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:'gap="sm"'}),e.jsxs(a,{cols:3,gap:"sm",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:'gap="md"'}),e.jsxs(a,{cols:3,gap:"md",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem"},children:'gap="lg"'}),e.jsxs(a,{cols:3,gap:"lg",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]})]})},x={render:()=>e.jsxs(a,{cols:4,gap:"md",children:[e.jsx(o,{colSpan:2,children:e.jsx(r,{children:"2 colunas"})}),e.jsx(r,{children:"1"}),e.jsx(r,{children:"1"}),e.jsx(r,{children:"1"}),e.jsx(o,{colSpan:3,children:e.jsx(r,{children:"3 colunas"})}),e.jsx(o,{colSpan:"full",children:e.jsx(r,{children:"Linha inteira"})})]})};var B,h,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    cols: 2,
    children: <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </>
  }
}`,...(j=(h=d.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var v,f,G;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    cols: 3,
    children: <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </>
  }
}`,...(G=(f=c.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};var y,S,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    cols: 4,
    children: <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </>
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,I,T;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>gap="sm"</p>
        <Grid cols={3} gap="sm">
          <Box>1</Box><Box>2</Box><Box>3</Box>
        </Grid>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>gap="md"</p>
        <Grid cols={3} gap="md">
          <Box>1</Box><Box>2</Box><Box>3</Box>
        </Grid>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>gap="lg"</p>
        <Grid cols={3} gap="lg">
          <Box>1</Box><Box>2</Box><Box>3</Box>
        </Grid>
      </div>
    </div>
}`,...(T=(I=m.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var N,_,q;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Grid cols={4} gap="md">
      <GridItem colSpan={2}><Box>2 colunas</Box></GridItem>
      <Box>1</Box>
      <Box>1</Box>
      <Box>1</Box>
      <GridItem colSpan={3}><Box>3 colunas</Box></GridItem>
      <GridItem colSpan="full"><Box>Linha inteira</Box></GridItem>
    </Grid>
}`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const L=["TwoColumns","ThreeColumns","FourColumns","WithGaps","WithSpans"];export{t as FourColumns,c as ThreeColumns,d as TwoColumns,m as WithGaps,x as WithSpans,L as __namedExportsOrder,k as default};
