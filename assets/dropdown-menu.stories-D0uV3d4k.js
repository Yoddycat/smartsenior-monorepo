import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-Dx_1l3Sb.js";import{B as j}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function w(...r){return r.filter(Boolean).join(" ")}const W=d.createContext(null);function y(){const r=d.useContext(W);if(!r)throw new Error("DropdownMenu components must be used within a DropdownMenu provider");return r}const i=({children:r,defaultOpen:o=!1})=>{const[t,a]=d.useState(o);return e.jsx(W.Provider,{value:{isOpen:t,setIsOpen:a},children:e.jsx("div",{className:"relative inline-block",children:r})})},u=d.forwardRef(({className:r,children:o,...t},a)=>{const{isOpen:s,setIsOpen:M}=y();return e.jsx("button",{ref:a,type:"button","aria-expanded":s,"aria-haspopup":"menu",onClick:()=>M(!s),className:w("",r),...t,children:o})});u.displayName="DropdownMenuTrigger";const l=d.forwardRef(({className:r,align:o="start",sideOffset:t=4,children:a,...s},M)=>{const{isOpen:p,setIsOpen:c}=y(),m=d.useRef(null);if(d.useEffect(()=>{const b=I=>{m.current&&!m.current.contains(I.target)&&c(!1)},C=I=>{I.key==="Escape"&&c(!1)};return p&&(document.addEventListener("mousedown",b),document.addEventListener("keydown",C)),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",C)}},[p,c]),!p)return null;const q={start:"left-0",center:"left-1/2 -translate-x-1/2",end:"right-0"};return e.jsx("div",{ref:m,role:"menu",className:w("absolute z-50 min-w-[180px] py-1","bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg","animate-in fade-in-50 zoom-in-95 duration-150",q[o],r),style:{marginTop:t},...s,children:a})});l.displayName="DropdownMenuContent";const n=d.forwardRef(({className:r,variant:o="default",children:t,onClick:a,...s},M)=>{const{setIsOpen:p}=y(),c=m=>{a==null||a(m),p(!1)};return e.jsx("button",{ref:M,role:"menuitem",onClick:c,className:w("w-full flex items-center gap-2 px-4 py-2.5","text-base text-left","transition-colors duration-150","focus:outline-none focus:bg-[var(--background-muted)]",o==="default"&&"text-[var(--foreground)] hover:bg-[var(--background-muted)]",o==="destructive"&&"text-[var(--error)] hover:bg-[var(--error)]/10",r),...s,children:t})});n.displayName="DropdownMenuItem";const h=d.forwardRef(({className:r,...o},t)=>e.jsx("div",{ref:t,role:"separator",className:w("my-1 h-px bg-[var(--border)]",r),...o}));h.displayName="DropdownMenuSeparator";const g=d.forwardRef(({className:r,...o},t)=>e.jsx("div",{ref:t,className:w("px-4 py-2 text-sm font-semibold text-[var(--foreground-muted)]",r),...o}));g.displayName="DropdownMenuLabel";i.__docgenInfo={description:`DropdownMenu component following SmartSenior Design System

Accessible dropdown menu with keyboard navigation`,methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuTrigger"};l.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuContent",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'destructive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'destructive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSeparator"};g.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuLabel"};const J={title:"Components/DropdownMenu",component:i,tags:["autodocs"],parameters:{layout:"centered"}},f={render:()=>e.jsxs(i,{children:[e.jsx(u,{children:e.jsx(j,{variant:"outline",children:"Abrir Menu"})}),e.jsxs(l,{children:[e.jsx(n,{children:"Perfil"}),e.jsx(n,{children:"Configurações"}),e.jsx(n,{children:"Ajuda"}),e.jsx(h,{}),e.jsx(n,{variant:"destructive",children:"Sair"})]})]})},x={render:()=>e.jsxs(i,{children:[e.jsx(u,{children:e.jsx(j,{variant:"outline",children:"Conta"})}),e.jsxs(l,{children:[e.jsx(g,{children:"Minha Conta"}),e.jsx(n,{children:"Perfil"}),e.jsx(n,{children:"Faturamento"}),e.jsx(n,{children:"Assinatura"}),e.jsx(h,{}),e.jsx(g,{children:"Suporte"}),e.jsx(n,{children:"Ajuda"}),e.jsx(n,{children:"Contato"})]})]})},D={render:()=>e.jsxs(i,{children:[e.jsx(u,{children:e.jsx(j,{variant:"outline",children:"Ações"})}),e.jsxs(l,{children:[e.jsxs(n,{children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),"Editar"]}),e.jsxs(n,{children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Duplicar"]}),e.jsx(h,{}),e.jsxs(n,{variant:"destructive",children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})}),"Excluir"]})]})]})},v={render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",width:"400px"},children:e.jsxs(i,{children:[e.jsx(u,{children:e.jsx(j,{variant:"outline",children:"Alinhado à direita"})}),e.jsxs(l,{align:"end",children:[e.jsx(n,{children:"Opção 1"}),e.jsx(n,{children:"Opção 2"}),e.jsx(n,{children:"Opção 3"})]})]})})};var k,N,S;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Abrir Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuItem>Ajuda</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(S=(N=f.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var B,E,O;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Conta</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Faturamento</DropdownMenuItem>
        <DropdownMenuItem>Assinatura</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Suporte</DropdownMenuLabel>
        <DropdownMenuItem>Ajuda</DropdownMenuItem>
        <DropdownMenuItem>Contato</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(O=(E=x.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var T,A,L;D.parameters={...D.parameters,docs:{...(T=D.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Ações</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          </svg>
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Duplicar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(L=(A=D.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var _,R,V;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px'
  }}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">Alinhado à direita</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Opção 1</DropdownMenuItem>
          <DropdownMenuItem>Opção 2</DropdownMenuItem>
          <DropdownMenuItem>Opção 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
}`,...(V=(R=v.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const K=["Default","WithLabels","WithIcons","AlignEnd"];export{v as AlignEnd,f as Default,D as WithIcons,x as WithLabels,K as __namedExportsOrder,J as default};
