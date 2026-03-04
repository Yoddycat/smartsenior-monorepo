import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-Dx_1l3Sb.js";import{B as j}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function m(...t){return t.filter(Boolean).join(" ")}const u=r.forwardRef(({open:t,onClose:o,placeholder:s="Digite um comando...",className:i,children:h},p)=>{const[l,x]=r.useState(""),v=r.useRef(null);return r.useEffect(()=>{t?setTimeout(()=>{var a;return(a=v.current)==null?void 0:a.focus()},100):x("")},[t]),r.useEffect(()=>{const a=A=>{A.key==="Escape"&&t&&o()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[t,o]),r.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),t?e.jsxs("div",{className:"fixed inset-0 z-50",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"fixed inset-0 bg-black/50 animate-in fade-in duration-150",onClick:o,"aria-hidden":"true"}),e.jsx("div",{className:"fixed inset-x-4 top-[20%] mx-auto max-w-xl",children:e.jsxs("div",{ref:p,className:m("bg-[var(--background)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden","animate-in fade-in-50 zoom-in-95 duration-150",i),children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 border-b border-[var(--border)]",children:[e.jsxs("svg",{className:"w-5 h-5 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]}),e.jsx("input",{ref:v,type:"text",value:l,onChange:a=>x(a.target.value),placeholder:s,className:m("flex-1 h-14 bg-transparent text-base","text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]","focus:outline-none")}),e.jsx("kbd",{className:"hidden sm:flex items-center gap-1 px-2 py-1 text-xs bg-[var(--background-muted)] rounded",children:"ESC"})]}),e.jsx("div",{className:"max-h-[300px] overflow-y-auto p-2",children:r.Children.map(h,a=>r.isValidElement(a)?r.cloneElement(a,{search:l}):a)})]})})]}):null});u.displayName="Command";const d=r.forwardRef(({className:t,heading:o,search:s,children:i,...h},p)=>{const l=r.Children.toArray(i).filter(x=>{var a;return!s||!r.isValidElement(x)?!0:(((a=x.props.children)==null?void 0:a.toString().toLowerCase())||"").includes(s.toLowerCase())});return l.length===0?null:e.jsxs("div",{ref:p,className:m("",t),...h,children:[o&&e.jsx("div",{className:"px-2 py-1.5 text-xs font-semibold text-[var(--foreground-muted)]",children:o}),l]})});d.displayName="CommandGroup";const n=r.forwardRef(({className:t,icon:o,shortcut:s,onSelect:i,children:h,...p},l)=>e.jsxs("button",{ref:l,onClick:i,className:m("w-full flex items-center gap-3 px-3 py-2.5 rounded-md","text-base text-left text-[var(--foreground)]","hover:bg-[var(--background-muted)]","focus:outline-none focus:bg-[var(--background-muted)]","transition-colors",t),...p,children:[o&&e.jsx("span",{className:"shrink-0 text-[var(--foreground-muted)]",children:o}),e.jsx("span",{className:"flex-1",children:h}),s&&e.jsx("kbd",{className:"shrink-0 px-2 py-0.5 text-xs bg-[var(--background-muted)] rounded",children:s})]}));n.displayName="CommandItem";const c=r.forwardRef(({className:t,...o},s)=>e.jsx("div",{ref:s,className:m("my-2 h-px bg-[var(--border)]",t),...o}));c.displayName="CommandSeparator";const q=r.forwardRef(({className:t,children:o="Nenhum resultado encontrado.",...s},i)=>e.jsx("div",{ref:i,className:m("py-6 text-center text-base text-[var(--foreground-muted)]",t),...s,children:o}));q.displayName="CommandEmpty";u.__docgenInfo={description:`Command Palette component following SmartSenior Design System

Keyboard-driven command search interface`,methods:[],displayName:"Command",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Digite um comando..."',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"CommandGroup",props:{heading:{required:!1,tsType:{name:"string"},description:""},search:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"CommandItem",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shortcut:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"CommandSeparator"};q.__docgenInfo={description:"",methods:[],displayName:"CommandEmpty",props:{children:{defaultValue:{value:'"Nenhum resultado encontrado."',computed:!1},required:!1}}};const H={title:"Components/Command",component:u,tags:["autodocs"],parameters:{layout:"centered"}},f={render:()=>{const[t,o]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:()=>o(!0),children:"Abrir Command Palette (⌘K)"}),e.jsxs(u,{open:t,onClose:()=>o(!1),children:[e.jsxs(d,{heading:"Sugestões",children:[e.jsx(n,{onSelect:()=>{o(!1),alert("Novo arquivo")},children:"Novo Arquivo"}),e.jsx(n,{onSelect:()=>{o(!1),alert("Nova pasta")},children:"Nova Pasta"})]}),e.jsx(c,{}),e.jsxs(d,{heading:"Navegação",children:[e.jsx(n,{icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})}),shortcut:"⌘H",onSelect:()=>{o(!1),alert("Início")},children:"Início"}),e.jsx(n,{icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),shortcut:"⌘,",onSelect:()=>{o(!1),alert("Configurações")},children:"Configurações"})]})]})]})}},C={render:()=>{const[t,o]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:()=>o(!0),children:"Buscar Comandos"}),e.jsxs(u,{open:t,onClose:()=>o(!1),placeholder:"Buscar comandos...",children:[e.jsxs(d,{heading:"Ações",children:[e.jsx(n,{onSelect:()=>o(!1),children:"Criar projeto"}),e.jsx(n,{onSelect:()=>o(!1),children:"Criar arquivo"}),e.jsx(n,{onSelect:()=>o(!1),children:"Criar pasta"}),e.jsx(n,{onSelect:()=>o(!1),children:"Criar componente"})]}),e.jsx(c,{}),e.jsxs(d,{heading:"Editar",children:[e.jsx(n,{onSelect:()=>o(!1),children:"Desfazer"}),e.jsx(n,{onSelect:()=>o(!1),children:"Refazer"}),e.jsx(n,{onSelect:()=>o(!1),children:"Copiar"}),e.jsx(n,{onSelect:()=>o(!1),children:"Colar"})]})]})]})}},g={render:()=>{const[t,o]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsxs("p",{style:{marginBottom:"1rem",color:"var(--foreground-muted)"},children:["Pressione ",e.jsx("kbd",{style:{padding:"0.25rem 0.5rem",background:"var(--background-muted)",borderRadius:"4px"},children:"⌘K"})," ou clique no botão"]}),e.jsx(j,{onClick:()=>o(!0),children:"Abrir Command Palette"})]}),e.jsxs(u,{open:t,onClose:()=>o(!1),placeholder:"O que você quer fazer?",children:[e.jsxs(d,{heading:"Projetos",children:[e.jsx(n,{icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),onSelect:()=>o(!1),children:"Meus Projetos"}),e.jsx(n,{icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),onSelect:()=>o(!1),children:"Novo Projeto"})]}),e.jsx(c,{}),e.jsxs(d,{heading:"Conta",children:[e.jsx(n,{icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),shortcut:"⌘P",onSelect:()=>o(!1),children:"Perfil"}),e.jsx(n,{icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),onSelect:()=>o(!1),children:"Segurança"})]}),e.jsx(c,{}),e.jsxs(d,{heading:"Ajuda",children:[e.jsx(n,{icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),shortcut:"⌘?",onSelect:()=>o(!1),children:"Ajuda"}),e.jsx(n,{icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),onSelect:()=>o(!1),children:"Contato"})]})]})]})}};var y,S,k;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>
          Abrir Command Palette (⌘K)
        </Button>
        <Command open={open} onClose={() => setOpen(false)}>
          <CommandGroup heading="Sugestões">
            <CommandItem onSelect={() => {
            setOpen(false);
            alert('Novo arquivo');
          }}>
              Novo Arquivo
            </CommandItem>
            <CommandItem onSelect={() => {
            setOpen(false);
            alert('Nova pasta');
          }}>
              Nova Pasta
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navegação">
            <CommandItem icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>} shortcut="⌘H" onSelect={() => {
            setOpen(false);
            alert('Início');
          }}>
              Início
            </CommandItem>
            <CommandItem icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>} shortcut="⌘," onSelect={() => {
            setOpen(false);
            alert('Configurações');
          }}>
              Configurações
            </CommandItem>
          </CommandGroup>
        </Command>
      </>;
  }
}`,...(k=(S=f.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,b,I;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>
          Buscar Comandos
        </Button>
        <Command open={open} onClose={() => setOpen(false)} placeholder="Buscar comandos...">
          <CommandGroup heading="Ações">
            <CommandItem onSelect={() => setOpen(false)}>Criar projeto</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Criar arquivo</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Criar pasta</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Criar componente</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Editar">
            <CommandItem onSelect={() => setOpen(false)}>Desfazer</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Refazer</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Copiar</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Colar</CommandItem>
          </CommandGroup>
        </Command>
      </>;
  }
}`,...(I=(b=C.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var N,O,B;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <div style={{
        textAlign: 'center'
      }}>
          <p style={{
          marginBottom: '1rem',
          color: 'var(--foreground-muted)'
        }}>
            Pressione <kbd style={{
            padding: '0.25rem 0.5rem',
            background: 'var(--background-muted)',
            borderRadius: '4px'
          }}>⌘K</kbd> ou clique no botão
          </p>
          <Button onClick={() => setOpen(true)}>
            Abrir Command Palette
          </Button>
        </div>
        <Command open={open} onClose={() => setOpen(false)} placeholder="O que você quer fazer?">
          <CommandGroup heading="Projetos">
            <CommandItem icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>} onSelect={() => setOpen(false)}>
              Meus Projetos
            </CommandItem>
            <CommandItem icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>} onSelect={() => setOpen(false)}>
              Novo Projeto
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Conta">
            <CommandItem icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>} shortcut="⌘P" onSelect={() => setOpen(false)}>
              Perfil
            </CommandItem>
            <CommandItem icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>} onSelect={() => setOpen(false)}>
              Segurança
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Ajuda">
            <CommandItem icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>} shortcut="⌘?" onSelect={() => setOpen(false)}>
              Ajuda
            </CommandItem>
            <CommandItem icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>} onSelect={() => setOpen(false)}>
              Contato
            </CommandItem>
          </CommandGroup>
        </Command>
      </>;
  }
}`,...(B=(O=g.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const M=["Default","WithSearch","ApplicationCommands"];export{g as ApplicationCommands,f as Default,C as WithSearch,M as __namedExportsOrder,H as default};
