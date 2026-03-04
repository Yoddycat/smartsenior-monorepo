import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-Dx_1l3Sb.js";import{B as a}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function l(...t){return t.filter(Boolean).join(" ")}const s=o.forwardRef(({open:t,onClose:r,children:n,side:u="right",size:P="md",className:z},E)=>{if(o.useEffect(()=>{const y=L=>{L.key==="Escape"&&t&&r()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[t,r]),o.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),!t)return null;const H={left:{sm:"w-64",md:"w-80",lg:"w-96",xl:"w-[480px]",full:"w-full"},right:{sm:"w-64",md:"w-80",lg:"w-96",xl:"w-[480px]",full:"w-full"},top:{sm:"h-48",md:"h-64",lg:"h-96",xl:"h-[480px]",full:"h-full"},bottom:{sm:"h-48",md:"h-64",lg:"h-96",xl:"h-[480px]",full:"h-full"}},W={left:"inset-y-0 left-0 animate-in slide-in-from-left duration-300",right:"inset-y-0 right-0 animate-in slide-in-from-right duration-300",top:"inset-x-0 top-0 animate-in slide-in-from-top duration-300",bottom:"inset-x-0 bottom-0 animate-in slide-in-from-bottom duration-300"};return e.jsxs("div",{className:"fixed inset-0 z-50",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"fixed inset-0 bg-black/50 animate-in fade-in duration-300",onClick:r,"aria-hidden":"true"}),e.jsx("div",{ref:E,className:l("fixed bg-[var(--background)] shadow-xl flex flex-col",W[u],H[u][P],z),children:n})]})});s.displayName="Drawer";const i=o.forwardRef(({className:t,...r},n)=>e.jsx("div",{ref:n,className:l("flex items-center justify-between p-6 border-b border-[var(--border)]",t),...r}));i.displayName="DrawerHeader";const d=o.forwardRef(({className:t,...r},n)=>e.jsx("h2",{ref:n,className:l("text-xl font-semibold text-[var(--foreground)]",t),...r}));d.displayName="DrawerTitle";const D=o.forwardRef(({className:t,...r},n)=>e.jsx("p",{ref:n,className:l("text-base text-[var(--foreground-muted)]",t),...r}));D.displayName="DrawerDescription";const c=o.forwardRef(({className:t,...r},n)=>e.jsx("div",{ref:n,className:l("flex-1 overflow-y-auto p-6",t),...r}));c.displayName="DrawerContent";const m=o.forwardRef(({className:t,...r},n)=>e.jsx("div",{ref:n,className:l("flex items-center justify-end gap-3 p-6 border-t border-[var(--border)]",t),...r}));m.displayName="DrawerFooter";const p=o.forwardRef(({className:t,onClose:r,...n},u)=>e.jsx("button",{ref:u,onClick:r,className:l("p-2 rounded-md","text-[var(--foreground-muted)] hover:text-[var(--foreground)]","hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]","transition-colors",t),"aria-label":"Fechar",...n,children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}));p.displayName="DrawerClose";s.__docgenInfo={description:`Drawer/Sheet component following SmartSenior Design System

