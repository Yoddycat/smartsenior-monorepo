import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as t}from"./index-Dx_1l3Sb.js";import{B as m}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function P(...r){return r.filter(Boolean).join(" ")}const A=t.createContext(null);function j(){const r=t.useContext(A);if(!r)throw new Error("Popover components must be used within a Popover provider");return r}const a=({children:r,defaultOpen:i=!1,open:o,onOpenChange:n})=>{const[d,p]=t.useState(i),c=o!==void 0,v=c?o:d,g=t.useCallback(u=>{c||p(u),n==null||n(u)},[c,n]);return e.jsx(A.Provider,{value:{isOpen:v,setIsOpen:g},children:e.jsx("div",{className:"relative inline-block",children:r})})},s=t.forwardRef(({className:r,children:i,asChild:o,...n},d)=>{const{isOpen:p,setIsOpen:c}=j();return o&&t.isValidElement(i)?t.cloneElement(i,{onClick:()=>c(!p)}):e.jsx("button",{ref:d,type:"button","aria-expanded":p,"aria-haspopup":"dialog",onClick:()=>c(!p),className:P("",r),...n,children:i})});s.displayName="PopoverTrigger";const l=t.forwardRef(({className:r,align:i="center",side:o="bottom",sideOffset:n=8,children:d,...p},c)=>{const{isOpen:v,setIsOpen:g}=j(),u=t.useRef(null);if(t.useEffect(()=>{const w=y=>{u.current&&!u.current.contains(y.target)&&g(!1)},T=y=>{y.key==="Escape"&&g(!1)};return v&&(document.addEventListener("mousedown",w),document.addEventListener("keydown",T)),()=>{document.removeEventListener("mousedown",w),document.removeEventListener("keydown",T)}},[v,g]),!v)return null;const O={start:"left-0",center:"left-1/2 -translate-x-1/2",end:"right-0"},J={top:"bottom-full mb-2",bottom:"top-full mt-2",left:"right-full mr-2",right:"left-full ml-2"};return e.jsx("div",{ref:u,role:"dialog",className:P("absolute z-50 min-w-[200px] p-4","bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg","animate-in fade-in-50 zoom-in-95 duration-150",o==="top"||o==="bottom"?O[i]:"",J[o],r),style:{[o==="top"||o==="bottom"?"marginTop":"marginLeft"]:n},...p,children:d})});l.displayName="PopoverContent";const C=t.forwardRef(({className:r,children:i,...o},n)=>{const{setIsOpen:d}=j();return e.jsx("button",{ref:n,type:"button",onClick:()=>d(!1),className:P("",r),...o,children:i})});C.displayName="PopoverClose";a.__docgenInfo={description:`Popover component following SmartSenior Design System

Floating content panel`,methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"PopoverClose"};const K={title:"Components/Popover",component:a,tags:["autodocs"],parameters:{layout:"centered"}},x={render:()=>e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(m,{variant:"outline",children:"Abrir Popover"})}),e.jsx(l,{children:e.jsx("p",{style:{margin:0},children:"Conteúdo do popover."})})]})},f={render:()=>e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(m,{variant:"outline",children:"Configurar"})}),e.jsxs(l,{style:{width:"280px"},children:[e.jsx("h4",{style:{margin:"0 0 1rem",fontWeight:600},children:"Configurações"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.25rem",fontSize:"0.875rem"},children:"Nome"}),e.jsx("input",{type:"text",placeholder:"Seu nome",style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.25rem",fontSize:"0.875rem"},children:"Email"}),e.jsx("input",{type:"email",placeholder:"email@exemplo.com",style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px"}})]}),e.jsx(C,{children:e.jsx(m,{variant:"primary",style:{width:"100%"},children:"Salvar"})})]})]})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"3rem",padding:"6rem"},children:[e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(m,{variant:"outline",children:"Topo"})}),e.jsx(l,{side:"top",children:e.jsx("p",{children:"Popover no topo"})})]}),e.jsxs("div",{style:{display:"flex",gap:"6rem"},children:[e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(m,{variant:"outline",children:"Esquerda"})}),e.jsx(l,{side:"left",children:e.jsx("p",{children:"Popover à esquerda"})})]}),e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(m,{variant:"outline",children:"Direita"})}),e.jsx(l,{side:"right",children:e.jsx("p",{children:"Popover à direita"})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(m,{variant:"outline",children:"Embaixo"})}),e.jsx(l,{side:"bottom",children:e.jsx("p",{children:"Popover embaixo"})})]})]})},b={render:()=>e.jsxs(a,{children:[e.jsx(s,{children:e.jsx("button",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--primary)",color:"var(--primary-foreground)",border:"none",cursor:"pointer",fontWeight:600},children:"JS"})}),e.jsxs(l,{align:"end",style:{width:"240px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"var(--primary)",color:"var(--primary-foreground)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600},children:"JS"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontWeight:600},children:"João Silva"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--foreground-muted)"},children:"joao@email.com"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"},children:[e.jsx("button",{style:{padding:"0.5rem",textAlign:"left",background:"transparent",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Perfil"}),e.jsx("button",{style:{padding:"0.5rem",textAlign:"left",background:"transparent",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Configurações"}),e.jsx("hr",{style:{margin:"0.5rem 0",border:"none",borderTop:"1px solid var(--border)"}}),e.jsx("button",{style:{padding:"0.5rem",textAlign:"left",background:"transparent",border:"none",borderRadius:"6px",cursor:"pointer",color:"var(--error)"},children:"Sair"})]})]})]})};var S,k,R;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger>
        <Button variant="outline">Abrir Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{
        margin: 0
      }}>Conteúdo do popover.</p>
      </PopoverContent>
    </Popover>
}`,...(R=(k=x.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var B,E,I;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger>
        <Button variant="outline">Configurar</Button>
      </PopoverTrigger>
      <PopoverContent style={{
      width: '280px'
    }}>
        <h4 style={{
        margin: '0 0 1rem',
        fontWeight: 600
      }}>Configurações</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
          <div>
            <label style={{
            display: 'block',
            marginBottom: '0.25rem',
            fontSize: '0.875rem'
          }}>
              Nome
            </label>
            <input type="text" placeholder="Seu nome" style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid var(--border)',
            borderRadius: '6px'
          }} />
          </div>
          <div>
            <label style={{
            display: 'block',
            marginBottom: '0.25rem',
            fontSize: '0.875rem'
          }}>
              Email
            </label>
            <input type="email" placeholder="email@exemplo.com" style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid var(--border)',
            borderRadius: '6px'
          }} />
          </div>
          <PopoverClose>
            <Button variant="primary" style={{
            width: '100%'
          }}>Salvar</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
}`,...(I=(E=f.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var N,q,D;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    padding: '6rem'
  }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">Topo</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p>Popover no topo</p>
        </PopoverContent>
      </Popover>

      <div style={{
      display: 'flex',
      gap: '6rem'
    }}>
        <Popover>
          <PopoverTrigger>
            <Button variant="outline">Esquerda</Button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <p>Popover à esquerda</p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button variant="outline">Direita</Button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <p>Popover à direita</p>
          </PopoverContent>
        </Popover>
      </div>

      <Popover>
        <PopoverTrigger>
          <Button variant="outline">Embaixo</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p>Popover embaixo</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...(D=(q=h.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var W,_,z;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger>
        <button style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--primary)',
        color: 'var(--primary-foreground)',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 600
      }}>
          JS
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" style={{
      width: '240px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1rem'
      }}>
          <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--primary)',
          color: 'var(--primary-foreground)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600
        }}>
            JS
          </div>
          <div>
            <p style={{
            margin: 0,
            fontWeight: 600
          }}>João Silva</p>
            <p style={{
            margin: 0,
            fontSize: '0.875rem',
            color: 'var(--foreground-muted)'
          }}>
              joao@email.com
            </p>
          </div>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
      }}>
          <button style={{
          padding: '0.5rem',
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
            Perfil
          </button>
          <button style={{
          padding: '0.5rem',
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
            Configurações
          </button>
          <hr style={{
          margin: '0.5rem 0',
          border: 'none',
          borderTop: '1px solid var(--border)'
        }} />
          <button style={{
          padding: '0.5rem',
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          color: 'var(--error)'
        }}>
            Sair
          </button>
        </div>
      </PopoverContent>
    </Popover>
}`,...(z=(_=b.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const M=["Default","WithForm","Positions","UserProfile"];export{x as Default,h as Positions,b as UserProfile,f as WithForm,M as __namedExportsOrder,K as default};
