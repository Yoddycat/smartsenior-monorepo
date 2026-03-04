import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-Dx_1l3Sb.js";import{A as q,a as E}from"./avatar-Cuct6am-.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function s(...r){return r.filter(Boolean).join(" ")}const l=d.forwardRef(({className:r,collapsed:n=!1,onCollapsedChange:a,collapsible:b=!0,width:I="280px",collapsedWidth:k="72px",children:C,...M},U)=>e.jsxs("aside",{ref:U,className:s("flex flex-col h-full","bg-[var(--background)] border-r border-[var(--border)]","transition-all duration-300 ease-in-out",r),style:{width:n?k:I},...M,children:[C,b&&e.jsx("button",{onClick:()=>a==null?void 0:a(!n),className:s("absolute -right-3 top-6 z-10","w-6 h-6 flex items-center justify-center","bg-[var(--background)] border border-[var(--border)] rounded-full","text-[var(--foreground-muted)] hover:text-[var(--foreground)]","transition-colors duration-200","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"),"aria-label":n?"Expandir menu":"Recolher menu",children:e.jsx("svg",{className:s("w-4 h-4 transition-transform",n&&"rotate-180"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})})]}));l.displayName="Sidebar";const c=d.forwardRef(({className:r,...n},a)=>e.jsx("div",{ref:a,className:s("flex items-center h-16 px-4 border-b border-[var(--border)]",r),...n}));c.displayName="SidebarHeader";const p=d.forwardRef(({className:r,...n},a)=>e.jsx("div",{ref:a,className:s("flex-1 overflow-y-auto py-4",r),...n}));p.displayName="SidebarContent";const f=d.forwardRef(({className:r,...n},a)=>e.jsx("div",{ref:a,className:s("p-4 border-t border-[var(--border)]",r),...n}));f.displayName="SidebarFooter";const o=d.forwardRef(({className:r,...n},a)=>e.jsx("div",{ref:a,className:s("px-3 py-2",r),...n}));o.displayName="SidebarGroup";const t=d.forwardRef(({className:r,...n},a)=>e.jsx("div",{ref:a,className:s("px-3 mb-2 text-xs font-semibold uppercase text-[var(--foreground-muted)]",r),...n}));t.displayName="SidebarGroupLabel";const i=d.forwardRef(({className:r,icon:n,active:a,collapsed:b,children:I,...k},C)=>e.jsxs("button",{ref:C,className:s("w-full flex items-center gap-3 px-3 py-2.5","text-base font-medium rounded-md","transition-colors duration-200","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",a?"bg-[var(--primary)] text-[var(--primary-foreground)]":"text-[var(--foreground)] hover:bg-[var(--background-muted)]",b&&"justify-center",r),...k,children:[n&&e.jsx("span",{className:"shrink-0",children:n}),!b&&e.jsx("span",{className:"truncate",children:I})]}));i.displayName="SidebarItem";l.__docgenInfo={description:`Sidebar component following SmartSenior Design System

Collapsible navigation sidebar`,methods:[],displayName:"Sidebar",props:{collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'280px'",computed:!1}},collapsedWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'72px'",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"SidebarHeader"};p.__docgenInfo={description:"",methods:[],displayName:"SidebarContent"};f.__docgenInfo={description:"",methods:[],displayName:"SidebarFooter"};o.__docgenInfo={description:"",methods:[],displayName:"SidebarGroup"};t.__docgenInfo={description:"",methods:[],displayName:"SidebarGroupLabel"};i.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""}}};const O={title:"Components/Sidebar",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}},g=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),e.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),m=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),j=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),v=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),y=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),e.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]}),x={render:()=>e.jsxs("div",{style:{display:"flex",height:"400px"},children:[e.jsxs(l,{collapsible:!1,children:[e.jsx(c,{children:e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem"},children:"SmartSenior"})}),e.jsxs(p,{children:[e.jsxs(o,{children:[e.jsx(i,{icon:e.jsx(g,{}),active:!0,children:"Início"}),e.jsx(i,{icon:e.jsx(m,{}),children:"Usuários"}),e.jsx(i,{icon:e.jsx(v,{}),children:"Projetos"}),e.jsx(i,{icon:e.jsx(y,{}),children:"Relatórios"})]}),e.jsxs(o,{children:[e.jsx(t,{children:"Configurações"}),e.jsx(i,{icon:e.jsx(j,{}),children:"Preferências"})]})]}),e.jsx(f,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsx(q,{children:e.jsx(E,{children:"JS"})}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontWeight:500,fontSize:"0.875rem"},children:"João Silva"}),e.jsx("p",{style:{margin:0,fontSize:"0.75rem",color:"var(--foreground-muted)"},children:"Admin"})]})]})})]}),e.jsxs("div",{style:{flex:1,padding:"1.5rem",background:"var(--background-muted)"},children:[e.jsx("h1",{children:"Conteúdo Principal"}),e.jsx("p",{children:"O sidebar fica à esquerda."})]})]})},h={render:()=>{const[r,n]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",height:"400px"},children:[e.jsxs(l,{collapsed:r,onCollapsedChange:n,children:[e.jsxs(c,{children:[!r&&e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem"},children:"SmartSenior"}),r&&e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem"},children:"SS"})]}),e.jsx(p,{children:e.jsxs(o,{children:[e.jsx(i,{icon:e.jsx(g,{}),collapsed:r,active:!0,children:"Início"}),e.jsx(i,{icon:e.jsx(m,{}),collapsed:r,children:"Usuários"}),e.jsx(i,{icon:e.jsx(v,{}),collapsed:r,children:"Projetos"}),e.jsx(i,{icon:e.jsx(y,{}),collapsed:r,children:"Relatórios"}),e.jsx(i,{icon:e.jsx(j,{}),collapsed:r,children:"Configurações"})]})})]}),e.jsxs("div",{style:{flex:1,padding:"1.5rem",background:"var(--background-muted)"},children:[e.jsx("h1",{children:"Sidebar Colapsável"}),e.jsx("p",{children:"Clique no botão para expandir/recolher o sidebar."}),e.jsxs("p",{children:["Estado: ",r?"Recolhido":"Expandido"]})]})]})}},u={render:()=>e.jsxs("div",{style:{display:"flex",height:"500px"},children:[e.jsxs(l,{collapsible:!1,children:[e.jsx(c,{children:e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.25rem"},children:"Dashboard"})}),e.jsxs(p,{children:[e.jsxs(o,{children:[e.jsx(t,{children:"Principal"}),e.jsx(i,{icon:e.jsx(g,{}),active:!0,children:"Visão Geral"}),e.jsx(i,{icon:e.jsx(y,{}),children:"Analytics"})]}),e.jsxs(o,{children:[e.jsx(t,{children:"Gestão"}),e.jsx(i,{icon:e.jsx(m,{}),children:"Equipe"}),e.jsx(i,{icon:e.jsx(v,{}),children:"Projetos"})]}),e.jsxs(o,{children:[e.jsx(t,{children:"Sistema"}),e.jsx(i,{icon:e.jsx(j,{}),children:"Configurações"})]})]})]}),e.jsxs("div",{style:{flex:1,padding:"1.5rem",background:"var(--background-muted)"},children:[e.jsx("h1",{children:"Sidebar com Grupos"}),e.jsx("p",{children:"Itens organizados por categorias."})]})]})},S={render:()=>e.jsxs("div",{style:{display:"flex",height:"500px"},children:[e.jsxs(l,{collapsible:!1,width:"260px",children:[e.jsx(c,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"var(--primary)",strokeWidth:"2",children:[e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),e.jsx("path",{d:"M2 17l10 5 10-5"}),e.jsx("path",{d:"M2 12l10 5 10-5"})]}),e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.125rem"},children:"Admin Panel"})]})}),e.jsxs(p,{children:[e.jsxs(o,{children:[e.jsx(i,{icon:e.jsx(g,{}),active:!0,children:"Dashboard"}),e.jsx(i,{icon:e.jsx(m,{}),children:"Clientes"}),e.jsx(i,{icon:e.jsx(v,{}),children:"Pedidos"}),e.jsx(i,{icon:e.jsx(y,{}),children:"Relatórios"})]}),e.jsxs(o,{children:[e.jsx(t,{children:"Administração"}),e.jsx(i,{icon:e.jsx(m,{}),children:"Usuários"}),e.jsx(i,{icon:e.jsx(j,{}),children:"Configurações"})]})]}),e.jsx(f,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.5rem"},children:[e.jsx(q,{children:e.jsx(E,{style:{background:"var(--primary)",color:"var(--primary-foreground)"},children:"AD"})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("p",{style:{margin:0,fontWeight:500,fontSize:"0.875rem"},children:"Admin"}),e.jsx("p",{style:{margin:0,fontSize:"0.75rem",color:"var(--foreground-muted)"},children:"admin@empresa.com"})]})]})})]}),e.jsxs("div",{style:{flex:1,padding:"1.5rem",background:"var(--background-muted)"},children:[e.jsx("h1",{children:"Painel Administrativo"}),e.jsx("p",{children:"Exemplo de layout completo com sidebar."})]})]})};var G,w,A;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '400px'
  }}>
      <Sidebar collapsible={false}>
        <SidebarHeader>
          <span style={{
          fontWeight: 'bold',
          fontSize: '1.25rem'
        }}>SmartSenior</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem icon={<HomeIcon />} active>Início</SidebarItem>
            <SidebarItem icon={<UsersIcon />}>Usuários</SidebarItem>
            <SidebarItem icon={<FolderIcon />}>Projetos</SidebarItem>
            <SidebarItem icon={<ChartIcon />}>Relatórios</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Configurações</SidebarGroupLabel>
            <SidebarItem icon={<SettingsIcon />}>Preferências</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
            <Avatar>
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <p style={{
              margin: 0,
              fontWeight: 500,
              fontSize: '0.875rem'
            }}>João Silva</p>
              <p style={{
              margin: 0,
              fontSize: '0.75rem',
              color: 'var(--foreground-muted)'
            }}>Admin</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div style={{
      flex: 1,
      padding: '1.5rem',
      background: 'var(--background-muted)'
    }}>
        <h1>Conteúdo Principal</h1>
        <p>O sidebar fica à esquerda.</p>
      </div>
    </div>
}`,...(A=(w=x.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var N,z,W;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return <div style={{
      display: 'flex',
      height: '400px'
    }}>
        <Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed}>
          <SidebarHeader>
            {!collapsed && <span style={{
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>SmartSenior</span>}
            {collapsed && <span style={{
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>SS</span>}
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarItem icon={<HomeIcon />} collapsed={collapsed} active>Início</SidebarItem>
              <SidebarItem icon={<UsersIcon />} collapsed={collapsed}>Usuários</SidebarItem>
              <SidebarItem icon={<FolderIcon />} collapsed={collapsed}>Projetos</SidebarItem>
              <SidebarItem icon={<ChartIcon />} collapsed={collapsed}>Relatórios</SidebarItem>
              <SidebarItem icon={<SettingsIcon />} collapsed={collapsed}>Configurações</SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div style={{
        flex: 1,
        padding: '1.5rem',
        background: 'var(--background-muted)'
      }}>
          <h1>Sidebar Colapsável</h1>
          <p>Clique no botão para expandir/recolher o sidebar.</p>
          <p>Estado: {collapsed ? 'Recolhido' : 'Expandido'}</p>
        </div>
      </div>;
  }
}`,...(W=(z=h.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var H,R,P;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '500px'
  }}>
      <Sidebar collapsible={false}>
        <SidebarHeader>
          <span style={{
          fontWeight: 'bold',
          fontSize: '1.25rem'
        }}>Dashboard</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Principal</SidebarGroupLabel>
            <SidebarItem icon={<HomeIcon />} active>Visão Geral</SidebarItem>
            <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Gestão</SidebarGroupLabel>
            <SidebarItem icon={<UsersIcon />}>Equipe</SidebarItem>
            <SidebarItem icon={<FolderIcon />}>Projetos</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Sistema</SidebarGroupLabel>
            <SidebarItem icon={<SettingsIcon />}>Configurações</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div style={{
      flex: 1,
      padding: '1.5rem',
      background: 'var(--background-muted)'
    }}>
        <h1>Sidebar com Grupos</h1>
        <p>Itens organizados por categorias.</p>
      </div>
    </div>
}`,...(P=(R=u.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var F,_,L;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '500px'
  }}>
      <Sidebar collapsible={false} width="260px">
        <SidebarHeader>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span style={{
            fontWeight: 'bold',
            fontSize: '1.125rem'
          }}>Admin Panel</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem icon={<HomeIcon />} active>Dashboard</SidebarItem>
            <SidebarItem icon={<UsersIcon />}>Clientes</SidebarItem>
            <SidebarItem icon={<FolderIcon />}>Pedidos</SidebarItem>
            <SidebarItem icon={<ChartIcon />}>Relatórios</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Administração</SidebarGroupLabel>
            <SidebarItem icon={<UsersIcon />}>Usuários</SidebarItem>
            <SidebarItem icon={<SettingsIcon />}>Configurações</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.5rem'
        }}>
            <Avatar>
              <AvatarFallback style={{
              background: 'var(--primary)',
              color: 'var(--primary-foreground)'
            }}>
                AD
              </AvatarFallback>
            </Avatar>
            <div style={{
            flex: 1
          }}>
              <p style={{
              margin: 0,
              fontWeight: 500,
              fontSize: '0.875rem'
            }}>Admin</p>
              <p style={{
              margin: 0,
              fontSize: '0.75rem',
              color: 'var(--foreground-muted)'
            }}>
                admin@empresa.com
              </p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div style={{
      flex: 1,
      padding: '1.5rem',
      background: 'var(--background-muted)'
    }}>
        <h1>Painel Administrativo</h1>
        <p>Exemplo de layout completo com sidebar.</p>
      </div>
    </div>
}`,...(L=(_=S.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const K=["Default","Collapsible","WithGroups","AdminPanel"];export{S as AdminPanel,h as Collapsible,x as Default,u as WithGroups,K as __namedExportsOrder,O as default};
