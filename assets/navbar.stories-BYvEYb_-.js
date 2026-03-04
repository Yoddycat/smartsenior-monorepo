import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-Dx_1l3Sb.js";import{B as f}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function c(...a){return a.filter(Boolean).join(" ")}const l=d.forwardRef(({className:a,sticky:t=!1,bordered:i=!0,children:o,...x},T)=>e.jsx("header",{ref:T,className:c("w-full h-16 px-4 flex items-center","bg-[var(--background)]",t&&"sticky top-0 z-40",i&&"border-b border-[var(--border)]",a),...x,children:o}));l.displayName="Navbar";const v=d.forwardRef(({className:a,...t},i)=>e.jsx("div",{ref:i,className:c("flex items-center gap-2 mr-auto",a),...t}));v.displayName="NavbarBrand";const s=d.forwardRef(({className:a,...t},i)=>e.jsx("div",{ref:i,className:c("flex items-center gap-1",a),...t}));s.displayName="NavbarContent";const n=d.forwardRef(({className:a,active:t,...i},o)=>e.jsx("div",{ref:o,className:c("flex items-center",t&&"font-medium",a),...i}));n.displayName="NavbarItem";const r=d.forwardRef(({className:a,active:t,...i},o)=>e.jsx("a",{ref:o,className:c("px-4 py-2 text-base font-medium rounded-md","transition-colors duration-200","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",t?"text-[var(--primary)]":"text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--background-muted)]",a),...i}));r.displayName="NavbarLink";const u=d.forwardRef(({className:a,isOpen:t,...i},o)=>e.jsx("button",{ref:o,type:"button",className:c("md:hidden p-2 rounded-md","text-[var(--foreground)] hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",a),"aria-label":t?"Fechar menu":"Abrir menu",...i,children:e.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t?e.jsxs(e.Fragment,{children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):e.jsxs(e.Fragment,{children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})}));u.displayName="NavbarMobileToggle";const j=d.forwardRef(({className:a,isOpen:t,children:i,...o},x)=>t?e.jsx("div",{ref:x,className:c("absolute top-full left-0 w-full md:hidden","bg-[var(--background)] border-b border-[var(--border)]","py-4 px-4","animate-in slide-in-from-top-2 duration-200",a),...o,children:i}):null);j.displayName="NavbarMobileMenu";l.__docgenInfo={description:`Navbar component following SmartSenior Design System