Slide-out panel overlay`,methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},side:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader"};d.__docgenInfo={description:"",methods:[],displayName:"DrawerTitle"};D.__docgenInfo={description:"",methods:[],displayName:"DrawerDescription"};c.__docgenInfo={description:"",methods:[],displayName:"DrawerContent"};m.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter"};p.__docgenInfo={description:"",methods:[],displayName:"DrawerClose",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const K={title:"Components/Drawer",component:s,tags:["autodocs"],parameters:{layout:"centered"}},x={render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Abrir Drawer"}),e.jsxs(s,{open:t,onClose:()=>r(!1),children:[e.jsxs(i,{children:[e.jsx(d,{children:"Título do Drawer"}),e.jsx(p,{onClose:()=>r(!1)})]}),e.jsx(c,{children:e.jsx("p",{children:"Conteúdo do drawer. Você pode adicionar qualquer elemento aqui."})}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>r(!1),children:"Cancelar"}),e.jsx(a,{variant:"primary",onClick:()=>r(!1),children:"Salvar"})]})]})]})}},f={render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Drawer Esquerda"}),e.jsxs(s,{open:t,onClose:()=>r(!1),side:"left",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Menu"}),e.jsx(p,{onClose:()=>r(!1)})]}),e.jsx(c,{children:e.jsxs("nav",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("a",{href:"#",style:{padding:"0.75rem",borderRadius:"8px",textDecoration:"none",color:"inherit"},children:"Início"}),e.jsx("a",{href:"#",style:{padding:"0.75rem",borderRadius:"8px",textDecoration:"none",color:"inherit"},children:"Produtos"}),e.jsx("a",{href:"#",style:{padding:"0.75rem",borderRadius:"8px",textDecoration:"none",color:"inherit"},children:"Contato"})]})})]})]})}},h={render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Drawer Inferior"}),e.jsxs(s,{open:t,onClose:()=>r(!1),side:"bottom",size:"sm",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Filtros"}),e.jsx(p,{onClose:()=>r(!1)})]}),e.jsx(c,{children:e.jsx("p",{children:"Opções de filtro apareceriam aqui."})})]})]})}},w={render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Drawer Grande"}),e.jsxs(s,{open:t,onClose:()=>r(!1),size:"lg",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Detalhes do Pedido"}),e.jsx(p,{onClose:()=>r(!1)})]}),e.jsx(c,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Informações"}),e.jsx("p",{style:{color:"var(--foreground-muted)"},children:"Pedido #12345"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Itens"}),e.jsxs("ul",{style:{paddingLeft:"1.5rem"},children:[e.jsx("li",{children:"Produto A - R$ 99,00"}),e.jsx("li",{children:"Produto B - R$ 149,00"}),e.jsx("li",{children:"Produto C - R$ 79,00"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Total"}),e.jsx("p",{style:{fontSize:"1.5rem",fontWeight:"bold"},children:"R$ 327,00"})]})]})}),e.jsx(m,{children:e.jsx(a,{variant:"primary",onClick:()=>r(!1),children:"Fechar"})})]})]})}},g={render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Novo Contato"}),e.jsxs(s,{open:t,onClose:()=>r(!1),size:"md",children:[e.jsxs(i,{children:[e.jsxs("div",{children:[e.jsx(d,{children:"Adicionar Contato"}),e.jsx(D,{children:"Preencha os dados do novo contato."})]}),e.jsx(p,{onClose:()=>r(!1)})]}),e.jsx(c,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Nome"}),e.jsx("input",{type:"text",placeholder:"Nome completo",style:{width:"100%",height:"44px",padding:"0 12px",border:"1px solid var(--border)",borderRadius:"8px"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Email"}),e.jsx("input",{type:"email",placeholder:"email@exemplo.com",style:{width:"100%",height:"44px",padding:"0 12px",border:"1px solid var(--border)",borderRadius:"8px"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Telefone"}),e.jsx("input",{type:"tel",placeholder:"(00) 00000-0000",style:{width:"100%",height:"44px",padding:"0 12px",border:"1px solid var(--border)",borderRadius:"8px"}})]})]})}),e.jsxs(m,{children:[e.jsx(a,{variant:"ghost",onClick:()=>r(!1),children:"Cancelar"}),e.jsx(a,{variant:"primary",onClick:()=>r(!1),children:"Salvar"})]})]})]})}};var v,j,C;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Abrir Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <DrawerHeader>
            <DrawerTitle>Título do Drawer</DrawerTitle>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <p>Conteúdo do drawer. Você pode adicionar qualquer elemento aqui.</p>
          </DrawerContent>
          <DrawerFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Salvar</Button>
          </DrawerFooter>
        </Drawer>
      </>;
  }
}`,...(C=(j=x.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var b,B,k;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Drawer Esquerda</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="left">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
              <a href="#" style={{
              padding: '0.75rem',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit'
            }}>Início</a>
              <a href="#" style={{
              padding: '0.75rem',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit'
            }}>Produtos</a>
              <a href="#" style={{
              padding: '0.75rem',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit'
            }}>Contato</a>
            </nav>
          </DrawerContent>
        </Drawer>
      </>;
  }
}`,...(k=(B=f.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var N,O,R;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Drawer Inferior</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="bottom" size="sm">
          <DrawerHeader>
            <DrawerTitle>Filtros</DrawerTitle>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <p>Opções de filtro apareceriam aqui.</p>
          </DrawerContent>
        </Drawer>
      </>;
  }
}`,...(R=(O=h.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var S,T,F;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Drawer Grande</Button>
        <Drawer open={open} onClose={() => setOpen(false)} size="lg">
          <DrawerHeader>
            <DrawerTitle>Detalhes do Pedido</DrawerTitle>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
              <div>
                <h4 style={{
                marginBottom: '0.5rem'
              }}>Informações</h4>
                <p style={{
                color: 'var(--foreground-muted)'
              }}>Pedido #12345</p>
              </div>
              <div>
                <h4 style={{
                marginBottom: '0.5rem'
              }}>Itens</h4>
                <ul style={{
                paddingLeft: '1.5rem'
              }}>
                  <li>Produto A - R$ 99,00</li>
                  <li>Produto B - R$ 149,00</li>
                  <li>Produto C - R$ 79,00</li>
                </ul>
              </div>
              <div>
                <h4 style={{
                marginBottom: '0.5rem'
              }}>Total</h4>
                <p style={{
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>R$ 327,00</p>
              </div>
            </div>
          </DrawerContent>
          <DrawerFooter>
            <Button variant="primary" onClick={() => setOpen(false)}>Fechar</Button>
          </DrawerFooter>
        </Drawer>
      </>;
  }
}`,...(F=(T=w.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var q,_,I;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Novo Contato</Button>
        <Drawer open={open} onClose={() => setOpen(false)} size="md">
          <DrawerHeader>
            <div>
              <DrawerTitle>Adicionar Contato</DrawerTitle>
              <DrawerDescription>Preencha os dados do novo contato.</DrawerDescription>
            </div>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
              <div>
                <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500
              }}>Nome</label>
                <input type="text" placeholder="Nome completo" style={{
                width: '100%',
                height: '44px',
                padding: '0 12px',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }} />
              </div>
              <div>
                <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500
              }}>Email</label>
                <input type="email" placeholder="email@exemplo.com" style={{
                width: '100%',
                height: '44px',
                padding: '0 12px',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }} />
              </div>
              <div>
                <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500
              }}>Telefone</label>
                <input type="tel" placeholder="(00) 00000-0000" style={{
                width: '100%',
                height: '44px',
                padding: '0 12px',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }} />
              </div>
            </div>
          </DrawerContent>
          <DrawerFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Salvar</Button>
          </DrawerFooter>
        </Drawer>
      </>;
  }
}`,...(I=(_=g.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const Q=["Default","Left","Bottom","LargeSize","FormDrawer"];export{h as Bottom,x as Default,g as FormDrawer,w as LargeSize,f as Left,Q as __namedExportsOrder,K as default};
