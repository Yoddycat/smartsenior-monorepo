import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function t(...a){return a.filter(Boolean).join(" ")}const i=d.forwardRef(({className:a,striped:l,hoverable:s,...j},f)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:f,className:t("w-full caption-bottom text-base",l&&"[&_tbody_tr:nth-child(even)]:bg-[var(--background-muted)]/50",s&&"[&_tbody_tr:hover]:bg-[var(--background-muted)]",a),...j})}));i.displayName="Table";const c=d.forwardRef(({className:a,...l},s)=>e.jsx("thead",{ref:s,className:t("[&_tr]:border-b",a),...l}));c.displayName="TableHeader";const b=d.forwardRef(({className:a,...l},s)=>e.jsx("tbody",{ref:s,className:t("[&_tr:last-child]:border-0",a),...l}));b.displayName="TableBody";const W=d.forwardRef(({className:a,...l},s)=>e.jsx("tfoot",{ref:s,className:t("border-t bg-[var(--background-muted)]/50 font-medium",a),...l}));W.displayName="TableFooter";const n=d.forwardRef(({className:a,...l},s)=>e.jsx("tr",{ref:s,className:t("border-b border-[var(--border)] transition-colors",a),...l}));n.displayName="TableRow";const r=d.forwardRef(({className:a,sortable:l,sortDirection:s,onSort:j,children:f,...A},F)=>e.jsx("th",{ref:F,className:t("h-12 px-4 text-left align-middle font-semibold text-[var(--foreground-muted)]",l&&"cursor-pointer select-none hover:text-[var(--foreground)]",a),onClick:l?j:void 0,...A,children:e.jsxs("div",{className:"flex items-center gap-2",children:[f,l&&e.jsxs("span",{className:"inline-flex flex-col",children:[e.jsx("svg",{className:t("w-3 h-3 -mb-1",s==="asc"?"text-[var(--foreground)]":"text-[var(--foreground-muted)]/50"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"18 15 12 9 6 15"})}),e.jsx("svg",{className:t("w-3 h-3",s==="desc"?"text-[var(--foreground)]":"text-[var(--foreground-muted)]/50"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})]})]})}));r.displayName="TableHead";const o=d.forwardRef(({className:a,...l},s)=>e.jsx("td",{ref:s,className:t("p-4 align-middle",a),...l}));o.displayName="TableCell";const y=d.forwardRef(({className:a,...l},s)=>e.jsx("caption",{ref:s,className:t("mt-4 text-sm text-[var(--foreground-muted)]",a),...l}));y.displayName="TableCaption";i.__docgenInfo={description:`Table component following SmartSenior Design System

Data table with accessible markup`,methods:[],displayName:"Table",props:{striped:{required:!1,tsType:{name:"boolean"},description:""},hoverable:{required:!1,tsType:{name:"boolean"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};W.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};r.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:""},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | null",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"null"}]},description:""},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"TableCell"};y.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const P={title:"Components/Table",component:i,tags:["autodocs"],parameters:{layout:"padded"}},m=[{id:1,nome:"João Silva",email:"joao@email.com",status:"Ativo"},{id:2,nome:"Maria Santos",email:"maria@email.com",status:"Pendente"},{id:3,nome:"Carlos Oliveira",email:"carlos@email.com",status:"Inativo"},{id:4,nome:"Ana Costa",email:"ana@email.com",status:"Ativo"}],T={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Nome"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Status"})]})}),e.jsx(b,{children:m.map(a=>e.jsxs(n,{children:[e.jsx(o,{children:a.nome}),e.jsx(o,{children:a.email}),e.jsx(o,{children:a.status})]},a.id))})]})},p={render:()=>e.jsxs(i,{striped:!0,children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Nome"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Status"})]})}),e.jsx(b,{children:m.map(a=>e.jsxs(n,{children:[e.jsx(o,{children:a.nome}),e.jsx(o,{children:a.email}),e.jsx(o,{children:a.status})]},a.id))})]})},u={render:()=>e.jsxs(i,{hoverable:!0,children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Nome"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Status"})]})}),e.jsx(b,{children:m.map(a=>e.jsxs(n,{children:[e.jsx(o,{children:a.nome}),e.jsx(o,{children:a.email}),e.jsx(o,{children:a.status})]},a.id))})]})},x={render:()=>e.jsxs(i,{children:[e.jsx(y,{children:"Lista de usuários cadastrados"}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Nome"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Status"})]})}),e.jsx(b,{children:m.map(a=>e.jsxs(n,{children:[e.jsx(o,{children:a.nome}),e.jsx(o,{children:a.email}),e.jsx(o,{children:a.status})]},a.id))})]})},h={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(r,{sortable:!0,sortDirection:"asc",onSort:()=>alert("Sort by name"),children:"Nome"}),e.jsx(r,{sortable:!0,onSort:()=>alert("Sort by email"),children:"Email"}),e.jsx(r,{sortable:!0,sortDirection:"desc",onSort:()=>alert("Sort by status"),children:"Status"})]})}),e.jsx(b,{children:m.map(a=>e.jsxs(n,{children:[e.jsx(o,{children:a.nome}),e.jsx(o,{children:a.email}),e.jsx(o,{children:a.status})]},a.id))})]})};var w,H,C;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(row => <TableRow key={row.id}>
            <TableCell>{row.nome}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(C=(H=T.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var N,g,v;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Table striped>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(row => <TableRow key={row.id}>
            <TableCell>{row.nome}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(v=(g=p.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,R,_;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Table hoverable>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(row => <TableRow key={row.id}>
            <TableCell>{row.nome}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(_=(R=u.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var B,k,E;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>Lista de usuários cadastrados</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(row => <TableRow key={row.id}>
            <TableCell>{row.nome}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(E=(k=x.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var I,D,q;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead sortable sortDirection="asc" onSort={() => alert('Sort by name')}>Nome</TableHead>
          <TableHead sortable onSort={() => alert('Sort by email')}>Email</TableHead>
          <TableHead sortable sortDirection="desc" onSort={() => alert('Sort by status')}>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(row => <TableRow key={row.id}>
            <TableCell>{row.nome}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(q=(D=h.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const z=["Default","Striped","Hoverable","WithCaption","Sortable"];export{T as Default,u as Hoverable,h as Sortable,p as Striped,x as WithCaption,z as __namedExportsOrder,P as default};
