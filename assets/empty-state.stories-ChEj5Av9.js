import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as W}from"./index-Dx_1l3Sb.js";import{B as V}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function s(...t){return t.filter(Boolean).join(" ")}const r=W.forwardRef(({className:t,icon:m,title:P,description:p,action:u,size:T="md",...I},_)=>{const o={sm:{icon:"w-12 h-12",title:"text-lg",description:"text-sm",padding:"p-6"},md:{icon:"w-16 h-16",title:"text-xl",description:"text-base",padding:"p-8"},lg:{icon:"w-24 h-24",title:"text-2xl",description:"text-lg",padding:"p-12"}}[T],M=e.jsx("svg",{className:s(o.icon,"text-[var(--foreground-muted)]"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:e.jsx("path",{d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})});return e.jsxs("div",{ref:_,className:s("flex flex-col items-center justify-center text-center",o.padding,t),...I,children:[e.jsx("div",{className:"mb-4",children:m||M}),e.jsx("h3",{className:s("font-semibold text-[var(--foreground)] mb-2",o.title),children:P}),p&&e.jsx("p",{className:s("text-[var(--foreground-muted)] max-w-md mb-6",o.description),children:p}),u&&e.jsx("div",{children:u})]})});r.displayName="EmptyState";const A=({onReset:t})=>e.jsx(r,{icon:e.jsxs("svg",{className:"w-16 h-16 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]}),title:"Nenhum resultado encontrado",description:"Tente ajustar os filtros ou termos de busca.",action:t&&e.jsx("button",{onClick:t,className:"px-4 py-2 text-base text-[var(--primary)] hover:underline",children:"Limpar filtros"})}),D=({onCreate:t,createLabel:m="Criar novo"})=>e.jsx(r,{icon:e.jsxs("svg",{className:"w-16 h-16 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"12"}),e.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]}),title:"Nenhum item ainda",description:"Comece criando seu primeiro item.",action:t&&e.jsx("button",{onClick:t,className:"px-6 py-2.5 text-base font-medium bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md hover:bg-[var(--primary-hover)] transition-colors",children:m})});A.__docgenInfo={description:"",methods:[],displayName:"EmptyStateNoResults",props:{onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"EmptyStateNoData",props:{onCreate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},createLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Criar novo"',computed:!1}}}};r.__docgenInfo={description:`EmptyState component following SmartSenior Design System

Placeholder for empty lists, search results, etc.`,methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const Q={title:"Components/EmptyState",component:r,tags:["autodocs"],parameters:{layout:"centered"}},a={args:{title:"Nenhum item encontrado",description:"Não há itens para exibir no momento."}},i={args:{title:"Nenhum projeto",description:"Você ainda não criou nenhum projeto.",action:e.jsx(V,{variant:"primary",children:"Criar Projeto"})}},n={args:{icon:e.jsxs("svg",{className:"w-16 h-16 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),title:"Nenhum arquivo",description:"Arraste arquivos aqui ou clique para fazer upload.",action:e.jsx(V,{variant:"outline",children:"Selecionar Arquivos"})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(r,{size:"sm",title:"Pequeno",description:"Versão compacta"}),e.jsx(r,{size:"md",title:"Médio",description:"Versão padrão"}),e.jsx(r,{size:"lg",title:"Grande",description:"Versão destacada"})]})},l={render:()=>e.jsx(A,{onReset:()=>alert("Filtros limpos")})},d={render:()=>e.jsx(D,{onCreate:()=>alert("Criar novo"),createLabel:"Adicionar Item"})};var x,v,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Nenhum item encontrado',
    description: 'Não há itens para exibir no momento.'
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,f,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Nenhum projeto',
    description: 'Você ainda não criou nenhum projeto.',
    action: <Button variant="primary">Criar Projeto</Button>
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,N,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: <svg className="w-16 h-16 text-[var(--foreground-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>,
    title: 'Nenhum arquivo',
    description: 'Arraste arquivos aqui ou clique para fazer upload.',
    action: <Button variant="outline">Selecionar Arquivos</Button>
  }
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var C,q,w;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <EmptyState size="sm" title="Pequeno" description="Versão compacta" />
      <EmptyState size="md" title="Médio" description="Versão padrão" />
      <EmptyState size="lg" title="Grande" description="Versão destacada" />
    </div>
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var b,E,R;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <EmptyStateNoResults onReset={() => alert('Filtros limpos')} />
}`,...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var z,k,B;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <EmptyStateNoData onCreate={() => alert('Criar novo')} createLabel="Adicionar Item" />
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const U=["Default","WithAction","CustomIcon","AllSizes","NoResultsPreset","NoDataPreset"];export{c as AllSizes,n as CustomIcon,a as Default,d as NoDataPreset,l as NoResultsPreset,i as WithAction,U as __namedExportsOrder,Q as default};