Top navigation bar`,methods:[],displayName:"Navbar",props:{sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};v.__docgenInfo={description:"",methods:[],displayName:"NavbarBrand"};s.__docgenInfo={description:"",methods:[],displayName:"NavbarContent"};n.__docgenInfo={description:"",methods:[],displayName:"NavbarItem",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"NavbarLink",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"NavbarMobileToggle",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"NavbarMobileMenu",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""}}};const A={title:"Components/Navbar",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}},b={render:()=>e.jsxs(l,{children:[e.jsx(v,{children:e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem"},children:"SmartSenior"})}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(r,{href:"#",active:!0,children:"Início"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Produtos"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Sobre"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Contato"})})]}),e.jsx(s,{children:e.jsx(f,{variant:"primary",size:"sm",children:"Entrar"})})]})},m={render:()=>e.jsxs("div",{style:{height:"200vh"},children:[e.jsxs(l,{sticky:!0,children:[e.jsx(v,{children:e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem"},children:"SmartSenior"})}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(r,{href:"#",active:!0,children:"Início"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Produtos"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Contato"})})]})]}),e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("p",{children:"Role a página para ver o navbar sticky."}),e.jsx("div",{style:{height:"100vh"}})]})]})},h={render:()=>{const[a,t]=d.useState(!1);return e.jsx("div",{style:{position:"relative"},children:e.jsxs(l,{children:[e.jsx(u,{isOpen:a,onClick:()=>t(!a)}),e.jsx(v,{children:e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem"},children:"SmartSenior"})}),e.jsxs(s,{className:"hidden md:flex",children:[e.jsx(n,{children:e.jsx(r,{href:"#",active:!0,children:"Início"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Produtos"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Contato"})})]}),e.jsx(s,{children:e.jsx(f,{variant:"primary",size:"sm",children:"Entrar"})}),e.jsxs(j,{isOpen:a,children:[e.jsx(r,{href:"#",active:!0,children:"Início"}),e.jsx(r,{href:"#",children:"Produtos"}),e.jsx(r,{href:"#",children:"Sobre"}),e.jsx(r,{href:"#",children:"Contato"})]})]})})}},N={render:()=>e.jsxs(l,{children:[e.jsxs(v,{children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"var(--primary)",strokeWidth:"2",children:[e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),e.jsx("path",{d:"M2 17l10 5 10-5"}),e.jsx("path",{d:"M2 12l10 5 10-5"})]}),e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem",marginLeft:"0.5rem"},children:"SmartSenior"})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(r,{href:"#",children:"Início"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Serviços"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Preços"})})]}),e.jsxs(s,{children:[e.jsx(f,{variant:"ghost",size:"sm",children:"Login"}),e.jsx(f,{variant:"primary",size:"sm",children:"Cadastrar"})]})]})},p={render:()=>e.jsxs(l,{bordered:!1,children:[e.jsx(v,{children:e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem"},children:"SmartSenior"})}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(r,{href:"#",active:!0,children:"Início"})}),e.jsx(n,{children:e.jsx(r,{href:"#",children:"Produtos"})})]})]})};var g,y,k;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Navbar>
      <NavbarBrand>
        <span style={{
        fontWeight: 'bold',
        fontSize: '1.25rem'
      }}>SmartSenior</span>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <NavbarLink href="#" active>Início</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Produtos</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Sobre</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Contato</NavbarLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <Button variant="primary" size="sm">Entrar</Button>
      </NavbarContent>
    </Navbar>
}`,...(k=(y=b.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var I,L,S;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '200vh'
  }}>
      <Navbar sticky>
        <NavbarBrand>
          <span style={{
          fontWeight: 'bold',
          fontSize: '1.25rem'
        }}>SmartSenior</span>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <NavbarLink href="#" active>Início</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Produtos</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Contato</NavbarLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div style={{
      padding: '2rem'
    }}>
        <p>Role a página para ver o navbar sticky.</p>
        <div style={{
        height: '100vh'
      }} />
      </div>
    </div>
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var C,B,M;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      position: 'relative'
    }}>
        <Navbar>
          <NavbarMobileToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <NavbarBrand>
            <span style={{
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>SmartSenior</span>
          </NavbarBrand>
          <NavbarContent className="hidden md:flex">
            <NavbarItem>
              <NavbarLink href="#" active>Início</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Produtos</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Contato</NavbarLink>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent>
            <Button variant="primary" size="sm">Entrar</Button>
          </NavbarContent>
          <NavbarMobileMenu isOpen={isOpen}>
            <NavbarLink href="#" active>Início</NavbarLink>
            <NavbarLink href="#">Produtos</NavbarLink>
            <NavbarLink href="#">Sobre</NavbarLink>
            <NavbarLink href="#">Contato</NavbarLink>
          </NavbarMobileMenu>
        </Navbar>
      </div>;
  }
}`,...(M=(B=h.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var z,W,w;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Navbar>
      <NavbarBrand>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <span style={{
        fontWeight: 'bold',
        fontSize: '1.25rem',
        marginLeft: '0.5rem'
      }}>SmartSenior</span>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <NavbarLink href="#">Início</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Serviços</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Preços</NavbarLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <Button variant="ghost" size="sm">Login</Button>
        <Button variant="primary" size="sm">Cadastrar</Button>
      </NavbarContent>
    </Navbar>
}`,...(w=(W=N.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var _,O,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Navbar bordered={false}>
      <NavbarBrand>
        <span style={{
        fontWeight: 'bold',
        fontSize: '1.25rem'
      }}>SmartSenior</span>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <NavbarLink href="#" active>Início</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Produtos</NavbarLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const G=["Default","Sticky","WithMobileMenu","WithLogo","NoBorder"];export{b as Default,p as NoBorder,m as Sticky,N as WithLogo,h as WithMobileMenu,G as __namedExportsOrder,A as default};
