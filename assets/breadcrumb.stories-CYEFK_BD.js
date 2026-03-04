import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function f(...d){return d.filter(Boolean).join(" ")}const p=x.forwardRef(({className:d,items:s,separator:h,maxItems:m,...W},E)=>{const g=e.jsx("svg",{className:"w-4 h-4 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})});let u=s,b=!1;if(m&&s.length>m){const r=s[0],a=s.slice(-(m-1));u=[r,...a],b=!0}return e.jsx("nav",{ref:E,"aria-label":"Breadcrumb",className:f("",d),...W,children:e.jsx("ol",{className:"flex items-center flex-wrap gap-2",children:u.map((r,a)=>{const n=a===u.length-1;return e.jsxs(x.Fragment,{children:[b&&a===1&&e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"flex items-center",children:e.jsx("span",{className:"text-base text-[var(--foreground-muted)]",children:"..."})}),e.jsx("li",{className:"flex items-center","aria-hidden":"true",children:h||g})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[r.icon&&e.jsx("span",{className:"text-[var(--foreground-muted)]",children:r.icon}),r.href&&!n?e.jsx("a",{href:r.href,className:f("text-base text-[var(--foreground-muted)]","hover:text-[var(--foreground)] hover:underline","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] rounded"),children:r.label}):e.jsx("span",{className:f("text-base",n?"font-medium text-[var(--foreground)]":"text-[var(--foreground-muted)]"),"aria-current":n?"page":void 0,children:r.label})]}),!n&&e.jsx("li",{className:"flex items-center","aria-hidden":"true",children:h||g})]},a)})})})});p.displayName="Breadcrumb";p.__docgenInfo={description:`Breadcrumb component following SmartSenior Design System

Navigation trail with accessible markup`,methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxItems:{required:!1,tsType:{name:"number"},description:""}}};const H={title:"Components/Breadcrumb",component:p,tags:["autodocs"],parameters:{layout:"centered"}},o={args:{items:[{label:"Início",href:"/"},{label:"Produtos",href:"/produtos"},{label:"Categoria",href:"/produtos/categoria"},{label:"Produto Atual"}]}},t={args:{items:[{label:"Início",href:"/"},{label:"Página Atual"}]}},l={args:{items:[{label:"Início",href:"/",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})})},{label:"Configurações",href:"/config"},{label:"Perfil"}]}},i={args:{maxItems:3,items:[{label:"Início",href:"/"},{label:"Nível 1",href:"/1"},{label:"Nível 2",href:"/2"},{label:"Nível 3",href:"/3"},{label:"Nível 4",href:"/4"},{label:"Página Atual"}]}},c={args:{separator:e.jsx("span",{style:{margin:"0 0.5rem",color:"var(--foreground-muted)"},children:"/"}),items:[{label:"Início",href:"/"},{label:"Produtos",href:"/produtos"},{label:"Detalhes"}]}};var v,N,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Início',
      href: '/'
    }, {
      label: 'Produtos',
      href: '/produtos'
    }, {
      label: 'Categoria',
      href: '/produtos/categoria'
    }, {
      label: 'Produto Atual'
    }]
  }
}`,...(I=(N=o.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var j,w,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Início',
      href: '/'
    }, {
      label: 'Página Atual'
    }]
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var B,C,P;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Início',
      href: '/',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
    }, {
      label: 'Configurações',
      href: '/config'
    }, {
      label: 'Perfil'
    }]
  }
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var S,k,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    maxItems: 3,
    items: [{
      label: 'Início',
      href: '/'
    }, {
      label: 'Nível 1',
      href: '/1'
    }, {
      label: 'Nível 2',
      href: '/2'
    }, {
      label: 'Nível 3',
      href: '/3'
    }, {
      label: 'Nível 4',
      href: '/4'
    }, {
      label: 'Página Atual'
    }]
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var R,D,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    separator: <span style={{
      margin: '0 0.5rem',
      color: 'var(--foreground-muted)'
    }}>/</span>,
    items: [{
      label: 'Início',
      href: '/'
    }, {
      label: 'Produtos',
      href: '/produtos'
    }, {
      label: 'Detalhes'
    }]
  }
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const M=["Default","TwoItems","WithIcons","Collapsed","CustomSeparator"];export{i as Collapsed,c as CustomSeparator,o as Default,t as TwoItems,l as WithIcons,M as __namedExportsOrder,H as default};
